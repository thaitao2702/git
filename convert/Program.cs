using System;
using System.Threading.Tasks;
using System.IO;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Task convert = ConvertAsync(@"D:\test",@"D:\test1");
        copy(@"D:\test",@"D:\test1","root");
        convert.Wait();
    }

    static void copy( string input, string output, string root){        
        if (!System.IO.Directory.Exists(output))
        {
            System.IO.Directory.CreateDirectory(output);
        }         
        string[] folders = Directory.GetDirectories(input); 
        string[] files = Directory.GetFiles(input); 
        foreach( var folder_path in folders){
            string new_folder = output +@"\"+ Path.GetFileName(folder_path);
            System.IO.Directory.CreateDirectory(new_folder);
            DateTime t = DateTime.Now;
            System.Console.WriteLine("Copy from "+ folder_path + " to " + new_folder+ "luc" + t);
            copy (folder_path, new_folder,"");
        }
        foreach( string file_path in files){            
            if(file_path.Substring(file_path.Length-4,4)!="flac"){
                string output_path = output+@"\"+ Path.GetFileName(file_path);
                System.IO.File.Copy(file_path, output_path, true);
                DateTime t = DateTime.Now;
                System.Console.WriteLine("Copy from "+ file_path + " to " + output_path + "luc" + t);
            }            
        }        
    }

    static void convert(Queue<KeyValuePair<string,string>> convert_list){   
        string input = convert_list.Peek().Key;
        string output = convert_list.Peek().Value;            
        DateTime t1 = DateTime.Now; 
        System.Console.WriteLine(@"Bat dau convert file {0} luc {1}",input,t1);       
        System.Diagnostics.ProcessStartInfo procStartInfo =
            new System.Diagnostics.ProcessStartInfo("cmd", "/c " + @"ffmpeg -i " + input + " -vn -ar 44100 -ac 2 -ab 64k -f mp3 " + output);        
        procStartInfo.RedirectStandardOutput = true;
        procStartInfo.UseShellExecute = false;        
        procStartInfo.CreateNoWindow = true; 
        System.Diagnostics.Process proc = new System.Diagnostics.Process();
        proc.StartInfo = procStartInfo;
        proc.Start();
        string result = proc.StandardOutput.ReadToEnd(); 
        DateTime t2 = DateTime.Now;
        System.Console.WriteLine(@"ket thuc convert file {0} ket thuc luc {1}",input,t2);
        convert_list.Dequeue();  
        if (convert_list.Count>0) convert(convert_list);        
    }

    static async Task ConvertAsync(string input, string output)
    {   
            Queue<KeyValuePair<string,string>> convert_list = new Queue<KeyValuePair<string,string>>();     
            string[] flacs = Directory.GetFiles(input,"*.flac",SearchOption.AllDirectories);   
            var input_length = input.Length;        
            foreach(var flac in flacs){
                string flac_out = output + flac.Substring(input_length,flac.Length-input_length-4) + "mp3";
                convert_list.Enqueue(new KeyValuePair<string, string>(flac, flac_out));                    
            }            
            await Task.Run(() => convert(convert_list));        
    }    
}


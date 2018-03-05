using System;
using System.Threading.Tasks;
using System.IO;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        copy(@"D:\test",@"D:\test1","root");
    }

    static void copy( string input, string output, string root){
        if (!System.IO.Directory.Exists(output))
        {
            System.IO.Directory.CreateDirectory(output);
        } 
        Queue<KeyValuePair<string,string>> convert_list = new Queue<KeyValuePair<string,string>>();     
        Task running =Example(convert_list);     
        string[] folders = Directory.GetDirectories(input); 
        string[] files = Directory.GetFiles(input);   
        foreach( var folder_path in folders){
            string new_folder = output +@"\"+ Path.GetFileName(folder_path);
            System.IO.Directory.CreateDirectory(new_folder);
            System.Console.WriteLine("Copy from "+ folder_path + " to " + new_folder);
            copy (folder_path, new_folder,"");
        }
        foreach( string file_path in files){            
            if(file_path.Substring(file_path.Length-4,4)=="flac"){
                string output_path = output+"/"+ Path.GetFileName(file_path.Substring(0,file_path.Length-4)+"mp3");
                convert_list.Enqueue(new KeyValuePair<string, string>(file_path, output_path));                
                if (convert_list.Count ==1){
                    Task convert = Example(convert_list);     
                    running = convert;               
                }
            } else {
                string output_path = output+@"\"+ Path.GetFileName(file_path);
                System.IO.File.Copy(file_path, output_path, true);
                System.Console.WriteLine("Copy from "+ file_path + " to " + output_path);
            }
        }
        if (root == "root") {
            running.Wait();
            System.Console.WriteLine("done");
        }
    }

    static void convert( Queue<KeyValuePair<string,string>> convert_list){   
        System.Console.WriteLine("bat dau convert");
        string input = convert_list.Peek().Key;
        string output = convert_list.Peek().Value;            
        System.Diagnostics.ProcessStartInfo procStartInfo =
            new System.Diagnostics.ProcessStartInfo("cmd", "/c " + @"ffmpeg -i " + input + " -vn -ar 44100 -ac 2 -ab 128k -f mp3 " + output);             
        procStartInfo.RedirectStandardOutput = true;
        procStartInfo.UseShellExecute = false;        
        procStartInfo.CreateNoWindow = true; 
        System.Diagnostics.Process proc = new System.Diagnostics.Process();
        proc.StartInfo = procStartInfo;
        proc.Start();
        string result = proc.StandardOutput.ReadToEnd(); 
        convert_list.Dequeue();  
        System.Console.WriteLine("convert xong");
        if (convert_list.Count>0) convert(convert_list);        
    }

    static async Task Example(Queue<KeyValuePair<string,string>> convert_list)
    {        
        if (convert_list.Count>0) await Task.Run(() => convert(convert_list));        
    }
    
}


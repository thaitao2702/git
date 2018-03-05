using System;
using System.IO;

namespace directory
{
    class Program
    {
        static void Main(string[] args)        
        {                    
            string input = "D://Treeapp";
            System.Console.WriteLine(Path.GetFileName(input));
            get_folder(input,"");       
                  
        }

        static void get_folder(string dir,string padding){
            string[] path = Directory.GetDirectories(dir); 
            string[] files = Directory.GetFiles(dir);
            if (path.Length > 0){
                for (int x = 0; x < path.Length; x++){                    
                    string current_dir = Path.GetFileName(path[x]);
                    if (x == path.Length - 1){
                        if (files.Length > 0){
                            System.Console.WriteLine(padding+"  ├──" + "[" + current_dir + "]");                            
                            get_folder(dir + "//" + current_dir, padding + "  │  ");
                        } else {
                            System.Console.WriteLine(padding + "  └──" + "["+current_dir + "]");                            
                            get_folder(dir + "//" + current_dir, padding + "     ");
                        }
                    } else {
                        System.Console.WriteLine(padding+"  ├──"+"["+current_dir+"]");                      
                        get_folder(dir+"//"+current_dir,padding+"  │  ");
                    }                    
                }
            }
            for( int y = 1; y<= files.Length; y++){
                string current_file = Path.GetFileName(files[y-1]);
                 if (y==files.Length){
                        System.Console.WriteLine(padding+"  └──"+current_file);                       
                    }
                    else{
                        System.Console.WriteLine(padding+"  ├──"+current_file);                        
                    }_
            }
        }
    }
}

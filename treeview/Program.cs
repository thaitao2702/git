using System;
using System.IO;

namespace directory
{
    class Program
    {
        static void Main(string[] args)        
        {                    
            System.Console.WriteLine("Mời bạn nhập vào đường dẫn thư mục: ");
            string input = System.Console.ReadLine();
            System.Console.WriteLine(Path.GetFileName(input));
            treeview(input,"");       
                  
        }

        static void treeview(string dir,string padding){
            string[] path = Directory.GetDirectories(dir); 
            string[] files = Directory.GetFiles(dir);
            if (path.Length > 0){
                for (int x = 0; x < path.Length; x++){                    
                    string current_dir = Path.GetFileName(path[x]);
                    if (x == path.Length - 1){
                        if (files.Length > 0){
                            System.Console.WriteLine(padding+"  ├──" + "[" + current_dir + "]");                            
                            treeview(dir + "//" + current_dir, padding + "  │  ");
                        } else {
                            System.Console.WriteLine(padding + "  └──" + "["+current_dir + "]");                            
                            treeview(dir + "//" + current_dir, padding + "     ");
                        }
                    } else {
                        System.Console.WriteLine(padding+"  ├──"+"["+current_dir+"]");                      
                        treeview(dir+"//"+current_dir,padding+"  │  ");
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
                    }
            }
        }
    }
}

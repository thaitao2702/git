using System;
using System.Collections;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.IO;



namespace GetEmail
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string regex = @"[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*";

                using(StreamReader reader = new StreamReader(args[0])){
                    using(StreamWriter writer = new StreamWriter(args[1])){
                
                        string line;
                        while ((line = reader.ReadLine()) != null)
                        {   
                            Match email = Regex.Match(line, regex);                
                            if(email.Success){               
                                string[] result = line.Split(email.Value);
                                Console.WriteLine(result[0]+ " - " + email.Value);
                                writer.WriteLine(result[0]+ " - " + email.Value);
                            }                
                        }
                    }
                }
                Console.WriteLine("File da duoc luu voi duong dan: {0}", args[1]);
                    
                
                
        }
        catch(System.IO.FileNotFoundException e){
            Console.WriteLine(e.Message);
        }
        catch(SystemException e){
            Console.WriteLine(e.Message);
        }
        
    }

    }

}
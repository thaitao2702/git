using System;
using System.IO;
using System.Collections.Generic;
using System.Text;

namespace buoi4
{
    class Program
    {
        static void Main(string[] args)        
        {
            string output_string  = "";
           
            int count;
            int guessed_right = 0;
            List<string> list = new List<string>();            
            Random ngaunhien = new Random();
            using (StreamReader reader = new StreamReader("1.txt")){
                string line;
                while ((line = reader.ReadLine()) != null){                
                    list.Add(line); // Add to list.                                    
                }
                count = list.Count;
            }
            string tu_can_doan = list[ngaunhien.Next(0,count+1)];
            int length = tu_can_doan.Length;
            if (tu_can_doan.IndexOf(" ")>=0) length--;
            StringBuilder sb = new StringBuilder(tu_can_doan.Length*2);            
            for (int x = 0; x< tu_can_doan.Length; x++){
                if (tu_can_doan[x] == ' ') {sb.Append("  ");}
                else sb.Append("_ ");
            }
            Console.WriteLine ("Từ cần đoán gồm có {0} chữ cái, mời bạn đoán:", tu_can_doan.Length);
            System.Console.WriteLine(sb);
            while (true){
                string chu_cai_doan = Console.ReadLine();
                bool found = false;
                int dem = 0;                
                for (int x = 0; x< tu_can_doan.Length; x++){
                    if (tu_can_doan[x] == chu_cai_doan[0]){                        
                        found = true;
                        guessed_right++;
                        dem++;
                        sb.Remove(x*2,1);
                        sb.Insert(x*2,tu_can_doan[x]);                        
                    }
                }
                if(found) {
                    System.Console.WriteLine($"Có {dem} chữ {chu_cai_doan}");
                    if (guessed_right==length) System.Console.WriteLine("Chúc mừng bạn đã đoán đúng, từ cần tìm là: ");
                }
                else System.Console.WriteLine($"Không có chữ {chu_cai_doan} nào");
                System.Console.WriteLine($"{sb} \n");
            }
        }
    }
}

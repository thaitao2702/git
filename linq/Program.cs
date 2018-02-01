using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace linq
{
    class Program
    {
        static void Main(string[] args)
        {
            bai6();
        }

        static void bai1(){
            Console.WriteLine("Mời bạn nhập vào chuỗi số, gõ enter để nhập số tiếp theo, gõ done, nhấn enter để kết thúc: ");
            List<int> input = new List<int>();
            while (true){
                var num = Console.ReadLine();
                if (num.ToLower()=="done") break;
                input.Add(Convert.ToInt32(num));
            }
            var output = input.Where(item => item%2==0).ToList();
            foreach( var item in output ){
                Console.WriteLine(item);
            }
        }

        static void bai2(){
            Console.WriteLine("Moi ban nhap vao chuoi, nhan enter de nhap chuoi tiep theo, nhap vao done de tiep tuc: ");            
            List<string> input = new List<string>();
            while (true){
                var str = Console.ReadLine();
                if (str.ToLower()=="done") break;
                input.Add(str);
            }
            Console.WriteLine("Tu can tim bat dau bang ky tu: ");
            char kytudau = Console.ReadLine()[0];
            Console.WriteLine("Tu can tim ket thuc bang ky tu: ");
            char kytucuoi = Console.ReadLine()[0];
            var result = from chuoi in input where chuoi[0]== kytudau && chuoi[chuoi.Length-1]==kytucuoi select chuoi;
            foreach(var item in result){
                Console.WriteLine(item);
            }
        }

        static void bai3(){
            Console.WriteLine("Moi ban nhap vao chuoi so, nhan enter de nhap so tiep theo, nhap vao done de thoat: ");
            List<int> input = new List<int>();
            while (true){
                var so = Console.ReadLine();
                if (so.ToLower()=="done") break;
                input.Add(Convert.ToInt32(so));
            }
            Console.WriteLine("Ban can tim so lon thu may?");
            int num = Convert.ToInt32(Console.ReadLine());
            var result = from so in input orderby so descending select so;
            Console.WriteLine("So lon thu {0} la {1}",num,result.ElementAt(num-1));
        }

        static void bai4(){
            Console.WriteLine("Moi ban nhap vao cac chuoi, nhan enter de nhap chuoi tiep theo, nhap vao done de thoat: ");
            List<string> input = new List<string>();
            List<string> output = new List<string>();
            while (true){
                var str = Console.ReadLine();
                if (str.ToLower()=="done") break;
                input.Add(str);
            }
            var singles = input
                .GroupBy(x => x);                
            foreach(var group in singles){
                output.Add(group.Key);
            }
            Console.WriteLine("Tập hợp chuỗi đã sắp xếp: ");
            var result = from item in output orderby item ascending select item;
            foreach( var item in result){
                Console.WriteLine(item);
            }
        }

        static void bai5(){
            Console.WriteLine("Mời bạn nhập vào đường dẫn thư mục cần kiểm tra: ");
            string input = Console.ReadLine();
            string[] path = Directory.GetFiles(input,"*.*",SearchOption.AllDirectories);
            long total_size = 0;
            foreach(string file in path){
                FileInfo f = new FileInfo(file);
                total_size += f.Length;
            }
            Console.WriteLine("Dung lượng trung bình mỗi file trong thư mục {0} là {1}",input,total_size/path.Length);
        }

        static void bai6(){
            Console.WriteLine("Mời bạn nhập tên học sinh theo sau là dấu cách và cuối cùng là điểm, gõ done và nhấn enter để kết thúc nhập liệu");
            Dictionary<string,int> database = new Dictionary<string,int>();
            int tong_diem =0;
            float diem_trung_binh=0.1f;
            while(true){
                string input = Console.ReadLine();
                if (input.ToLower() == "done") break;
                string[] input_daxuly = input.Split(" ");
                database.Add(input_daxuly[0],Convert.ToInt32(input_daxuly[1]));
                tong_diem += Convert.ToInt32(input_daxuly[1]); 
            }            
            diem_trung_binh = (float)tong_diem / (float)database.Count;
            Console.WriteLine(diem_trung_binh);
            var result = from element in database let diem = element.Value where diem < diem_trung_binh select element.Key;
            foreach(var item in result){
                System.Console.WriteLine(item);
            }
        }
    }
}

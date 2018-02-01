using System;

namespace codecamp2
{
    class Program
    {
        static void Main(string[] args)
        {
            bai3();
        }
        static void bai1(){
            Random rdn = new Random();
            int so_can_doan = rdn.Next(-100,100);            
            Console.WriteLine("Moi ban nhap vao so can doan: ");
            int input = Convert.ToInt32(Console.ReadLine());
            int count = 0;
            while(true){
                if (input == so_can_doan){
                    Console.WriteLine("You win with {0} guesses. The correct number is:{1}",count, so_can_doan);                    
                    break;
                }
                else if (input >so_can_doan){
                    Console.WriteLine("Guess Lower");
                    input = Convert.ToInt32(Console.ReadLine());
                    count++;
                }
                else if (input <so_can_doan){
                    Console.WriteLine("Guess Higher");
                    input = Convert.ToInt32(Console.ReadLine());
                    count++;
                }
            }
            
        }

        static void bai3(){
            Console.WriteLine("Moi ban nhap vao day so cach nhau boi dau cach");
            string input = Console.ReadLine();
            string[] chuoi_so = input.Split(" ");
            int quy_tac = Convert.ToInt32(chuoi_so[0])- Convert.ToInt32(chuoi_so[1]);            
            bool ketqua = true;            
            if (quy_tac == 1 || quy_tac == -1){
                for (var x = 1; x<chuoi_so.Length-1; x++){
                    if (Convert.ToInt32(chuoi_so[x])-Convert.ToInt32(chuoi_so[x+1])!=quy_tac){
                        ketqua = false;
                        break;
                    }
                }
            }
            else ketqua = false;
            string message = ketqua? "Yes. This is a consecutive array of numbers":"No. This is not a consecutive array of numbers";
            Console.WriteLine(message);
        }
    }    
}

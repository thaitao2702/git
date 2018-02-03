using System;
using System.Linq;
using System.Collections.Generic;

namespace codecamp3
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] w ={"she","ite","we","you","thy","h"};
            GetTheLastWord(w);
        }
        
        static void bai1(){
            string[] cities =  {  
                "ROME","ZURICH","AMSTERDAM","SAIGON", "LONDON","HANOI","CALIFORNIA", "PARIS"  
            }; 
            var filter1 = from x in cities orderby x.Length ascending select x;
            var filter2 = filter1.GroupBy(x => x.Length);
            foreach (var group in filter2){
              var filter3 = group.OrderBy(x=>x);
              foreach(var item in filter3){
                Console.WriteLine(item);
              }
            }
        }
        public static bool TestForSquares(int[] numbers, int[] squares) {
            var sq_numbers = from item in numbers let sq = item*item select sq;
            var result = squares.Intersect(sq_numbers);
            if (result.Count()==squares.Length && result.Count()==numbers.Length){
                System.Console.WriteLine("true");
                return true;
            }
            else return false;
        }

        public static string GetTheLastWord(string[] words){
            var result = words.Where(x => x.Contains('e')).OrderBy(x=>x);            
            if(result.Count()==0){
                return "null";
            }
            else return $"The last word is {result.Last()}";                         
        }           
    }
}

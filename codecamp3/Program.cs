using System;
using System.Linq;
using System.Collections.Generic;

namespace codecamp3
{
    class Program
    {
        static void Main(string[] args)
        {
            bai1();
        }
        
        static void bai1(){
            string[] cities =  {  
                "ROME","ZURICH","AMSTERDAM","SAIGON", "LONDON","HANOI","CALIFORNIA", "PARIS"  
            }; 
            var result = cities.OrderBy(x=> x.Length).GroupBy(x=>x.Length).Select(group=>group.OrderBy(x=>x)).SelectMany(x=>x);
            foreach (var item in result){
                System.Console.WriteLine(item);
            }
        }
        public static bool TestForSquares(int[] numbers, int[] squares) {
            var sq_numbers = from item in numbers let sq = item*item select sq;
            var result = squares.Intersect(sq_numbers);
            if (result.Count()==squares.Length && result.Count()==numbers.Length){                
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

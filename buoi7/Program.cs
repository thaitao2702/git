using System;

namespace buoi7
{
    class Program
    {
        static void Main(string[] args)
        {
            Student thai = new Student("thai",27,7.5);
            thai.Show();
            Teacher Linh = new Teacher("Linh",24,"C#");
            Linh.Show();
            System.Console.WriteLine(Calculator.Divide(34,32));
        }
        
    }
    class Car {
               public string Color;
               public int Year;
               public string Brand;
               public int Miles;
               public static int count = 0;
               public void Info(){
                   System.Console.WriteLine("This car is from brand {0}, it has {1} color, made in {2} and has run {3} miles", Brand, Color, Year, Miles);
               }
               public static void CountCars(){
                   System.Console.WriteLine($"There are {Car.count} in the inventory");
               }
               public Car(string C, int Y, string B, int M){
                   Color = C;
                   Year = Y;
                   Brand = B;
                   Miles = M;
                   count++;
               }     

               public Car(){
                   Color = "blue";
                   Year = 2018;
                   count++;
               }          

    }
    class Person{
        public string name{get;set;}
        public int age { get; set;}
        public Person(){}
        public Person(string n, int a){
            name = n;
            age = a;
        }
        public void Info(){
            Console.WriteLine($"Ten: {name} tuoi: {age}");
        }
    }
    class Student : Person {
        public double diem;
        public Student(string n, int a):base(n,a){
            
        }

        public Student(string n, int a, double d){
            name = n;
            age = a;
            diem = d;
        }
        public void Show(){
            Console.WriteLine($"Hoc sinh {name} duoc {diem} diem");
        }
    }
    class Teacher : Person {
        public string lop;
        public void Show(){
            System.Console.WriteLine($"Giao vien {name} day lop {lop}");
        }
        public Teacher(string n, int a):base(n,a){

        }
        public Teacher(string n, int a, string l){
            name = n;
            age = a;
            lop = l;
        }        
    }
    public static class Calculator{
        public static double Add(double a, double b){
            return a+b;
        }
        public static double Substract(double a, double b){
            return a-b;
        }
        public static double Multiply(double a, double b){
            return a*b;
        }
        public static double Divide(double a, double b){
            return a/b;
        }
    }
}

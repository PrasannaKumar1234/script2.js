
// 1.    Write a Javascript function to check whether a triangle is equilateral,
//        isosceles or scalene

// function checkTriangle(x,y,z)
// {
//  if(x==y&&y==z){
//     console.log("equilateral Triangle");
// }
// else if(x==y||y==z){
//     console.log("Isoceles Triangle");

// }
// else
// console.log("Scalene Triangle");

// }
//  let x=8,y=1,z=4;

//  checkTriangle(x,y,z);


//       2. Write a function using switch case to find the grade of a student based
//       on marks obtained


// let marks=0;    // enter marks here and check Grades 
// switch(marks){
    
//     case  marks=91:
//     case  marks=92:
//     case  marks=93:
//     case  marks=94:
//     case  marks=95:
//     case  marks=96:
//     case  marks=97:
//     case  marks=98:
//     case  marks=99:
//     case  marks=100:
//         console.log("S Grade Topper");
//         break;
//     case  marks=81:
//     case  marks=82:
//     case  marks=83:
//     case  marks=84:
//     case  marks=85:
//     case  marks=86:
//     case  marks=87:
//     case  marks=88:
//     case  marks=89:
//     case  marks=90:    
//     console.log("A Grade Topper");
//     break;
//     case  marks=71:
//     case  marks=72:
//     case  marks=73:
//     case  marks=74:
//     case  marks=75:
//     case  marks=76:
//     case  marks=77:
//     case  marks=78:
//     case  marks=79:
//     case  marks=80: 
//     console.log("B Grade Topper");
//     break;
//     case  marks=61:
//     case  marks=62:
//     case  marks=63:
//     case  marks=64:
//     case  marks=65:
//     case  marks=66:
//     case  marks=67:
//     case  marks=68:
//     case  marks=69:
//     case  marks=70:
//         console.log("C Grade Topper");
//         break;
//         case  marks=51:
//         case  marks=52:
//         case  marks=53:
//         case  marks=54:
//         case  marks=55:
//         case  marks=56:
//         case  marks=57:
//         case  marks=58:
//         case  marks=59:
//         case  marks=60:
//                 console.log("D  Grade Buddy");
//                 break;
//         case  marks=41:
//         case  marks=42:
//         case  marks=43:
//         case  marks=44:
//         case  marks=45:
//         case  marks=46:
//         case  marks=47:
//         case  marks=48:
//         case  marks=49:
//         case  marks=50:
//              console.log("E  Grade Buddy");
//             break;        
//         case  marks=0:
//         case  marks=1:
//         case  marks=2:
//         case  marks=3:
//         case  marks=4:
//         case  marks=5:
//         case  marks=6:
//         case  marks=7:
//         case  marks=8:
//         case  marks=9:
//         case  marks=10:
//         case  marks=11:
//         case  marks=12:
//         case  marks=13:
//         case  marks=14:
//         case  marks=15:
//         case  marks=16:
//         case  marks=17:
//         case  marks=18:
//         case  marks=19:
//         case  marks=20:
//         case  marks=21:
//         case  marks=22:
//         case  marks=23:
//         case  marks=24:
//         case  marks=25:
//         case  marks=26:
//         case  marks=27:    
//         case  marks=28:
//         case  marks=29:
//         case  marks=30:
//         case  marks=31:
//         case  marks=32:
//         case  marks=33:
//         case  marks=34:
//         case  marks=35:
//         case  marks=36:
//         case  marks=37:
//         case  marks=38:
//         case  marks=39:
//         case  marks=40:    
//         console.log("Fail  Buddy");
//          break;            

//         default:
//             console.log("not valid or wrong input");
// }



// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5
// under 1000


// var sum=0;
// function multiplesof3and5(number){
//     for(var i=1;i<=number;i++){
//         if(i%3===0 && i%5===0){
//             sum=sum+i
//         }
//     }

//     console.log("sum of multiples of 3and 5 under 1000=" +sum);
//      }
//      multiplesof3and5(1000);

// 4.   Write a program to find the factorial of all prime numbers between a
//      given range .

// function isprime(n){
// if(n<2)
//     return `${n} is not a prime`

//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return`factorial(n) is not a prime `
//         }
//     }
//      return`factorial(n) is a prime `
// }
// console.log(isprime(2))

// function factorial(n){
//         let answer = 1;
//         if (n == 0 || n == 1){
//           return answer;
//         }else{
//           for(var i = n; i >= 1; i--){
//             answer = answer * i;               
//           }
//           return answer;
//         }  
//       }
//       let n = 5;
//       answer = factorial(n)
//       console.log("The factorial of " + n + " is " + answer);
    

   
    

            // JavaScript Assessment 1

                  // Set B


// 1. Given an array Arr[] of N integers, write a function to find the sum of the values at the even
// index positions and the odd index positions separately.



// let arr=[1,2,3,4,5,6,7,8,9]
// evenvalue=0
// oddvalue=0


// indexPostion(arr)
// function indexPostion(arr){
// for(i=0; i<arr.length; i++){
//   if(i % 2 == 0){
//    evenvalue +=arr[i];
//  }
//  else{
//     oddvalue +=arr[i];
//  }
//     }
//     return {evenvalue,oddvalue};        
// }

// console.log("sum of even index positions is "+evenvalue);
// console.log("sum of odd index positions is "+oddvalue);



// ____________________________________________________________________




// 2. Given an array of numbers, write a function in JavaScript that removes all the duplicates from
// the array and returns a new array with only the unique values. Ensure that your solution is
// efficient in terms of time complexity. If there are no duplicates, return the array as is

// let arr=[2,3,4,5,3,6,]
// let a = new Set(arr);
// let result=[...a];


// console.log(result);

// _________________________________________________________



// 3. Given a string, you need to remove only two consecutive duplicates from the
// string(removeConsecutiveDuplicates(str)). If no two consecutive characters are found, return
// the string as it is


// let arr=("aabccbdddc");
// let result=[...arr];

// for(let i=0;i<result.length;i++)
// {
//     for(let j=i+1;j<result.length;j++)
// {
// if(result[i]==result[j])
//  {
//     result.splice(i,2);
//  }   
// }
    
// }
// console.log(result)





// 5. Create a Fitness Tracker Application to manage user details, add user and exercise entries,
// track calories burned, and set fitness goals


let fitness=[];

while (true){


Option=prompt("Fitness tracker Application \n  \n 1.Add user \n 2.Display ser \n 3.update users \n 4.update users ")

if (Option=1){

    // Add user

        let name1=prompt("enter your name");
        let age=prompt("enter your age");
        let weight=prompt("enter your weight");
        let height=prompt("enter your height");

  heightvalue=(height/100)
  bmi=((weight)/(heightvalue/heightvalue))
      
     if(bmi =>18.5){
        console.log ("User "+name1+" added duccessfully with BMI "+bmi+" Goal: Maintain you current activity and diet" )
1     }
        else if ( bmi<=25){
        console.log("User "+name1+" added duccessfully with BMI "+bmi+" Aim to burn more calories through exercise");
     }
     else{
        console.log ("User "+name1+" added duccessfully with BMI "+bmi+" Maintain your current activity and diet");
     }

     fitness.push({name1,age,weight,height})

}

//   display  the  user details

else if(Option==2){
    for(let i=0;i<fitness.length;i++){
        console.log (fitness[i].name1+ " "+fitness[i].age+ " " +fitness[i].height +""+fitness[i].weight);
    } 
    
 }



 else if (Option==4){
    console.log("breaking the loop")
    break;
 }

}




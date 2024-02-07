// Homework 1: 'You have to flatten an obj'
let persony = {
    name: "Suyash",
    lastName : "Sinha",
    contact: {
        phone: "987-654-3210",
        email: "suyash@gmail.com",
        address: {
            city: "Banglore",
            country: "India"
        }
    }
};

function isObject(val) {
  return (
    typeof val === 'object' &&
    val !== null &&
    !Array.isArray(val)
  );
}
 
 
 function flattenObj(obj){
     let newObj = {};
     for(let key in obj){
         let val = obj[key];
         if(isObject(val)){
            let nestedObj = flattenObj(val);
            for(let key2 in nestedObj){
                let modifiedKey = key+'.'+key2;
                newObj[`${key}.${key2}`] = nestedObj[key2];
            }
         }else if(Array.isArray(val) && typeof val !== 'String' ){
            newObj[key] = {...val};
         }else{
            newObj[key] = val;
         }
     }
     return newObj;
 }
 
 const result = flattenObj(persony);
 console.log(result);

 // Homework 2: 'You have to wite polyfill for deep clone of an object' const newObj = obj.deepClone()
 Object.prototype.deepClone = function myDeepClone(context = null) {
    const object = context === null ?  this : context;
  let result = Array.isArray(object) ? [] : {};
        for(let key in object){
            let val = object[key];
            if(typeof val === 'object' && val !== null){
                    result[key] = myDeepClone(val);
                }else{
                    result[key] = val;
                }
        }
        return result;
};


let personx= {
name: "Yash",
lastName : "Sinha",
hobbies : ["singing","dancing"],
contact: {
    phone: "987-654-3210",
    email: "suyash@gmail.com",
    address: {
        city: "Banglore",
        country: "India"
    },
    landMarks : ["asha","cant","orange city"]
}
};
let person2 = personx.deepClone();;
person2.contact.landMarks[1] = "Cantonment"
console.log(person2);
console.log(personx);

 Object.prototype.deepClone = function myDeepClone() {
    let res = Array.isArray(this) ? [] : {};
    for (let key in this) {
      if (isObject(this[key])) {
        res[key] = myDeepClone(this[key]);
      } else {
        res[key] = this[key];
      }
    }
    return res;
};


 //Homework 3:  .find | .findIndex | .sort | .some

 //find() - returns the value of the first element that passes the condition provided.
 //return undefined if no element meets the condition

let arr = [1, 2, 30, 4, 5];
let val= arr.find((element) => element > 2);
 console.log(val);


//findIndex() - returns the index of the first element that passes the condition provided.
 //return -1 if no element meets the condition
let index = arr.findIndex((element) => element > 2);
console.log(index);

//sort() - sorts the elements as strings  of an array and it overwrites
//based on string if you want to sort integers or any other give compare function
let sArr = ["Sinha", "Meena", "Kartik", "Jay", "Yash"];
sArr.sort();
console.log(sArr);

//some() - return true or false based on the callback function provided if any element passes it 
let arrSome = [2, 5, 8, 1, 4];
let checkVal = 2;
let res = arrSome.some( (arrVal) => checkVal === arrVal);
console.log(res);

//Homework 4: Difference bw splice and slice in array
let arr1 = [1,2,3,4,5,6,7,8,9,10];

// slice fuctions return  an array a shallow copy of array elements between start and end index provided
//endIndex is exclusive startIndex to endIndex-1
let slicedArray = arr1.slice(2,5);
                //.slice(startIndex,endIndex)


let arr2 = [1,2,3,4,5,6,7,8,9,10];
//splice method modified the original array and used to remove elements from provided startIndex and we can add elements
arr2.splice(2,2);
//  O/P  - [
//   1, 2, 5,  6,
//   7, 8, 9, 10
// ]
//  .splice(startIndex,count)
arr2.splice(2,2,3,4);
//  .splice(startIndex,count,....newelements)
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
console.log(arr2);


// var arr = [];

// var string = "array";
// var stringObj = new String("")

// console.log(typeof arr);
// console.log(typeof stringObj);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(string));
// console.log(Array.isArray(stringObj));

// console.log(arr);


var arr = [1,2,3,4,5];
var arr = [1,2,3,4,undefined, null, "text"];
console.log(arr);

var arr2 = new Array(1,2,3,4,undefined, null, "text");
console.log(arr2);

console.log(arr.length);

console.log(arr[6]);
// add element to array
arr.push("element");
// for (let index = 0; index < arr.length; index++) {
//     var element = arr[index];
//     console.log(element);
// }

arr[9] = "Two";
console.log(arr);
console.log(arr instanceof Array)
// add element to array


const arr = [3,2,11,4,5];

console.log(arr);

console.log(arr.sort());

// ver 1
// const sorted = arr.sort(function(a, b){
//     return a - b;
// });

// ver 2
function sortFunction(a, b){
    return a - b;
}
// const sorted = arr.sort(sortFunction);

// ver 3, sort function
const sortFunction = function(a, b){
    return a - b;
}
const sorted = arr.sort(sortFunction);

console.log(sorted);

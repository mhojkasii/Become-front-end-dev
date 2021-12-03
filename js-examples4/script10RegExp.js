
// regex 
const pattern = /[0-9]/g; 
// const pattern = new RegExp('[0-9]'/*search pattern */, 'g');
const text = "Lorem Ipsum has been the industry's standardl dummy text ever since the 1500";

// test method
// console.log(pattern.test(text));

// exec method
// console.log(pattern.exec(text));

console.log(text.replace(pattern, 'N'));

// flags:
// i - insensitive
// g - global
// m - multiline
const pattern2 = /[l]/i
console.log(text.replace(pattern2, 'N'));
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function testFunct() {
 console.log('test normal funct');
}

testFunct();


let arrowFunct = () => {
 console.log('test arrow funct');
}
arrowFunct();


//spread operator
let a = [1, 3, 5, 6];
let b = [...a, 8, 9, 10];

console.log(b)

function collect(...c) {
 console.log(c);
}
collect(1, 4, 6)


//map method
let values = [20, 30, 40]
let doubled = values.map((n) => {
return n*2
})
console.log(doubled);

//filter method
let points = [1, 6, 8, 23, 54, 78]
// let filtered = points.filter((n) => {
//   return n > 10
// })
//or
let filtered = points.filter((n) => n > 10 );
console.log(filtered);
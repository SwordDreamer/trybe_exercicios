





















// function copy(o){
//     var copy = Object.create( Object.getPrototypeOf(o) );
//     var propNames = Object.getOwnPropertyNames(o);
  
//     propNames.forEach(function(name){
//       var desc = Object.getOwnPropertyDescriptor(o, name);
//       Object.defineProperty(copy, name, desc);
//     });
  
//     return copy;
//   }
  
//   var o1 = {a:1, b:2};
//   var o2 = copy(o1); // o2 looks like o1 now

//   console.log(copy(o1))


//   const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// // expected output: "a"
// // expected output: "b"
// // expected output: "c"


// const obj = {
//   name: 'Jean-Luc Picard',
//   rank: 'Captain'
// };

// // Prints "name Jean-Luc Picard" followed by "rank Captain"
// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key]);
// });


// const obj = {
//   name: 'Jean-Luc Picard',
//   rank: 'Captain'
// };

// // Prints "Jean-Luc Picard" followed by "Captain"
// Object.values(obj).forEach(val => {
//   console.log(val);
// });
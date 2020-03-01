
var fs=require('fs');

// var r=fs.readFileSync('demo.txt','utf-8');

fs.readFile('demo.txt','utf-8',function(err,data)
{
    console.log(data);
});

// fs.writeFileSync('demo.txt','This is a simple text file');
console.log('Hey there');






















// var events=require('events');

// var emitter= new events.EventEmitter();

// emitter.on('publishVideo',function(message){
//     console.log(message);
// });

// emitter.emit('publishVideo','ABC has uploaded a new video');



// var math=require('./math');

// math.calculate_square(10);
// math.calculate_cube(10);

// // console.log('Hello World!');

// // setTimeout(function(){
// //     console.log('hello World!');
// // },5000);

// var displayMessage=function()
// {
//     console.log('This is a display message function!');
// }

// var calculateSquare= function(number)
// {
//     return number*number;
// }

// var makeDouble= function(number)
// {
//     return number*2;
// }

// console.log(makeDouble(calculateSquare(10)));
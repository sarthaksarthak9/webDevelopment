const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull' /*event*/, () => {  /*call back func*/
  console.log('Turn of the motor !!');

  setTimeout(() =>{
        console.log('please turn off the motor is a gentle reminder'); //after 3 sec it show this message;
  }, 3000);                                                             //afetr everything run then I'll run
});


console.log("The script is working");

myEmitter.emit('WaterFull'); // here we are firing our event

console.log("The script is still working");


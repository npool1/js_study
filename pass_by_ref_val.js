/* Does JS pass parameters by value or by reference?
answer: it passes primative types by value and it passes objects by reference.*/

"use strict"

var a =1;
function foo(a) {
    
}

foo(a);
console.log(a);
//a = 1

var a =1;
function foo(a) {
    a = 2;
}

foo(a);
console.log(a);
//a = 1

var a = true;
function foo(a) {
    a = false;
}

foo(a);
console.log(a);
//a = true

/* Pass by value vs Pass by Reference

Pass by Value: If val of primative type is changed within a function,
changes won't affect the var in the outter scope. 
Pass by Val is passing a copy of the variable.

A primitive (primitive value, primitive data type) is data that is not 
an object and has no methods. In JavaScript, there are 6 primitive data 
types: string, number, boolean, null, undefined, symbol (new in ECMAScript 
2015).

Pass by reference is passing a pointer to the original rather than a copy.*/

var a = {};
function foo(a) {
    a.moo = false;
}
foo(a);
console.log(a)
 //Object {moo: false}

 var a = {'moo' : 'too'};
 function foo(a) {
     a = {'too': 'moo'};
 }
 foo(a);
 console.log(a)
  //Object {moo: 'too'}

  var a = {'moo' : 'too'};
  function foo(a) {
      a .too ='moo';
  }
  foo(a);
  console.log(a)
   //Object {moo: "too", too: "moo"}


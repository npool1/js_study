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
Pass by Val is passing a copy of the variable.*/

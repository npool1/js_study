/*What are the different data types in JS?

In ECMA script 5

5 Primative types:
name:    type:
Bool // true/false
Num // 1, 1.0
Str // "a", 'a'
Null // null
Undefined // undefined

1 nonprimative:
Object // {}, new Object()

JS function typeof() gives us the type of a particular value
*/

typeof(1) // number
typeof("a") //string
typeof(true) // boolean
typeof(undefined) // undefined
typeof(null) // object => should be null this is a long standing mistake in JS
typeof({}) // object

/* what's the difference between dynamic languages like JS/Python and statically
typed languages like Java?

1) in  statically typed languages you tell the computer what type the variable belongs
to when you instantiate the variable. In dynamic languages the type of the var is inferred
or determined dynamically at run time.

What are the advantages/disadvantages of each?

1) dynamic languages are quicker to get up and running, but you only find bugs at
runtime. In static languages the compiler will throw errors that allow us to debug
before runtime at the expense of programs being slightly more difficult to write.
statically typed languages can also more strictly control memory management and 
performance.

What's the difference between null and undefined?

Both are ways to say no value, but there is a subtle difference.*/

var a;
console.log(a); //undefined
//a has no value => undefined is a core function of the JS engine to inform 
// that this is either an unintialized var, parameter missing from function params list, 
//unknown property of objc 

var a = null;
console.log(a) // null
//only human programmers will set vars to null not the JS engine

/* in static languages null = absence of value
in JS null/undefined  are their own types with values of 
null/undefined respectively */

null == undefined //true
undefined == null // true

/* the above is comparing values not types, so it evaluates to true.






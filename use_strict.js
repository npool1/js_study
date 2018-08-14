/* what is usestrict?
Answer:
it allows you to place a program or function in a strict operating context
which ultimately makes debugging much easier by generating errors/throwing
exceptions which will alert/direct you to errors in your code much sooner */

"use strict"

/* should be placed at the top of the .js file
it's a string because of compatibility issues with older browsers when it was
initially released.

in "use strict" mode using a var before it has been defined causes an error
w/o "use strict" it creates a global variable*/

"use strict"
var theVal = 0;
//
thVal = 1
//typo in variable name theVal is still set to 0--this will generate an error
if (theVal > 0){
    console.log("Hello!")
}

/* another use is it prevents you from using reserved words for variables that
are reserved for future versions of JS

You are also unable to delete functions/variables/function args in "use strict"
mode

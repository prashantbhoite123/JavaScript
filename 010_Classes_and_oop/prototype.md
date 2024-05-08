# New Keyword
In JavaScript, the new keyword is used to create an instance of a user-defined object type or one of the built-in object types that has a constructor function. When used with a constructor function, new creates a new object, sets the constructor function's prototype object as the new object's prototype, and executes the constructor function with the newly created object as its context (this).
here's whats happens behind the scence when the new kwyword is used.
A new Object is creted : The newkeyword initiates the cretation of a New Javacript object

A Prototype is linked property of the Constructor funtion .This means that access to properties and methods defined on the constructor prototype

The constructor is called: The constructor function id called with specific argument is and this is bound to the newly created object.
if no explicite return values is specified from the constructor javascript assumes this the newly created onject, to be the intended return values

The new object is returned: After the COnstructor function has been called of it dosent return a non-primitive values (object,array,function,etc.),then newly created object is returned

// Primitive Datatype

/* 7 Datatype => Number,
    Boolean,
    String,
    undefined, null,Symbol,BigInt

    */

/* 
    Referece Type (Non Primitive)

    ==> Array ,Function ,object
    */

/*
    DataType and this type 
    Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
    
//     */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memary and Heap memory

// Stack Memory are use in (primitive Datatype)
// Heap Memory are Use in (Non Primitive)

let csv = "apple,banana,cherry,date"
let fruits = csv.split("").reverse()
console.log(fruits) // Output: ["apple", "banana", "cherry", "date"]

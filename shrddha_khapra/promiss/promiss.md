# Promiss in js
1) Promiss is for "eventual" completion of task it is an object in js it is solution to callback hell

let promiss   = new Promiss ((resolve, reject)=>{
    Function with 2 handlor
})

3) A Javascript Promiss object can be:

.. Pending : The result is undefine
.. Resolve : The result is a value (fullfilled)   resolve(result)
.. Rejected : the result is an error object  reject(error);
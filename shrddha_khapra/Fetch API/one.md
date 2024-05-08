## fetch API

> 1.  API stand for Application Programing interface

> 2.  The Fetch API provoid an interface for fetching (sendingireceiving) resources.

> 3.  It use Request and Responce objects

> 4.  The fetch() method is used to fetch a resource (data)

> 5.  Syntax\_)

      let promiss  =fetch(url.[options])

const getfacts = async () => {
let responce = await fetch(URL);
console.log(responce.status);
console.log(responce.type);
};

## Understanding Terms

# AJAX is Asynchronous js & XML

# JSON is javascript object Notation

# json() method : returns as second promiss that resolves with the result of parsing the responce body text as JSON .(input is JSON , output in JS object)

## Request and Responce

HTTP Verbs

Responce Status code

- HTTP responce headers also contain details about the responce such as content type HTTP status code etc
f
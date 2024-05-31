function setcall(username) {
  this.username = username;
}

function createUser(username, email, passwod) {
  setcall.call(this.username);
  this.email = email;
  this.passwod = passwod;
}

const chai = new createUser("chai", "chai#fb.com", "123");
console.log(chai);

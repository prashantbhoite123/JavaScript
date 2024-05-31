// class user {
//   constructor(user, email, password) {
//     this.user = user
//     this.email = email
//     this.password = password
//   }

//   get email() {
//     return this._email.toUpperCase()
//   }
//   set email(value) {
//     this._email = value
//   }
//   get password() {
//     return this._password.toUpperCase()
//   }
//   set password(value) {
//     this._password = value
//   }
// }

// const chai = new user("prashant", "prashu@gmail.com", "abc")
// console.log(chai.email  )

// class user {
//   constructor(username, email, password) {
//     this.username = username
//     this._email = email
//     this.password = password
//   }

//   get email() {
//     return this._email.toUpperCase()
//   }
//   set email(value) {
//     this._email = value
//   }
// }

// const chai = new user("prashant", "prashu@gmail.com", "12345")
// console.log(chai.email)

class emp {
  constructor(username, salary) {
    this.username = username
    this.salary = salary
  }
}

class maneger extends emp {
  constructor(username, salary) {
    super(salary)
    this.username = username
    this.salary = salary
  }
}

const pay = new emp("prashant", 808080808)

console.log(pay)

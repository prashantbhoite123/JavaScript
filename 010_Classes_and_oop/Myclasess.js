// class user {
//   constructor(username) {
//     this.username = username
//   }
// }

// class Teacher extends user {
//   constructor(username, email, password) {
//     super(username)
//     this.username = username
//     this.email = email
//     this.password = password
//   }
// }

// const tea = new Teacher("prashu", "prashu@gmail.com", "1234")
// console.log(tea)

class user {
  constructor(username) {
    this.username = username
  }

  createNewuser() {
    return `${this.username.toUpperCase}`
  }
}

const chai = new user("prashant bhoite")

console.log(this.chai)

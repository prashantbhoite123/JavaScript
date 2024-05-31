function User(email, password) {
  this._email = email
  this._password = password
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase()
    },
    set: function (value) {
      this._email = value
    },
  })
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase()
    },
    set: function (value) {
      this.password = value
    },
  })
}

const chai = new User("prashant", "prashau@gmail.com", "abc")
console.log(chai)
// console.log(chai.password)

function emp(username, email) {
  this.username = username
  this._email = email

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase()
    },
    get: function (value) {
      this._email = value
    },
  })
}

const employee = new emp("ganesh", "ganesh@gamil.com")
console.log(employee._email)

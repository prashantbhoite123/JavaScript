const user = {
  _username: "prashant",
  _password: "abc",

  get password() {
    return this._password.toUpperCase()
  },
  set password(value) {
    this._password = value
  },
}

const chai = Object.create(user)
console.log(user.password)

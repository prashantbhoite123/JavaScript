# getter and Setter

1) Gettor is use of get value
2) setter is use to set value

Syntax => get password() {
    return this._password.toUpperCase()
  }
  set password(value) {
    this._password = value
  }

# Object base syntax

  function user(username,email,password){
    this.usename  = username
    this.email = email
    this.password = password

    get object()
  }


  # object base syntyax 
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

console.log(user.password)
const user = {
  username: "ganesh",
  password: "ganu",

  welcome: function () {
    console.log(`${this.password} this is my password`)
  },
}

user.welcome()
user.password = "Prashant"
user.welcome()

function prashu(...user) {
  console.log(user)
}

prashu("prashant", "abcd", "prahu@gmail.com")

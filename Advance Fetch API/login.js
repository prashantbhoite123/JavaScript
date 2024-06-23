const loginForm = document.querySelector("#logForm")
const loginInputs = document.querySelectorAll(".loginInputs")
const emailInput = document.querySelector("#emailInput")
const passInput = document.querySelector("#passInput")

let loginFormData = {}

loginInputs.forEach((inp) =>
  inp.addEventListener("change", (e) => {
    loginFormData[e.target.name] = e.target.value
    console.log(loginFormData)
  })
)

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const res = await fetch(
    "https://authentication-jwt-s0w1.onrender.com/api/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginFormData),
    }
  )
  const data = await res.json()
  alert(data.message)
  console.log(data)

  loginInputs.forEach((inpu) => (inpu.value = ""))
  if (data.message === "Incorect username or password") {
    emailInput.value = loginFormData.email
    passInput.style.border = "2px solid red"
  }
  if (data.message === "User login succesfuly") {
    const loginForm = document.querySelector("#LoginForm")
    const home = document.querySelector("#home")
    loginForm.style.display = "none"
    home.style.display = "block"
  }
})

const logoutBtn = document.querySelector("#logoutButton")

logoutBtn.addEventListener("click", async () => {
  const res = await fetch(
    "https://authentication-jwt-s0w1.onrender.com/api/user/logout"
  )

  const data = await res.json()
  alert(data.messgae)
  const loginForm = document.querySelector("#LoginForm")
  const home = document.querySelector("#home")
  loginForm.style.display = "flex"
  home.style.display = "none"
})

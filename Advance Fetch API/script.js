// const URL = "https://authentication-jwt-dz86.onrender.com/";

const signUpForm = document.querySelector("#signUpForm")
const signInputs = document.querySelectorAll(".signUpinputs")
const signUpFormData = {}
signInputs.forEach((inp) =>
  inp.addEventListener("change", (e) => {
    signUpFormData[e.target.name] = e.target.value
    console.log(signUpFormData)
  })
)
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const res = await fetch(
    "https://authentication-jwt-s0w1.onrender.com/api/user/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(signUpFormData),
    }
  )
  const data = await res.json()
  console.log(data)
  alert(data.message)
  signInputs.forEach((inp) => (inp.value = ""))
})

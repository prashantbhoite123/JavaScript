// const arrbtn = document.querySelector("#arrbtn")

// const name = ["ganesh", "prashant", "vishal", "bhushan"]

// let temp = 0
// arrbtn.addEventListener("click", (e) => {
//   if (temp === 4) {
//     temp = 0
//     return
//   }
//   arrbtn.innerHTML = name[temp]
//   temp++
// })

// const newpromiss = new Promise((res, rej) => {
//   arrbtn.addEventListener("click", (e) => {
//     console.log("this is prommis")
//   })
//   // if (arr % 2 === 0) {
//   res("Promiss is resolve")
//   // } else {
//   rej("promiss reject")
//   // }
// })

// console.log(newpromiss())
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let idx = 1
// const promiss = new Promise((res, rej) => {
//   arrbtn.addEventListener("click", () => {
//     if (arr[idx] % 2 === 0) {
//       res("resolve")
//       idx++
//     } else {
//       rej("reject")
//       idx++
//     }
//   })
// })

// promiss.then((res) => {
//   console.log(res)
// })

// let idx = 0
// arrbtn.addEventListener("click", (e) => {
//   if (idx === 3) {
//     idx = 0
//   }
//   arrbtn.innerHTML = newarr[idx]
//   idx++
// })

// arrbtn.addEventListener("click", (e) => {
//   newarr.map((arr) => {
//     arrbtn.innerHTML = newarr
//   })
// })

// const newarr = ["bhushan", "ganesh", "prashant"]

// let temp = 0

// arrbtn.addEventListener("click", () => {
//   if (temp === 0) {
//     arrbtn.innerHTML = newarr[0]
//     temp++
//   } else if (temp === 1) {
//     arrbtn.innerHTML = newarr[1]
//     temp++
//   } else if (temp === 2) {
//     arrbtn.innerHTML = newarr[2]
//     temp = 0
//   }
// })

// const str = "Prashant"
// let temp = ""

// for (let i = str.length; i > 0; i--) {
//   temp += str[i]
// }
// console.log(temp)

// const str = "ganesh"

// let arr = ""
// let idx = str.length - 1

// for (let i = str.length; i > 0; i--) {
//   arr += str[idx]
//   idx--
// }
// console.log(arr)

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const even = a.map((a) => {
  if (a % 2 === 1) {
   console.log("even numbers",a);
      return a;
  } else {
      console.log("odd numbers",a);
    }
})

console.log(even)

// const student = {
//   username: "prashant bhoite",
//   marks: "95.4",

//   printMarks: function () {
//     console.log("marks", this.marks);
//   },
// };

// student.printMarks();

// const employee = {
//   calclTax() {
//     console.log("the tax is 20% ");
//   },
// };

// const karanArjun = {
//   salary: 50000,
// };
// karanArjun.__proto__ = employee;

// class ToyotaCar {
//   constructor(brand, milege) {
//     console.log("Create new object");
//     this.brand = brand;
//     this.milege;
//   }
//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
// }

// const fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// const bmw = new ToyotaCar("bmw", 12);
// console.log(bmw);

// class persone {
//   constructor() {
//     this.species = "homogeneus";
//   }
//   eat() {
//     console.log("Et something");
//   }

//   sleep() {
//     console.log("sleep someware");
//   }
// }

// class Engineer extends persone {
//   work() {
//     console.log("solve problem  build somthing");
//   }
// }

// const prashantObj = new Engineer();()

// class doctor {
//   constructor() {
//     this.parshu = "parshu babu";
//   }
//   work() {
//     console.log("treate petionts ");
//   }

//   eat() {
//     console.log("eat helthyfood");
//   }
//   sleep() {
//     console.log("8 hover");
//   }
//   party() {
//     console.log("late night ");
//   }
// }

// class petionts extends doctor {
//   seek() {
//     console.log("normal seek");
//   }
//   pement() {
//     console.log("height peyment");
//   }
// }

// const newpersone = new petionts();

// const promissOne = new Promise(function (resolve, reject) {
//   let error = false;
//   setTimeout(function () {
//     if (!error) {
//       resolve("prashant bhoite");
//     } else {
//       reject("ERROR was detected");
//     }
//   }, 1000);
// });

// promissOne.then(function () {
//   console.log("promiss consume");
// });

// class persone {
//   constructor() {
//     console.log("enter Parent Constructor");
//     this.prashu = "prashnat bhoite";
//   }
//   work() {
//     console.log("basic hard work");
//   }
//   eat() {
//     console.log("eat someware");
//   }
// }

// class Engineer extends persone {
//   constructor() {
//     console.log("enter Child Constructor");
//     super();
//     this.ganu = "ganu babu";
//     console.log("exit child constructor");
//   }
//   work() {

//     console.log("some are coding hard work");
//   }
//   eat() {
//     console.log("eat helthy food");
//   }
// }

// const newEngieer = new Engineer();

let DATA = "secreate information";
class user {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }

  viewData() {
    console.log("Data", DATA);
  }
}

class Adimn extends user {
  constructor(name, email) {
    super(name, email);
  }
  editdata() {
    console.log("data =", DATA);
  }
}

const student1 = new user("prashant", "abc@gmail.com");
const student2 = new user("ganabhai", "abc@gmail.com");

const admin1 = new Adimn("Pratik bhai", "pratu@gmail.com");

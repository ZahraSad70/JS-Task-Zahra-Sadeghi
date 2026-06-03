

// const firstname = "zahra";

// console.log(firstname);


const user = {
    name: 'saghi',
    age: 30,
    lname: 'mosavi'
}
// console.log(user.name)
// console.log(user["age"])


// let x = 10;
// x += 5
// console.log(x);

// const name = "saghi";
// const lname = "sadeghi";
// console.log(name + " " + lname);

// console.log("4" + 30);
// console.log("4" - 3); //answer 3
// console.log("4" - null); //4
// console.log("4" - true); //3
// console.log("4" - "zahra") //NAN (not a number)



// //strict equality
// console.log(1 === "1") //compare value + type --> false

// //loost eauality
// console.log(1 == "1") //compare value --> true


// console.log("2" !== 2) //compare value + type -->true
// console.log("2" != 2) //compare value -->false


// // condition ? a : b
// const price = 200_000;
// const limitPrice = 100_000;
// const discount = price > limitPrice ? "10%" : "5%"
// console.log(discount); //--> 10%


// const selectColor = "red";
// const defaultColor = "black";
// const userColor = selectColor || defaultColor;  //result is red چون متغیر اول مقدار داره و در واقع true به حساب میاد پس اولین مقدار true برگردانده میشود.
// //const userColor=selectColor ? selectColor :defaultColor;  این خط کد با بالای یکسات است ولی بالایی حرفه ای تره.


// //ساختار if

// if (selectColor === "red") {
//     console.log(selectColor)
// } else if (selectColor === "blue") {
//     console.log(selectColor)
// } else {
//     console.log("color null");
// }


// //swicth case
// const role = "Admin";
// switch (role) {
//     case "Admin": {
//         console.log(role);
//         break;
//     }
//     case "user": {
//         console.log(role);
//         break;
//     }
//     default:
//         console.log("null role");
// }


// //for
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) console.log(i);
// }

// //while
// let i;
// while (i <= 10) {
//     if (i % 2 === 0)
//         console.log(i);
//     i++;
// }

// //do while
// do {
//     if (i % 2 === 0)
//         console.log(i);
//     i++;
// } while (i <= 10)


//
// for (const key in user) {
//     console.log(user[key]);
// }

// const rolse = ["Admin", "teacher", "Merchant"]

// for (let i=0;i<rolse.length;i++){
//     console.log(rolse[i]);
// }

// for (const item of rolse) {
//     console.log(item);
// }


// function max(a, b) {
//     if (a > b) return a;
//     return b;
//     // return a>b ? a:b;
// }

// const maximun = max(4, 25);
// console.log(maximun);

// function FizzBuzz(num) {
//     if (typeof num !== "number") return "please inter number";   // اینجا number یعنی نوع نامبر در جاوا اسکریپت
//     if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
//     if (num % 3 === 0) return "Fizz";
//     if (num % 5 === 0) return "Buzz";
// }

// const f = FizzBuzz("556ffff");
// console.log(f);


// function discount(price) {
//     if (price < 100) {
//         console.log("price not enaugh")
//     }
//     const dis = Math.floor((price - 100) / 10) * 3;
//     if (dis > 25) console.log("max discount is 25");


// }

// discount(200);


// function CreateCourse(title, price, discount) {
//     this.title = title;
//     this.price = price;
//     this.discount = discount
//     this.calcOfPrice = function () {
//         return price * (1 - discount / 100);
//     }
// }
// const course1 = new CreateCourse("node.js", 200, 10);
// // course1.student=230;  // این و خط پایانی نماینگر این هست که بجکت ها داینامیک هستن و میشه پراپرتی به اونها اضافه کرد یا کم کرد.
// // delete course1.title;
// console.log(course1.calcOfPrice());
// console.log(course1 instanceof CreateCourse);
// console.log(course1.hasOwnProperty("title"));

// console.log(Object.keys(course1));
// console.log(Object.values(course1));
// console.log(Object.entries(course1));


// //spread opreator
// //اضافه کردن به ته یک آرایه
// const arr1 = [2, 4];
// const arr2 = [3, 1, ...arr1];
// console.log(arr2);

// //نمایش همه آرگومان های آرایه
// console.log(...arr1);

// //push کردن در یک آرایه
// const tags = ["react", "front", "end"];
// console.log([...tags, "fullstack"]);

// //copy
// const newTags = [...tags];
// console.log(newTags);

// //join
// const backTags = ["nest", "node"];
// console.log([...tags, ...backTags]);

// //string
// const str = "zahra";
// console.log(...str);
// console.log([...str]);


// //Object
// const emp = {
//     name: "saghi",
//     code: "7391",
//     lname: "sadeghi"

// }

// //اضافه کردن مقدار به ابجکت
// console.log({ ...emp, email: "sssss" });


// //copy object 
// const newEmp = { ...emp };
// newEmp.email = "aaaaaa";
// console.log(newEmp);


// //rest opreator
// const num1 = [1, 2, 3, ...[4, 5]];
// const [a, b, ...others] = num1;
// console.log(a, b, others);

// const tag1 = ["front", "next"];
// const tag2 = ["back", "node"];
// const [c, d, ...other] = [...tag1, ...tag2];
// console.log(c, d, other);


// const { code, ...otherEmpData } = emp;
// console.log(code, otherEmpData);


// function totalPrice(discount, ...price) {
//     let total = 0;
//     for (const item of price) total += item;
//     console.log(total * (1 - discount));
// }
// const price = [100, 200, 300];
// totalPrice(0.3, ...price);


// //Set
// const array = [1, 1, 2, 2, 6, 5, 8, 8];
// const set = new Set(array); //جوابی که برمیگردونه یک آرایه نیست یک جیسون هست  اگر ارایه بخواهیم کد زیر رو باید بزنیم
// console.log([...set]);

// //یا اینطوری
// const newSet = [... new Set(array)];
// console.log(newSet); //برای این newSet دیگه نمیشه از سایز و add استفاده کرد باید به شکل زیر بنویسیم
// console.log(new Set(array).size);

// console.log(set);
// console.log(set.add(8));
// console.log(set.size);
// console.log(set.delete(2));
// console.log(set.has(5));

// //کل ارایه رو حذف میکنه
// //set.clear;

// //create unit string
// console.log([... new Set("saghi mosavi")]);


// const lily = { "name": "lily" },
//     jhon = { "name": "jhon" },
//     piter = { "name": "piter" },
//     ali = { "name": "ali" },
//     zahra = { "name": "zahra" };

// // const userRolse = new Map();
// // userRolse.set(lily, "Admin").set(jhon, "User").set(piter, "guest");
// // console.log(userRolse);

// const userRolse = new Map([
//     [lily, "Admin"],
//     [jhon, "User"],
//     [piter, "guest"],
//     [ali, "guest"],
//     [zahra, "Admin"]
// ])
// console.log(userRolse.get(jhon));


// for (const item of userRolse.keys()) {
//     console.log(item); // آیتم های ما هر کدوم یک ابجکت هستن
// }


// for (const rolse of userRolse.values()) {
//     console.log(rolse); //مقدار رول ها رو برمیگردونه
// }

// for (const item of userRolse.entries()) {
//     console.log(item[0].name, item[1]); //خروجی آرایه هست برای هر آیتم
// }

// for (const [user, rolse] of userRolse.entries()) {
//     console.log(user.name, rolse); //خروجی مثل بالایی میشه فقط ما توی for اومدیم متغیر هارو دی استرکچر کردیم
// }

// console.log([...userRolse.keys()]);
// console.log([...userRolse.values()]);

// const set1 = [... new Set(userRolse.values())];
// console.log(set1);


// //function decleration

// function add(a, b) {
//     return a + b;
// }

// //functione expresion 

// const add2 = function (a, b) {
//     return a + b;
// }
// add2(2, 5);


// //arrow function ()=>{} or function(){}


// function discountAcc(price, discountt = 0.3) {
//     console.log(price * (1 - discountt));
// }
// discountAcc(100, 0.5);
// // const arrowDiscount = (price, discountt) => {
// //     return price * (1 - discountt);
// // }


// //const arrowDiscount = (price, discountt) => price * (1 - discountt);

// function sayHi() {
//     return "Hi !;";
// }

// function greeting(name, fn) {
//     console.log(fn() + name);
//     return fn() + name;
// }

// greeting("sara", sayHi);


// function newGreeting(str) {
//     return function (name) {
//         console.log(str + name);
//     };
// }
// //const newGreeting=(str)=>(name)=>str + name; این کوتاه شده تابع بالا میباشد

// const fun = newGreeting("Hello !;");
// fun("sara");

// const arr = [2, 4, 6];
// function oprationArray(arr, cb, num) {
//     const newArray = [];
//     for (const item of arr) {
//         newArray.push(cb(item, num));
//     }
//     return newArray;
// }
// function inc(item, num) {
//     return item + num;
// }
// function dec(item, num) {
//     return item - num;
// }
// console.log(oprationArray(arr, inc, 2));
// console.log(oprationArray(arr, dec, 2));

// const usernew = {
//     name: "zahra",
//     fname: "sadeghi",
//     year: 1991,
//     getage() {
//         console.log(2026 - this.year)
//     },
//     intruducer(str, message) {
//         console.log(`${str} I am ${this.name} last name is ${this.fname} and my job is ${message}`)
//     }
// }

// usernew.getage();

// const user2 = {
//     name: "sara",
//     fname: "sad",
//     year: 1980
// }
// const newGetYear = usernew.getage;
// const newIntrducer = usernew.intruducer;
// newGetYear.call(user2);
// newIntrducer.call(user2, "Hi", "doctor");
// newIntrducer.apply(user2, ["Hi", "enginear"]);
// const params = ["Hi", "doctors"];
// newIntrducer.apply(user2, params);
// newIntrducer.call(user2, ...params);

// const newIntrducerBind = newIntrducer.bind(usernew);
// newIntrducerBind("hi", "reception");

// const newIntrducerBind2 = newIntrducer.bind(usernew, "Hellooo!!");
// newIntrducerBind2("react");


// document.querySelector(".add-user").addEventListener("click", usernew.getage.bind(usernew));

// const counter = function (number, count) {
//     return number + count;
// }

// const counter2 = counter.bind(null, 5);
// console.log(counter2(12));

// const countByFive = function (number) {
//     return function (count) {
//         return count + number;
//     }
// }
// console.log(countByFive(5)(4));

// const countByFive2 = (number) => (count) => count + number;
// console.log(countByFive2(5)(5));


// //CLOSURE

// function countReq() {
//     let count = 0;
//     return function inner() {
//         count++;
//         return count;
//     }
// }

// const loginReq = countReq();
// console.log(loginReq());
// console.log(loginReq());
// console.log(loginReq());


// const singUpReq = countReq();
// console.log(singUpReq());
// console.log(singUpReq());
// console.log(singUpReq());
// console.log(singUpReq());


// //String

// const myName = "saghi mosavi"
// console.log(myName.length);
// console.log(myName.indexOf("a"));
// console.log(myName.lastIndexOf("i"));

// //slice no mutation یعنی استرینگ اصلی رو تغییر نمیده به جدید میسازه 

// console.log(myName.slice(5));
// console.log(myName.slice(1, 6));
// console.log(myName.slice(-2));
// console.log(myName.slice(1, -1)); // از اولین کرارکتر شروع میکنه تا انتها

// //include
// console.log(myName.includes("gh"));

// //startwith

// console.log(myName.startsWith("s"));

// const str1 = " salam halet khobe ";
// console.log(str1.split(" ").join("-"));

// console.log(str1.trim().toUpperCase());



// function FindIndexStr(str, searchTxt) {
//     const index = str.trim().toLowerCase().indexOf(searchTxt.toLowerCase().trim());
//     if (index > -1) {
//         return `the ${searchTxt} is in the index ${index}`;
//     }
//     return "not exist"
// }

// const stringTest = "this is one text for Test..."
// console.log(FindIndexStr(stringTest, "test"));


// function capitilizeFirstLeter(str) {
//     str = str.toLowerCase();
//     const newStr = str[0].toUpperCase() + str.toLowerCase().slice(1);
//     const newStr2 = str.replace(str[0], str[0].toUpperCase());
//     return newStr2;

// }

// console.log(capitilizeFirstLeter("sAGHi"));

// function capitilizeStatement(msg, cb) {
//     const newString = msg.split(" ");
//     const newArrStr = [];
//     for (const item of newString) newArrStr.push(cb(item));
//     return newArrStr.join(" ");
// }
// const jomle = "i am zahra sadeghi and my neck name is saghi";
// console.log(capitilizeStatement(jomle, capitilizeFirstLeter));


// function clock(time) {
//     // const newTime = time.split(":");
//     // const timeNew = []
//     // for (const i of newTime) timeNew.push(i.padStart(2, 0));
//     // return timeNew.join(":");

//     let [hr, m, s] = time.split(":");
//     hr = hr.padStart(2, 0);
//     m = m.padStart(2, 0);
//     s = s.padStart(2, 0);
//     const timeNew = [hr, m, s].join(":");
//     return timeNew
// }

// console.log(clock("2:5:5"));


// function cardMask(cardData) {
//     const card = String(cardData).replace(/\s/g, '');
//     const last = card.slice(-4);
//     return last.padStart(card.length, "*");

// }

// console.log(cardMask("5245 6585 7859 1234"));

// const mapUsers = [
//     {
//         id: 1,
//         IsActive: true,
//         name: "saghi",
//         rolle: "ADMIN"
//     },
//     {
//         id: 2,
//         IsActive: false,
//         name: "sara",
//         rolle: "guest"
//     },
//     {
//         id: 3,
//         IsActive: true,
//         name: "jimi",
//         rolle: "system"
//     },

// ]
// const userId = mapUsers.map((user) => user.id);
// const userId2 = mapUsers.map((user) => {
//     return { id: user.id }
// })
// const userId3 = mapUsers.map(({ id, name }) => { //اینجا مقادیر مورد نیازمون از ابجکت یوزر رو دی استرکچر کردیم
//     return { id }
// })
// console.log(userId2);

// const newUsers = mapUsers.map((user) => {
//     return {
//         ...user,
//         msg: `Hi ${user.name} your profile is ${user.IsActive ? "activated" : "not activated"} and your roll is ${user.rolle}`
//     }
// });
// console.log(newUsers);
// const id = 3;
// const filterUser = mapUsers.filter((user) => user.id != id);
// console.log(filterUser);

// const product = [
//     {
//         id: 1,
//         title: "p1",
//         price: "88.99$",
//         qty: 4,
//     },
//     {
//         id: 2,
//         title: "p2",
//         price: "11.98$",
//         qty: 1,
//     },
//     {
//         id: 3,
//         title: "p3",
//         price: "80$",
//         qty: 5,
//     },
//     {
//         id: 4,
//         title: "p4",
//         price: "60$",
//         qty: 2,
//     }
// ]

// function sumAmt(product) {

//     const sumTotal = product.reduce((acc, curr) => {
//         const price = Number(curr.price.split("$")[0]) * curr.qty;
//         return acc + price;
//     }, 0)
//     return sumTotal;
// }
// console.log(sumAmt(product));


// const userMask = [9, 12, 19, 20, 16, 8, 3, 2, 4];

// const avgTotal = userMask.reduce((acc, curr, index, arr) => acc + curr / arr.length, 0);
// console.log(avgTotal.toFixed(2));

// const avgPass = userMask.filter((m) => m >= 10).reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
// console.log(avgPass.toFixed(2));

// const shiftNumber = userMask.map((m) => m + 3).reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
// console.log(shiftNumber.toFixed(2));


// const arrrr = userMask.map((m) => m + 3).filter((m) => m >= 10);
// console.log(arrrr);
// const shiftNumberPass = userMask.map((m) => m + 3).filter((m) => m >= 10).reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
// console.log(shiftNumberPass.toFixed(2));


// const findProduct = product.find((p) => p.title == "p2");
// console.log(findProduct);

// const findeIndexproduct = product.findIndex((p) => p.title == "p3");
// console.log(findeIndexproduct);

// function FilterProduct(product, id) {
//     const newProduct = product.filter((p) => p.id != id);
//     return newProduct;
// }
// console.log(FilterProduct(product, 3));


// function FilterProduct2(product, id) {
//     const newProduct = [...product];
//     const Index = product.findIndex((p) => p.id == id);
//     newProduct.splice(Index, 1);
//     return newProduct;
// }
// console.log(FilterProduct2(product, 4));



function CalcDisc(d, ...args) {
    let total = 0;
    for (const item of args) total += item;
    console.log( total* (1-d));
}
const nums = [1, 2, 3, 4, 5, 6];
CalcDisc(0.3, 25,25,50);
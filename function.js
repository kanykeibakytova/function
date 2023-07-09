// function declaration
// function expression
// arrow function

// const myFn = (age) =>{
//     if(age>5){
//         return true
//     }
// }
// console.log(myFn(10))


// function doll(day){
//     if(day===1){
//         return "Monday"
//     }else if (day===2){
//         return "Tuesday"
//     }else if(day===3) {
//         return "Wednesday"
//     }
//     return day
// }
//
// console.log(doll(4))

// function task(name){
//     if(name.length === 5){
//         return name.toUpperCase()
//     }
//     return name
// }
//
// console.log(task('Askar'))


// function myFn (name){
//     if (name.includes('r')){
//         return 'бар'
//     }
//      return 'жок'
// }
//
// console.log(myFn('Sultan'))
// console.log(myFn('Askar'))



// function myFn (a,b) {
//     if(a>b){
//         return a+5
//     }
//     return "кичине"
// }
//
// console.log(myFn(10, 5))


// function myFunc (age){
//     if (age>1 && age <6){
//         return "садик"
//     }else if (age>6 && age<18){
//         return "школа"
//     }else if(age>18 && age<24){
//         return "студент"
//     }else if (age>23 && age<50){
//         return "рабочий"
//     }else {
//         return "пенсия"
//     }
// }
//
// console.log(myFunc('20'))

// FUNCTION DECLARATION

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a = 10
// if (a = 10)
// function myFn(a){
//     if(a===10){
//         return 'Верно'
//     }
//     return 'Неверно'
// }
//
// console.log(myFn(10))


// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// function myFn(a,b){
//     if(a>b){
//         return 'a больше b'
//     }
//     return 'a меньше b'
// }
//
// console.log(myFn(50,100))

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// function myFunc(a){
//     if(a>0){
//         return "positive"
//     }else if(a===0){
//         return "равно"
//     }else if(a<0){
//         return "negative"
//     }else{
//         return "ошибка"
//     }
// }
//
// console.log(myFunc(-2))


// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
// function myFunc(number){
//     if(number%2===0){
//         return "Четное число"
//     }
//     return "Нечетное число"
// }
//
// console.log(myFunc(45))


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".
// function myFn(a,b){
//     if (a%b===0){
//         return "Четное число"
//     }
//     return "Нечетное число"
// }
//
// console.log(myFn(10,2))

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// function myFn(s){
//     if( typeof s=== 'number'){
//         return "number"
//     }else if( typeof  s==="string"){
//         return "string"
//     }else if(typeof s=== 'boolean'){
//         return "boolean"
//     }
//     return "ошибка"
// }
//
// console.log(myFn(1234))

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// function myFn(a){
//     if(a>1 && a<9){
//         return "Верно"
//     }
//     return "Неверно"
// }
//
// console.log(myFn(5))

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// function myFn(a){
//     if(a===3 || a===7){
//         return a+7
//     }
//     return a/10
// }
//
// console.log(myFn(3))

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// function myFn(a,b){
//     if(a<=0 && b>=5){
//         return a+b
//     }
//     return a-b
// }
//
// console.log(myFn(0,6))

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Верно'.
// function myFunc(a,b){
//     if(a>4 && a<10 || b>=7 && b<17){
//         return "Верно"
//     }
//     return "Верно"
// }
//
// console.log(myFunc(7,10))



//  ARROW FUNCTION

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a = 10
// if (a = 10)
// const myFn = (a) =>{
//     if(a===10){
//         return 'Верно'
//     }
//     return 'Неверно'
// }
// console.log(myFn(10))

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// const myFunc = (a,b) => {
//     if(a>b){
//         return "a больше b"
//     }
//     return "a меньше b"
// }
// console.log(myFunc(50,100))

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// const myFn = (a) => {
//     if(a>0){
//         return 'positive'
//     }else if(a===0){
//         return 'равно'
//     }else if(a<0){
//         return 'negative'
//     }
//     return 'null'
// }
// console.log(myFn(-2))

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
// const func = (number) => {
//     if(number/2===0){
//         return 'Четное число'
//     }
//     return 'Нечетное число'
// }
// console.log(func(45))

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".
// const func = (a,b) =>{
//     if(a%b===0){
//         return 'Четное число'
//     }
//     return 'Нечетное число'
// }
// console.log(func(10,2))

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// const myFunc = (s) => {
//     if(typeof s==='boolean'){
//         return "boolean"
//     }else if(typeof s==='number'){
//         return "number"
//     }else if(typeof s==='string'){
//         return "string"
//     }
//     return "null"
// }
// console.log(myFunc(3456))

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// const func = (a) =>{
//     if(a>1 && a<9){
//         return 'Верно'
//     }
//     return 'Неверно'
// }
// console.log(func(7))

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// const func = (a) =>{
//     if(a===3 || a===7){
//         return a+7
//     }
//     return a/10
// }
// console.log(func(7))

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// const myFn = (a,b) =>{
//     if(a<=0 && b>=5){
//         return a+b
//     }
//     return a-b
// }
// console.log(myFn(-1,6))

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// const myFunc = (a,b) =>{
//     if(a>4 && a<10 || b>=7 && b<17){
//         return 'Верно'
//     }
//     return 'Неверно'
// }
// console.log(myFunc(6,7))
//1 переменные 
//const firstName = 'Michael'
//const lastName = 'Barkarov' //string
//const age = 29; //number
//const isProgrammer = true // boolean
//const $ = 'private'
//const if = 'mst' //err
//const withNumb5 = '5'
//const 5withNumb = 5 //err


//2 Мутирование
//console.log ('Имя человека: ' + firstName +', а возвраст человека: ' + age) 
//alert ('Имя человека: ' + firstName +', а возвраст человека: ' + age) 

//const lastName = prompt('Enter Last Name')
//alert (firstName + ' ' + lastName)

//3 Операторы
//let currentYear = 2020
//const birthdDay = 1991

//const age = currentYear - birthdDay

//const a = 10
//const b = 5
//let c = 30
//c = c + a
//c = c - a
//c = c * a
//c = c / a
//c += a
//c -= a
//c *= a
//c /= a
//console.log ( a + b )
//console.log ( a - b )
//console.log ( a * b )
//console.log ( a / b )
//console.log (++currentYear)
//console.log (--currentYear)
//console.log (c)

//4 Типы данных
//const isProgrammer = true
//const name = 'Michael'
//const age = 29
//let x

//console.log (typeof isProgrammer)
//console.log (typeof name)
//console.log (typeof age)
//console.log (typeof x)
//console.log (null)


//5 Приоритет операторов
// const fullAge = 29
// const birthYear = 1991
// const currentYear = 2021

// const isFullAge = currentYear - birthYear >= fullAge 

// console.log(isFullAge)

//6 Условные операторы
// const coursStatus = 'fail' //ready, fail, pending - состояние статуса
// if (coursStatus === 'ready') { 
// console.log ('курс уже готов')
// } else if (coursStatus === 'pending') {
//     console.log ('курс находится в разработке')
// } else {
//     console.log('курс не получился')
// }

// const isReady = true 
// // if (isReady){
// //     console.log('Все готово')
// // } else {
// //     console.log('Все не готово')
// // }

// isReady ? console.log('Все готово'): console.log('Все не готово') //Аналаг верхнего уравнения - (тернарные выражения)

//7 Булевая логика
// true & false // false будет всегда в проритете если оно присутствует
// true || false // true будет всегда в приоретете если оно присутсвует

//8 Функции 
// function calculateAge (year) {
//     return 2021 - year 
// }
// // console.log(calculateAge(1991))
// // console.log(calculateAge(2000))
// // console.log(calculateAge(1995))

// function logInfoAbout (name, year) {
//     const age = calculateAge(year)

// if (age > 0) {
//     console.log('человек по имени ' +  name  + 'сейчас имеете возвраст ' + age)
// } else {
//     console.log('Вообще-то это уже будущее')
// }
// }
// logInfoAbout('Michael ','1991')

//9 Массивы
// const cars = ['Porshe','Mazda','Mersedes']
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[2])
// console.log(cars[1])

// cars[0] = 'Porshe'
// cars[cars.lenght] = 'Reno'
// console.log(cars)


//10 Циклы
// const cars = ['Porse','Mazda','Mersedes'] 
// // for (let i=0; i < cars.length; i++) {
// // const car = cars[i]
// // console.log(car)
// // }

// for (let car of cars) {
//     console.log(car)
// }

//11 Объекты
// const person = {
//     firstName: 'Michael',
//     lastName: 'Barkarov',
//     year: 1991,
//     languages: ['En','Ru','De'],
//     hasWife: false,
//     greet: function (){
//         console.log('greet from persone')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.isProgramer = true
// console.log(person)
// person.greet()
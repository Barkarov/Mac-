const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
// const people = [
//     {name: 'Michael', budget: 4200},
//     {name: 'John', budget: 3500},
//     {name: 'Bam', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Reno')
// cars.unshift('Volga')
// console.log(cars)

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)
// const index = cars.indexOf('BMW') 
// cars[index] = 'Porshe'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person 
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// const person = people.find(function(person) {
//     return person.budget === 3500
// }) 
// console.log(person)

// const person = people.find((person) => person.budget === 3500)
// console.log(person)

//console.log(cars.includes('Mazda'))

// const upperCaseCars = cars.map(car => {
//     return car.toLocaleUpperCase()
// })

// const pow2 = num => num ** 2
// // const sqrt = num => Math.sqrt(num)

// // const pow2Fib = fib.map(pow2).map(Math.sqrt)
// // console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteretNumbers = pow2Fib.filter(num => num >20 )
// console.log(pow2Fib)
// console.log(filteretNumbers)

// // задача 1
//  const text = 'Привет, мы изучаем JavaScript'
// const reversText = text.split('').reverse().join('')
// console.log(reversText)

const people = [
    {name: 'Michael', budget: 4200},
    {name: 'John', budget: 3500},
    {name: 'Bam', budget: 1700}
]

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
   acc += person.budget
    return acc
}, 0)
console.log(allBudget)
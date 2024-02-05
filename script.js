Function.prototype.myCall = function (context, ...args) {
    const fnToInvoke = this
    context.temp = fnToInvoke
    const result = context.temp(...args)

    delete context.temp

    return result
}

const piyush = {
    name: 'Piyush Garg',
    say: function () {
        console.log('Saying', this.name)
        return `Your name is ${this.name}`
    }
}

const bhaskar = {
    name: 'Bhaskar',
}

const teja = {
    name: 'Teja',
    temp: 'XYZ'
}

const value = piyush.say.myCall(teja)
console.log(value)



const nandani = {
    name: 'Nandani',
    age: 23,
    address: {
        country: 'IN',
        city: 'BANG'
    }
}

// Shallow Copy | Deep Copy
const person = {}

Object.assign(person, nandani) // Shallow Copy

person.name = 'Hacker'
person.address.country = 'US'


function flatArr(arr) {
    const isArray = Array.isArray(arr)

    if (!isArray)
        throw new Error('Bruh you okay? This is not an array')


    const result = []

    for (const el of arr) {
        if (Array.isArray(el)) {
            result.push(...flatArr(el))
        } else {
            result.push(el)
        }
    }

    return result

}

// const arr = [
//     1, 2, 3,
//     [4, 5, 6, ['X', 'Y', ['P', 'Q', [1], 'R'], 'Z']],
//     [7, 8, 9],
//     10, 11,
//     'A', 'B', ['C', 'D', true], [false], 'E'
// ]


// console.log(arr)



// Deep Copy Shallow Copy | Pass by value and pass by ref | - Skip

// Topic: High Order Functions

// HoF? - Because it takes fn as an argument

// function smartFn(fn) {
//     console.log('I am starting to execute...')
//     fn()
// }

// // HoF? - Because it returns a function
// function smartFnV2(firstName) {
//     return function () {
//         console.log('You know that your name is', firstName)
//     }
// }

// smartFn(() => console.log('Hey there'))

// const something = smartFnV2('Piyush')

// something()
// something()
// something()

const arr = ['🤯', '🚀', '👀']


// Task - Print each element in the arr
function myPrint(txt) {
    console.log(txt)
}

arr.forEach(myPrint) // Looping over elements

// map = Returns a new arr with modified values
const newArr = arr.map((value) => `🔥` + value)

console.log(newArr)


const numbers = [1, 2, 3, 4, 5, 6]

const evenNumbers = numbers.filter((value) => value % 2 !== 0)

console.log(evenNumbers)

const sum = numbers.reduce((acc, curr) => acc + curr, 0)

console.log('Sum', sum)

// High Order Functions
// Homework 3:  .find | .findIndex | .sort | .some

// HoF
// Push logs to the server?
// Format: [timestamp][1.1.1.1] All Okay logging server => api.log.com?

// function createLogger({ appName, url, includeTimestamp = false }) {
//     return function (log) {
//         console.log(`Pushing log ${log} to ${url} `)
//     }
// }

// const logger = createLogger('api.log.com')


function fn() {
    console.log("Hi I am an fn");
    fn.count++;
}

fn.count = 0;

fn.getCount = function () {
    return this.count
}

fn()
fn()
fn()
fn()
fn()
fn()

console.log(fn.getCount())

// for (const key in fn) {
//     console.log(key)
// }



function decideWhatToDo(param) {
    if (typeof param === 'function')
        return param()
    console.log(param)

}

decideWhatToDo({ name: 'Piyush' })
decideWhatToDo('Piyush Garg')
decideWhatToDo(() => console.log('Piyush'))
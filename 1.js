function print(obj) {
    for (let key in obj){
        console.log(obj[key])
    }
}

const x = {
    name: 'Ivan',
    surname : 'Ivanov',
    age: 25,
}
const y = {
    name: 'Ivan',
    surname : 'Ivanov',
    position: 'developer',
}
print(x)
print(y)
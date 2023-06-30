"use strict"

// object
let jsbook = {
    // key : "value"
    // ↓key  ↓value
    title: 'JavaScript入門',
    price: 2500,
    stone: 3,
    obj: {
        text: "test",
        func: () => {
            console.log("this is callback function")
        }
    }
    // "title-1": "JavaScript"
}

console.log(jsbook)

let bookTitle = jsbook.title;
console.log(bookTitle)
console.log(jsbook.price)

console.log(jsbook.obj)
console.log(jsbook.func)

//オブジェクトの値を変える場合は
jsbook.price = 3000
console.log( 'オブジェクトの値を変える場合は？' ,jsbook.price)

console.log
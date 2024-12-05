// Functions

function serveBeveerage(drink , quantity){
    console.log('I want '+quantity +' '+drink)
}

// Function invokation

serveBeveerage("juice",1)

// another way to create function
// function as Expression ( functions as first class citizens(variables))

var sayHi = function(name){
    console.log('hi '+name)
}

sayHi("karthik")
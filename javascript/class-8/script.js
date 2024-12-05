let person1 = {
    name : "karthik",
    age : 22,
    phone : 13423434,
    
}


console.log(person1.name)

console.log(person1.name,person1.age)

console.log(person1['age'])

// arrays

let arr = [1,2,3,4,5,5]

console.log(arr)

let arr1 = ["karthik",22,"2343445",true]

console.log(arr1)


//objects
// captain america

const CaptainAmerica = {
    name : 'steve rogers',
    age : 102,
    friends : ['tony','brue','hulk'],
    address:{
        state : 'xyz',
        country : 'usa',
        city:{
            name : 'broklyn',
            pincode : 124445
        }
    }
}
delete CaptainAmerica.age
console.log(CaptainAmerica.address.city.name)
console.log(CaptainAmerica.friends[2])

CaptainAmerica.movies = ['civil war','winter soldier','end game']

console.log(CaptainAmerica.movies)
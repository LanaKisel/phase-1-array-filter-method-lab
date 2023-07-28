// Code your solution here
const drivers = [
    {name: "lana", homeTown: "Lu"},
    {name: 'Mat', homeTown: "NY"},
    {name: "Tim", homeTown: "Sydney"},
    {name: "Poppy", homeTown: "Tokyo"}]

function findMatching(collection, name) {
    return collection.filter((aDriverName, index, originalArray) => {
        if (aDriverName.toLowerCase() === name.toLowerCase()) { return true } else {
            return false
        };
    })
}

console.log("final output:", findMatching(drivers, "poppy"))


function fuzzyMatch(collection, letters) {
    const lengthOfTheString = letters.length;
    return collection.filter((driverName, index, originalArray) => {
        if (driverName.substring(0, lengthOfTheString) === letters.substring(0, lengthOfTheString)) { return true } else {
            return false
        };
    })
}
             
function matchName(collection, name)
 {
    return collection.filter((driver) => {
        if (driver.name === name) {
            return true
        } // else {
        //     return false
        // }
    })

 }    
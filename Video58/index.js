function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your shrt is nice!")
    console.log("Hey " + name + " your course is good too!")
}



function Sum(a, b, c = 3) {  //default value of c = 3
    // console.log(a + b)
    return a + b + c
}

result1 = Sum(3, 5)
result2 = Sum(7, 5)
result3 = Sum(3, 13, 1)

console.log("The sum of these numbers is:", result1)
console.log("The sum of these numbers is:", result2)
console.log("The sum of these numbers is:", result3)
// Sum(3,5)
// nice("Shivani")

// nice("Deepak")

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);

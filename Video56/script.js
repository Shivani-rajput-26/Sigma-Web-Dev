console.log("Hello I am conditional tutorial")

let age = 1;
// let grace = 2;

// age += grace   // -=, *=, /=, %=, **= similar
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

// if ((age + grace) > 18) {
//     console.log("You can Drive");
// }

if (age == 18) {
    console.log("You can Drive");
}

else if(age == 0){
    console.log("Are you kidding..!!")
}
else if(age == 1){
    console.log("Are you again kidding..??")
}
else {
    console.log("You can't Drive");
}



//  == equal to, != not equal; === = equal value and type; !== = not equal value or not equal type; > = greater operator; < = less than; >= = greater than or equal to; <= = less than or equal to; ? = ternary operator

a = 6;
b = 8;
let c = a>b ?(a-b):(b-a);

/*

translaate to:
if(a>b){
let c = a-b;
}
else{
    ;et c=  a-b:
}

*/
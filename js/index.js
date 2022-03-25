// // Function

// function sayHello(){
//     console.log("Hello")
// }
// sayHello();

// // Parsing parameters
// function addNum(a,b){
//     console.log(a+b);
// }
// addNum(25,50);

// // Return Keyword
// function myName(a,b){
//     console.log("Carlos");
//     console.log("Alphonce");

// return a+b;
//     console.log("Misachi");
// }
// console.log(myName(10,11));

// // CALL Backs
// function studentNames(){
//     var students ="keli, david, brian, jack";
//   sayHelloToStudents(students)
// }
// studentNames();

// function sayHelloToStudents(students){
//     console.log("Hello" + " " + students)
// }

// function total(){
//     var sum = a+b;
//     addNumb();
// }
// total();

// function addNumb(sum){
//     console.log(sum)
// }

// creating Objects
var person = {
    name: "Carlos",
    age: 25,
    language:["English", "Kiswahili" ,"French"],
    country: "Kenya",
    description: function desc(){
        console.log("My name is" + person.name)
    }
};
console.log(person.language[0],person.language[1], person.language[2]);
console.log(person.name);
console.log(person.age)
console.log(person.country)

// Type of triangle
document.getElementById("type").onclick = function(){
    alert("Checking measurements...")
    var sideOne = document.getElementById("sideOne").value;
    var sideTwo = document.getElementById("sideTwo").value;
    var sideThree = document.getElementById("sideThree").value;

    var sideOne = parseInt(sideOne);
    var sideTwo = parseInt(sideTwo);
    var sideThree = parseInt(sideThree);

    if(sideOne == sideTwo && sideOne != sideThree){
        document.getElementById("Triangle").innerText ="Isosceles Triangle";
    } else if(sideOne == sideTwo && sideOne == sideThree){
        document.getElementById("Triangle").innerText ="Equilateral Triangle";
    }else if(sideThree == sideTwo && sideThree != sideOne){
        document.getElementById("Triangle").innerText ="Isosceles Triangle";

    }else if(sideOne != sideTwo && sideOne == sideThree){
        document.getElementById("Triangle").innerText ="Isosceles Triangle";

    }
    else{
        document.getElementById("Triangle").innerText ="Scalene Triangle";
    }
}

// on load
document.getElementById("body").onload = function(){
    document.getElementById("Triangle").innerText ="blue";
}
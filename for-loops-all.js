
//for, forEach, for in, for of examples...

// input 

let object = [
    { person: "Thariq", age: "24", company: "Mindtree" },
    { person: "Lavish", age: "28", company: "Guvi" },
    { person: "Ramesh", age: "36", company: "Tcs" }
]

let student = ["student1", "student2", "student3"];

// Normal for loop....

let result = "";
for (let i = 0; i < object.length; i++) {
    console.log(`Candidate ${i+1}: ${object[i].person} is working in ${object[i].company} and his age is ${object[i].age}, `);
}

// Output for normal loop

// Candidate 1: Thariq is working in Mindtree and his age is 24, 
// Candidate 2: Lavish is working in Guvi and his age is 28, 
// Candidate 3: Ramesh is working in Tcs and his age is 36

//------------------------------------------------------------------------------------------------

//forEach loop...

let eachArray1 = object.forEach((element, indx) => {
    console.log(`${indx} -`, element)
})

// Output for above forEach program

// 0 - { person: 'Thariq', age: '24', company: 'Mindtree' }
// 1 - { person: 'Lavish', age: '28', company: 'Guvi' }
// 2 - { person: 'Ramesh', age: '36', company: 'Tcs' }

let company = "";
let eachArray2 = object.forEach((element, indx) => {
    company += ` ${element.company} `;
})
console.log('our student working in these companies - ' + company);

// Output for above forEach program

// our student working in these companies -  Mindtree  Guvi  Tcs

//------------------------------------------------------------------------------------------------

//for in Loop --take index(x) based...

let result2 = "";
for (let x in object) {
    console.log(`${x}: ${object[x].person}, ${object[x].age}, ${object[x].company}`)
}

// Output for above for in program

// 0: Thariq, 24, Mindtree
// 1: Lavish, 28, Guvi
// 2: Ramesh, 36, Tcs

//------------------------------------------------------------------------------------------------

//for of Loop --- directly take value...

for (let val of object) {
    console.log(`${val.age} - ${val.company} - ${val.person}`)
}

// Output for above for in program

// 24 - Mindtree - Thariq
// 28 - Guvi - Lavish
// 36 - Tcs - Ramesh

var result3 = "";
for (let value of student) {
    result3 += ` ${value}`;
}
console.log(result3);

// Output for above for in program

// student1 student2 student3
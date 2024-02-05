let college = [
    { name: "Tom", age: 23, group: "ис22" },
    { name: "bob", age: 15, group: "ис21" },
    { name: "stan", age: 23, group: "ис22" },
    { name: "harry", age: 17, group: "ис41" },
];
let count = 2
let studentAge = college[count]["age"];
let studentName = college[count]["name"];

if (college[studentAge]['age >=18']) {
    console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge} лет`);
} else if (studentAge < 18) {
    consol.log(`Студент ${studentName} не совершеннолетний. Ему ${studentAge} лет`);
}
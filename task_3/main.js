let college = [
    {
        name: "Harry",
        age: 18,
        group: "ИС-2-1",
        studID: 321232,
        typeLearning: "Очная",
        task: ["Физ-ра", "МДК-02-02", "МДК-02-02", "МДК-04-01"],
        cash: 0,
        isStudent: true   // указываем, что атрибуты сверху принадлежат студенту
    },
    {
        name: "Ron",
        age: 19,
        group: "ИС-2-2",
        studID: 321233,
        typeLearning: "Заочная",
        task: ["ИЗО", "МДК-03-02", "ПРАВО", "МДК-04-01"],
        cash: 0,
        isStudent: true
    },
    {
        name: "Tom",
        age: 32,
        isKurator: true,
        kuratorGroup: "ИС-2-2",
        kafedra: "ПОВТ",
        typeLearning: "Очная",
        lesson: ["МДК-02-02", "МДК-02-02", "МДК-04-01", "МДК-03-03"],
        isStudent: false
    },
    {
        name: "Bob",
        age: 32,
        isKurator: true,
        kuratorGroup: "ИС-2-1",
        kafedra: "ПОВТ",
        typeLearning: "Очная",
        lesson: ["МДК-02-02", "МДК-02-02", "МДК-04-01", "МДК-03-03"],
        isStudent: false
    }
];

let count = 1
let personAge = college[count]["age"]
let personName = college[count]["name"]
let personcash = college[count]["cash"]
let student = college[count]["isStudent"]
let kurator = college[count]["isKurator"]
let kuratorGroup = college[count]["iskuratorGroup"]

if (college[0]["isStudent"] === true) {
    console.log(`Вы выбрали студента ${college[count]["name"]}`);
    if (college[count]["age"] >= 18) {
        console.log(`Студент ${college[count]["name"]} совершеннолетний, ему ${college[count]["age"]}`);
    }
    if (studen === true) {
        console.log(`студент ${personName}`);
    }
    if (personAge >= 18) {
        console.log(`студент ${personName} совершеннолетний, ему ${personName}`);
    } else {
        console.log(`Студент ${college[count]["name"]} не совершеннолетний, ему ${college[count]["age"]}`);
        console.log(`Студент ${personName} не совершеннолетний, ему ${personAge}`);
    }

    if (college[0]["cash"] >= 4500) {
        console.log(`Студент ${college[count]["name"]} получает повышенную стипендию, ${college[0]["cash"]} руб.`);
    } else if (college[0]["cash"] <= 4400 && college[0]["cash"] > 0) {
        console.log(`Студент ${college[count]["name"]} получает обычную стипендию, ${college[0]["cash"]} руб.`);
    } else {
        console.log(`Студент ${college[count]["name"]} не получает стипендию.`);
    }
    if (personcash >= 4500) {
        console.log(`студент ${personName} получает повышенную стипендию, (${personAge}) руб.`);
    } else if (personcash <= 4400 && personcash >= 1) {
        console.log(`студент ${personName} получает обычную стипендию, (${personAge}) руб.`);
    } else if (personcash == 0) {
        console.log(`студент ${personName} не получает стипендию`);
    }

}
else if (college[0]["isStudent"] === false) {
    console.log(`Вы выбрали преподавателя ${college[0]["name"]}`);
    if (college[0]["isKurator"] === true) {
        console.log(`Преподаватель ${college[0]["name"]} куратор группы ${college[0][iskuratorGroup]}`);
    } else if (student === false) {
        console.log(`студент ${personName}`)
    } if (kurator === true) {
        console.log(`преподаватель ${personName} куратор группы ${kuratorGroup}`)
    }
    console.log("преподаватель")
}
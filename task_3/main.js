let college = [
    {
        name: "harry",
        age: 18,
        group: "ис-2-1",
        studID: 321232,
        typeLearning: "очная",
        task: ["физра", "мдк", "мдк02"],
        cash: 5500,
        isStudent: true
    },

    {
        name: "ron",
        age: 19,
        group: "ис-2-2",
        studID: 321132,
        typeLearning: "заочная",
        task: ["физика", "мдк01", "мдк03"],
        cash: 0,
        isStudent: true
    },

    {
        name: "tom",
        age: 32,
        iskurator: true,
        kuratorGroup: "ис-2-2",
        kafedra: "Инф.тех",
        predmet: ["мдк", "мдк1", "мдк2"],
        isStudent: false,
    },
    {
        name: "bob",
        age: 33,
        iskurator: true,
        kuratorGroup: "ис-2-1",
        kafedra: "Инф.тех",
        predmet: ["мдк", "мдк1", "мдк2"],
        isStudent: false,
    }

];

if (college[0]["isStudent"] === true) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`);
    if (college[0]["age"] >= 18) {
        console.log(`Студент ${college[0]["name"]} совершеннолетний. Ему ${college[0]["age"]}`);
    } else {
        console.log(`Студент ${college[0]["name"]} не совершеннолетний. Ему ${college[0]["age"]}`);
    }
    if (college[0]["cash"] >= 4500) {
        console.log(`Студент ${college[0]["name"]} получает повышенную стипендию. (${college[0]["cash"]} руб.));
    } else if ( college[0]["cash"] <= 4400 || college[0]["cash"] >= 1) {
        console.log(`Студент ${ college[0]["name"] } получает обычную стипендию. (${ college[0]["cash"] } руб.));
    } else if (college[0]["cash"] == 0) {
        console.log(`Студент ${college[0]["name"]} не получает стипендию.`);
    }
} else if (college[0]["isStudent"] === false) {
    console.log("Преподаватель")
}
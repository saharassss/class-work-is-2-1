let temp = (e) => {
    if ( e === undefined) {
        console.log("укажите темперпатуру");
    } else {

    }
    if ( e >= 25) {
        console.log(`сегодня ${e} градусовю можно надеть футболку`);
    }
}

let key = prompt("ввидите темпу");

temp(key);
const readline = require('readline')
var user = {
    height : 0,
    weight : 0
}
exports = input = () =>{
    let rl = readline.createInterface({
        input : process.stddin,
        output : process.stdout
    })
    rl.question("How hight are you? (cm3)", (hight) => {
        user.height = hight
        rl.close;
    })
    rl.question("How weight are you? (kg)", (weight) => {
        user.weight = weight
        rl.close;
    })
}


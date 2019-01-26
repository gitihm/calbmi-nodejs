var readline = require('readline-sync');
var user = {
    height : 0,
    weight : 0
}
exports = input = () =>{
    user.height = readline.question("What hight are you?");
    user.weight = readline.question("What weight are you?");
}

//input()


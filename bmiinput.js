var readline = require('readline-sync');
var data = {
    result : 0
}
exports = input = () =>{
    height = readline.question("What hight are you? : ")
    weight = readline.question("What weight are you? : ")
    console.log(height + " " + weight)
     data.result = parseFloat(weight)/Math.pow((parseFloat(height)/100),2) 
    return JSON.stringify(data)
}

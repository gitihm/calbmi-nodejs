require('./input.js')
require('./bmi.js')
let i=0
let stdin = process.openStdin()
var height,weight
console.log("What hight are you? (cm)")
    stdin.addListener("data",(v)=>{
        if(i===0){
            height = v
            console.log("What weight are you? (kg)")
        }else{
            weight = v
            stdin.destroy()
        }
        i++
    })
    
    var result = calBMI(height,weight)
    console.log(printBMI(result))
var bmi = require('./bmi.js')
module.exports =  calBMI = (h,w) =>{
    bmi.printBMI((w /Math.pow( (h) /100,2)).toFixed(1))   
}


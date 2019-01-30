var printBMI = (data) =>{
    if(data < 18.5) console.log("Your BMI : Underweight")
    else if (18.5< data < 24.9) console.log("Your BMI : Normal weight")
    else if(24.9< data < 29.9) console.log("Your BMI : Overweight")
    else console.log("Your BMI : Obesity")
}
module.exports = {
    printBMI
}

    



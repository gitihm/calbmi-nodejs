
console.log("-----BMI calculator-----")
exports = printBMI = (data) =>{
    if(data < 18.5) return"Underweight"
    else if (18.5< data < 24.9)return"Normal weight"
    else if(24.9< data < 29.9)return"Overweight"
    else return"Obesity"
}

    



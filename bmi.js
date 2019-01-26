require('./bmiinput.js')
console.log("-----BMI calculator-----")
var data = input()
if(data.result < 18.5)console.log("Underweight")
else if (18.5< data.result < 24.9)console.log("Normal weight")
else if(24.9< data.result < 29.9)console.log("Overweight")
else console.log("Obesity")
    



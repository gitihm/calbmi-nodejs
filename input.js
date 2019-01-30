var height,weight
let i=0
let stdin = process.openStdin()
exports = inputBMI = () =>{
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
    
    
    return +weight /Math.pow( (+height) /100,2)
}

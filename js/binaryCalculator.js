let x= document.getElementById("btnClr")
let buttons= document.getElementById("btns")
let operator

buttons.addEventListener("click",function(ev){
    let action=document.getElementById(ev.target.id).innerHTML
    if(ev.target.tagName=="BUTTON"){
        switch(ev.target.id){
            case "btn0":
            case "btn1":
                document.getElementById("res").innerHTML+=action
                break
            case "btnSum":
            case "btnSub":
            case "btnMul":
            case "btnDiv":
            document.getElementById("res").innerHTML+=action
            operator=action
            break    
           case "btnClr":
            document.getElementById("res").innerHTML=" "
                break
            case "btnEql":
            document.getElementById("res").innerHTML=
               Calculator(document.getElementById("res").innerHTML,operator)
            break

        }
    }
    
})


function Calculator(text,operator){
    let numbers = text.split(operator)
    let number1= parseInt(numbers[0],2)
    let number2 = parseInt(numbers[1],2)
    let result=0
    const operatorMap={
        "+":number1+number2,
        "-":number1-number2,
        "*":number1*number2,
        "/":number1/number2
    }

    result=operatorMap[operator];

    return result.toString(2)

}


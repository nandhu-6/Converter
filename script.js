
function calculate(symbol){
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    let result;
    
    
    
        if (symbol==="+"){
            result = num1 + num2;}
        else if(symbol==="-"){
            result= num1 - num2;}
        else if (symbol === "*"){
            result = num1 * num2;}
        else {
           result = num1 / num2;}
    
    document.getElementById("result").value = result;
    }
    
    
    
    
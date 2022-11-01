
//Displaying Number in text box
function displayNum(num) {
    console.log(num);
    result.value +=num;// + stands for Next digit
}
//clear text box
function clearBox(){
    result.value="";
}
// evaluating expressions
function evaluateExpressions(){
    // exp=result.value;
    // output=eval(exp);
    // result.value=output;
    result.value=eval(result.value)
}
//remove last element
function removeList(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1);
}
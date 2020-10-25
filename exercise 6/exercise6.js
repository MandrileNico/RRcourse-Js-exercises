//6-a
function suma(num1, num2){
    return num1+num2;
}
//console.log("The sum of 5 and 6 is: "+ suma(5, 6));
//6-b
function suma(num1, num2){
    if((typeof num1 === 'number' ) && (typeof num2 === 'number')){
        return num1 + num2;
    } else {
        alert('The incorret, is not a number')
        return NaN;
    }
}
//console.log("The sum of 5 and 5 is: "+ suma(5, 'r'));
//6-c
function validateInterger(num1){
    if(Number.isInteger(num1)){
        return true;
    } else {
        return false;
    }
}
//console.log(validateInterger(5))
//6-d
function suma(num1, num2){
    if((typeof num1 === 'number') && (typeof num2 === 'number')){
        if(validateInterger(num1) && validateInterger(num2)){
            return num1 + num2;
        } else {
            alert('Error rhe number is not a interger');
            console.log('The number in interger are: ' +Math.floor(num1),'and ' +Math.floor(num2));
            return Math.floor(num1) + Math.floor(num2);
        }
    } else {
        alert('The incorret, is not a number');
        return NaN;
    }
}
//console.log("The sum of 5 and 5 is: "+ suma(5.8, 5.3));
//6-e
function suma(num1,num2){
    return validationNumber(num1,num2);
}
function validationNumber(num1, num2){
    if((typeof num1 === 'number') && (typeof num2 === 'number')){
        if(validateInterger(num1) && validateInterger(num2)){
            return num1 + num2;
        } else {
            alert('Error rhe number is not a interger');
            console.log('The number in interger are: ' +Math.floor(num1),'and ' +Math.floor(num2));
            return Math.floor(num1) + Math.floor(num2);
        }
    } else {
        alert('The incorret, is not a number');
        return NaN;
    }
}
console.log("The sum of 5 and 5 is: "+ suma(5.8, 6.3));
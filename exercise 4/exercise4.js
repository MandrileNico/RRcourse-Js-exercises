//4-a
var randnum = Math.random();
console.log(randnum);
if (randnum >= 0.5){
    alert("Grather than 0.5");
}else{
    alert("Lower than 0.5");
}
//4-b
var Age = Math.floor(100*Math.random());
if (Age < 2){
    alert("Bebe");
} else if((Age >= 2) && ( Age <= 12)){
    alert("Niño");
} else if((Age >= 13) && ( Age <= 19)){
    alert("Adolecente");
}else if((Age >= 20) && ( Age <= 30)){
    alert("Joven");
}else if((Age >= 31) && ( Age <= 60)){
    alert("Adulto");
}else if((Age >= 61) && ( Age <= 75)){
    alert("Adulto Mayor");
}else{
    alert("Anciano");
}
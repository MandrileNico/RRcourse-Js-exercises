// 5-a
var array1 = ["Me", "voy", "a", "tomar", "Vacaciones"];
for (var i = 0; i < array1.length; i++){
    alert('La palabra de la posicion ' + i + 'es: ' + array1[i]);
}
console.log(array1);
//5-b
for (var i = 0; i < 5; i++){
    var array2 = array1[i];
    array1[i] = array2[0].toLocaleUpperCase() + array2.substr(1, array2.length-1);
    alert(array1[i]); 
}
console.log(array1);
//5-c
var sentence = [];
for (var i = 0; i < array1.length; i++){
    sentence[i] = array1[i];
}
console.log(sentence);
alert(sentence);
//5-d
var array3 = [];
for (var i = 0; i < 10; i++){
    array3[i]=i;
}
console.log(array3);
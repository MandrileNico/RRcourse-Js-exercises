//3-a
const array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array1[4], array1[10]);
//3-b
var array2 = array1.slice();
array2.sort();
console.log('The alphabetically ordered array is: '+ array2);
//3-c
array2.unshift("Vacaciones") + array2.push("Fiestas");
console.log('The array is: '+ array2);
//3-d
array2.shift() + array2.pop(); 
console.log('the array without the added elements: ' + array2)
//3-e
array2.reverse();
console.log('the inverted array: '+ array2);
//3-f
array2 = array2.join('-');
console.log('The join array : ' + array2);
//3-g
array3 = array1.slice(array1.indexOf('Mayo'), array1.indexOf('Noviembre')+1);
console.log('The new array is:' + array3);


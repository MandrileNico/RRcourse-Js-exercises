//3-a
var array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array1[5], array1[11]);
//3-b
array1.sort();
console.log('The alphabetically ordered array is: '+ array1);
//3-c
array1.unshift("Vacaciones") + array1.push("Fiestas");
console.log('The array is: '+ array1);
//3-d
array1.shift() + array1.pop(); 
console.log('the array without the added elements: ' + array1)
//3-e
array1.reverse();
console.log('the inverted array: '+ array1);
//3-f
array1 = array1.join('');
console.log('The join array : ' + array1);
//3-g
var array2 = array1;
array2 = array2.slice(array2.indexOf('N'), array2.indexOf('Marzo'));
console.log('The new array is:' + array2);


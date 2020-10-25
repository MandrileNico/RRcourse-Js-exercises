//2-a
var str1 = 'Hello, I am Nicolás';
var up1 = str1.toLocaleUpperCase();
console.log('The sentece is: '+ up1);
//2-b
var str2 = 'Hello, I am Nicolás';
var substr2 = str2.substr(0, 5);
console.log('The first five letters is:'+ substr2 );
//2-c
var subtr3 = str2.substr(-3)
console.log('The last 3 letters is:'+ subtr3 );
//2-d
var str3 = 'hello, I am Nicolás';
var subtr4 = str3[0].toLocaleUpperCase()+str3.substr(1).toLocaleLowerCase(); 
console.log('the original sentence:'+ str3, 'The result:' + subtr4);
//2-e
var find = str3.indexOf(' ')
console.log('The first blanc space are in the position: '+ find);
//2-f
var str4 = 'economia reseciva';
var final = str4[0].toLocaleUpperCase() + str4.substr(1 , str4.indexOf(' ')).toLocaleLowerCase() + 
            str4[str4.indexOf(' ')+1].toLocaleUpperCase() + str4.substr(str4.indexOf(' ')).toLowerCase();
console.log('The original sentece is :' + str4, ',and the result is:' +final);

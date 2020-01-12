"use strict";

function echo(echo){
document.write(echo,"<br>");
}
/*
var str="Assaa";
var res=[];

str=str.toLowerCase();
for (var i = 0; i < str.length; i++) {
	res.push(str[i]);
}

var rev=[]
function reversefn(r){
	r=res;
	return r.reverse();
}

rev = reversefn();

var obj = {a: 1, b: 2, c: 3};

//console.log( obj["c"]);
//document.write(obj.c);


var obj = {Коля: '1000', Vasya: '500', Petya: '200'};

document.write("Коля получит - "+obj.Коля,"<br/>","Петя получит - "+obj.Petya);



*//*


var datee = {monday :"первый день", tuesday: "второй день",
    wednesday: "третий день", Thursday : "четвертый день",
	friday : "пятый  день", saturday :"шестой день", sunday : "седьмой день"
	}


let day= datee.wednesday;

document.write(day,"<br>");

let numarr=[ [1, 2, 3], [4, 5, 6], [7,8,9] ];



echo(numarr[1][0]);

let langObj={js:['jQuery', 'Angular'], php: 'hello', css: 'world'};

echo(langObj.js[0]);

let GetLangObj= {
	en:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
	ru:["понедельник", "вторник" , "среда" , "четверг" ,
	"пятница" , "суббота" , "воскресение"]
}

echo(GetLangObj.en[2]);
echo(GetLangObj.ru[0]);

let lang = GetLangObj.en;
let daay = 3;

echo(lang[daay]);

let a=4;

if ( 0<a && a<5) {
 echo("true");
}else{echo("false")}




function getRandomArbitary(min, max) {
	return Math.ceil( Math.random() * max );
}
let dayOfMonth=getRandomArbitary(1,31);
echo(dayOfMonth);

switch(true){
	case dayOfMonth<=10: echo("first decartive ");break;
	case dayOfMonth>10 && dayOfMonth<=20: echo("second decartive ");break;
	case dayOfMonth>20 && dayOfMonth<=31: echo("thirst decartive ");break;
	default : echo("unexpented");
}

let strn ="31312345";
if ((strn[0])==1 || (strn[0]==2) || (strn[0] == 3)) {
	echo("true");
}else{echo("false");}

let str3="123321";
let sum3_1=Number(str3[0])+Number(str3[1])+Number(str3[2]);
let sum3_2=Number(str3[3])+Number(str3[4])+Number(str3[5]);

if (sum3_1==sum3_2) {echo("da") }else {echo("net");}


let someArr=[10, 20, 30, 50, 235, 3000];
let toStr;

for (var i = 0; i < someArr.length; i++) {
	toStr= String(someArr[i])
	if(toStr.startsWith(1)||toStr.startsWith(2)||toStr.startsWith(5)){
		echo(someArr[i]);
	}
}

let arrr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var x= 0;  x<arrr.length; x++) {
	if (x==0) {document.write("-")}
	document.write(arrr[x]+"-");
}


echo(Math.pow(2,10));
echo(Math.sqrt(49));


let sum,mat=0,arr=[4, 2, 5, 19, 13, 0, 10];
for (var i = arr.length - 1; i >= 0; i--) {
	sum=mat+=Math.pow(arr[i],2);
}

echo(Math.round(Math.sqrt(379)));

arr =[12, 15, 20, 25, 59, 79];

let result = 0;

for (var i = 0; i < arr.length; i++) {
	result+=arr[i];
}

echo(result/arr.length);
*//*

let str ="я учу javascript,так же: РНР, Руton , C++ ,C#!, Java";

echo(str.length);

echo(str.substr(2,7));
echo(str.substring(-2,10));
echo(str.slice(3,4));
echo(str.indexOf("РНР"));

let n = 5,result;

if (n<str.length){
 result = String(str.slice(0,n))+"...";
}else{result=str;}

echo(result);

str = "Я-учу-javascript!" ;

echo(str.replace(/-/g,' '));


str="я учу javascript";


let strsp = str.split(" ");

echo(strsp);


let date = '2025-12-31';

date = date.split("-");

echo(date);

echo(date[2]+"/"+date[1]+"/"+date[0]);

let somestr= 'var_test_text';
let s = [] ;
s= somestr.split('_');
let n = s[0];
*/

/*Дан массив с числами. 
Проверьте, есть ли в нем два одинаковых числа подряд.
 Если есть - выведите 'да',
  а если нет - выведите 'нет'.

let arr=[1,12,76,15,1];
let flag = false;
function krk(a){

	for (var i = 0; i < a.length; i++) {
		if(a[i]==a[i-1]){flag=true};
	}

 	
 	if (flag === true){document.write("krknvum en");}else
 	{document.write("chi krknvum");
 	}

}


krk(arr);
let arr=[];
for (var i = 1; i < 10; i++) {
	arr.push(i);
}
let str = arr.join('');
echo(str);
str = arr.join("-");
echo("-"+str+"-");

for (var i = 0; i < 5; i++) {
	for (var y = 0; y <= i ; y++) {
		document.write("*");		
	}
	document.write("<br>");
}*/

function func(){
	alert("Barlus Vov");
}

function getidd(){
	var idtest = document.getElementById("test1");
	document.write(elem.value);
}

function func1() {
	var elem = document.getElementById('test4');
	alert(elem.value); //выведет '!'
	alert(elem.id); //выведет 'test'
	alert(elem.type); //выведет 'text'
}
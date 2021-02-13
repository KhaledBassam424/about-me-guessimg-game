/* eslint-disable indent */
'use strict';
let score= 0;


let userName=prompt('what is your name');
alert('Hi '+userName) ;





alert('you are about entering a guess game with us. Are you ready? lets go!');





function games(){
let favGame=prompt('do i like gaming');


favGame = favGame.toLowerCase();
if(favGame==='yes' || favGame==='y'){
  alert('Sorry, That is wrong answer ');
  
}else if(favGame==='no' || favGame==='n'){
    alert('you are right, congratualations');
  
    score=score+1 ;
}
}

function meals(){
let favMeal=prompt('is my favourite meal Mansaf');
favMeal=favMeal.toUpperCase();
if((favMeal==='YES') || (favMeal==='Y')){
    alert('you are wrong, i dont like Mansaf actually');
}else if((favMeal==='NO') || (favMeal==='N')){ 
alert('you are right, Im not a Mansaf fan');
console.log('right');
score=score+1 ;
}
}

function stars(){
let stars=prompt('do i like looking up at stars at night');
stars=stars.toLowerCase();
if((stars==='yes') || (stars==='y')){
    alert('gazing at stars is amazing thing, try to do it yourself');
    score=score+1 ;
}else if( (stars==='no') || (stars==='n')){
    alert('that is not correct');
}
}

function walk(){
let dailyWalk= prompt('do i walk on a regular basis');
dailyWalk=dailyWalk.toLowerCase();
if(dailyWalk==='yes' || dailyWalk==='y'){
    alert('Health is the most important thing you have, you are right');
    score=score+1 ;
}else if(dailyWalk==='no' || dailyWalk==='n'){
    alert('you are wrong');

}
}

function suger(){
let sugarFood= prompt('do i eat food which contain a lot of sugar');
sugarFood=sugarFood.toLowerCase();
if(sugarFood==='yes' || sugarFood==='y'){
    alert('Sorry, you are not right, a lot of sugar is harmful to your body');
}else if(sugarFood==='no' || sugarFood==='n'){
alert('stay healthy, your answer is correct');

score=score+1 ;
}
}

function borntime(){

let birthMonth=prompt('In which mothnth i was born, Enter a number');
for(let i=1; i<=4; i++){
    if(parseInt(birthMonth) === 3){
        alert('smart boy');
        score=score+1;
        break;
    }else if((parseInt(birthMonth) >= 5) && (parseInt(birthMonth)<= 12)){
        alert('it is too high');
        birthMonth=prompt('try it agin');
    }else if((parseInt(birthMonth)<2) && (parseInt(birthMonth)>0)){
        alert('it is too low');
      
        birthMonth=prompt('try it again');
}else if((parseInt(birthMonth)===2) || (parseInt(birthMonth)===4)){
    alert('you are close');
  
    birthMonth= prompt('try it again');
}

else{
    alert('out of scope input');
    birthMonth=prompt('try it again');    
}
if(parseInt(birthMonth)!==3){
    alert('3 is the correct answer. Thanks for trying guessing the right answer');
}
}
}

let colors= ['green' , 'pink' , 'aqua' , 'orange' , 'blue', 'white'];
function myFavorite(){
let favColor=prompt('what is my favourite color?');
for(let i=0; i<=5; i++){
    let found=false ;
    for(let j=0; j<=5 ; j++){
        if(favColor.toLowerCase() === colors[j]){
            alert('you are right');
            score=score+1;
            found=true;
            break;
        }
    }
if(found===false){
favColor=prompt('it is not correct, try it again');} else{
    break;
}
}
}


games();
meals();
stars();
walk();
suger();
borntime();
myFavorite();


document.write(colors);
alert('these are the right possibilities ' + colors);
alert(`your score out of 7 is ${score}`);
alert('Thank you '+ userName + ' for visiting my page');
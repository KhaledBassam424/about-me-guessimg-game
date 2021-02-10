'use strict';
let score= 0

let userName=prompt('what is your name')
function user(){
alert('Hi '+userName)

alert('you are about entering a guess game with us. Are you ready? lets go!')
}

function games(){
let favGame=prompt('do i like gaming')
// The accepted answers should be yes or no
favGame = favGame.toLowerCase();
if(favGame==='yes'){
    alert('Sorry, That is wrong answer ');
   console.log('wrong');
} else{
    alert('you are right, congratualations');
    console.log('right')
    score=score+1
}
}

function meals(){
let favMeal=prompt('is my favourite meal Mansaf');
favMeal=favMeal.toUpperCase();
if(favMeal==='YES'){
    alert('you are wrong, i dont like Mansaf actually ');
    console.log('wrong');
}else{ 
alert('you are right, Im not a Mansaf fan');
console.log('right');
score=score+1 ;
}
}

function stars(){
let stars=prompt('do i like looking up at stars at night');
stars=stars.toLowerCase();
if(stars==='yes'){
    alert('gazing at stars is amazing thing, try to do it yourself');
    console.log('right')
    score=score+1
}else{
    alert('that is not correct');
    console.log('wrong');
}
}

function walk(){
let dailyWalk= prompt('do i walk on a regular basis');
dailyWalk=dailyWalk.toLowerCase();
if(dailyWalk==='yes'){
    alert('Health is the most important thing you have, you are right');
    console.log('right');
    score=score+1 ;
}else{
    alert('you are wrong');
    console.log('wrong');
}
}

function suger(){
let sugarFood= prompt('do i eat food which contain a lot of sugar');
sugarFood=sugarFood.toLowerCase();
if(sugarFood==='yes'){
    alert('Sorry, you are not right, a lot of sugar is harmful to your body');
    console.log('wrong');
}else{ 
alert('stay healthy, your answer is correct')}
console.log('correct')
score=score+1 ;
}

function birth(){
let birthMonth=prompt('In which mothnth i was born, Enter a number')
for(let i=1; i<=4; i++){
    if(parseInt(birthMonth) === 3){
        alert('smart boy');
        console.log('correct')
        score=score+1
        break;
    }else if((parseInt(birthMonth) >= 5) && (parseInt(birthMonth)<= 12)){
        alert('it is too high');
        birthMonth=prompt('try it agin');
    }else if((parseInt(birthMonth)<2) && (parseInt(birthMonth)>0)){
        alert('it is too low');
        console.log('wrong')
        birthMonth=prompt('try it again');
}else if((parseInt(birthMonth)==2) || (parseInt(birthMonth)===4)){
    alert('you are close');
    console.log('wrong')
    birthMonth= prompt('try it again');
}

else{
    alert('out of scope input')
    birthMonth=prompt('try it again')
    console.log('wrong')
}
}
if(parseInt(birthMonth)!==3){
    alert('3 is the correct answer. Thanks for trying guessing the right answer');
}
}


let colors= ['green' , 'pink' , 'aqua' , 'orange' , 'blue', 'white']

function myFavorite(){
let favColor=prompt('what is my favourite color?');
for(let i=0; i<=5; i++){
    let found=false
    for(let j=0; j<=5 ; j++){
        if(favColor.toLowerCase() === colors[j]){
            alert('you are right');
            console.log('right');
            score=score+1;
            found=true
            break;
        }
    }
if(found===false){
favColor=prompt('it is not correct, try it again')} else{
    break;
}
}
}

user();
games();
meals();
stars();
walk();
suger();
birth();
myFavorite();


document.write(colors);
alert('these are the right possibilities ' + colors);
alert(`your score out of 7 is ${score}`);
alert('Thank you '+ userName + ' for visiting my page');
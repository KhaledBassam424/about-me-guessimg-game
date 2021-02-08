'use strict';

let userName=prompt('what is your name')
alert('Hi '+userName)

alert('you are about entering a guess game with us. Are you ready? lets go!')

let favGame=prompt('do i like gaming')
// The accepted answers should be yes or no
favGame = favGame.toLowerCase();
if(favGame==='yes'){
    alert('Sorry, That is wrong answer ');
   //console.log('wrong');
} else{
    alert('you are right, congratualations');
    //console.log('right')
}

let favMeal=prompt('is my favourite meal Mansaf');
favMeal=favMeal.toUpperCase();
if(favMeal==='YES'){
    alert('you are wrong, i dont like Mansaf actually ');
    //console.log('wrong');
}else{ 
alert('you are right, Im not a Mansaf fan');
//console.log('right');
}

let stars=prompt('do i like looking up at stars at night');
stars=stars.toLowerCase();
if(stars==='yes'){
    alert('gazing at stars is amazing thing, try to do it yourself');
    //console.log('right')
}else{
    alert('that is not correct');
   // console.log('wrong');
}


let dailyWalk= prompt('do i walk on a regular basis');
dailyWalk=dailyWalk.toLowerCase();
if(dailyWalk==='yes'){
    alert('Health is the most important thing you have, you are right');
    //console.log('right');
}else{
    alert('you are wrong');
    //console.log('wrong');
}

let sugarFood= prompt('do i eat food which contain a lot of sugar');
sugarFood=sugarFood.toLowerCase();
if(sugarFood==='yes'){
    alert('Sorry, you are not right, a lot of sugar is harmful to your body');
    //console.log('wrong');
}else{ 
alert('stay healthy, your answer is correct')
//console.log('correct')

}
alert('Thank you '+ userName + ' for visiting my page');

let result      = document.querySelector('.result')
let err         = document.querySelector('.err')

let userGuide   = document.querySelector('.userGuide')
let agree       = document.querySelector('.btn5')

let userId1     = document.querySelector('.userId1')
let user1btn    = document.querySelector('.btn3')
let user1Input  = document.querySelector('.user1Text')

let player      = document.querySelector('.player')

let number1     = document.querySelector('.number1')
let btn1        = document.querySelector('.btn1')
let box1        = document.querySelector('.box1')
let tips        = document.querySelector('.tips')
let tips2       = document.querySelector('.tips2')

let user2       = document.querySelector('.userId2')
let user2Input  = document.querySelector('.user2Text')
let user2btn    = document.querySelector('.btn4')

let box2        = document.querySelector('.box2')
let number2     = document.querySelector('.number2')
let btn2        = document.querySelector('.btn2')
let trying      = document.querySelector('.trying')

let lives       = document.querySelector('.lives')
let gameOver    = document.querySelector('.over')
let playAgain   = document.querySelector('.again')
let chance      = 5;

// ==============Agreement start here=============
agree.addEventListener('click', function(){
    userId1.style.display='block'
    userGuide.style.display='none'
})
// ==============Agreement end here=============
// ==============user-1 start here==============
user1btn.addEventListener('click', function(){
    if(user1Input.value == ''){
        err.style.display='block'
        err.innerHTML='Please Enter your Name to Start'
    } else{
        player.style.display='block'
        player.innerHTML= 'Welcome Player-1: '+ '<br>' + user1Input.value + '!'
        userId1.style.display='none'
        err.style.display='none'
        box1.style.display='block'
        tips.style.display='block'
    }
})

btn1.addEventListener('click', function(){
    if(number1.value == ''){
        tips.style.display='none'
        err.style.display= 'block'
        err.innerHTML='Please enter a number to Start the Game'
    } else if(number1.value > 10){
        tips.style.display='none'
        err.style.display='block'
        err.innerHTML='Numbers should not be bigger then 10'
    } else if(number1.value <= 10){                     // user-1 input value
        tips.style.display='none'
        box1.style.display='none'
        player.style.display='none'  
        err.style.display='none'  
        user2.style.display='block  '    
    }
})
// ==============user-1 end here==============
// ==============user-2 start here==============
user2btn.addEventListener('click', function(){
    if(user2Input.value == ''){
        err.style.display='block'
        err.innerHTML='Please Enter your Name to Start'
    } else{
        user2.style.display='none'
        player.style.display='block'
        player.innerHTML= 'Welcome Player-2: '+ '<br>' + user2Input.value + '!'
        err.style.display='none'
        tips2.style.display='block'  
        box2.style.display='block'
    }
})

btn2.addEventListener('click', function(){
    if(number2.value == ''){
        tips2.style.display='none'
        err.style.display= 'block'
        err.innerHTML='Please enter a number to Guess the Number'
    } else if(number2.value > 10){
        tips2.style.display='none'
        err.style.display='block'
        err.innerHTML='Numbers should not be bigger then 10'
    } else if(number2.value !== number1.value){
        err.style.display='none'
        tips2.style.display='none'
        trying.style.display='block'
        trying.innerHTML='Try Again'
        lives.style.display='block'
        lives.innerHTML=chance-- + ' Lives'
        if(chance == -1){
            err.style.display='none'
            result.style.display='block'
            box2.style.display='none'
            tips2.style.display='none'
            trying.style.display='none'
            result.style.display='block'
            result.innerHTML='You Lost'
            player.innerHTML= 'Wish you next time '+ '<br>' + user1Input.value + '!'
            gameOver.style.display='block'
            gameOver.innerHTML='GAVE OVER'
            playAgain.style.display='block'
        }
    } else if(number2.value == number1.value){
        err.style.display='none'
        result.style.display='block'
        result.innerHTML='Bingo You Won'
        player.innerHTML= 'Congratulations '+ '<br>' + user2Input.value + '!'
        box2.style.display='none'
        tips2.style.display='none'
        trying.style.display='none'
        playAgain.style.display='block'
    } 
})
// ==============user-2 end here==============
// ==============Play Again start here=============
playAgain.addEventListener('click', function(){
    userGuide.style.display='block'
    result.style.display='none'
    player.style.display='none'
    playAgain.style.display='none'
    user1Input.value= ''
    user2Input.value= ''
    number1.value=''
    number2.value=''
    gameOver.style.display='none'
    
})

// ==============Play Again end here=============




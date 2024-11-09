const computerChoice=document.getElementById('computer-choice')
const userChoice=document.getElementById('user-choice')
const result=document.getElementById('result')

const possibleChoices=document.querySelectorAll('button')

let userChoosen
let computerChoosen
let res
possibleChoices.forEach(poss=>poss.addEventListener('click',(e)=>{
    userChoosen=e.target.id
    userChoice.innerHTML=userChoosen
    genrateComputerChoice()
    winner()

}))

function genrateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1
    if(randomNumber===1){
        computerChoosen='rock'
    }
    if(randomNumber===2){
        computerChoosen='paper'
    }
    if(randomNumber===3){
        computerChoosen='scissor'
    }
    computerChoice.innerHTML=computerChoosen
}

function winner(){
    if(computerChoosen===userChoosen){
      res='its a draw'
    }
    if(computerChoosen==='rock' && userChoosen==='paper'){
        res='You win!'
    }
    if(computerChoosen==='paper' && userChoosen==='rock'){
        res='You lost!'
    }
    if(computerChoosen==='rock' && userChoosen==='scissor'){
        res='You lost!'
    }
    if(computerChoosen==='scissor' && userChoosen==='paper'){
        res='You lost!'
    }
    if(computerChoosen==='paper' && userChoosen==='scissor'){
        res='You Won!'
    }
    if(computerChoosen==='scissor' && userChoosen==='rock'){
        res='You win!'
    }
    result.innerHTML=res
}
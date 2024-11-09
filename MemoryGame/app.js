const cardArray=[
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
 
]

cardArray.sort(()=>0.5-Math.random())

const grid=document.querySelector('#grid')
let cardChoosen=[]
let cardChoosenId=[]
let cardWon=[]

function createBoard(){
   for(let i=0;i<cardArray.length;i++){
    const card=document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipCard)
    grid.append(card)
   }

}

createBoard()

function ckeckMatch(){
    const cards=document.querySelectorAll('img')
    if(cardChoosen[0]==cardChoosen[1]){
        cards[cardChoosenId[0]].setAttribute('src','images/white.png')
        cards[cardChoosenId[1]].setAttribute('src','images/white.png')
        cards[cardChoosenId[0]].removeEventListener('click',flipCard)
        cards[cardChoosenId[1]].removeEventListener('click',flipCard)
        cardWon.push(cardChoosen)
    }else{
        cards[cardChoosenId[0]].setAttribute('src','images/blank.png')
        cards[cardChoosenId[1]].setAttribute('src','images/blank.png')
    }
    document.getElementById('result').innerHTML=cardWon.length
    cardChoosen=[]
    cardChoosenId=[]
    if(cardWon.length==cardArray.length/2){
        document.getElementById('result').innerHTML='Congratulation'
    }
}

function flipCard(){
    const cardID=this.getAttribute('data-id')
    const name=cardArray[cardID].name
    cardChoosen.push(name)
    cardChoosenId.push(cardID)
    this.setAttribute('src',cardArray[cardID].img)
    if(cardChoosen.length===2){
       setTimeout(ckeckMatch,500)
    }

}
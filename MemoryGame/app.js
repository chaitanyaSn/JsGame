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
const cardChoosen=[]
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


function flipCard(){
    const cardID=this.getAttribute('data-id')
    const name=cardArray[cardID].name
    cardChoosen.push(name)
    this.setAttribute('src',cardArray[cardID].img)

}
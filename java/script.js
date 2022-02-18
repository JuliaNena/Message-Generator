/* Create 3 Arrays with different strings*/
const waves = ['huge', 'tiny', 'sweet', 'closeout', 'mushy',  'glassy', 'gnarly'];
const board =['log', 'shorty', 'fish', 'gun', 'foamie',  'funboard', 'favorite board'];
const gonna =['shred', 'hang-ten', 'get barreled', 'rip', 'get licked', 'have fun', 'love it'];


/*create a function that randomly picks a string in an array*/
const randomPick = (array)=> {
    let i= Math.floor(Math.random()*array.length);
    return array[i];}


/*create a function that returns a message which includes randomly picked strings from all three arrays*/
const createMessage =()=>
`The waves are ${randomPick(waves)} today. You should take your ${randomPick(board)} out. You're gonna ${randomPick(gonna)}!`;
console.log(createMessage());


/* get message and button by Id*/
let message= document.getElementById('message');
let button=document.getElementById('message-button');

/*change innerHTMl of message*/
const changeText = ()=> message.innerHTML=createMessage();

/*add event listener click on button*/
button.onclick=changeText;

/*change color of button when mouseover and reset when mouseout*/
let changeColor =()=> {
    button.style.backgroundColor='blue'
    button.style.color='white'}

let resetColor =()=>{
    button.style.backgroundColor='#f7f1ea'
    button.style.color='black'}

button.onmouseover = changeColor;
button.onmouseout=resetColor;
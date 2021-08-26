//Set

let commonNum = 36;
let num = 6;
let res = [];

const mySet = new Set();

let generateSet = () => {
    res = [];
    while(mySet.size<=num) { 
        mySet.add(Math.round(Math.random()*(commonNum-1) + 1));
    }
    res = [...mySet];
    mySet.clear();
}
console.log(res);
let run=0;
let iter=1;

const amount = document.getElementById('amount');
const common = document.getElementById('common');
const balls = document.getElementsByClassName('balls')[0];

let printBall = () => {
    if(iter > num) {
        clearInterval(run);
        iter=1;
     return false;
    }
    ind = Math.round(Math.random()*8 + 1)
        balls.insertAdjacentHTML('beforeend',`<div class="num ball">${res[iter]}</div>`);
    iter++;
}
let btn = document.querySelector('button');
btn.addEventListener('click', ()=> {  
    commonNum = Number(common.value);
    num = Number(amount.value);
    generateSet();
    balls.innerHTML='';
    run = setInterval(printBall, 1000);

})


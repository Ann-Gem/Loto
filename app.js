let res = [];
let run=0;
let iter=1;

const amount = document.getElementById('amount');
const common = document.getElementById('common');
const balls = document.getElementsByClassName('balls')[0];
const btn = document.querySelector('button');

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

let printBall = () => {
    if(iter > num) {
        clearInterval(run);
        iter=1;
        btn.removeAttribute('disabled');
     return false;
    }
    balls.insertAdjacentHTML('beforeend',`<div class="num ball">${res[iter]}</div>`);
    iter++;
}

btn.addEventListener('click', ()=> {
    btn.setAttribute("disabled", true);
    if(common.value > 0 || amount > 0) {
        commonNum = Number(common.value);
        num = Number(amount.value);
        generateSet();
        balls.innerHTML='';
        run = setInterval(printBall, 1000);
    }
})


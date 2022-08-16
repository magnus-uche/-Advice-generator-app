// the fetch method is defined on the window object which we can use to perform request
// this will return promise and
// promise will either be fullfiled or rejected

let cardButton = document.querySelector('.card button');
let adviceId = document.getElementById('adviceId');

cardButton.addEventListener('click', () => {
catchAdvice();
});

async function catchAdvice() {
const response = await fetch("https://api.adviceslip.com/advice");
const jsonSlip = await response.json();
document.getElementById('advice').innerHTML = `"${jsonSlip.slip.advice}"` 
document.getElementById('adviceId').innerHTML = jsonSlip.slip.id;
};



// cardButton.addEventListener('click', ()=>{
//     fetch("https://api.adviceslip.com/advice")
// .then(res =>{
// console.log(res);
// return res.json()
// })
// .then(jsonp => {
//     console.log(jsonp.slip.advice)
//    document.getElementById('advice').innerHTML = jsonp.slip.advice
// })
// })
// .catch()
let btn = document.querySelector('button');

let colorFunc = () => {
    let heading = document.querySelector('h1');
    let colorBox = document.querySelector('#box');
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);
    colorBox.style.backgroundColor=`rgb(${num1},${num2},${num3})`;
    heading.innerText = `rgb(${num1},${num2},${num3})`;
}

btn.addEventListener("click",colorFunc);

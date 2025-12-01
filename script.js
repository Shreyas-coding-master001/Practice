let h3 = document.querySelector('h3');
let btn = document.querySelector('button');
let inner = document.getElementById('inner');
let grow = 0;


function Time(num){
    return (setInterval(()=>{   
        grow++;
        
        h3.innerHTML = grow+'%';
        inner.style.width = grow+'%';
    },num));
}


btn.addEventListener('click',()=>{
    let num = 50 + Math.floor(Math.random()*50);
    console.log(`Your file will be dowloaded within ${num/10} second's`)
    btn.style.pointerEvents = 'none';

    let inter = Time(num);

    setTimeout(()=>{
        clearInterval(inter);
        btn.style.opacity = 0.5;
        btn.innerHTML = 'Dowloaded';
    },num*100);
});
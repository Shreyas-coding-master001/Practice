let btn = document.querySelector('button');
let h3 = document.querySelector('h3')
let flag = false;
let card = document.getElementById('card');
let icon = document.getElementById('love');

btn.addEventListener('click',()=>{
    if(flag){
       btn.innerHTML = "Removing"
        setTimeout(function(){
            btn.innerHTML = "Follow"
            btn.style.opacity = 1;
            h3.innerHTML = 'Stranger'
            h3.style.color = 'red'
        },1000)
        flag = false; 
    }else{
        btn.innerHTML = "Followed"
        setTimeout(function(){
            btn.innerHTML = "Remove Follower"
            btn.style.opacity = 0.7;
            h3.innerHTML = 'Friend'
            h3.style.color = 'green'
        },1000)
        flag = true;
    }

})

card.addEventListener('dblclick',()=>{
    // alert('hello');
    icon.style.transform = 'translate(50%) scale(1) rotate(0deg)';
    icon.style.opacity =1;

    setTimeout(function(){
        icon.style.transform = 'translate(0,-500%)';
        icon.style.opacity = 0;
    },500);

    setTimeout(function(){
        icon.style.transform = 'translate(50%) scale(0) rotate(-90deg)';
    },1000);
});

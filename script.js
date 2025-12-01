let main = document.querySelector('main');
let btn = document.querySelector('button');
let arr = [
  "I came. I saw. I forgot.",
  "Nope. Not today.",
  "Mentally on vacation.",
  "Out of service.",
  "Tea first. Life later.",
  "I paused my game for this?",
  "Sarcasm loading…",
  "Me? Wrong? Never.",
  "I speak fluent ‘huh?’",
  "I’m not weird. I’m limited edition.",
  "My brain has left the chat.",
  "I don’t trip. I do random gravity checks.",
  "This is my final brain cell."
];




btn.addEventListener('click',()=>{
    let a = Math.floor(Math.random() * arr.length);
    let x = Math.random() * 80;
    let y = Math.random() * 80;
    let rot = Math.random() * 360;
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    let size = Math.floor(Math.random() * 3);

    let h1 = document.createElement('h1');
    h1.innerHTML = arr[a];
    h1.style.position = 'absolute';
    h1.style.top = y+'%';
    h1.style.left = x+'%';
    h1.style.rotate = rot+'deg';
    h1.style.color = `rgb(${c1},${c2},${c3})`;
    h1.style.scale = size;

    main.appendChild(h1);
});
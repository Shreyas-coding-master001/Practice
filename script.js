let elem = document.querySelectorAll('.elem');

elem.forEach((Node)=>{
  Node.addEventListener("mouseenter",()=>{
    Node.childNodes[3].style.opacity = 1;
  })
  Node.addEventListener("mouseleave",()=>{
    Node.childNodes[3].style.opacity = 0;
  })

  Node.addEventListener("mousemove",(dets)=>{
    Node.childNodes[3].style.left = dets.x+"px";
  });
});

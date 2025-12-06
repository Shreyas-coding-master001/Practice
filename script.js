let card = document.querySelector("#card");
let elem = document.querySelector('.elem');
let users = [
  {
    "profile_photo": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    "story_photo": "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    "story": "Aarav capturing the calm sunrise during his early morning ride."
  },
  {
    "profile_photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    "story_photo": "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    "story": "Diya watching the sky turn orange as another sunset paints the horizon."
  },
  {
    "profile_photo": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    "story_photo": "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
    "story": "Rohan exploring a cozy winter café, scribbling verses in his notebook."
  },
  {
    "profile_photo": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    "story_photo": "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg",
    "story": "Saanvi working on a new abstract painting full of colours and emotion."
  },
  {
    "profile_photo": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    "story_photo": "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
    "story": "Kabir spending time with rescued puppies at the shelter."
  }
]


let sum = "";
users.forEach(function(ele,idx){
    sum += `<div class="story">
                    <img id="${idx}" src="${ele.profile_photo}" alt="">
                </div>`
});

elem.innerHTML = sum;

let story = document.querySelectorAll(".story");
let fullScreen = document.querySelector("#full-screen")

// story.forEach((ele,idx)=>{
//   ele.addEventListener("click",function(){
//     fullScreen.style.backgroundImage = `url(${users[idx].story_photo})`;
//     fullScreen.style.display = "block";

//     setTimeout(function(){
//       fullScreen.style.display = "none";
//     },3000)

//   });
// })

let scrollbar = document.querySelector('.scrollbar');
let inner = document.querySelector('.scrollbar .inner');

elem.addEventListener("click",function(dets){
    fullScreen.style.backgroundImage = `url(${users[dets.target.id].story_photo})`;
    fullScreen.style.display = "block";
    let grow = 10;

  let inter = setInterval(() => {
    grow += 5;
    inner.style.width = grow+"%";
  }, 30);
  setTimeout(function(){
    console.log(grow);
    clearInterval(inter);
      fullScreen.style.display = "none";
  },3000)

});

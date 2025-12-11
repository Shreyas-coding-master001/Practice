let user = [{
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    "username": "travel_with_aarav",
    "isFollowed": false,
    "description": "Exploring hidden places around the world 🌍✨",
    "likeCount": 15400,
    "isLiked": false,
    commentcount: 12034,
    "shareCount": 820,
    "reel_video_link": "./Media/Video1.mp4"
  },
  {
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    "username": "dancemoves_diya",
    "isFollowed": true,
    "description": "Daily dance routines 💃🔥",
    "likeCount": 23400,
    commentcount: 20000,
    "isLiked": true,
    "shareCount": 600,
    "reel_video_link": "./Media/Video2.webm"
  },
  {
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    "username": "foodie_legend",
    "isFollowed": false,
    "description": "Trying India’s best street foods 😋🍝",
    "likeCount": 18800,
    commentcount: 6340,
    "isLiked": false,
    "shareCount": 450,
    "reel_video_link": "./Media/video3.mp4"
  },
  {
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    "username": "tech_with_mayur",
    commentcount: 90450,
    "isFollowed": true,
    "description": "Teaching tech in the most fun way! 💻⚡",
    "likeCount": 32000,
    "isLiked": true,
    "shareCount": 910,
    "reel_video_link": "https://www.pexels.com/download/video/4065220/"
  },
  {
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/91229/pexels-photo-91229.jpeg",
    "username": "fitness_om",
    "isFollowed": false,
    "description": "Fitness + Motivation = Transformation 💪🔥",
    "likeCount": 21000,
    commentcount: 10900,
    "isLiked": false,
    "shareCount": 530,
    "reel_video_link": "https://www.pexels.com/download/video/8581136/"
  },
  {
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    "username": "the_street_artist",
    "isFollowed": true,
    "description": "Street art that speaks louder than words 🎨🔥",
    "likeCount": 19600,
    commentcount: 8209,
    "isLiked": true,
    "shareCount": 480,
    "reel_video_link": "https://www.pexels.com/download/video/7594021/"
  },
  {
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    "username": "coding_with_sara",
    "isFollowed": false,
    "description": "Coding tips + mini projects for beginners 👩‍💻✨",
    "likeCount": 40200,
    commentcount: 320069,
    "isLiked": false,
    "shareCount": 1300,
    "reel_video_link": "https://www.pexels.com/download/video/4828804/"
  },
  {
    ismuted : true,
    "profile_photo": "https://images.pexels.com/photos/912310/pexels-photo-912310.jpeg",
    "username": "vlogs_by_raghav",
    "isFollowed": true,
    "description": "Daily vlogs + lifestyle + funny moments 😂🎥",
    "likeCount": 22800,
    commentcount: 12340,
    "isLiked": true,
    "shareCount": 700,
    "reel_video_link": "https://www.pexels.com/download/video/5491519/"
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

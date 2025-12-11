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
];
let reels = document.querySelector("#Reels");

function useApp(){
  let sum ="";
  user.forEach((ele,idx)=>{
  sum += `<div class="reel">
                <div class="musie"  id=${idx}>
                  ${ele.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
                </div>
                <video loop autoplay ${ele.ismuted?"muted":""}>
                    <source src="${ele.reel_video_link}">
                </video>
                <div class="section">
                    <div class="Profile">
                        <img src="${ele.profile_photo}" alt="ProfilePhoto">
                        <h1>${ele.username}</h1>
                        <button class="FollowButton"  id=${idx}>${ele.isFollowed? "Unfollow":"Follow"}</button>
                    </div>
                    <p>${ele.description}</p>
                </div>
                <div class="right">
                    <div class="heart" id=${idx}>${ele.isLiked?'<i class="hearticon ri-heart-fill"></i>':'<i class="hearticon ri-heart-3-line"></i>'}
                        <p>${ele.likeCount}</p>
                    </div>
                    <div class="comment"><i class="ri-chat-3-line"></i>
                        <p>${ele.commentcount}</p>
                    </div>
                    <div class="share"><i class="ri-share-forward-line"></i>
                        <p>${ele.shareCount}</p>
                    </div>
                    <div class="more"><i class="ri-more-2-line"></i></div>
                </div>
            </div>`;
  });

  reels.innerHTML = sum;
}

useApp();

reels.addEventListener('click',(dets)=>{
  // console.log(dets.target.className);
  if(dets.target.className === "heart"){

    if(!user[dets.target.id].isLiked){
      user[dets.target.id].likeCount++;
      user[dets.target.id].isLiked = true;
    }else{
      user[dets.target.id].likeCount--;
      user[dets.target.id].isLiked = false;
    }
    useApp();
  }

  if(dets.target.className === "FollowButton"){
   let button = dets.target;
   if(button.innerHTML === "Follow"){
    button.innerHTML = "Unfollow";
    user[dets.target.id].isFollowed = true;
  }else{
    button.innerHTML = "Follow";
    user[dets.target.id].isFollowed = false;
   }
  }
  
  if(dets.target.className === "musie"){
      if(user[dets.target.id].ismuted){
        
        user[dets.target.id].ismuted = false;
      }else{
        user[dets.target.id].ismuted = true;
      }
      
      useApp();
  }
  
  
});

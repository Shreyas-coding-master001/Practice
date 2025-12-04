let users = [
  {
    "name": "Shreyas Patil",
    "image": "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    "profession": "Web Developer",
    "salary": "$5/h",
    "tags": ["JavaScript", "Frontend"],
    "tierTag": "Uncommon",
    "ethValue": "0.5 ETH",
    "distribution": [80, 20]
  },
  {
    "name": "Aarav Mehta",
    "image": "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "profession": "Data Analyst",
    "salary": "$12/h",
    "tags": ["Python", "SQL"],
    "tierTag": "Rare",
    "ethValue": "0.8 ETH",
    "distribution": [70, 30]
  },
  {
    "name": "Nisha Kulkarni",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    "profession": "UI/UX Designer",
    "salary": "$10/h",
    "tags": ["Figma", "Prototyping"],
    "tierTag": "Epic",
    "ethValue": "1.2 ETH",
    "distribution": [60, 40]
  },
  {
    "name": "Rohit Sharma",
    "image": "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    "profession": "Backend Engineer",
    "salary": "$15/h",
    "tags": ["Node.js", "Databases"],
    "tierTag": "Legendary",
    "ethValue": "2.5 ETH",
    "distribution": [85, 15]
  },
  {
    "name": "Sara D'Souza",
    "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "profession": "Machine Learning Engineer",
    "salary": "$20/h",
    "tags": ["TensorFlow", "ML Models"],
    "tierTag": "Mythic",
    "ethValue": "3.0 ETH",
    "distribution": [75, 25]
  }
];
let main = document.querySelector("main");
let card = document.querySelector(".card");
let sum = "<div class='curser'></div>";

users.forEach((ele)=>{
    sum += `<div class="card">
             <div class="Profile">
                <img src="${ele.image}" alt="Picture">
                <div class="Tags1">${ele.tierTag}</div>
                <div class="Tags2">${ele.ethValue}</div>
            </div>
            <h1>${ele.name}</h1>
            <h3>${ele.profession}</h3>
            <div class="inner">
                <div class="left">
                    <h4>Avg Earing</h4>
                    <p>${ele.salary}</p>
                </div>
                <div class="right">
                    <h4>Distribution %</h4>
                    <div class="Innesider">
                        <div class="circle">
                            <div class="InsideCircle"></div>
                        </div>
                        <p>${ele.distribution[0]}</p> |
                        <p>${ele.distribution[1]}</p>
                        <div class="circle">
                            <div class="InsideCircle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
});

main.innerHTML = sum;

let curs = document.querySelector(".curser");

main.addEventListener("mousemove",function(dim){
    curs.style.left = dim.x+'px';
    curs.style.top = dim.y+'px';    
});
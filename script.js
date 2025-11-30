let IPL = [
  {
    "team": "CSK",
    "fullname": "Chennai Super Kings",
    "primaryColor": "#F9CD05",
    "secondaryColor": "#003A63",
    "trophiesWon": 5
  },
  {
    "team": "MI",
    "fullname": "Mumbai Indians",
    "primaryColor": "#004BA0",
    "secondaryColor": "#D1AB3E",
    "trophiesWon": 5
  },
  {
    "team": "RCB",
    "fullname": "Royal Challengers Bengaluru",
    "primaryColor": "#D71920",
    "secondaryColor": "#000000",
    "trophiesWon": 0
  },
  {
    "team": "KKR",
    "fullname": "Kolkata Knight Riders",
    "primaryColor": "#3A225D",
    "secondaryColor": "#D4AF37",
    "trophiesWon": 3
  },
  {
    "team": "RR",
    "fullname": "Rajasthan Royals",
    "primaryColor": "#EA1A85",
    "secondaryColor": "#004BA0",
    "trophiesWon": 1
  },
  {
    "team": "SRH",
    "fullname": "Sunrisers Hyderabad",
    "primaryColor": "#F26522",
    "secondaryColor": "#000000",
    "trophiesWon": 1
  },
  {
    "team": "DC",
    "fullname": "Delhi Capitals",
    "primaryColor": "#004C93",
    "secondaryColor": "#E31B23",
    "trophiesWon": 0
  },
  {
    "team": "PBKS",
    "fullname": "Punjab Kings",
    "primaryColor": "#ED1B24",
    "secondaryColor": "#D4AF37",
    "trophiesWon": 0
  },
  {
    "team": "GT",
    "fullname": "Gujarat Titans",
    "primaryColor": "#1B2133",
    "secondaryColor": "#AFA37A",
    "trophiesWon": 1
  },
  {
    "team": "LSG",
    "fullname": "Lucknow Super Giants",
    "primaryColor": "#0057E7",
    "secondaryColor": "#FF8C00",
    "trophiesWon": 0
  }
]

let btn = document.querySelector('button');
let box = document.getElementById('box');
let main = document.querySelector('main');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

btn.addEventListener('click',function(){
    let winner = IPL[Math.floor(Math.random() * IPL.length)];
    // box.innerHTML = winner.team;
    box.style.backgroundColor = winner.primaryColor;
    main.style.backgroundColor = winner.secondaryColor;
    h1.innerHTML = winner.team;
    h3.innerHTML = winner.fullname;
    p.innerHTML = `Trophies: ${winner.trophiesWon}`;
});



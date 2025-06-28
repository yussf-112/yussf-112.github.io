const an8am = document.getElementById("nostalgia");
const ppb = document.getElementById("an8am");
const change = document.getElementById("change");
const playlist = document.getElementById("playlist");
let pc = false;
let lastsong = -1;
let songs = [
"nostalgia.mp3",
"song2.mp3",
"song3.mp3",
"song4.mp3"
];
change.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  if (pc) {
    playlist.style.overflowY = "hidden";
    playlist.style.overflowX = "hidden";
    playlist.style.paddingLeft = "0px";
    playlist.style.paddingRight = "0px";
    playlist.innerHTML = '<img src="../leaves2.png" height="273px">';
    pc = false;
  } else {
    playlist.style.height = "273px";
    playlist.style.overflowY = "auto";
    playlist.style.overflowX = "hidden";
    playlist.style.paddingLeft = "28px";
    playlist.style.paddingRight = "28px";
    playlist.innerHTML = '<a onclick="an8am.src=`found.mp3`">found - </a><br><a onclick="">it\'s snowing like it\'s the end of the world - </a><br><a onclick="">in my head - bedroom</a><br><a onclick="">and this too shall pass - </a><br><a onclick="">kiss in october - </a><br><a onclick="">all i am is a man</a><br><a onclick="">all i am is a man</a><br><a onclick="">all i am is a man</a><br><a onclick="">all i am is a man</a><br><a onclick="">all i am is a man</a><br>';
    pc = true;
  }
});
function things() {
const width = 500;
const height = 464;
const left = (screen.width / 2) - (width / 2);
const top = (screen.height / 2) - (height / 2);
let thewindow = window.open("", "thoughts", `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no`);
thewindow.document.write(`
        <html>
        <head>
        <title>some written thoughts</title>
        <style>
        @font-face {
        font-family: "29LT Makina";
        src: url("../29ltmakina.otf") format("otf"),
        }
        body {
        font-family:"29LT Makina";
        }
        #central {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:400px;
        height:364;
        }
        #7anin {
        position:absolute;
        top:0;
        left:0;
        }
        #ma93ad {
        position:absolute;
        bottom:0;
        left:0;
        }
        #list {
        position:absolute;
        bottom:0;
        right:0;
        width:200px;
        height:264px;
        background-color:white;
        }
        .list {
        list-style: none;
        padding: 0;
        }
        .list a {
        display: flex;
        justify-content: left;
        align-items: left;
        gap: 10px;
        font-size: 28px;
        font-family:"29LT Makina";
        color:black;
        text-decoration: none;
        padding: 10px;
        margin: 5px 0;
        }
        .book-list a:hover {
        color: crimson;
        }
        </style>
        </head>
        <body>
        <div id="central">
        <img src="../7anin.png" id="7anin">
        <img src="../ma93ad.png" id="ma93ad" width="200px">
        <div id="list">
        <ul class="list">
        <li><a href="book1.pdf" download>Book One</a></li>
        <li><a href="book2.pdf" download>Book Two</a></li>
        <li><a href="book3.pdf" download>Book Three</a></li>
        </ul>
        </div>
        <div>
        </body>
        </html>
    `);
    thewindow.document.close();
}
function home() {
const width = 680;
const height = 512;
const left = (screen.width / 2) - (width / 2);
const top = (screen.height / 2) - (height / 2);
let thewindow = window.open("", "home", `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no`);
thewindow.document.write(`
<html>
<head>
<title>a home</title>
<style>
@font-face {
font-family: "29LT Makina";
src: url("../29ltmakina.otf") format("otf"),
}
body {
font-family:"29LT Makina";
background-color:black;
color:white;
overflow:hidden;
user-select:grey;
}
#home {
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:680px;
height:512px;
text-align:center;
justify-content:center;
background:url("../imissyou.png");
color:white;
font-size:26;
border:3px;
border-color:white;
border-style:double;
}
#home a {
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
}
</style>
<body>
<div id="home">
<a>test test <br>testfkbiher</a>
</div>
</body>
</html>
`);
}
function regrets() {
const width = 880;
const height = 712;
const left = (screen.width / 2) - (width / 2);
const top = (screen.height / 2) - (height / 2) - 50;
let thewindow = window.open("", "regrets", `width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no`);
thewindow.document.write(`
<html>
<head>
<title>Document</title>
<style>
@font-face {
font-family: "29LT Makina";
src: url("../29ltmakina.otf") format("otf"),
}
body {
font-family:"29LT Makina";
overflow:hidden;
}
#notebook {
position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
}
#regrets {
position: absolute;
top:30px;
left:35px;
transform: rotate(-1deg);
width: 300px;
height: 420px;
overflow-y:auto;
overflow-x: hidden;
white-space-collapse:preserve;
}
#theregrets {
position: absolute;
top:120px;
left:445px;
transform: rotate(1deg);
width: 130px;
height: 180px;
white-space-collapse:preserve;
}
#IAM {
position: absolute;
width: 130px;
height: 180px;
background-color: aqua;
}
</style>
</head>
<body>
<div id="notebook">
<img src="../regrets.png" width="700px">
<div id="regrets">oh god it has happened i am in absolute tears i couldnt even hold my strengh together please god just this one tuime before regret kills me, let me fix what i have done but oh what abou
</div>
<div id="theregrets">"regrets"
<a onclick="" title="but i wasn't">i thought i was better</a>
<a href="">i hope i made u happy</a>
<a href="">that love</a>
</div>
</div> 
<DIV ID="IAM" onclick="IAM()"></DIV> 
<script>
function IAM() {
document.body.innerHTML="<div style='position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);'>all regrets will burn,<br>and leave beneath its ashes grief.</div>";
setTimeout(() => {
window.close();
}, 2000);
}
</script>
</body>
</html>
`);
}
function music() {
if (an8am.paused) {
an8am.play();
ppb.textContent = "[pause]";
} else {
an8am.pause();
ppb.textContent = "[play]";
}
}
function changesong() {
let nextsong;
do {
nextsong = Math.floor(Math.random() * songs.length);
} while (nextsong === lastsong);
lastsong = nextsong;
an8am.src = songs[nextsong];
an8am.load();
an8am.play();
ppb.textContent = "[pause]";
}
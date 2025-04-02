const an8am = document.getElementById("nostalgia");
const ppb = document.getElementById("an8am");
let lastsong = -1;
let songs = [
"song1.mp3",
"song2.mp3",
"song3.mp3",
"song4.mp3"
];
function openwindow() {
let thewindow = window.open("", "thoughts", "width=500,height=464");
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
let thewindow = window.open("", "home", "width=680,height=512");
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
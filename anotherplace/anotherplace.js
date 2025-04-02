const poemofspace = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-image:url(../space.png); text-align:center; color: #f1f1f1;'><br><h1>space</h1><br><br><p>testthingy go brrrrr</p></div>";
};
const poemofmadness = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-image:url(../madness.png); text-align:center; color: #f1f1f1;'><br><h1>madness</h1><br><br><p>testthingy go brrrrr</p></div>";
};
const poemofsomething = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-image:url(../window.png); text-align:center; color: #f1f1f1;'><br><h1>something</h1><br><br><p>testthingy go brrrrr</p></div>";
};
const poemofdistortion = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-image:url(../distortion.png); text-align:center; color: #f1f1f1;'><br><h1>distortion</h1><br><br><p>testthingy go brrrrr</p></div>";
};
const poemofforgetting = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-image:url(../forgetting.png); text-align:center; color: #f1f1f1;'><br><h1>forgetting</h1><br><br><p>testthingy go brrrrr</p></div>";
};
const poemoftheheart = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-image:url(../theheart.jpg); text-align:center; color: #f1f1f1;'><br><h1>the heart</h1><br><br><p>testthingy go brrrrr</p></div>";
};
const poemofavividfever = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-image:url(../window.png); text-align:center; color: #f1f1f1;'><br><h1>a vivid fever</h1><br><br><p>testthingy go brrrrr</p></div>";
};
const poemofREDACTED = function() {
document.getElementById('anotherthought').innerHTML="<div style='width:300px; height:400px; background-color:#000000; text-align:center; color: #f1f1f1;'><br><h1>[REDACTED]</h1><br><br><p>YOUR KIND REFUSED TO GIVE UP, DON'T YOU?<br>YOU ARE ALL HUNGRY, FOR THIS TWISTED KNOWLEDGE, YOU ALL WANT TO KNOW WHAT HAPPENS IF YOU DID THIS AND THAT<br>AND YOU WILL.<br>NEVER.<br>BE.<br>SATIATED.</p></div>";
};
document.addEventListener('DOMContentLoaded', () => {
const THEREDACTED = document.getElementById('THEREDACTED');
let cc = 0;
let t = null;    
THEREDACTED.addEventListener('click', () => {
cc++;       
if (t === null) {
t = setTimeout(() => {
cc = 0;
t = null;
}, 1000);
}
if (cc > 5) {
window.location.href = 'aplace.html'; //you will never stop, won't you?
}
});
});



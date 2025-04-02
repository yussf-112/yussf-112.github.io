window.onload = function() {
var darkness = document.getElementById('darkness');
var opacity = 1;
var interval = setInterval(function() {
opacity -= 0.1;
darkness.style.opacity = opacity;
if (opacity <= 0) {
clearInterval(interval);
darkness.style.display = 'none';
}
}, 300);
};
document.addEventListener('DOMContentLoaded', () => {
const vines = document.getElementById('vines');
let cc = 0;
let t = null;    
vines.addEventListener('click', () => {
cc++;       
if (t === null) {
t = setTimeout(() => {
cc = 0;
t = null;
}, 1000);
}
if (cc > 5) {
window.location.href = 'RESILIENCE.HTML';
}
});
});



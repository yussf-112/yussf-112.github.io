window.onload = function() {
var darkness = document.getElementById('darkness');
var opacity = 1;
var interval = setInterval(function() {
opacity -= 0.1;
darkness.style.opacity = opacity;
if (opacity <= 0) {
clearInterval(interval);
}
}, 300);
};
document.getElementById('flower').addEventListener('click', function() {
window.location.href = 'home.html';
});

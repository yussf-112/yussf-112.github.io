const whisper = document.getElementById('whisper');
window.onload = function() {
whisper.focus();
};
setInterval(function() {
if (document.activeElement !== whisper) {
whisper.focus();
}
}, 100);       
whisper.addEventListener('input', function() {
const noise = this.value.toLowerCase();
if (noise.includes('nostalgia')) {
window.location.href ='noise.html';
}
});

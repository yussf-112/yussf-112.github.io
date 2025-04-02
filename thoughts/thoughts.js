window.onload = function() {
    const whisper = document.getElementById('whisper');
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
    setInterval(function() {
        if (document.activeElement !== whisper) {
        whisper.focus();
        }
        }, 100);       
        whisper.addEventListener('input', function() {
        const noise = this.value.toLowerCase();
        if (noise.includes("light")) {
        window.location.href ='SOMETHOUGHTS.html';
    }
});
};

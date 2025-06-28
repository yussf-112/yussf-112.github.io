const whisper = document.getElementById('whisper');

document.addEventListener('keydown', function(event) {
    if (event.key === 'b' || event.key === 'B') {
        document.getElementById('cd').style.animation="none";
    }
})

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
    if (noise.includes('youknowwellyoushouldnotbehere')) {
        window.location.href = 'NOISY.html';
    } else if (noise.includes('cds')) {
        window.location.href = 'cds.html';
    }
});

// Add this event listener to handle the "b" key press
;


var i = document.getElementById('i');
setTimeout(() => {
i.style.opacity = 0;
var opacity = 0;
i.innerHTML = "i closed my eyes, and i lied on my back <br>i closed my eyes and i listened to the sound of the ocean... <br>i closed my eyes... and i dreamt. <br>                                     i dreamt. <br>                                and dreamt. <br>                               and dreamt. <br>and in the deepest of my ocean... <br>i found you... <br> <br> <br> <br>how strange is it to dream of you while awake... <br> <br> <br>well... even if this dream was to end... i... <br>i hope i made you happy"
var interval = setInterval(() => {
opacity += 0.1;
i.style.opacity = opacity;
if (opacity >= 0.6) {
clearInterval(interval);
}
}, 300);
}, 5000);
setTimeout(() => {
i.innerHTML = "i wish to be free for once. <br> even if it costs me my life."
}, 200000);

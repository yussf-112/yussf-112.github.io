function checkCode() {
    const code = document.getElementById("whispers").value.trim();
    if (code) {
        window.location.href = `../winds/${code}.html`;
    }
    return false; // prevent form submission
}

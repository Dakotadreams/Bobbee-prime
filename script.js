
document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === "2316$$$BjT") {
        document.getElementById('mainApp').style.display = 'block';
        this.style.display = 'none';
    } else {
        alert("Incorrect password.");
    }
});

function sendMessage() {
    const textarea = document.querySelector('textarea');
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = "🔍 Analyzing: " + textarea.value;
    textarea.value = "";
}

function verify() {
    let userRef = "Chillalearchu@gmail.com";
    let passRef = "Archu@2023";
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (user === userRef && pass === passRef) {
        window.location.href = "https://archucalculator.ccbp.tech"
    } else {
        alert("Invalid credentials please try it again")
    }
}

function verify1() {
    let userRef1 = "Chillalearchu@gmail.com";
    let passRef1 = "Archu@2023";
    let user1 = document.getElementById("username1").value;
    let pass1 = document.getElementById("password1").value;
    if (user1 === userRef1 && pass1 === passRef1) {
        window.location.href = "https://archucalculator.ccbp.tech"

    } else {
        alert("Invalid credentials please try it again")
    }
}
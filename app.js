import { auth } from "./firebase-config.js";

document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect
        })
        .catch(error => {
            alert(error.message);
        });
});

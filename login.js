import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert("Logged in successfully! Welcome back " + user.email);
        // Redirect to dashboard after successful login
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert(error.message);
    }
});

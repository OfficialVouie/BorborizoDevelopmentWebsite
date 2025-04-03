import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const signupBtn = document.getElementById('signup-btn');

signupBtn.addEventListener('click', async () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        alert("Signed up successfully! Welcome " + user.email);
        // Redirect to dashboard or home page after successful signup
        window.location.href = 'dashboard.html';
    } catch (error) {
        alert(error.message);
    }
});

import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const userInfo = document.getElementById('user-info');
const logoutBtn = document.getElementById('logout-btn');

// Check if the user is authenticated
onAuthStateChanged(auth, (user) => {
    if (user) {
        userInfo.innerHTML = `Welcome, ${user.email}`;
    } else {
        // If not authenticated, redirect to login
        window.location.href = 'login.html';
    }
});

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = 'login.html'; // Redirect to login page after logout
    }).catch((error) => {
        alert(error.message);
    });
});

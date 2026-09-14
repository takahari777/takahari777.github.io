// Firebaseを読み込む
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";


// Firebaseの設定
const firebaseConfig = {
    apiKey: "AIzaSyAtya08wQZ9q0NfczjDQqsWKGc6jNV2Tfs",
    authDomain: "mikata-plus.firebaseapp.com",
    projectId: "mikata-plus",
    storageBucket: "mikata-plus.firebasestorage.app",
    messagingSenderId: "548714463550",
    appId: "1:548714463550:web:6b8d40da8fc678151bac6f",
    measurementId: "G-PNE63ZZ7YT"
};


// Firebaseを開始
const app = initializeApp(firebaseConfig);

// Firebase Authenticationを開始
const auth = getAuth(app);


// ====================
// 新規登録
// ====================

window.register = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        message.textContent = "アカウントを作成しました！";

        setTimeout(() => {
            location.href = "mypage.html";
        }, 1000);

    } catch (error) {

        console.error(error);

        message.textContent =
            "登録に失敗しました。メールアドレスやパスワードを確認してください。";
    }
};


// ====================
// ログイン
// ====================

window.login = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        message.textContent = "ログインしました！";

        setTimeout(() => {
            location.href = "mypage.html";
        }, 1000);

    } catch (error) {

        console.error(error);

        message.textContent =
            "ログインに失敗しました。メールアドレスやパスワードを確認してください。";
    }
};


// ====================
// ログアウト
// ====================

window.logout = async function () {

    try {

        await signOut(auth);

        location.href = "index.html";

    } catch (error) {

        console.error(error);

    }
};
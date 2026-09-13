function fn1() {
    showPopup("テスト点数管理ツールがクリックされました！");
}

function fn2() {
    showPopup("勉強時間管理ツールがクリックされました！");
}

function showPopup(message) {
    document.getElementById("popup-message").textContent = message;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
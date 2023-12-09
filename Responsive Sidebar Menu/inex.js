const btnMenu = document.querySelector(".btn-menu");
const sidebar = document.querySelector(".sidebar");
const themeBtn = document.querySelector(".theme-btn");
const themeBall = document.querySelector(".theme-ball");

const currentTheme = JSON.parse(localStorage.getItem('theme'));

chnageBtn();
updateLocaleStorage();

if (currentTheme == null) {
    localStorage.setItem("theme", JSON.stringify("light"));
}

btnMenu.addEventListener('click', () => {
    sidebar.classList.toggle('expand');
    chnageBtn();
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBall.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', JSON.stringify('dark'))
    } else {
        localStorage.setItem("theme", JSON.stringify("light"));
    }
});

function chnageBtn() {
    if (sidebar.classList.contains('expand')) {
        btnMenu.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        btnMenu.classList.replace("bx-menu-alt-right", "bx-menu");
    }
}

function updateLocaleStorage() {
    if (currentTheme == 'dark') {
        document.body.classList.add("dark-mode");
        themeBall.classList.add("dark-mode");
    } else if (currentTheme == "light") {
        document.body.classList.remove("dark-mode");
        themeBall.classList.remove("dark-mode");
    }
}
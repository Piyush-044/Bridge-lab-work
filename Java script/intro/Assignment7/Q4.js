const themeButtons = document.querySelectorAll("[data-choice]");
const currentTheme = document.getElementById("currentTheme");

themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const theme = button.getAttribute("data-choice");

        document.body.setAttribute("data-theme", theme);
        document.body.setAttribute("data-current-theme", theme);

        currentTheme.textContent =
            "Current Theme: " +
            theme.charAt(0).toUpperCase() +
            theme.slice(1);
    });
});
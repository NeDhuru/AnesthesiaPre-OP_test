                                     // script.js
function redirectBasedOnLanguage() {
    var language = document.getElementById("languageSelect").value;
    if (language === "english") {
        window.location.href = "english_page.html"; // Redirect to English page
    } else if (language === "spanish") {
        window.location.href = "spanish_page.html"; // Redirect to Spanish page
    }
}

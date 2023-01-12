// I'm more a JS thinker than writer

// An agnostic support for dark mode
const cedricSiteThemeId = "cedric.site.theme"
const rootDataset = document.documentElement.dataset;
const lightMode = 'light';
const darkMode = 'dark';

// Check browser support and default to our theme
// First time page appear
window.onload = function () {
    if (typeof (Storage) !== "undefined") {
        // Retrieve Stored Theme
        const storedTheme = localStorage.getItem(cedricSiteThemeId);

        if (storedTheme == null) {
            const isLightMode = isCurrentThemeLight();
            rootDataset.theme = isLightMode ? lightMode : darkMode;
        } else {
            rootDataset.theme = storedTheme;
        }

        if (rootDataset.theme === lightMode) {
            darkModeSwitch.style.justifyContent = 'flex-start';
            darkModeSwitch.classList.remove('is-dark-mode')
        } else {
            darkModeSwitch.style.justifyContent = 'flex-end';
            darkModeSwitch.classList.add('is-dark-mode')
        }
        localStorage.setItem(cedricSiteThemeId, rootDataset.theme);
    } else {
        console.log("Sorry, your browser does not support Web Storage...");
    }
}


// Get the current device theme
function isCurrentThemeLight() {
    const isPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    return isPrefersLight
}

const darkModeSwitch = document.getElementById('darkmode-toggle');
if (darkModeSwitch != null) {
    darkModeSwitch.addEventListener("click", toggleTheme);
}

// Toggle between light and dark mode
function toggleTheme(e) {
    document.documentElement.classList.add('transition');

    console.log(e.target.checked);
    const storedTheme = localStorage.getItem(cedricSiteThemeId);
    let nextTheme;
    if (storedTheme == null) {
        const isLightMode = isCurrentThemeLight();
        nextTheme = isLightMode ? lightMode : darkMode;
    } else {
        nextTheme = storedTheme == lightMode ? darkMode : lightMode;
    }
    rootDataset.theme = nextTheme;
    localStorage.setItem(cedricSiteThemeId, rootDataset.theme);

    if (rootDataset.theme === darkMode) {
        darkModeSwitch.style.justifyContent = 'flex-end';
    } else {
        darkModeSwitch.style.justifyContent = 'flex-start';
    }
    darkModeSwitch.classList.toggle('is-dark-mode')
}

// The goal is to get the first the clicked link in the navigation section and style it,
// By default (Home page) we're setting and styling the first anchor tag found.
// Need better approach.
const navbar = document.getElementById('navbar')
const inputs = navbar.querySelectorAll("a");
for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].addEventListener("click", styleAnchor);
}

function styleAnchor(e) {
    if (navbar.contains(e.target)) {
        inputs.forEach((el) => {
            el.classList.remove('active')
        })
        e.target.classList.add('active')
    } else {
        console.log("Don't add activity")
    }
}
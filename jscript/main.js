// I'm more a JS thinker than writer

// An agnostic support for dark mode
const cedricSiteThemeId = "cedric.site.theme"
const themeCheckBox = document.getElementById('theme');
themeCheckBox.addEventListener("click", changeTheme);
const rootDataset = document.documentElement.dataset;
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Retrieve Theme
    rootDataset.theme =  localStorage.getItem(cedricSiteThemeId)
  } else {
    console.log("Sorry, your browser does not support Web Storage...");
}
function changeTheme() {
    const inDarkMode = (rootDataset.theme === 'dark');
    rootDataset.theme = inDarkMode ? '' : 'dark';
    // Store Theme
    localStorage.setItem(cedricSiteThemeId, rootDataset.theme);
}

// The goal is to get the first the clicked link in the navigation section and style it,
// By default (Home page) we're setting and styling the first anchor tag found.
// Need better approach.
const navbar = document.getElementById('navbar')
const inputs = navbar.querySelectorAll("a");                               
for(let i = 0; i < inputs.length-1; i++){
   inputs[i].addEventListener("click", styleAnchor);
}

function styleAnchor(e) {
    if (navbar.contains(e.target)) {
        inputs.forEach((el) =>  {
            el.classList.remove('active')
        })
        e.target.classList.add('active')   
    } else {
        console.log("Don't add activity")
    }
}

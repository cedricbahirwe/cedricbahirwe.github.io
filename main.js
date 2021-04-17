window.onscroll = function() { scrollUpdater() };

// Get the navbar
var navbar = document.getElementsByTagName("header")[0];
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollUpdater() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


var blogposts = document.getElementsByClassName("blog-post");
console.log(blogposts.length)
for (var i = 0, len = blogposts.length | 0; i < len; i = i + 1 | 0) {
    const hr = document.createElement("hr")
    blogposts[i].appendChild(hr);
}
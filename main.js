function addHorizontalLines() {
    var blogposts = document.getElementsByClassName("blog-post");
    console.log(blogposts.length)
    for (var i = 0, len = blogposts.length | 0; i < len; i = i + 1 | 0) {
        const hr = document.createElement("hr")
        blogposts[i].appendChild(hr);
    }
}

addHorizontalLines()
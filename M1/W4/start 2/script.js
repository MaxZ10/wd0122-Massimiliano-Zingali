const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// SLIDER

function scrollLeft() {
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-350,0)

}

function scrollRight() {
    var right = document.querySelector(".scroll-images");
    right.scrollBy(80,0)
}
// loader page
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader)
    })

    setTimeout(() => {
        loader.classList.add("loader--hidden");
    }, 2000)
})

// open & close menu bar

let barIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".markCloseBar");
let menuBar = document.querySelector(".visible-page-menu");

console.log

barIcon.onclick = function () {
    menuBar.style.display = "block";
}
closeIcon.onclick = function () {
    menuBar.style.display = "none";
}

const audioOpen = new Audio();
audioOpen.src = "../sound/open.mp3";

const audioClose = new Audio();
audioClose.src = "../sound/close.mp3";


// *************************************
// open & close menu side bar

let sideBarIcon = document.querySelector(".fa-list-ul");
let closeSideIcon = document.querySelector(".markCloseSideBar");
let menuSideBar = document.querySelector(".submenu");





sideBarIcon.onclick = function () {
    menuSideBar.style.display = "block";
}
closeSideIcon.onclick = function () {
    menuSideBar.style.display = "none";
}






TweenMax.from("h1", 1, {
    opacity: 0,
    ease: Expo.easeInOut
}, 0.8)

TweenMax.staggerFrom(".description", 1, {
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.15)

TweenMax.from("h2", 1, {
    opacity: 0,
    delay: 1,
    x: 40,
    ease: Expo.easeInOut
})


TweenMax.from("p", 1, {
    opacity: 0,
    delay: .5,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".team", 1, {
    opacity: 0,
    delay: .1,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".pro", 1, {
    opacity: 0,
    delay: 1,
    x: 20,
    ease: Expo.easeInOut
})

TweenMax.from("form", 1, {
    opacity: 0,
    delay: 1.6,
    x: -20,
    ease: Expo.easeInOut
})


// const themeBtn = document.querySelector("#theme-changer");
const body = document.querySelector("body");
const nav = document.querySelector("#nav-wrapper");
const navIconBars = document.querySelector(".fa-bars");
const navIconCross = document.querySelector("#cross");

body.classList.add("light-theme"); // default theme

// THEME
// themeBtn.addEventListener("click", (e) => {
//     if (body.classList.contains("light-theme")) {
//         body.classList.remove("light-theme");
//         body.classList.add("dark-theme");
//     } else {
//         body.classList.remove("dark-theme");
//         body.classList.add("light-theme");
//     }
//     themeBtn.classList.toggle("fa-moon");
//     themeBtn.classList.toggle("fa-sun");
// });

// NAVBAR
navIconBars.addEventListener("click", toggleNav);
navIconCross.addEventListener("click", toggleNav);

function toggleNav() {
    nav.classList.toggle("shownav");
}


const deleteButtons = document.querySelectorAll(".deletePlace-btn");

deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
        const confirmation = confirm("Are you sure to delete this?");
        if (confirmation) {
            const form = this.nextElementSibling; 
            form.submit(); 
        }
    });
});

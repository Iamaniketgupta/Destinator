
const nav = document.querySelector("#nav-wrapper");
const navIconBars = document.querySelector(".fa-bars");
const navIconCross = document.querySelector("#cross");
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
            const form = document.getElementById("delform"); 
            form.submit(); 
        }
    });
});

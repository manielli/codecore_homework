document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".char-box").forEach( node => {
        node.addEventListener("click", event => {
            // console.log(event.currentTarget);
            event.currentTarget.classList.add("clickedLetter");
        });
    });
});
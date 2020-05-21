const headings = document.querySelectorAll(".multicontainer > .heading")
headings.forEach(e => e.addEventListener("click", ev => {
    if (e.classList.contains("open")) e.classList.remove("open");
    else
    {
        headings.forEach(h => h.classList.remove("open"));
        e.classList.add("open");
    }
}));
document.getElementById("menubtn").addEventListener("click", () => {
    document.querySelector("#titlebar nav").classList.toggle("open");
})
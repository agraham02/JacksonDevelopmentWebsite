const moreText = document.getElementById("more");

function toggleExpand(btn, ID) {
    const moreBtn = btn;
    const toExpand = document.getElementById(ID);

    toExpand.classList.toggle("open");

    if (toExpand.classList.contains("open")) {
        toExpand.style.display = "block";
        btn.innerHTML = "close";
    } else {
        toExpand.style.display = "none";
        btn.innerHTML = "more...";
    }
}
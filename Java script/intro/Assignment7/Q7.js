const mouseBox = document.getElementById("mouseBox");
const coordinates = document.getElementById("coordinates");

mouseBox.addEventListener("mousemove", function (event) {
    const boxPosition = mouseBox.getBoundingClientRect();

    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    coordinates.textContent =
        "clientX: " + event.clientX +
        ", clientY: " + event.clientY +
        " | Box X: " + Math.round(x) +
        ", Box Y: " + Math.round(y);
});

mouseBox.addEventListener("dblclick", function (event) {
    const boxPosition = mouseBox.getBoundingClientRect();

    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    const dot = document.createElement("div");

    dot.className = "dot";
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    mouseBox.appendChild(dot);
});
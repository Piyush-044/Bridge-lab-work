const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const largeImage = document.getElementById("largeImage");

const images = [
    "photo-1500530855697-b586d89ba3ee",
    "photo-1470770841072-f978cf4d019e",
    "photo-1501785888041-af3ef285b470",
    "photo-1470252649378-9c29740c9fa8",
    "photo-1441974231531-c6227db76b6e",
    "photo-1518837695005-2083093ee35b"
];

images.forEach(function (imageName) {
    const image = document.createElement("img");

    image.src =
        "https://images.unsplash.com/" +
        imageName +
        "?auto=format&fit=crop&w=500&q=80";

    image.alt = "Gallery image";

    gallery.appendChild(image);
});

gallery.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
        largeImage.src = event.target.src;
        modal.style.display = "flex";
    }
});

largeImage.addEventListener("click", function (event) {
    event.stopPropagation();
});

modal.addEventListener("click", function () {
    modal.style.display = "none";
});
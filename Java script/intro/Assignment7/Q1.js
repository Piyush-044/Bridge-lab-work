const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const listItem = document.createElement("li");
    const productText = document.createElement("span");

    productText.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    listItem.append(productText, editButton, deleteButton);
    productList.appendChild(listItem);

    productInput.value = "";
}

addButton.addEventListener("click", addProduct);

// Event delegation: handle buttons through the parent list.
productList.addEventListener("click", function (event) {
    const listItem = event.target.closest("li");

    if (!listItem) {
        return;
    }

    if (event.target.textContent === "Delete") {
        listItem.remove();
    }

    if (event.target.textContent === "Edit") {
        const productText = listItem.querySelector("span");

        if (listItem.querySelector("input")) {
            return;
        }

        const editInput = document.createElement("input");
        editInput.value = productText.textContent;

        productText.replaceWith(editInput);
        editInput.focus();

        function saveEdit() {
            if (!editInput.isConnected) {
                return;
            }

            const updatedText = document.createElement("span");
            updatedText.textContent =
                editInput.value.trim() || "Unnamed Product";

            editInput.replaceWith(updatedText);
        }

        editInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                saveEdit();
            }
        });

        // Clicking outside the edited input saves automatically.
        document.addEventListener("click", function outsideClick(e) {
            if (!listItem.contains(e.target)) {
                saveEdit();
                document.removeEventListener("click", outsideClick);
            }
        });
    }
});
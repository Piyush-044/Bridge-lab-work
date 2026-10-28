const search = document.getElementById("search");
const studentTable = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

search.addEventListener("input", function () {
    const searchValue = search.value.toLowerCase().trim();
    const rows = studentTable.querySelectorAll("tr");

    let visibleRows = 0;

    rows.forEach(function (row) {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
            visibleRows++;
        } else {
            row.style.display = "none";
        }
    });

    noResults.hidden = visibleRows !== 0;
});
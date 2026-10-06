const buttons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        const targetPanel = document.getElementById(targetId);

        if (!targetPanel) {
            return;
        }

        buttons.forEach((item) => item.classList.remove("active"));
        panels.forEach((panel) => panel.classList.remove("active"));

        button.classList.add("active");
        targetPanel.classList.add("active");

        const categoryNav = document.querySelector(".category-nav");

        if (categoryNav) {
            window.scrollTo({
                top: categoryNav.offsetTop - 74,
                behavior: "smooth"
            });
        }
    });
});

const masterSearch = document.getElementById("master-search");
const masterRows = document.querySelectorAll("#master-table tbody tr");

if (masterSearch) {
    masterSearch.addEventListener("input", () => {
        const query = masterSearch.value.trim().toLowerCase();

        masterRows.forEach((row) => {
            const rowText = row.textContent.toLowerCase();
            row.classList.toggle("hidden-row", !rowText.includes(query));
        });
    });
}

const niceToHaveButtons = document.querySelectorAll(".nice-to-have-button");

niceToHaveButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("aria-controls");
        const targetRow = document.getElementById(targetId);

        if (!targetRow) {
            return;
        }

        const isOpen = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isOpen));
        button.textContent = isOpen ? "Optional +" : "Optional −";
        targetRow.hidden = isOpen;
    });
});
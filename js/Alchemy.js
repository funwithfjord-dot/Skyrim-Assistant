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

// Nice-to-Haves: only one optional group open at a time.
const niceToHaveButtons = document.querySelectorAll(
    ".nice-to-have-button"
);

function setOptionalExpanded(button, expanded) {
    const targetId = button.getAttribute("aria-controls");
    const targetGroup = document.getElementById(targetId);

    if (!targetGroup) {
        return;
    }

    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Optional −" : "Optional +";
    targetGroup.hidden = !expanded;
}

// Start with all optional groups closed.
niceToHaveButtons.forEach((button) => {
    setOptionalExpanded(button, false);
});

niceToHaveButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("aria-controls");
        const targetGroup = document.getElementById(targetId);

        if (!targetGroup) {
            return;
        }

        // Remember the clicked group's state before closing all groups.
        const shouldOpen = targetGroup.hidden;

        niceToHaveButtons.forEach((otherButton) => {
            setOptionalExpanded(otherButton, false);
        });

        if (shouldOpen) {
            setOptionalExpanded(button, true);
        }
    });
});
// Custom Scripts
const tabButtons = document.querySelectorAll(".tabs__nav-item");
const tabItems = document.querySelectorAll(".tabs__item");

function toggleTab(index) {
    tabItems.forEach((item, i) => {
        item.classList.toggle("hide", i !== index);
    });

    tabButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
}

function initializeTabs() {
    tabButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            toggleTab(index);
        });
    });
}

// Initialize tabs
initializeTabs();
toggleTab(0);


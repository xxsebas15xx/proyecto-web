console.log("Saludos desde feature/cambios-saludo");

const menu = document.querySelector("#menu");
const header = document.querySelector("header");
const menuItems = [
    { label: "Inicio", target: "#inicio" },
    { label: "Servicios", target: "#servicios" },
    { label: "Contacto", target: "#contacto" }
];

const menuToggle = document.createElement("button");
menuToggle.type = "button";
menuToggle.textContent = "Menú";
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-controls", "menu");
menuToggle.classList.add("menu-toggle");
header.insertBefore(menuToggle, menu);

const menuList = document.createElement("ul");

menuItems.forEach(({ label, target }) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.href = target;
    link.textContent = label;
    listItem.appendChild(link);
    menuList.appendChild(listItem);
});

menu.setAttribute("aria-label", "Navegación principal");
menu.appendChild(menuList);

menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
        menu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    }
});
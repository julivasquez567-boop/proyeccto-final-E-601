document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("modoBtn");

    // Recuperar el modo guardado
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark");
        btn.textContent = "☀️";
    }

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            btn.textContent = "☀️";
            localStorage.setItem("modo", "oscuro");
        } else {
            btn.textContent = "🌙";
            localStorage.setItem("modo", "claro");
        }
    });
});

// BOTÓN VOLVER ARRIBA

const btnArriba = document.getElementById("arriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
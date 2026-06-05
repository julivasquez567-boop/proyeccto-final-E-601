document.addEventListener("DOMContentLoaded", () => {

```
// BOTÓN VOLVER ARRIBA
const btnArriba = document.getElementById("arriba");

if (btnArriba) {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btnArriba.style.display = "flex";
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
}

// MODO OSCURO
const modoBtn = document.getElementById("modoBtn");

if (modoBtn) {

    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark");
        modoBtn.textContent = "☀️";
    }

    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("modo", "oscuro");
            modoBtn.textContent = "☀️";
        } else {
            localStorage.setItem("modo", "claro");
            modoBtn.textContent = "🌙";
        }
    });
}
```

});

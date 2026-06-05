document.addEventListener("DOMContentLoaded", () => {

    const modoBtn = document.getElementById("modoBtn");

    console.log("Botón encontrado:", modoBtn);

    if(modoBtn){

        modoBtn.addEventListener("click", () => {

            console.log("Click detectado");

            document.body.classList.toggle("dark");

        });

    }

});

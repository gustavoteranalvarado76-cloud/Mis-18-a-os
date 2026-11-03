document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // ABRIR INVITACIÓN
    // =====================================

    const portada = document.getElementById("portada");
    const invitacion = document.getElementById("invitacion");
    const botonInvitacion = document.getElementById("botonInvitacion");

    botonInvitacion.addEventListener("click", function () {
        portada.style.display = "none";
        invitacion.classList.remove("oculto");
        window.scrollTo(0, 0);
    });


    // =====================================
    // CONTADOR REGRESIVO
    // =====================================

    const fechaEvento = new Date(2027, 0, 9, 15, 30, 0).getTime();

    function actualizarContador() {

        const ahora = new Date().getTime();
        const diferencia = fechaEvento - ahora;

        if (diferencia <= 0) {
            document.getElementById("dias").textContent = "00";
            document.getElementById("horas").textContent = "00";
            document.getElementById("minutos").textContent = "00";
            document.getElementById("segundos").textContent = "00";
            return;
        }

        const dias = Math.floor(diferencia / 86400000);
        const horas = Math.floor((diferencia % 86400000) / 3600000);
        const minutos = Math.floor((diferencia % 3600000) / 60000);
        const segundos = Math.floor((diferencia % 60000) / 1000);

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = String(horas).padStart(2, "0");
        document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
        document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
    }

    actualizarContador();
    setInterval(actualizarContador, 1000);


    // =====================================
    // CARRUSEL DE 4 FOTOGRAFÍAS
    // =====================================

    const fotos = [
        "foto1.jpg.jpeg",
        "foto2.jpg.jpeg",
        "foto3.jpg.jpeg",
        "foto4.jpg.jpeg"
    ];

    let indiceActual = 0;

    const fotoCarrusel = document.getElementById("fotoCarrusel");
    const indicadores = document.getElementById("indicadores");
    const botonAnterior = document.getElementById("anterior");
    const botonSiguiente = document.getElementById("siguiente");
    const numeroFoto = document.getElementById("numeroFoto");

    // Precargar las cuatro fotografías
    fotos.forEach(function (nombre) {
        const imagen = new Image();
        imagen.src = nombre;
    });

    function mostrarFoto() {

        fotoCarrusel.src = fotos[indiceActual];
        fotoCarrusel.alt = "Fotografía " + (indiceActual + 1) + " de Gustavo";

        numeroFoto.textContent = (indiceActual + 1) + " / " + fotos.length;

        indicadores.innerHTML = "";

        fotos.forEach(function (nombre, indice) {

            const punto = document.createElement("button");

            punto.type = "button";
            punto.className = "indicador";
            punto.setAttribute("aria-label", "Ver fotografía " + (indice + 1));

            if (indice === indiceActual) {
                punto.classList.add("activo");
            }

            punto.addEventListener("click", function () {
                indiceActual = indice;
                mostrarFoto();
            });

            indicadores.appendChild(punto);
        });
    }

    // Fotografía anterior
    botonAnterior.addEventListener("click", function () {

        indiceActual--;

        if (indiceActual < 0) {
            indiceActual = fotos.length - 1;
        }

        mostrarFoto();
    });

    // Fotografía siguiente
    botonSiguiente.addEventListener("click", function () {

        indiceActual++;

        if (indiceActual >= fotos.length) {
            indiceActual = 0;
        }

        mostrarFoto();
    });

    

});
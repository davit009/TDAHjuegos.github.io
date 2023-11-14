document.addEventListener("DOMContentLoaded", () => {
  let arrastrables = document.querySelectorAll(".arrastrable");
  let areaConductores = document.getElementById("areaConductores");
  let areaAislantes = document.getElementById("areaAislantes");

  // Contadores para los elementos colocados correctamente
  let contadorConductores = 0;
  let contadorAislantes = 0;

  arrastrables.forEach((arrastrable) => {
      arrastrable.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", e.target.id);
      });
  });

  // Función para verificar si todos los elementos han sido colocados correctamente
  function verificarColocacionCorrecta() {
    const totalConductores = document.querySelectorAll(".arrastrable[data-tipo='conductor']").length;
    const totalAislantes = document.querySelectorAll(".arrastrable[data-tipo='aislante']").length;

    if (contadorConductores === totalConductores && contadorAislantes === totalAislantes) {
        // Mostrar la imagen de felicitaciones
        document.getElementById("mensajeFelicitaciones").style.display = "block";

        setTimeout(() => {
            window.location.href = "../../fisica.html#menu"; // Cambia esto a la URL que prefieras
        }, 3000);
    }
}

  [areaConductores, areaAislantes].forEach((contenedor) => {
      contenedor.addEventListener("dragover", (e) => {
          e.preventDefault();
      });

      contenedor.addEventListener("drop", (e) => {
          e.preventDefault();
          const id = e.dataTransfer.getData("text/plain");
          const arrastrable = document.getElementById(id);
          const tipoObjeto = arrastrable.getAttribute("data-tipo");

          if (tipoObjeto === "conductor" && e.target.id === "areaConductores") {
              e.target.appendChild(arrastrable);
              contadorConductores++;
          } else if (tipoObjeto === "aislante" && e.target.id === "areaAislantes") {
              e.target.appendChild(arrastrable);
              contadorAislantes++;
          } else {
              // Mostrar advertencias si es necesario
              var advertencia = document.getElementById("advertencia");
              advertencia.textContent = "Objeto no corresponde a esta área";
              advertencia.style.display = "block";

              setTimeout(function () {
                  advertencia.style.display = "none";
              }, 2000);
          }

          verificarColocacionCorrecta();
      });
  });
});

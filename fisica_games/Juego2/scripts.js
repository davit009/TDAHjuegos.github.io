document.addEventListener("DOMContentLoaded", () => {
  let arrastrables = document.querySelectorAll(".arrastrable");
  let contenedores = document.querySelectorAll(".contenedor");

  arrastrables.forEach((arrastrable) => {
    arrastrable.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });
  });

  contenedores.forEach((contenedor) => {
    contenedor.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    contenedor.addEventListener("drop", (e) => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const arrastrable = document.getElementById(id);
      const tipoObjeto = arrastrable.getAttribute("data-tipo");

      if (
        (tipoObjeto === "conductor" && e.target.id === "areaConductores") ||
        (tipoObjeto === "aislante" && e.target.id === "areaAislantes")
      ) {
        e.target.appendChild(arrastrable);
      } else if (tipoObjeto === "conductor") {
        console.log("El conductor no puede ir en el área de aislantes");
        var advertencia = document.getElementById("advertencia");
        advertencia.textContent =
          "El conductor no puede ir en el área de aislantes"; // Cambia el mensaje
        advertencia.style.display = "block";

        setTimeout(function () {
          advertencia.style.display = "none";
        }, 2000); // Ajusta este valor según tus necesidades
      } else if (tipoObjeto === "aislante") {
        console.log("El aislante no puede ir en el área de conductores");
        var advertencia = document.getElementById("advertencia");
        advertencia.textContent =
          "El aislante no puede ir en el área de conductores"; // Cambia el mensaje
        advertencia.style.display = "block";

        setTimeout(function () {
          advertencia.style.display = "none";
        }, 2000); // Ajusta este valor según tus necesidades
      } else {
        console.log("Objeto no corresponde a esta área");
        var advertenciag = document.getElementById("advertenciag");
        advertenciag.textContent = "Objeto no corresponde a esta área"; // Mensaje general
        advertenciag.style.display = "block";

        setTimeout(function () {
          advertencia.style.display = "none";
        }, 2000); // Ajusta este valor según tus necesidades
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const contenedorProyectos = document.getElementById("galeria-proyectos");

    fetch("../data/proyectos.json")
        .then(respuesta => respuesta.json())
        .then(proyectos => {
            proyectos.forEach(proyecto => {
                const tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta-proyecto");

                tarjeta.innerHTML = `
          <img src="${proyecto.imagen}" alt="${proyecto.titulo}">
          <div class="info">
            <h3>${proyecto.titulo}</h3>
            <p>${proyecto.descripcion}</p>
            <div class="enlaces">
              <a href="${proyecto.github}" target="_blank">Código</a>
              <a href="${proyecto.demo}" target="_blank">Ver página</a>
            </div>
          </div>
        `;

                contenedorProyectos.appendChild(tarjeta);
            });
        })
        .catch(error => {
            console.error("Error al cargar los proyectos:", error);
            contenedorProyectos.innerHTML = "<p>Error al cargar los proyectos.</p>";
        });
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => cargarContenido(data))
    .catch((err) => console.error("Error al cargar la API:", err));
});

function cargarContenido(data) {
  // Acerca de mí
  document.getElementById("info__acerca").textContent = data.acercaDeMi.descripcion;

  // Proyectos
  const contenedorProyectos = document.getElementById("contenedor__proyectos");
  data.proyectos.forEach((proyecto) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta__proyecto";
    tarjeta.innerHTML = `
      <div class="tarjeta__carta">
        <div class="tarjeta__frente">
          <img src="${proyecto.imagen}" alt="${proyecto.titulo}" />
        </div>
        <div class="tarjeta__atras">
          <h3>${proyecto.titulo}</h3>
          <p>${proyecto.descripcion}</p>
          <a href="${proyecto.enlace}" target="_blank">Ver código</a>
        </div>
      </div>
    `;
    contenedorProyectos.appendChild(tarjeta);
  });

  // Competencias
  const listaCompetencias = document.getElementById("lista__competencias");
  data.competencias.forEach((comp) => {
    const li = document.createElement("li");
    li.textContent = comp;
    listaCompetencias.appendChild(li);
  });

  // Habilidades
  const listaHabilidades = document.getElementById("lista__habilidades");
  data.habilidades.forEach((hab) => {
    const li = document.createElement("li");
    li.textContent = hab;
    listaHabilidades.appendChild(li);
  });

  // Contacto
  document.getElementById("contacto__github").textContent = data.contacto.github;
  document.getElementById("contacto__github").href = data.contacto.github;

  document.getElementById("contacto__linkedin").textContent = data.contacto.linkedin;
  document.getElementById("contacto__linkedin").href = data.contacto.linkedin;

  document.getElementById("contacto__email").textContent = data.contacto.email;
}

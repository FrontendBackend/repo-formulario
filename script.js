let filaActual = null;

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  const fila = document.createElement("tr");
  fila.innerHTML = `<td>${nombre}</td><td>${apellido}</td>
    <td>
      <button onclick="editarFila(this)">Editar</button>
      <button onclick="eliminarFila(this)">Eliminar</button>
    </td>`;
  document.querySelector("#tabla tbody").appendChild(fila);
  this.reset();
});

function eliminarFila(boton) {
  const fila = boton.closest("tr");
  fila.remove();
}

function editarFila(boton) {
  filaActual = boton.closest("tr");
  const celdas = filaActual.querySelectorAll("td");
  document.getElementById("edit-nombre").value = celdas[0].textContent;
  document.getElementById("edit-apellido").value = celdas[1].textContent;
  document.getElementById("popup").style.display = "flex";
}

function guardarEdicion() {
  const nuevoNombre = document.getElementById("edit-nombre").value;
  const nuevoApellido = document.getElementById("edit-apellido").value;
  const celdas = filaActual.querySelectorAll("td");
  celdas[0].textContent = nuevoNombre;
  celdas[1].textContent = nuevoApellido;
  cerrarPopup();
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

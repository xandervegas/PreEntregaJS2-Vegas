// Array para almacenar los estudiantes
let estudiantes = [];

// Función para agregar estudiantes
function agregarEstudiante() {
  let nombre = prompt("Ingresa el nombre del estudiante:");
  let notas = [];

  // Solicitar 5 notas y validar que sean números
  for (let i = 0; i < 5; i++) {
    let nota;
    do {
      nota = parseFloat(prompt("Ingresa la nota " + (i + 1) + " (solo números):"));
      if (isNaN(nota)) {
        alert("Por favor, ingresa un número válido.");
      }
    } while (isNaN(nota));  // Repite hasta que se ingrese un número válido
    notas.push(nota);
  }

  // Calcular el promedio de las 5 notas
  let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;

  // Crear el objeto estudiante y agregarlo al array
  let estudiante = { nombre: nombre, notas: notas, promedio: promedio };
  estudiantes.push(estudiante);

  alert("Estudiante agregado: " + nombre + " con promedio: " + promedio.toFixed(2));
}

// Función para mostrar todos los estudiantes
function mostrarEstudiantes() {
  if (estudiantes.length === 0) {
    alert("No hay estudiantes registrados.");
  } else {
    let mensaje = "Lista de estudiantes:\n";
    estudiantes.forEach((estudiante, index) => {
      mensaje += (index + 1) + ". " + estudiante.nombre + " - Promedio: " + estudiante.promedio.toFixed(2) + "\n";
    });
    alert(mensaje);
  }
}

// Función para eliminar un estudiante por nombre
function eliminarEstudiante() {
  let nombre = prompt("Ingresa el nombre del estudiante que deseas eliminar:");
  let indice = estudiantes.findIndex(estudiante => estudiante.nombre === nombre);

  if (indice !== -1) {
    estudiantes.splice(indice, 1);
    alert("Estudiante eliminado: " + nombre);
  } else {
    alert("Estudiante no encontrado.");
  }
}

// Función para filtrar estudiantes con promedio mayor a un valor dado
function filtrarEstudiantes() {
  let promedioMinimo = parseFloat(prompt("Ingresa el promedio mínimo para filtrar:"));
  
  if (isNaN(promedioMinimo)) {
    alert("Por favor, ingresa un número válido.");
  } else {
    let estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.promedio >= promedioMinimo);
    
    if (estudiantesFiltrados.length === 0) {
      alert("No hay estudiantes con un promedio mayor o igual a " + promedioMinimo);
    } else {
      let mensaje = "Estudiantes con promedio mayor o igual a " + promedioMinimo + ":\n";
      estudiantesFiltrados.forEach(estudiante => {
        mensaje += estudiante.nombre + " - Promedio: " + estudiante.promedio.toFixed(2) + "\n";
      });
      alert(mensaje);
    }
  }
}

// Función principal del simulador
function simulador() {
  let opcion;
  do {
    opcion = prompt(
      "Simulador de notas\n1. Agregar estudiante\n2. Mostrar estudiantes\n3. Eliminar estudiante\n4. Filtrar estudiantes por promedio\n5. Salir\n\nElige una opción:"
    );

    switch (opcion) {
      case "1":
        agregarEstudiante();
        break;
      case "2":
        mostrarEstudiantes();
        break;
      case "3":
        eliminarEstudiante();
        break;
      case "4":
        filtrarEstudiantes();
        break;
      case "5":
        alert("Saliendo del simulador...");
        break;
      default:
        alert("Opción no válida, intenta nuevamente.");
    }
  } while (opcion !== "5");
}

// Ejecutar el simulador
simulador();


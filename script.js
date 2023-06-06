const endpointUrl2 = 'https://pokeapi.co/api/v2/ability/';
var arreglo = [];
var numRandom = [];

window.jsPDF = window.jspdf.jsPDF;

fetch(endpointUrl2)
.then(response => {
 if (!response.ok) {
throw new Error('Error en la petición');
 }
return response.json();
})
 .then(data => {
 //Procesar la respuesta
console.log('Respuesta:', data);
   // console.log(data.results[1].name);
   
   for (var i = 0; i < data.results.length; i++) {
   // console.log(data.results[i].name);
   arreglo [i] = data.results[i].name;
   numRandom [i] = Math.floor(100000 + Math.random() * 900000);
  //  console.log(numRandom[i]);
  //  console.log(arreglo[i]);
   }
 })
 .catch(error => {
   console.error('Error:', error);
 });



const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/';

fetch(endpointUrl)
 .then(response => {
  if (!response.ok) {
 throw new Error('Error en la petición');
  }
 return response.json();
})
  .then(data => {
  //Procesar la respuesta
console.log('Respuesta:', data);
    // console.log(data.results[1].name);
    // var arreglo = [];
    for (var i = 0; i < data.results.length; i++) {
    // console.log(data.results[i].name);
    // agregarEmpleado(i+1, data.results[i].name, arreglo[i], "9984"+ numRandom[i], data.results[i].url);
    agregarEmpleado(i+1, data.results[i].name, arreglo[i], "9984"+ numRandom[i], data.results[i].name+"_"+arreglo[i]+"@example.com");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

//METODO GET
const endpointUrlGET = 'http://amazon.com/personal/';

fetch(endpointUrlGET)
 .then(response => {
  if (!response.ok) {
 throw new Error('Error en la petición');
  }
 return response.json();
})
  .then(data => {
  //Procesar la respuesta
console.log('Respuesta:', data);
    for (var i = 0; i < data.results.length; i++) {
    agregarEmpleado(data.results[i].id, data.results[i].name, data.results[i].apellido, data.results[i].email, data.results[i].password);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

//METODO POST
document.getElementById('btnEnviar').addEventListener('click', function() {
  // Obtener la referencia a la tabla
  var tabla = document.getElementById('cuerpo-registros');

  // Crear un array para almacenar los objetos de datos
  var datos = [];

  // Recorrer las filas de la tabla (excepto la fila de encabezado)
  for (var i = 1; i < tabla.rows.length; i++) {
    var fila = tabla.rows[i];
    var id = fila.cells[0].innerHTML;
    var nombre = fila.cells[1].innerText;
    var apellido = fila.cells[2].innerText;
    var asistio = fila.cells[3].innerHTML;
    //if
    var fecha = fila.cells[4].innerText;

    // Crear un objeto con los datos de la fila
    var filaData = {
      id: id,
      nombre: nombre,
      apellido: apellido,
      asistio: asistio,
      fecha: fecha
    };

    // Agregar el objeto al array de datos
    datos.push(filaData);
  }

  // Enviar los datos en una solicitud POST
  enviarDatos(datos);
});

function enviarDatos(datos) {
  var url = 'http://amazoin.com/personal/send-lista/'; // URL del punto de extremo de la API

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos),
  })
    .then(response => response.json())
    .then(result => {
      console.log('Respuesta del servidor:', result);
      // Hacer algo con la respuesta del servidor
    })
    .catch(error => {
      console.error('Error:', error);
      // Manejar el error de la solicitud
    });
}




      // Función para obtener la fecha y hora actual en el formato deseado
    function obtenerFechaHoraActual() {
      var fechaHora = new Date();
      var fecha = fechaHora.toLocaleDateString();
      var hora = fechaHora.toLocaleTimeString();
      return fecha + " - " + hora;
    }

    // Función para agregar un empleado a la tabla de empleados
    function agregarEmpleado(id, nombre, apellidos, telefono, email) {
      var cuerpoTabla = document.getElementById("cuerpo-tabla");
      var fila = cuerpoTabla.insertRow();
      var celdaId = fila.insertCell();
      var celdaNombre = fila.insertCell();
      var celdaApellidos = fila.insertCell();
      var celdaTelefono = fila.insertCell();
      var celdaEmail = fila.insertCell();

      celdaId.innerHTML = id;
      celdaNombre.innerHTML = nombre;
      celdaApellidos.innerHTML = apellidos;
      celdaTelefono.innerHTML = telefono;
      celdaEmail.innerHTML = email;


      fila.addEventListener("click", function() {
        mostrarDetallesEmpleado(id, nombre, apellidos, telefono, email);
      });
      fila.addEventListener("click", function() {
        // Remover la clase 'selected' de todas las filas
        var filas = cuerpoTabla.getElementsByTagName("tr");
        for (var i = 0; i < filas.length; i++) {
          filas[i].classList.remove("selected");
        }
    
        // Agregar la clase 'selected' a la fila seleccionada
        fila.classList.add("selected");
    
        // Mostrar los detalles del empleado
        mostrarDetallesEmpleado(id, nombre, apellidos, telefono, email);
      });
    }

    // Función para mostrar los detalles del empleado seleccionado
    function mostrarDetallesEmpleado(id, nombre, apellidos, telefono, email) {
      document.getElementById("detalle-id").textContent = id;
      document.getElementById("detalle-nombre").textContent = nombre;
      document.getElementById("detalle-apellidos").textContent = apellidos;
      document.getElementById("detalle-telefono").textContent = telefono;
      document.getElementById("detalle-email").textContent = email;
    }


// Función para registrar la asistencia del empleado y eliminar la fila de la tabla de empleados
function registrarAsistencia(asistencia) {
  // Verificar si los campos están vacíos
if (
  document.getElementById("detalle-id").textContent === "" &&
  document.getElementById("detalle-nombre").textContent === "" &&
  document.getElementById("detalle-apellidos").textContent === ""
) {
  alert("No se registró asistencia. Por favor, selecciona un empleado.");
} else {
  var nombreEmpleado = document.getElementById("detalle-nombre").textContent;
  var idEmpleado = document.getElementById("detalle-id").textContent;
  var fechaHoraActual = obtenerFechaHoraActual();

// Agregar fila a la tabla de registros
var cuerpoRegistros = document.getElementById("cuerpo-registros");
var tablaRegistros = document.getElementById("tabla-registros");
var filaRegistros = document.createElement("tr");
var celdaIDRegistros = document.createElement("td");
var celdaNombreRegistros = document.createElement("td");
var celdaApellidosRegistros = document.createElement("td");
var celdaAsistenciaRegistros = document.createElement("td");
var celdaFechaHoraRegistros = document.createElement("td");

celdaIDRegistros.textContent = idEmpleado;
celdaNombreRegistros.textContent = nombreEmpleado;
celdaApellidosRegistros.textContent = document.getElementById("detalle-apellidos").textContent;
celdaAsistenciaRegistros.textContent = asistencia;
celdaFechaHoraRegistros.textContent = fechaHoraActual;

filaRegistros.appendChild(celdaIDRegistros);
filaRegistros.appendChild(celdaNombreRegistros);
filaRegistros.appendChild(celdaApellidosRegistros);
filaRegistros.appendChild(celdaAsistenciaRegistros);
filaRegistros.appendChild(celdaFechaHoraRegistros);
cuerpoRegistros.appendChild(filaRegistros);

// Ajustar estilos del contenedor de la tabla de registros
// var contenedorRegistros = document.getElementById("contenedor-registros");
// contenedorRegistros.style.overflowY = "scroll";
// // contenedorRegistros.style.height = "600px"; // Ajusta la altura según sea necesario
// // contenedorRegistros.style.width = "300px"; // Ajusta el ancho según sea necesario
// contenedorRegistros.style.marginLeft = "10px"; // Ajusta el margen según sea necesario
// contenedorRegistros.style.display = "inline-block";

  // Eliminar fila de la tabla de empleados
  var tablaEmpleados = document.getElementById("tabla-empleados");
  var filasEmpleados = tablaEmpleados.getElementsByTagName("tr");
  for (var i = 1; i < filasEmpleados.length; i++) {
    var celdas = filasEmpleados[i].getElementsByTagName("td");
    if (celdas[1].textContent === nombreEmpleado) {
      tablaEmpleados.deleteRow(i);
      break;
    }
  }


// Limpiar campos de detalles de empleado
document.getElementById("detalle-nombre").textContent = "";
document.getElementById("detalle-apellidos").textContent = "";
document.getElementById("detalle-id").textContent = "";
document.getElementById("detalle-telefono").textContent = "";
document.getElementById("detalle-email").textContent = "";
    // document.getElementById("detalle-asistencia").textContent = "";
    // document.getElementById("detalle-fecha").textContent = "";
}
}

    // Actualizar la fecha y hora actual cada segundo
    setInterval(function() {
      var fechaHoraActual = "Villahermosa, Tabasco a: "+obtenerFechaHoraActual();
      document.getElementById("fecha-hora-actual").textContent = fechaHoraActual;
    }, 1000);

  // Ejemplo de uso
  // agregarEmpleado(1, "Juan", "Pérez", "123456789", "juan@example.com");
  // agregarEmpleado(2, "María", "López", "987654321", "maria@example.com");
  // agregarEmpleado(3, "Pedro", "Gómez", "456789123", "pedro@example.com");
  // agregarEmpleado(4, "Ulloa", "Pérez", "123456789", "juan@example.com");
  // agregarEmpleado(5, "Adamaris", "López", "987654321", "maria@example.com");
  // agregarEmpleado(6, "Luis", "Gómez", "456789123", "pedro@example.com");
  // agregarEmpleado(7, "Itzel", "Pérez", "123456789", "juan@example.com");
  // agregarEmpleado(8, "Jesus", "López", "987654321", "maria@example.com");
  // agregarEmpleado(9, "Yaritza", "Gómez", "456789123", "pedro@example.com");
  // agregarEmpleado(10, "Juan", "Pérez", "123456789", "juan@example.com");
  // agregarEmpleado(11, "Mario", "Pérez", "123456789", "juan@example.com");
  // agregarEmpleado(12, "Miguel", "López", "987654321", "maria@example.com");
  // agregarEmpleado(13, "Karen", "Gómez", "456789123", "pedro@example.com");
  // agregarEmpleado(14, "Susana", "Pérez", "123456789", "juan@example.com");
  // agregarEmpleado(15, "Brito", "López", "987654321", "maria@example.com");
  // agregarEmpleado(16, "Jorge", "Gómez", "456789123", "pedro@example.com");
  // agregarEmpleado(17, "Guadalupe", "Pérez", "123456789", "juan@example.com");
  // agregarEmpleado(18, "Mayo", "López", "987654321", "maria@example.com");
  // agregarEmpleado(19, "Julio", "Gómez", "456789123", "pedro@example.com");

// const endpointUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
// const requestBody = { key: 'value' }; // Cuerpo de la petición en formato JSON

// fetch(endpointUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(requestBody)
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error en la petición');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Procesar la respuesta
//     console.log('Respuesta:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// Función para modificar la asistencia de una fila del cuerpo de la tabla de registros
function modificarAsistencia(event) {
  var fila = event.target.parentNode;
  var confirmacion = confirm("¿Desea modificar la asistencia?");
  if (confirmacion) {
    // Obtener el elemento de la columna de asistencia de la fila seleccionada
    var celdaAsistencia = fila.querySelector("td:nth-child(4)");

    // Verificar el valor actual de la columna de asistencia
    var valorAsistencia = celdaAsistencia.textContent.trim();
    if (valorAsistencia === "No asistió") {
      celdaAsistencia.textContent = "Asistió";
    } else {
      celdaAsistencia.textContent = "No asistió";
    }
        // Actualizar la fecha y hora registrada a la fecha y hora actual
        var celdaFechaHora = fila.querySelector("td:nth-child(5)");
        celdaFechaHora.textContent = obtenerFechaHoraActual();
  }
}

// Agregar el evento click al cuerpo de la tabla de registros
var cuerpoRegistros = document.getElementById("cuerpo-registros");
cuerpoRegistros.addEventListener("click", function (event) {
  var fila = event.target.parentNode;
  modificarAsistencia(event);
});


function descargarTablaPDF2() {
  var tablaEmpleados = document.getElementById("tabla-empleados");
  if (tablaEmpleados.rows.length > 1) {
    // La tabla tiene registros, no se ejecuta la función
    alert("La tabla tiene registros. No se puede descargar el PDF.");
    return;
  }else{
  var doc = new jsPDF({
    unit: 'pt',
  });
  var title = "Lista de asistencia de Amarine Services";
  var textWidth = doc.getTextWidth(title);
  // Calcula la posición central en el eje x
  var centerX = (doc.internal.pageSize.width - textWidth) / 2;
  doc.setFontSize(12);
  // doc.text(title, centerX, 25);
  doc.text(title, centerX + 25, 75); // Centrar solo el título
  
  var fechaHoraActual = obtenerFechaHoraActual();
  var imageURL = './amarineLogo.jpg';

    // Cargar la imagen utilizando una promesa
  const loadImage = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = imageURL;
  });

  // Agregar la imagen al documento PDF una vez cargada
  loadImage.then((img) => {
    const imgWidthInMM = 50; // Anchura de la imagen en mm
    const imgWidthInInches = imgWidthInMM / 25.4; // Convertir la anchura de mm a pulgadas

    // Calcular la posición x de la imagen en el lado derecho
    const pageWidth = doc.internal.pageSize.getWidth();
    const imgX = pageWidth - imgWidthInInches * 72 - 10; // 10 es el margen derecho
    doc.addImage(img, 'JPEG', imgX, 18, imgWidthInInches * 72, 0); // Los parámetros 10, 130 representan la posición de la imagen en el PDF

    doc.save("Asistencia_" + fechaHoraActual + ".pdf");
  }).catch((error) => {
    console.error('Error al cargar la imagen:', error);
  });

  

   // Obtener la tabla de registros de asistencia
   var tablaRegistros = document.getElementById("tabla-registros");

   // Obtener el número de filas y columnas de la tabla
   var filas = tablaRegistros.rows;
   console.log("filas: "+filas);
   var columnas = tablaRegistros.rows[0].cells.length;
   console.log("columnas"+columnas);
 
   // Crear un arreglo para almacenar los datos de la tabla
   var datosTabla = [];
 
   // Recorrer las filas de la tabla y almacenar los datos en el arreglo
   for (var i = 1; i < filas.length; i++) {
     var fila = [];
 
     // Recorrer las celdas de cada fila y obtener el contenido
     for (var j = 0; j < columnas; j++) {
       var contenido = filas[i].cells[j].textContent;
       console.log(contenido);
       fila.push(contenido);
     }
 
     // Agregar la fila al arreglo de datos de la tabla
     datosTabla.push(fila);
   }
 
   // Definir las columnas de la tabla en el PDF
   var columnasPDF = ["ID", "Nombre", "Apellidos", "¿Asistió?", "Fecha y hora registrada"];
   
   // Establecer la posición vertical para la tabla
   var tableY = 95; // Posición vertical de la tabla

   // Agregar el encabezado de la tabla al PDF
   doc.autoTable({
     head: [columnasPDF],
     body: datosTabla,
     startY: tableY, // Iniciar la tabla a partir de esta posición vertical
   });

  }
}

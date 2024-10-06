// se asigna el evento de clic al botón para obtener datos
document.querySelector('#getButton').addEventListener('click', getData);

function getData() {
    const resultBox = document.querySelector('#getResult'); // selecciona el elemento para mostrar los resultados
    resultBox.textContent = 'Running GET request...'; // Mensaje inicial mientras se realiza la solicitud

    // realiza la solicitud GET a la API para obtener el objeto con ID 2
    fetch('https://jsonplaceholder.typicode.com/photos/2')
        .then(response => response.json()) // Convertir la respuesta en formato JSON
        .then(data => {
            resultBox.textContent = JSON.stringify(data, null, 2); // Mostrar el objeto JSON en el elemento resultBox
            console.log(resultBox); // se muestra el elemento resultBox en la consola
            console.log(data); // se muestra el objeto JSON obtenido en la consola
        })
        .catch(error => {
            // manejo de errores de la solicitud
            resultBox.textContent = 'Error fetching data: ' + error; // Mostrar un mensaje de error en resultBox
        });
}

// Agrega un event listener al botón con id 'putButton' para que ejecute la función putData cuando se hace clic
document.querySelector('#putButton').addEventListener('click', putData);

// Definición de la función putData, que se ejecuta cuando se hace clic en el botón
function putData() {
    // Selecciona el elemento <pre> con id 'putResult', que se utilizará para mostrar los resultados o mensajes
    const resultBox = document.querySelector('#putResult');
    resultBox.textContent = 'Running PUT request...';
    
    // Realiza una solicitud HTTP GET a la URL proporcionada
    fetch('https://jsonplaceholder.typicode.com/photos/2')
         // Cuando se recibe una respuesta, esta se convierte a formato JSON
        .then(response => response.json()) 
        // Una vez que los datos JSON son obtenidos, se ejecuta este bloque de código
        .then(data => {
            resultBox.textContent = JSON.stringify(data, null, 2); 
            console.log(resultBox); 
            console.log(data); 
        })
         // Si ocurre un error en la solicitud, el error es capturado y se maneja en este bloque
        .catch(error => {
            // manejo de errores de la solicitud
            resultBox.textContent = 'Error fetching data: ' + error; // Mostrar un mensaje de error en resultBox
        });
      }


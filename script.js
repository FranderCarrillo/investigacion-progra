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


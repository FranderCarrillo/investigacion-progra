// las promesas ayudan mediante preguntas ya sea a una base de datos o un servidor, en tres pasos, como lo es pendiente,exisotos y rechazado 
// esto nos permite, que durante la ejecucion de un programa, este no se detenga cuando realice acciones como esas y se pueda continuar con las 
// demás funcionalidades de una forma fluida, ya cuando la promesa obtenga una respuesta, esta se dará la tarea de mostrarnos un mensaje 


//Get
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    console.log('Lista de fotos:', data); // Muestra la lista de fotos en la consola
  })
  .catch(error => {
    console.error('Error:', error);
  });
//finaliza Get 

//Post
const newPhoto = {
    Titulo: 'Nueva Foto',
    url: 'https://via.placeholder.com/600/92c952',
    simuladoUrl: 'https://via.placeholder.com/150/92c952',
    Id: 1 // ID del álbum al que pertenece la foto (solo por referencia)
  };
  
  fetch('https://jsonplaceholder.typicode.com/photos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPhoto) // Convertimos el objeto a una cadena JSON
  })
  .then(response => response.json())
  .then(data => {
    console.log('Foto creada:', data); // Muestra la foto creada en la consola
  })
  .catch(error => {
    console.error('Error:', error);
  });
// finaliza Post 

//Put
const updatedPhoto = {
    id: 1,
    Titulo: 'Foto Actualizada',
    url: 'https://via.placeholder.com/600/771796',
    simuladoUrllUrl: 'https://via.placeholder.com/150/771796',
    Id: 1 // ID del álbum al que pertenece la foto
  };
  
  fetch('https://jsonplaceholder.typicode.com/photos/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPhoto) // Convertimos el objeto a una cadena JSON
  })
  .then(response => response.json())
  .then(data => {
    console.log('Foto actualizada:', data); // Muestra la foto actualizada en la consola
  })
  .catch(error => {
    console.error('Error:', error);
  });
// Finaliza Put


//Delete 
fetch('https://jsonplaceholder.typicode.com/photos/1', {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      console.log('Foto eliminada'); // Confirma que la foto fue eliminada
    } else {
      throw new Error('Error al eliminar la foto');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
// Finaliza Delete   



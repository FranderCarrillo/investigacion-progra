//async:
// la palabra async nos permite convertir una funcion en asincronica , esto para devolver siempre un resultado de una promesa 

//await:
// mientras que la palabra await se utiliza dentro de las funciones async, teniendo como proposito que mientras la promesa regresa su valor
// no se pierda el flujo del programa, osea que no detiene el proceoso, cuando la promesa regresa un valor, await mostrará un mensaje con la 
// informacion 


//Get con id 
async function obtenerFoto() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos/1');
      const foto = await respuesta.json(); // Convertir la respuesta a JSON
      console.log('Foto obtenida:', foto);
    } catch (error) {
      console.error('Error al obtener la foto:', error);
    }
  }
  
  obtenerFoto();
//Finaliza Get

//Post
async function crearFoto() {
    const nuevaFoto = {
      Id: 1,
      Titulo: 'Foto Nueva',
      url: 'https://via.placeholder.com/600/24f355',
      simuladoUrl: 'https://via.placeholder.com/150/24f355'
    };
  
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaFoto) // Convertimos el objeto a JSON
      });
  
      const fotoCreada = await respuesta.json();
      console.log('Foto creada:', fotoCreada);
    } catch (error) {
      console.error('Error al crear la foto:', error);
    }
  }
  
  crearFoto();
//Finaliza Post

//PUT
async function actualizarFoto() {
    const fotoActualizada = {
      Id: 1,
      title: 'Foto Actualizada',
      url: 'https://via.placeholder.com/600/92c952',
      simuladoUrl: 'https://via.placeholder.com/150/92c952'
    };
  
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fotoActualizada)
      });
  
      const foto = await respuesta.json();
      console.log('Foto actualizada:', foto);
    } catch (error) {
      console.error('Error al actualizar la foto:', error);
    }
  }
  
  actualizarFoto();
// termina PUT

//DELETE con id 
async function eliminarFoto() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos/1', {
        method: 'DELETE'
      });
  
      if (respuesta.ok) {
        console.log('Foto eliminada exitosamente');
      } else {
        throw new Error('Error al eliminar la foto');
      }
    } catch (error) {
      console.error('Error al eliminar la foto:', error);
    }
  }
  
  eliminarFoto();
//Finaliza DELETE   
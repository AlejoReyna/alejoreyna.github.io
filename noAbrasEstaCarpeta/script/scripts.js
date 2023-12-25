let imagenesOcultas = 0;

function ocultarImagen(id) {
    const imagen = document.getElementById(id);
    if (imagen && imagen.style.display !== 'none') {
      imagen.style.display = 'none';

      imagenesOcultas++;

      if (imagenesOcultas === 3) {
        mostrarMensaje();
      }
    }
  }

  function mostrarMensaje() {
    alert('¡Espero que te gusten! c:');
  }
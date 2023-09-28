

// USO JS NATIVO PARA AGREGAR EVENTOS Y MANEJAR EL DOM

function menuLateral(event) {
  let barra_lateral = document.querySelector('#barra-lateral');

  event.stopPropagation();

  if (barra_lateral.classList.contains('active')) {
    barra_lateral.classList.remove('active');
  } else {
    barra_lateral.classList.add('active');
  }
}


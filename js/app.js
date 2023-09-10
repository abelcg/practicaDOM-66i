const cambiarTitulo = () => {
  console.log('dentro de la fucnión cambiar titulo');
  //buscar un elemento del html
  //let tituloH1 = document.getElementById('titulo');
  let tituloH1 = document.querySelector('#titulo');
  console.log(tituloH1.innerHTML);

  tituloH1.innerHTML = 'Título modicado';
  tituloH1.className = 'text-warning';
};

const verMas = () => {
  console.log('Dentro de ver más');
  //obtener el elemento padre
  let contenedorPadre = document.querySelector('#contenedorPadre');
  let btnVerMas = document.getElementById('btnVerMas');

  if (btnVerMas.innerHTML === 'Ver más') {
    //Opcion 1- camino largo
    //1- crear el elemento del html

    //let parrafo = document.createElement('p'); //crea la etiqueta <p></p>
    //2- agregar contenido al elemento html creado

    /* parrafo.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus
        impedit necessitatibus quae, optio assumenda suscipit consequatur in
        nulla aliquam, eligendi odio velit? Quibusdam, veniam rem fuga minus
        quis aspernatur inventore deserunt debitis! Sit modi, reiciendis
        repellendus inventore quisquam consequuntur iure corrupti error
        architecto aliquam, facere sint eligendi quo voluptate.`;

    parrafo.className = 'lead';
   */
    //3- insertar el nuevo elemento htnl en el DOM

    //contenedorPadre.appendChild(parrafo);

    //Opción 2 - Camino corto
    contenedorPadre.innerHTML += `<p class="lead">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nobis
    distinctio eius itaque inventore temporibus nulla laboriosam dolorem
    aut minus, quisquam unde esse rem illum animi id labore veniam quia
    consectetur corporis omnis culpa modi nisi facilis. Soluta
    doloribus, enim atque velit sapiente dolorum, recusandae tempore
    dicta debitis veniam itaque!
  </p>`;

    //modificar el texto del botón
    btnVerMas.innerHTML = 'Ocultar';
    btnVerMas.className = 'btn btn-danger';
  } else {
    console.log('Aqui vamos a borrar el elemento');

    console.log(contenedorPadre.hasChildNodes()); //devuelve true or false
    console.log(contenedorPadre.children.length); //retorna un array de nodos hijos

    if (
      contenedorPadre.hasChildNodes() &&
      contenedorPadre.children.length >= 2
    ) {
      //borrar el parrafo
      //contenedorPadre.removeChild(contenedorPadre.children[length-1]);
      contenedorPadre.removeChild(contenedorPadre.children[1]);

      //modificar el texto y la estetica del botón

      btnVerMas.innerHTML = 'Ver más';
      btnVerMas.className = 'btn btn-primary';
    }
  }
};


//La propiedad para acceder al texto o al contenido de un input es value, no se usa innerHTML
// nombreInput.value

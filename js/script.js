/* 
    // CONSTANTES necesito la constante de no se que
    // VARIABLES sdasndfasf
    // COMPROBACIÓN DE VARIABLES Y CONSTANTES A UTILIZAR
    // LOGICA
    // necesito comprobar x y si x noseque...
    // MOSTRAR O RETORNAR EL RESULTADO

    /* 
    1) Comprensión del Problema:

    - Lee el enunciado varias veces hasta que estés seguro de haberlo entendido.
    - Resúmelo con tus propias palabras para verificar que has captado la esencia.

    2) Visualización y Planificación:

    - Haz un dibujo o esquema para visualizar el proceso o los datos.
    - Escribir en papel puede ayudarte a ver la solución desde una perspectiva diferente.

    3) Estructura y Organización:

    - Antes de comenzar a programar, escribe en los comentarios la estructura general o los pasos que crees que deberías seguir. Esto te ayudará a mantener una guía a medida que escribes el código.

    4) Uso de Herramientas:

    - Utiliza el debugger para seguir el flujo de tu código. Te permitirá identificar errores y entender mejor cómo funciona tu programa paso a paso.

    5) Manejo de Errores:

    - Aprende a leer y entender los mensajes de error. Estos te guiarán sobre qué necesita ser corregido.
    Implementa el manejo de excepciones para gestionar errores inesperados y asegurar que tu programa sea robusto.

    6) Revisión y Refinamiento:

    - Una vez que tu código funcione, revísalo para ver si hay áreas que pueden ser optimizadas o simplificadas.
    - Practica la refactorización para mejorar la legibilidad y eficiencia de tu código.
        
*/


/* ENUNCIADO 

Objetivo: 
Crear una página web que muestre una tabla con información básica sobre acciones del mercado bursátil. 
La tabla será capaz de ordenar las acciones por precio y porcentaje de cambio, 
y se actualizará con datos falsos generados aleatoriamente para simular el comportamiento dinámico del mercado de valores.

Requisitos:

HTML: 
Diseñar una estructura básica de la página que incluya una tabla con los siguientes encabezados: 
Nombre de la Acción, Precio, % de Cambio. 
Además, incluir botones o enlaces que permitan ordenar las acciones por precio y porcentaje de cambio.

CSS: 
Estilizar la tabla y los botones para que sean visualmente atractivos. 
Utilizar colores que representen aumentos (verde) y disminuciones (rojo) en el precio de las acciones.

JavaScript:
Crear un array de objetos que represente diferentes acciones del mercado. 
    Cada objeto debe tener un nombre, precio y porcentaje de cambio.
Implementar funciones que ordenen el array de acciones por precio y porcentaje de cambio.
Utilizar el DOM para actualizar la tabla cada vez que se realice una ordenación.

Opcionalmente, añadir una función que actualice los precios y 
los porcentajes de cambio aleatoriamente cada cierto intervalo de tiempo para simular un mercado en vivo.


Desarrollo:

HTML:
Crear un documento HTML con una tabla y botones para las acciones de ordenamiento.
Añadir un <script> para tu código JavaScript.

CSS:
Utilizar clases para definir los estilos de la tabla y los botones.
Asegurar que la tabla sea legible y que los botones sean fácilmente identificables.

JavaScript:
Definir la lista inicial de acciones.
Escribir la lógica para ordenar las acciones y actualizar la tabla.
Implementar una función que simule cambios en los precios y actualizar la tabla a intervalos regulares.

Evaluación:
Se evaluará la funcionalidad de la ordenación, la correcta actualización de la tabla, y la calidad y limpieza del código. 
Además, se valorará la creatividad en el diseño y la experiencia de usuario proporcionada por la interacción con la tabla.

Entrega:
El proyecto debe estar completo y ser presentado en una única página web (index.html)
con sus respectivos archivos de estilo (styles.css) y lógica (scripts.js).

Extras:
Como desafío adicional, puedes implementar funcionalidades como búsqueda de acciones,
filtros por ciertos rangos de precios, 
y añadir más datos como volumen de transacciones o capitalización de mercado.


*/

 /*let marketData = [
    { name: 'Empresa A', price: 100, change: 0.5 },
    { name: 'Empresa B', price: 200, change: -0.3 },
    { name: 'Empresa C', price: 150, change: 0.8 }
  ];
  
  
  function populateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ''; // Clear the table
  
    marketData.forEach((data) => {
      const row = tableBody.insertRow();
      row.insertCell(0).textContent = data.name;
      row.insertCell(1).textContent = `$${data.price.toFixed(2)}`;
      const changeCell = row.insertCell(2);
      changeCell.textContent = `${data.change.toFixed(2)}%`;
      changeCell.classList.add(data.change >= 0 ? 'up' : 'down');
    });
  }
  
  populateTable(); */


  let tablaDeAcciones = [
    {nombre: 'Santander', precioanterior: 20, precio: 30, cambio: 10},
    {nombre: 'Banco de Sabadell', precioanterior: 20 , precio: 10, cambio: 20},
    {nombre: 'BBVA', precioanterior: 20 , precio: 20, cambio: 50},
    {nombre: 'Repsol', precioanterior: 20, precio: 30, cambio: 40},
    {nombre: 'CaixaBank', precioanterior: 20, precio: 40, cambio: 50},
  ];

  function probartabla(){
    const tabla=document.getElementById('tabla');
    

    tablaDeAcciones.forEach((data) => {  //reemplazo de f.flecha: tablaDeAcciones.foreach(function(data){})
      const row = tabla.insertRow();
      row.insertCell(0).textContent = data.nombre;  //textcontent devuelve el contenido del texto
      row.insertCell(1).textContent = data.precioanterior.toFixed(2); //tofixed agrega decimal
      row.insertCell(2).textContent = data.precio.toFixed(2);
      row.insertCell(3).textContent = `${data.cambio.toFixed(2)}%`;
      
      });
  }

  probartabla();


  /*function probartabla() {
    const tabla = document.getElementById('tabla');
    //tabla.innerHTML = ''; // Clear the table
  
    tablaDeAcciones.forEach((data) => {
      const row = tabla.insertRow();
      row.insertCell(0).textContent = data.nombre;
      row.insertCell(1).textContent = `$${data.precio.toFixed(2)}`;
      const changeCell = row.insertCell(2);
      changeCell.textContent = `${data.cambio.toFixed(2)}%`;
      changeCell.classList.add(data.cambio >= 0 ? 'up' : 'down');
    });
  }
  
  probartabla(); */


  
  

  
En este proyecto se crea una aplicación que permite ingresar valores numéricos en inputs
para crear un color personalizado que se aplicará como fondo de la página web.
Los valores se obtendrán de elementos input en el DOM.

El código JavaScript en este proyecto tiene la función principal de 
actualizar el color de fondo de la página en tiempo real según los 
valores seleccionados por el usuario en los controles deslizantes (sliders)
para los colores rojo, verde y azul (RGB).

Explicacion detallada:
1- Referencias a los elementos del DOM
* Para las referencias a los elementos del HTML se utilizan sus id.
  inputRojo, inputVerde e inputAzul son los controles deslizantes (<input type="range">)
  que permiten al usuario seleccionar un valor entre 0 y 255 para cada color.

* textoRojo, textoVerde y textoAzul son los elementos <p> que muestran el valor actual de cada color.

* Estas referencias permiten interactuar con los elementos del DOM desde JavaScript, ya sea 
  para leer sus valores o para modificarlos.

2- Variables para almacenar los valores de los colores
*   Se declaran tres variables (rojo, verde, azul) que almacenan los valores actuales de 
   los controles deslizantes.
*  inputRojo.value, inputVerde.value e inputAzul.value obtienen el valor actual de cada slider.
*  Estas variables se utilizan para mantener un seguimiento de los valores seleccionados por el
   usuario y para actualizar el color de fondo.

3- Actualizar el texto de los párrafos
*  Se actualiza el contenido de los elementos <p> con los valores iniciales de los controles deslizantes.
   Por ejemplo si el valor inicial del slider rojo es 23, el texto dentro de <p id="texto-rojo"> 
   se establecerá en 23.De esta forma se muestra el valor actual de cada color en tiempo real.

4- Función para actualizar el color de fondo
*  Esta función toma tres parámetros (rojo, verde, azul) y genera un string en formato rgb().
*  Luego, actualiza el color de fondo de la página (document.body.style.backgroundColor) con 
   el nuevo color RGB.
*  Es la función central que permite cambiar dinámicamente el color de fondo según los valores 
   seleccionados por el usuario.
*  La línea de codigo const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`; utiliza comillas 
   invertidas ` para crear un string dinámico con los valores de los colores.

5- Event listeners para los controles deslizantes
*  Se agregan "escuchadores de eventos" (addEventListener) a cada control deslizante.
*  El evento input se activa cada vez que el usuario mueve el slider.
*  Cuando el evento se activa:
     a. Se actualiza la variable correspondiente (rojo, verde o azul) con el nuevo valor del slider.
     b. Se actualiza el texto del párrafo correspondiente para reflejar el nuevo valor.
     c. Se llama a la función actualizarColor para cambiar el color de fondo con los nuevos valores.
*  Permite que la interfaz sea interactiva y responda en tiempo real a las acciones del usuario.

https://polidorl.github.io/Proyecto-Colores-RGB-con-Sliders/

https://github.com/polidorl/Proyecto-Colores-RGB-con-Sliders




# Proyecto: Juego de Amigo Secreto

## Descripción

Este proyecto es un juego sencillo de **Amigo Secreto** desarrollado con HTML, CSS y JavaScript.  
Permite a los usuarios ingresar nombres en una lista, visualizarlos y realizar un sorteo aleatorio para elegir un amigo secreto.

---

## Modo de uso 

1. Abre el archivo llamado "index.html" en tu navegador web favorito (Chrome, Firefox, Edge, etc.).  
2. En el campo de texto, escribe el nombre de un amigo y haz clic en el botón **Añadir**.  
3. Los nombres ingresados aparecerán en la lista debajo del campo.  
4. Cuando hayas agregado todos los nombres, haz clic en **Sortear amigo** para elegir un amigo secreto al azar.  
5. El resultado se mostrará en la parte inferior.

---

## Instalación y dependencias
 
- Solo necesitas un navegador moderno para ejecutar el proyecto (no requiere instalación o dependencias).  
- Los archivos principales son:  
  - `index.html`  
  - `style.css`  
  - `app.js`  

---

## Cómo funciona el código

- El archivo `app.js` contiene un array llamado `amigos` que almacena los nombres ingresados.  
- La función `agregarAmigo()` valida el campo de entrada y agrega nombres al array.  
- `mostrarAmigos()` actualiza la lista visible con los nombres actuales.  
- `sortearAmigo()` selecciona aleatoriamente un nombre del array y lo muestra como amigo secreto.  
- Se usan métodos de JavaScript como `push()`, `forEach()`, `Math.random()` y manipulación del DOM para actualizar el contenido en la página.

---

## Posibles mejoras

- Evitar que se agreguen nombres duplicados.  
- Permitir eliminar nombres de la lista.  
- Añadir animaciones al sorteo.  
- Guardar la lista en `localStorage` para que persista al recargar la página.  
- Validar que el nombre no contenga caracteres especiales o números.

---

## Autor

Francisco Otárola  

---

## Contacto

Si tienes dudas o sugerencias, puedes contactarme por correo: Francisco.Otarola.c@gmail.com

---

¡Gracias por revisar mi proyecto!  

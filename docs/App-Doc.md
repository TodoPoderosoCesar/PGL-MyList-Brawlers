#  APP.TSX

Este fichero es el fichero principal del proyecto, en este se cargan varios compoentes y es donde se despiega la información.
Si quieres abrir el fichero pincha [aquí](../App.tsx).

### IMPORTS:

En este fichero se improtan varias funcionalidades de React-Native y a su vez, tambien, el useState de react. Por otro lado tambien se importan los dos componenetes (Brawler, HeaderNav) y la información de brawlers, etc...

### FUNCION APP:

En este fichero lo primero que nos encontramos es con 3 useState, un primero booleano para desplegar el modal, un segundo useState para desplegar todos los objetos brawler en el flatlist y por ultimo un useState para enlazar los imputs del modal con un tipo brawleritem (este ultimo lo inicializamos a vacio todo menos la imagen). 
Acto seguido encontramos dos funciones, una para eliminar un brawler segun su nombre (porque no los cree con un id y ya después acarree con las consecuencias) y otra funcion para añadir un brawler. 
Más adentro del codigo nos encontraremos con un componente HeaderNav (del cual hablamos más en concreto en su [documentacion correspondiente](./HeaderNav-Doc.md) ), el modal con un formulario para poder añadir los brawlers y por ultimo el flatlist.

### ESTILOS:

EStilos propios del la app como tal solo tiene los del footer y el container, pero al cargarse el modal en este fichero tambien contiene los estilos del modal.

### Autocrítica:

Considero que el codigo quizas ha quedado un poco lioso, pero en líneas generales estoy satisfecho. Quizas hubiera sido mas profesional crear un componenete AddBrawlerModal y que lo llamaras desde la App para tener un codigo menos denso (desconozco si esto ultimo huebiera sido buena o mala idea).
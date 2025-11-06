#  PGL-MYLIST-BRAWLERS

Este proyecto traata de generar una lista de items y poder interactuar con ellos eliminandolos, añadiendo o editando.

---

## FICHEROS RELEVANTES:

En esta seccion se desgloza parte por parte el funcionamiento de la App. Empezando siempre por el
fichero App.tsx.

- [App.tsx](./App.tsx): En este fichero lo primero que nos encontramos es con 3 useState, un primero booleano para desplegar el modal, un segundo useState para desplegar todos los objetos brawler en el flatlist y por ultimo un useState para enlazar los imputs del modal con un tipo brawleritem (este ultimo lo inicializamos a vacio todo). Acto seguido encontramos dos funciones, una para eliminar un brawler segun su nombre (porque no los cree con un id y ya después acarree con las consecuencias) y otra funcion para añadir un brawler. 
Más adentro del codigo nos encontraremos con un componente HeaderNav que hablaremos más en concreto en un futuro, el modal con un formulario para poder añadir los brawlers y por ultimo el flatlist.

- [HeaderNav.tsx](./components/HeaderNav.tsx): Lo primero con lo que nos topamos al empezar a leer el codigo es con la definicion de un tipo de las props que va a recibir el HeaderNav. Acto seguido en 6 lineas de codigo se desplega un fondo de color y un ionicon el cual recibe una funcion cuando se presiona (la funcion para añadir un brawler).

- [Brawler.tsx](./components/Brawler.tsx): Tal y como nos encontramos en HeaderNav, lo primero que vemos es la definicion de los tipos que va a recibir Brawler. Ya dentro nos encontramos una funcion que lanza un alert (muy simple sinceramente) que le pregunta al usuario si desea de verdad eliminar el brawler clicado. Acto seguido, en menos de 20 lineas de codigo se establece como se desplegara la informacion de un objeto Brawler. Con una imagen, nombre, categoria (rareza) y precio (creditos).

- [brawlers-data.tsx](./data/brawlers-data.tsx): Este fichero super sencillo solo tiene dentro un array con la informacion de varios brawlers para crear la lista.

- [BrawlerItem.tsx](./types/BrawlerItem.tsx): Define de como ha de ser 100% un objeto Brawler.

## Boceto del escalidraw:

El boceto de Escalidraw fue bastante logrado y el resultado fue sinceramente bastente certero con lo deseado. 

Para ver una captura del boceto pinche [aquí](./docs/Captura-Escalidraw.png).
Para ver una captura de la app pinche [aquí](./docs/Captura-App.png).
Para ver una captura del modal pinche [aquí](./docs/Captura-Modal.png).

## Autocrítica

Fata una funcionalidad (la de editar un objeto brawler). También, me hubiera gustado poder añadir que en el formulario del modal no dejase meter mas que los valores posibles (un picker basicamente). También me hubiera gustado hacer un modal en vez de un alert como verificacion de cuando se va a eliminar un brawler. Por otro lado, dentro de Brawler sale un error, el cual da igual para su correcta ejecución y es en la línea 38. Se debe a que queria meter dos clases dentro de una misma etiqueta y una de ellas que fuera el atributo rarity que viene con el brawler para que dependiendo de la rareza el nombre apareciese de un color u otro. Esto ultimo nombrado no pasa cuando creamos un nuevo brawler desde el modal, creo que puede ser porque cuando lo creamos lo tira directamente dentro del flatlist y no carga Brawler como tal (realmente no tengo mucha idea).

Como punto final me gustaria destacar que hay muchos comentarios que he dejado que explican cachos de codigo. Esto se debe a que me ha ayudado un compañero ( Fernando ) y me ha estado intentando las buenas prácticas en cuanto a código se refiere.
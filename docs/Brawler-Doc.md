#  BRAWLER.TSX

Este componente define el objeto braler y lo desplega con sus estilos y demás.
Si quieres abrir el fichero pincha [aquí](../components/Brawler.tsx).

### IMPORTS:

Este fichero tiene a penas 2 imports, uno donde carga etiquetas de react-native y react desde react.

### FUNCION APP:

Tal y como nos encontramos en [HeaderNav](../components/HeaderNav.tsx), lo primero que vemos es la definicion de los tipos que va a recibir Brawler. Ya dentro nos encontramos una funcion que lanza un alert (muy simple sinceramente) que le pregunta al usuario si desea de verdad eliminar el brawler clicado. Acto seguido, en menos de 20 lineas de codigo se establece como se desplegara la informacion de un objeto Brawler. Con una imagen, nombre, categoria (rareza) y precio (creditos).

### ESTILOS:

Los estilos de este componente si son un poco mas complejos ya que definen como va a ser cada "CARD", con su imagen del brawler, su nombre en grande (y dependiendo de su rareza su color), sus creditos, su rareza y por ultimo dos botones muy simples que dejan editar o eliminar cada brawler.

### Autocrítica:

La funcionalidad de editar un brawler no ha sido implementada. Además, salta un error en los estilos del nombre del brawler. Esto ultimo se debe a que queria que el nombre tuviera tambien la clase de su rareza para poder imprimir el nombre con su color correspondiente. Este error aparece pero no interfiere en el buen comportamiento de la app hasta donde han llegado mis pruebas.
#Juego del amigo secreto

Esta aplicación permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto". A continuación, se describe la funcionalidad de cada parte del código.

####Lista de amigos (amigos) 

- Se inicializa un arreglo vacío amigos para almacenar los nombres ingresados.

####Función agregarAmigo()

- Obtiene el valor ingresado en el campo de texto con id="amigo".
- Verifica si el campo está vacío; si lo está, muestra una alerta y detiene la ejecución.
- Comprueba si el nombre ya está en la lista; si es así, muestra una alerta para evitar duplicados.
- Agrega el nombre al arreglo amigos y actualiza la lista en la interfaz llamando a actualizarLista().
- Limpia el campo de texto después de agregar el nombre.

####Función actualizarLista()

- Obtiene el elemento HTML con id="listaAmigos".
- Borra su contenido para evitar duplicaciones.
- Recorre el arreglo amigos y crea un elemento por cada amigo, agregándolo a la lista en la interfaz.

####Función nuevaLista()

- Vacía el arreglo amigos, eliminando todos los nombres.
- Llama a actualizarLista() para reflejar los cambios en la interfaz.
- Borra el resultado del sorteo anterior.

####Función sortearAmigo()

- Verifica si la lista de amigos está vacía. Si lo está, muestra una alerta y no realiza el sorteo.
- Genera un número aleatorio entre 0 y el tamaño de la lista.
- Selecciona un amigo en base al índice aleatorio y lo muestra en el id="resultado".


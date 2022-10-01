# CRUD para gestionar una lista de tareas

## Servidor
Los archivos se encuentran dentro de la carpeta server.
1. .env define las variables de entorno
2. routing.js define los endpoints que serán consumidos desde el cliente
3. tarea.model.js establece el esquema utilizado en los archivos json
4. app.js es el archivo principal

## Cliente
Los archivos principales se encuentran dentro de la carpeta client/src/pages
1. Header.js contiene el encabezado con un título y un botón para agregar tareas
    - La función addTask hace la petición POST
2. ListaTareas.js renderiza la lista de tareas
    - Posee un estado
    - La función getTareas hace la petición GET para poder renderizar
    - Se comunica por parámetros con los componentes 'Tarea', para su renderizado
3. Tarea.js renderiza una tarea, y posee botones de editar y eliminar
    - Recibe el parámetro props del componente 'ListaTareas
    - La función borrarTarea hace una petición DELETE para borrar una tarea
    - La función editarTarea hace la petición PATCH para modificar la tarea
4. Los archivos Header.css y ListaTareas.css definen estilos
5. La aplicación se monta en el archivo correspondiente a la ruta client/src/App.js
# DocRed Frontend test

Este es un simple test para determinar tus conocimientos y habilidades de Frontend.

## Como empezamos?

Haz un fork de este repositorio para trabajar en él. Una vez completada la tarea, envíanos la URL de tu repositorio a nuestro email. 

## Consignas

Antes que nada, lee bien las consignas. Este test debe reflejar no sólo tus conocimientos en tecnología, también tu forma de trabajar. Haz commit de tus cambios regularmente, esto también refleja cómo trabajas.

En total no debería tomarte mas de 1 día, pero usa tu tiempo sabiamente.

# **Que debes hacer?**

La prueba tecnica esta compuesta por dos partes.

En la primera parte se te pide que desarrolles una aplicación web que se conecte a la API GraphQL de "Rick and Morty" ([https://rickandmortyapi.com/documentation/#graphql](https://rickandmortyapi.com/documentation/#graphql)) y muestre los resultados en tarjetas tomando como referencia la imagen_1 de la carpeta de Mockup. 

En la segunda parte de la prueba se te pide que crees una pagina en la cual cargues un video cualquiera y que crees capítulos de ejemplo. Al dar clic en cada capitulo debe llevar a un tiempo diferente del video.

Además también debes completar la pagina con información en la parte inferior tomando como referencia la imagen_2 de la carpeta de Mockup.

El objetivo principal es evaluar tu capacidad para interactuar con una API GraphQL, recuperar datos y presentarlos de manera efectiva en una interfaz de usuario, también queremos evidenciar tu capacidad para mostrar una interfaz en varios dispositivos adaptando el comportamiento de la pagina en un diseño responsivo.

**Tareas:**

1. **Configuración de Entorno:**
    - Configura un proyecto con NextJS con Apollo client.
2. **Conexión a la API GraphQL:**
    - Utiliza la API GraphQL de "Rick and Morty" ([https://rickandmortyapi.com/documentation/#graphql](https://rickandmortyapi.com/documentation/#graphql)) para recuperar datos sobre personajes. Puedes encontrar la API en la siguiente URL: [API GraphQL de Rick and Morty](https://rickandmortyapi.com/graphql).
3. **Consulta GraphQL:**
    - Crea una consulta GraphQL para obtener una lista de personajes.
4. **Interfaz de Usuario:**
    - Diseña una interfaz de usuario que muestre los resultados en tarjetas individuales. Cada tarjeta debe representar un personaje y mostrar información relevante, como nombre, imagen y otros detalles de tu elección.
    - Diseña otra interfaz de usuario en donde se muestre el video con algunos capítulos que sean interactivos con el tiempo de reproducción del video, también implementa la sección de información de la parte inferior del video, para los datos de fecha y hora partir de fecha hora determinada y manipular el formato de esta a través de una librería para manejo de fechas.
5. **Paginación:**
    - Implementa una paginación simple para cargar más resultados (paginas del 1 a la 4) (pasar a la query de graphql el parametro de la pagina dinamico).
6. **Estilo y Diseño:**
    - Añade estilos y diseños atractivos a la interfaz de usuario para que sea agradable visualmente.

**Requisitos Adicionales:**

- Asegúrate de que tu aplicación sea responsiva y se vea bien en dispositivos móviles y de escritorio.
- Incluye un README con instrucciones claras sobre cómo ejecutar tu proyecto localmente.
- Implementa una libreria para manejo de fechas que te permita manejar el formato de la misma.

# Entrega

Una vez completada la prueba, proporciona acceso al código fuente y a la aplicación en vivo (si es posible). Asegúrate de que el código esté bien documentado y organizado.

# Tecnologías que debes usar

- NextJS
- ReactJS (Con Hooks preferentemente)
- JSS preferentemente para manejo de estilos
- Apollo client
- Typescript preferentemente

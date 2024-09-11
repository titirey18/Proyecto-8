# Proyecto API - Gestión de Productos y Listas


# Descripción

Este proyecto es una API construida con Node.js, Express y MongoDB, que permite la gestión de productos y listas de compras. La API incluye funcionalidades para registrar y autenticar usuarios, manejar productos y listas, y realizar operaciones CRUD. Las imágenes se gestionan a través de Cloudinary.

# Requisitos

-Node.js
-MongoDB
-Cloudinary

# Instalación

1. Clona el Repositorio


          git clone https://github.com/tu_usuario/tu_repositorio.git
         cd tu_repositorio

2. Instala las Dependencias

        npm install

3.Configura las Variables de Entorno

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:


      DB_URL=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombre_base_datos>?retryWrites=true&w=majority
      JWT_SECRET=<tu_secreto_jwt>
      CLOUD_NAME=<tu_nombre_cloudinary>
      API_KEY=<tu_api_key_cloudinary>
      API_SECRET=<tu_api_secret_cloudinary>

Asegúrate de reemplazar los valores entre < > con tus propias credenciales y configuraciones.

4. Inicia el Servidor


        npm start


El servidor debería estar disponible en http://localhost:3000.


# Rutas de la API


| Usuarios | GET | POST |
| ------ | ------ |  ------ |
| GET | /api/v1/users: Obtiene todos los usuarios (requiere autenticación de administrador). |
| POST |  | /api/v1/users/register: Registra un nuevo usuario. |
| POST |  | /api/v1/users/login: Inicia sesión y devuelve un token JWT. |



| Productos | GET | POST | PUT | DELETE |
| ------ | ------ |  ------ | ------ | ------ |
| GET | /api/v1/productos: Obtiene todos los productos. |
| GET | /api/v1/productos/: Obtiene un producto por ID. |
| GET |  /api/v1/productos/category/: Obtiene productos por categoría. |
| GET |  /api/v1/productos/price/: Obtiene productos por precio. |
| POST |  | /api/v1/productos: Crea un nuevo producto (requiere autenticación). |
| PUT |  |  | /api/v1/productos/: Actualiza un producto por ID (requiere autenticación de administrador). |
| DELETE |  |  |  | /api/v1/productos/: Elimina un producto por ID (requiere autenticación de administrador). |



| Listas | GET | POST | PUT | DELETE |
| ------ | ------ |  ------ | ------ | ------ |
| GET | /api/v1/lista: Obtiene todas las listas. |
| GET | /api/v1/lista/: Obtiene una lista por ID. |
| POST |  | /api/v1/lista: Crea una nueva lista (requiere autenticación de administrador) |
| PUT |  |  | /api/v1/lista/: Actualiza una lista por ID (requiere autenticación de administrador). |
| DELETE |  |  |  | /api/v1/lista/: Elimina una lista por ID (requiere autenticación de administrador). |



# Autenticación


La autenticación se realiza mediante tokens JWT. El token debe ser incluido en el encabezado Authorization como Bearer <token> para las rutas protegidas.

# Gestión de Imágenes


Las imágenes se cargan y gestionan a través de Cloudinary. Las imágenes se almacenan en la carpeta Products.

# Manejo de Errores


La API devuelve códigos de estado HTTP apropiados y mensajes de error para manejar los casos de error.

# Contribuciones


Si deseas contribuir a este proyecto, por favor abre un issue o envía una pull request.

# Licencia

Este proyecto está licenciado bajo la MIT License.

# Aplicación web simple CRUD

Esta es una aplicación web que implementa un CRUD (Create, Read, Update, Delete) básico utilizando Node.js en el backend y React.js en el frontend.

## Características

- Permite crear, leer, actualizar y eliminar tareas.
- Utiliza una arquitectura de cliente-servidor, donde el frontend se comunica con el backend a través de API RESTful.
- El frontend está desarrollado con React.js y utiliza componentes de Material-UI para obtener una interfaz atractiva y moderna.
- El backend está construido con Node.js y Express.js, y utiliza MongoDB como base de datos para almacenar las tareas.

## Requisitos previos

- Node.js (versión 18.15.0)
- MongoDB (versión 5.0.0)

## Configuración

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta `Backend` y ejecuta el comando `npm install` para instalar las dependencias del backend.
3. Configura la conexión a la base de datos MongoDB en el archivo `backend/config/database.js`.
4. Ejecuta el comando `npm start` en la carpeta `backend` para iniciar el servidor backend.
5. Navega a la carpeta `frontend` y ejecuta el comando `npm install` para instalar las dependencias del frontend.
6. En el archivo `frontend/src/config.js`, verifica que la URL de la API apunte correctamente a tu servidor backend.
7. Ejecuta el comando `npm start` en la carpeta `frontend` para iniciar la aplicación frontend.

## Uso

Una vez que hayas configurado y ejecutado tanto el backend como el frontend, puedes acceder a la aplicación en tu navegador web en la URL `http://localhost:3000`. Desde allí, podrás crear, editar y eliminar tareas.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto o agregar nuevas características, siéntete libre de abrir un problema o enviar una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia [MIT](https://opensource.org/licenses/MIT).



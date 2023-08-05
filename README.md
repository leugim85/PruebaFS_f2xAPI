# F2xFullstackWebApp

Este proyecto ha sido desarrollado en Angular 16, utilizando herramientas como CLI, reactividad, implementacion de librerias como ngx toastr para mejorar la experiencia de usuario, como tambien el uso de framewok de estilos como Angular Material.

## Servidor de desarrollo 

Para ejecución en entorno local se debe ejecutar el comando `ng serve`. Navegando a `http://localhost:4200/`.la aplicación se re-direcciona a la pagina de login.


## Comportamiento de la aplicación

Mediante el ingreso de las credenciales se solicitara el token de autorización al servicio expuesto para la prueba por parte de F2x, con las credenciales  proporcionadas en la descripción de la prueba podra acceder a la pagina en la cual se consulta el reporte solicitado, dicha ruta ha sido protegida por medio de un Guard que solo permitira la activacion de la ruta si se recibe un token que se almacena en el session storage permitiendo acceder a este para diferentes fines de la administracion de la app.

Tener en cuenta que para poder consultar el reporte el servidor de backend debe estar activo.

## Consumo API

Para el desarrollo de la funcionalidad requerida se consume un endpoint que puede o no recibir un filtro tipo `string` que habilitara el filtrado de aquellas estaciones que contengan la cadena de caracteres enviado.

## Arquitectura de la webapp
Se ha implementado una arquitectura por modulos, los cuales son: Autenticación, Estilos (Material), Modulo compartido y el modulo de Reportes.

## Arquitectura de la solución

En el presente repositorio se ha agregado el archivo `Diagrama arquitectura.pdf`, en el cual se muestra graficamente el diseño de la solución planteada.
La solucion cuaenta con una aplicacion Web, cuyo codigo fuente se encuentra en este repositorio y un API desarrollada en .Net, esta APi cuenta con un Timer Worker, los detalles de dicha implementación los podra encontrar en el README.md del respectivo repositorio.



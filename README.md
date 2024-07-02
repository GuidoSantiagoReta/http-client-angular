# Consumo de API de Productos con Angular + HTTP Client + RxJS y Observables

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.


## Tecnologías Utilizadas
- Angular CLI: Versión 18.0.2.
- Bootstrap 5.3.3.
- HttpClient: Modulo de Angular para realizar solicitudes HTTP.
- RxJS: Biblioteca para programación reactiva basada en Observables.
- Observables:utilizando por RxJS para manejar flujos de datos asíncronos.
- Postman: utilizada para probar APIs REST antes de integrarlas en la aplicación.
- QuickType: Utilizado para generar las interfaces TypeScript a partir de JSON de APIs.

## Arquitectura del Proyecto
El proyecto está organizado en servicios y componentes, siguiendo las mejores prácticas de Angular. El directorio services contiene el servicio ApiService, responsable de todas las interacciones con la API externa. Este servicio utiliza HttpClient para realizar operaciones sobre los productos y categorías disponibles en https://fakestoreapi.com.

## Implementación 
- Servicio ApiService
- Inicialización: Se inyecta HttpClient en el constructor para facilitar las solicitudes HTTP.
- Métodos de API:
- getAllProducts(): Obtiene todos los productos disponibles.
- getProductById(id): Obtiene detalles de un producto específico por su ID.
- getAllCategories(): Obtiene todas las categorías disponibles.
- postProduct(product): Crea un nuevo producto en la base de datos.
- updateProduct(id, product): Actualiza un producto existente.
- deleteProduct(id): Elimina un producto por su ID.

## Componentes de la Aplicación
- Navbar: Implementada con Bootstrap, proporciona navegación entre diferentes partes de la aplicación.
- Listado de Productos: Muestra todos los productos obtenidos de la API. Utiliza *ngFor para iterar sobre la lista de productos y muestra información relevante como título, precio y botones de acción.
- Detalle del Producto: Permite ver detalles de un producto seleccionado. Utiliza [src] para cargar dinámicamente la imagen del producto y muestra información detallada como título y descripción.

## Uso de RxJS y Observables
Los métodos del servicio ApiService retornan Observables. Esto permite manejar respuestas asíncronas de manera eficiente, permitiendo al componente suscriptor reaccionar ante cambios o errores sin bloquearse esperando una respuesta. 

## Conexión a la API Externa
La conexión a la API externa se realiza directamente desde el servicio ApiService, utilizando URLs específicas definidas en baseURL.

## Estilos, UI y UX
Se utiliza Bootstrap 5 para estilizar la aplicación, Los componentes están diseñados para ser responsivos, adaptándose a diferentes tamaños de pantalla.

## Deploy
[http-client-angular.vercel.app](https://http-client-angular.vercel.app/products)

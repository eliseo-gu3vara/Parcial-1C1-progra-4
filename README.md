# Parcial-1C1-progra-4

# Parcial Primer Cómputo

## Plantee una situación problemática que se pueda resolver por medio de una página web.
## Esta situación problemática debe contener un enunciado que documente la situación
## problemática; además de mencionar a qué sector o sectores podría ir enfocado la
## solución que planteen por medio de su programa.
Enunciado: La cadena Hoteles Blue Moon enfrenta una gestión ineficiente de la experiencia
del cliente debido a su dependencia de métodos análogos. Actualmente, la recopilación de
retroalimentación sobre instalaciones, limpieza y atención se realiza mediante tarjetas 
físicas en recepción. Este proceso manual conlleva la pérdida frecuente de datos, errores 
de transcripción y una demora crítica en el análisis de la información.

Para mitigar estas deficiencias, se plantea el desarrollo de una plataforma web de 
encuestas de satisfacción. Esta herramienta permitirá que los huéspedes registren su 
valoración de forma digital e inmediata desde sus habitaciones o al momento de su salida,
garantizando la integridad de los datos y permitiendo a la administración tomar decisiones
basadas en estadísticas en tiempo real.

## *Sectores beneficiados:*
- Hotelería y hostelería
- Facultades de turismo y empresas de hospitalidad
- Negocios que gestionan reservas de alojamiento y necesitan retroalimentación ágil
------------------------------------------------------------------------------------------
## 2. Descripción de la aplicación
La aplicación consiste en un componente web (<feedback-form>) que contiene un formulario 
con los elementos requeridos (form, button, input y select). El propósito es recopilar 
la calificación de una estadía hotelera.

Al completar el formulario y pulsar "Enviar" se valida el contenido, y el resultado se
muestra en pantalla dentro del mismo componente sin recargar la página. Si falta información
obligatoria (nombre o calificación), se muestra un mensaje de error en rojo.

La estructura de archivos es:
- index.html: markup principal que usa el componente
- script.js: definición del WebComponent y lógica de eventos
- style.css: estilos generales del layout
-------------------------------------------------------------------------------------------
## 3. Preguntas del README

## *¿Qué valor agregado tiene el uso de webcomponents a su proyecto?*

Los WebComponents permiten encapsular el formulario y su estilo dentro de un shadow
DOM aislado, lo que evita colisiones de CSS con el resto de la página. Además facilita
la reutilización del componente en otras páginas o proyectos sin modificar su código interno.

## *¿De qué forma manipularon los datos sin recargar la página?*

Se intercepta el evento submit del formulario dentro del componente, se previene
el comportamiento por defecto (event.preventDefault()), se recogen los valores de
los inputs y se actualiza un elemento <div> con el resultado. Todo esto ocurre en 
memoria dentro del DOM sin necesidad de enviar la página al servidor.

## *¿De qué forma validaron las entradas de datos? Expliquen brevemente*

Antes de procesar los datos se comprueba que el nombre no esté vacío y que el select
de calificación tenga un valor distinto de la opción predeterminada. Si falla la validación 
se despliega un mensaje de error en color rojo y no se procede a mostrar el resultado.

## *¿Cómo manejaría la escalabilidad futura en su página?*

Para escalar se podría:
1. Convertir el componente en un paquete reutilizable (npm/JS module) para usar en distintas páginas.
2. Añadir almacenamiento (LocalStorage o servidor) para guardar múltiples respuestas y mostrarlas en una lista o enviarlas a una base de datos.
3. Separar la lógica en módulos más pequeños y emplear frameworks/librerías según crezca el proyecto.
4. Implementar más componentes (por ejemplo, lista de resultados, filtros) y usar técnicas de routing si la aplicación se vuelve más compleja.

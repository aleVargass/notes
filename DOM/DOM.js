/**
 * Errores comunes
 * if (!e.target) throw typeError;
 * DOMexception cross origin denied
 * keyword "this" en arrowFunctions toman al objeto window.
 */

/**
 * Orden de carga de los archivos y eventos.
 * 1.- Documento HTML
 * 2.- Evento DOMContentLoaded
 * 3.- CSS
 * 4.- JS
 * 5.- Evento load
 */

addEventListener("click", (e) => {
  let ventana;
  if (e.target === document.getElementById("abrir-ventana")) {
    ventana = open("http://127.0.0.1:5500/concepts_DOM/DOM.html");
  }
  if (e.target === document.getElementById("cerrar-ventana")) {
    close(ventana);
  }
  if (e.target === document.getElementById("imprimir-ventana")) {
    print(ventana);
  }
});

/**
 * Window. Cap. 78
 * open(): Abre una ventana.
 * close(): Cierra una ventana referenciada o la ventana actual.
 * closed: Indica si la ventana referenciada está cerrada, return boolean.
 * stop(): Detiene la carga de recursos de la ventana.
 * alert(): Muestra un cuadro de alerta.
 * print(): Imprime una ventana.
 * prompt(): Abre un cuadro de diálogo con un mensaje que solicita un dato, return string.
 * confirm(): Abre un cuadro de diálogo con un mensaje y dos botones, return boolean.
 *
 * innerWidth: Ancho del documento.
 * innerHeight: Alto del documento.
 * outerWidth: Ancho de la ventana.
 * outerHeight: Alto de la ventana.
 */
console.log(`innerWidth: ${innerWidth}
innerHeight: ${innerHeight}
outerWidth: ${outerWidth}
outerHeight ${outerHeight}`);

/**
 * Screen
 * screen: Devuelve el objeto screen.
 * screenLeft: Devuelve la distancia entre el borde izquierdo de la pantalla y el borde izquierdo de la ventana.
 * screenTop: Devuelve la distancia entre el borde superior de la pantalla y el borde superior de la ventana.
 * scrollX; Devuelve el scroll en X.
 * scrollY: Devuelve el scroll en Y.
 * scroll(x,y) || scrollTo(): Desplaza la ventana.
 * resizeBy(): Redimensiona la ventana relativamente.
 * resizeTo(): Redimensiona la ventana absolutamente.
 * moveBy(): Mueve la ventana en una ubicación relativa.
 * moveTo(): Mueve la ventana en una ubicación absoluta.
 */

/**
 * Objetos barprop.
 * property.visibile: boolean
 * Propiedades del objeto barprop.
 * locationbar.
 * menubar.
 * personalbar.
 * srollbar.
 * statusbar.
 * toolbar.
 */

/**
 * Location
 * location.reload(): Recarga la pagina indefinidamente.
 * location.assign(): Carga un nuevo documento.
 */
console.log(`Location properties
location: ${window.location}
origin: ${window.location.origin}
protocol: ${window.location.protocol}
host: ${window.location.host}
hostname: ${window.location.hostname}
port: ${window.location.port}
href: ${window.location.href}
hash: ${window.location.hash}
search: ${window.location.search}
pathname: ${window.location.pathname}`);

/**
 * Historial
 * forward(), back(), go() tiran errores si no hay historial
 * history
 * history.length
 * history.forward(): Avanza un numero de paginas.
 * history.back(): Retrocede un numeros de paginas
 * history.go(): Avanza o retrodece un numero de paginas.
 */

/**
 * Navigator
 * serviceWorker: Convierte una pagina a progresive app.
 * mimeTypes: Son los formatos de archivo.
 */
console.log(`Navigator properties
navigator: ${window.navigator}
connection: ${window.navigator.connection}
geolocation: ${window.navigator.geolocation}
mediaDevices: ${window.navigator.mediaDevices}
onLine: ${window.navigator.onLine}
serviceWorker: ${window.navigator.serviceWorker} 
storage: ${window.navigator.storage}
usb: ${window.navigator.usb}
userAgent: ${window.navigator.userAgent}`);

//Elementos del DOM.
document.head;
document.body;
document.documentElement;
document.doctype;
document.title;
document.links;
document.images;
document.forms;
document.styleSheets;
document.scripts;

//Selectores. Cap. 62
/**
 * Elementos del DOM por convención usan $ al inicio y son const.
 * length
 * forEach()
 * NodeLst: Puedes indexar.
 * Desuso
 * document.getElementsByClassName();
 * document.getElementsByTagName();
 * document.getElementsByName();
 */
document.getElementById("id");
document.querySelector(".selector");
document.querySelectorAll(".selectors");

/**
 * Attributes & data-attributes Cap.63
 * En elemento.
 * Tira diferentes valores cuando usamos la .notation y el metodo .getAttribute()
 * removeAttribute(): Remueve un atributo.
 * hasAttribute(attribute): Revisa si el elemento tiene un atributo, return boolean.
 * getAttribute():
 * setAttribute(attribute, value): Asigna un valor a un atributo.
 * attribute = "value": Asigna un valor a un atributo.
 * dataset: Retorna un DOMStringMap {} del elemento.
 * dataset.description: Retorna una descripcion del atributo data del elemento.
 */

/**
 * Estilos y variables CSS. Cap. 64
 * En elemento.
 * Las propiedades deben ser en lowerCamelCase cuando se usa el .notation.
 * La propiedad no debe ser en lowerCamelCase cuando se utilizan metodos.
 * Puedes guardar una variable CSS en una variable.
 * style: Accede al atributo style, retorna un map con las propiedades en línea del elemento.
 * .getAttribute("style"): Accede al atributo style, retorna un map con las propiedades en línea del elemento.
 * .style.property: Accede a la propiedad en linea.
 * style.property = value: Asigna una propiedad a un elemento.
 * style.setProperty("property", "value"): Asigna una propiedad a un elemento.
 * Elemento como argumento.
 * getComputedStyle(element): Retorna un map con las propiedades computadas del elemento.
 * getComputedStyle(element).getPropertyValue("property"): Retorna el valor de la propiedad computada.
 */

/**
 * Clases CSS. Cap.65
 * En classList.
 * add(): Agrega una clase o más clases.
 * contains(): Revisa si contiene la clase.
 * remove(): Remueve la clase.
 * toggle(): Agrega la clase si no la tiene, remueve la clase si la tiene.
 * replace(): Reemplaza una clase por otra.
 */

/**
 * Texto y codigo HTML. Cap. 66
 * En elemento.
 * textContent: Representa el contenido de texto de un nodo y sus dencendientes.
 * innerHTML: Devuelve el texto contenido en las etiquetas html.
 * outerHTML: Devuelve el texto contenido en las etiquetas html y las propias etiquetas.
 */

/**
 * Traversing. Cap. 67
 * children: Devuelve un HTMLCollection.
 * children[1]: Puedes indexar.
 * parentElement: Devuelve el elemento padre.
 * firstChild: Devuelve el primer nodo hijo.
 * firstElementChild: Devuelve el primer elemento hijo.
 * lastElementChild: Devuelve el ultimo elemento hijo.
 * previousElementSibling: Devuelve el anterior elemento hermano.
 * nextElementSibling: Devuelve el siguiente elemento hermano.
 * closest('class'): Devuelve el elemento padre más cercano con la misma clase.
 */

//Creando elementos y fragmentos cap.68
/**
 * Elementos y fragmentos. Cap. 68
 * document.createElement("element"): Crea un elemento.
 * document.createTextNode("text"): Crea un nodo texto.
 * element.appenChild(element): Agrega un elemento hijo.
 * document.createDocumentFragment(): Crea un fragmento, no tiene propiedad innerHTML.
 */

/**
 * Template Cap. 69
 * importNode(template, boolean): Clona un nodo.
 * content: Contenido de un nodo.
 */

/**
 * Modificando elementos Cap. 70, 71.
 * Old style.
 * En nodo
 * insertBefore(newNode, node): Inserta un nodo antes del mismo.
 * replaceChild(newNode, oldNode): Reemplaza un nodo por otro.
 * removeChild(node): Remueve un nodo hijo.
 * cloneNode(boolean): Clona un nodo.
 */

/**
 * Cool style.
 * En nodo.
 * insertAdjacentElement(position, nodeElement)
 * insertAdjacentHTML(position, HTML)
 * insertAdjacentText(position, text)
 * positions: beforebegin, afterbegin, beforeend, afterend
 */

/**
 * Metodos de jQuery agregados a JS.
 * En nodo.
 * before(node): Antes
 * prepend(node); Inicio
 * append(node)): Final
 * after(node); Después
 */

/**
 * Eventos Cap. 72
 * event: Mecanismo para poder controlar las acciones del usuario y definir ciertos comportamientos.
 * eventHandler: Funciones que se ejecutan en un evento.
 */

/**
 * Evento on, puede ser referenciado o desde el HTML como atributo.
 * No puede ser arrowFunction.
 */
function holaMundo() {
  console.log("Hola mundo");
}

/**
 * Los eventos semanticos solo tienen 1 eventHandler.
 * El eventHandler no recibe parametros, solo el mismo evento y por convención se llama e.
 * La función holaMundo sin () para no ejecutarse cuando se asigna.
 */
const $eventoSemanticoBtn = document.getElementById("evento-semantico");
$eventoSemanticoBtn.onclick = holaMundo;
$eventoSemanticoBtn.onclick = (e) => {
  console.log("Hola eventHandler semantico");
  console.log(e);
};

/**
 * Los addEventListener pueden tener varios eventHandler.
 * Sintaxis: addEventListener(event, evenHandler);
 */
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", function (e) {
  console.log("Hola eventListener");
});

/**
 * evenListener con parametros.
 * Sintaxis: removeEventListener(event, eventHandler)
 */
const $eventHandlerParams = document.getElementById("handlerMultiple-params");
function saludar(nombre = "desconocido", edad = 0) {
  console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
}

$eventHandlerParams.addEventListener("click", () => {
  saludar();
  saludar("ale", 19);
});

const removeDoubleClick = (e) => {
  console.log(`Removing ${e.type} event`);
  $eventHandlerParams.removeEventListener("dblclick", removeDoubleClick);
};

$eventHandlerParams.addEventListener("dblclick", removeDoubleClick);

/**
 * Flujo de eventos (bubble & capture) Cap. 74
 * stopPropagation() y e.preventDefault() Cap. 75
 * bubble : Del más especifico al menos especifico.
 * capture: Del externo al más interno.
 * e.preventDefault(); Niega el evento por defecto.
 * stopPropagation(); Niega la propagacion de los eventos en el elemento si el elemento está dentro de otros elementos.
 */

/**
 * Delegación de eventos Cap.76
 * No es necesario stopPropagation() si el evento esta al elemento padre (document).
 * Es mejor delegar el evento a uno externo para no consumir recursos.
 * stopPropagation(): Cancela el evento padre.
 * e.preventDefault(): Cancela la acción que tiene por defecto.
 * e.target.matches($element) || e.target === document.selector(element): Maneras de seleccionar elementos del DOM.
 */

/**
 * Eventos del mouse.
 * click
 * dbclick
 * mouseover: Ocurre cuando el puntero se mueve sobre el elemento o uno de sus hijos.
 * mouseout || mouseleave: Ocurre cuando el puntero sale del elemento o uno de sus hijos.
 * contextmenu: Ocurre cuando se hace click derecho en el elemento.
 * mousemove: Ocurre cuando el puntero se mueve sobre el elemento.
 * mousedown: Cuando se apreta un boton del mouse en el elemento.
 * mouseup: Ocurre cuando se suelta un botón del mouse en el elemento.
 *
 * Eventos del teclado
 * keydown
 * keypress
 * keyup
 *
 * Eventos de interfaz
 * error: Ocurre cuando sucede un error durante la carga de un recurso.
 * load: Ocurre cuando un recurso se ha cargado.
 * beforeunload: Ocurre antes de que una página cargue.
 * unload: Ocurre cuando se cargo una página.
 * resize: Ocurre cuando se redimensiona la ventana.
 * scroll: Ocurre cuando se desplaza a través del documento.
 * select: Ocurre cuando el usuario selecciona un elemento text.
 */

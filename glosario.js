// Glosario de términos de telemática — Programación Avanzada (22354)
//
// Fuente única de los términos: esta constante alimenta a la vez las ventanas
// emergentes de las páginas de contenido y el listado de es/recursos/glosario.qmd.
//
// Para marcar un término en un .qmd:   [conmutador]{.glos}
// Si el texto no coincide con la clave: [conmutadores]{.glos data-termino="switch"}

window.GLOSARIO = {

  "router": {
    termino: "Encaminador",
    ingles: "router",
    alias: ["encaminador", "encaminadores", "enrutador", "enrutadores", "routers"],
    definicion: "Dispositivo que interconecta redes distintas y reenvía paquetes entre ellas. Opera en la capa de red (capa 3 del modelo OSI): para cada paquete consulta su tabla de encaminamiento, decide cuál es el siguiente salto hacia el destino y lo reenvía por la interfaz correspondiente."
  },

  "switch": {
    termino: "Conmutador",
    ingles: "switch",
    alias: ["conmutador", "conmutadores", "switches"],
    definicion: "Dispositivo que interconecta equipos dentro de una misma red local y reenvía tramas entre ellos. Opera en la capa de enlace (capa 2): aprende qué dirección MAC hay en cada puerto y envía cada trama solo por el puerto donde está su destinatario, en lugar de difundirla a todos."
  },

  "dispositivo-de-red": {
    termino: "Dispositivo de red",
    ingles: "network device",
    alias: ["dispositivo de red", "dispositivos de red"],
    definicion: "Cualquier equipo que participa en el transporte o la entrega de datos en una red: encaminadores, conmutadores, puntos de acceso, cortafuegos, servidores. Se caracteriza por tener una o varias interfaces con sus direcciones y por ser administrable de forma remota."
  },

  "enlace": {
    termino: "Enlace",
    ingles: "link",
    alias: ["enlace", "enlaces"],
    definicion: "Conexión directa entre dos nodos de una red por la que se transmiten datos, sin equipos intermedios que la encaminen. Puede ser física (un cable, una fibra) o inalámbrica. Que un enlace «caiga» significa que deja de transmitir, y obliga a la red a buscar otro camino si lo hay."
  },

  "trama": {
    termino: "Trama",
    ingles: "frame",
    alias: ["trama", "tramas"],
    definicion: "Unidad de datos de la capa de enlace: el bloque que viaja por un enlace concreto, con su cabecera (direcciones MAC de origen y destino) y su cola de comprobación de errores. Un conmutador reenvía tramas; un encaminador, paquetes."
  },

  "paquete": {
    termino: "Paquete",
    ingles: "packet",
    alias: ["paquete", "paquetes"],
    definicion: "Unidad de datos de la capa de red: el bloque que viaja de extremo a extremo, con las direcciones IP de origen y destino en su cabecera. A lo largo del camino cada paquete se encapsula en tramas distintas, una por enlace que atraviesa."
  },

  "encaminamiento": {
    termino: "Encaminamiento",
    ingles: "routing",
    alias: ["encaminamiento", "enrutamiento"],
    definicion: "Proceso de decidir por qué camino se envía un paquete hacia su destino. Cada encaminador toma la decisión localmente, consultando su tabla de encaminamiento, que se construye con configuración manual o con protocolos como OSPF o BGP."
  },

  "direccion-ip": {
    termino: "Dirección IP",
    ingles: "IP address",
    alias: ["dirección ip", "direcciones ip", "direccion ip"],
    definicion: "Identificador de una interfaz de red dentro de una red IP, usado para encaminar los paquetes hasta ella. En IPv4 ocupa 32 bits y se escribe como cuatro números de 0 a 255 separados por puntos (147.83.2.1); en IPv6, 128 bits en notación hexadecimal."
  },

  "direccion-mac": {
    termino: "Dirección MAC",
    ingles: "MAC address",
    alias: ["dirección mac", "direcciones mac", "direccion mac"],
    definicion: "Identificador de 48 bits grabado en una interfaz de red, único en principio en el mundo, que la identifica dentro de su red local. Es la dirección que usan las tramas y con la que trabaja un conmutador; no sirve para encaminar fuera de la red local."
  },

  "puerto": {
    termino: "Puerto",
    ingles: "port",
    alias: ["puerto", "puertos", "puerto tcp", "puertos tcp"],
    definicion: "Número de 16 bits (de 1 a 65 535) que identifica un extremo concreto de una comunicación dentro de un equipo, y permite que un mismo equipo atienda varios servicios a la vez. Algunos están reservados por convenio: 25 para SMTP, 53 para DNS, 80 para HTTP y 443 para HTTPS."
  },

  "socket": {
    termino: "Socket",
    ingles: "socket",
    alias: ["socket", "sockets"],
    definicion: "Extremo de una comunicación entre dos equipos, identificado por la pareja dirección IP y puerto. Es también la abstracción que ofrece el sistema operativo para programar en red: se abre, se escribe, se lee y se cierra como si fuera un fichero. En Java es `java.net.Socket` (Tema 4)."
  },

  "tcp": {
    termino: "TCP",
    ingles: "Transmission Control Protocol",
    alias: ["tcp"],
    definicion: "Protocolo de transporte que ofrece una conexión fiable y ordenada entre dos equipos: numera los datos, retransmite lo que se pierde y controla el ritmo de envío. Es la base de HTTP, SMTP y la mayoría de servicios de Internet. Su alternativa sin conexión ni garantías es UDP."
  },

  "dns": {
    termino: "DNS",
    ingles: "Domain Name System",
    alias: ["dns"],
    definicion: "Sistema distribuido que traduce nombres de dominio legibles (uib.es) en direcciones IP. Funciona como una jerarquía de servidores que se consultan entre sí y guardan las respuestas en caché. Si el DNS falla, los servicios siguen en pie pero nadie los encuentra por su nombre."
  },

  "http": {
    termino: "HTTP",
    ingles: "HyperText Transfer Protocol",
    alias: ["http", "https"],
    definicion: "Protocolo de aplicación sobre el que funciona la web: un cliente envía una petición con un método (GET, POST…) y una URL, y el servidor responde con un código de estado (200, 404, 500…) y un cuerpo. HTTPS es el mismo protocolo cifrado con TLS."
  },

  "url": {
    termino: "URL",
    ingles: "Uniform Resource Locator",
    alias: ["url", "urls"],
    definicion: "Cadena que localiza un recurso en la red indicando el esquema, el equipo y el camino dentro de él: `https://www.uib.es/estudis/`. En Java se modela con `java.net.URI`, que además la valida y permite consultar sus partes por separado."
  },

  "latencia": {
    termino: "Latencia",
    ingles: "latency",
    alias: ["latencia", "latencias"],
    definicion: "Tiempo que tarda un dato en llegar de origen a destino. En la práctica suele medirse de ida y vuelta (tiempo de ida y vuelta, *round-trip time*), que es lo que reporta una herramienta como `ping`. Es independiente del ancho de banda: un enlace muy rápido puede tener latencia alta."
  },

  "ancho-de-banda": {
    termino: "Ancho de banda",
    ingles: "bandwidth",
    alias: ["ancho de banda"],
    definicion: "Cantidad máxima de datos que un enlace puede transmitir por unidad de tiempo, medida en bits por segundo. Responde a «cuántos datos caben», mientras que la latencia responde a «cuánto tardan en llegar»; confundir ambas es uno de los errores más comunes al diagnosticar una red lenta."
  },

  "sonda": {
    termino: "Sonda",
    ingles: "probe",
    alias: ["sonda", "sondas"],
    definicion: "Comprobación activa y periódica que se lanza contra un servicio para saber si responde y en cuánto tiempo. A diferencia de la observación pasiva del tráfico, la sonda genera ella misma la petición, de modo que detecta el fallo aunque no haya usuarios en ese momento."
  },

  "monitorizacion": {
    termino: "Monitorización",
    ingles: "monitoring",
    alias: ["monitorización", "monitorizacion"],
    definicion: "Vigilancia continua del estado de una red o de sus servicios, recogiendo medidas a lo largo del tiempo para detectar fallos y degradaciones, avisar a quien corresponda y disponer de un histórico con el que diagnosticar. Es el problema que resuelve el ejemplo que recorre esta asignatura."
  },

  "disponibilidad": {
    termino: "Disponibilidad",
    ingles: "availability",
    alias: ["disponibilidad"],
    definicion: "Fracción del tiempo durante la cual un servicio está operativo, expresada como porcentaje. Las cifras habituales son engañosamente parecidas: el 99 % admite unos tres días y medio de caída al año, y el 99,9 % menos de nueve horas."
  },

  "tiempo-de-espera": {
    termino: "Tiempo de espera",
    ingles: "timeout",
    alias: ["tiempo de espera", "timeout"],
    definicion: "Plazo máximo que se concede a una operación de red antes de darla por fallida. Sin él, una petición a un equipo que no responde puede bloquear el programa indefinidamente, porque la ausencia de respuesta no produce ningún error por sí sola."
  },

  "registro-de-eventos": {
    termino: "Registro de eventos",
    ingles: "event log",
    alias: ["registro de eventos", "registro", "log"],
    definicion: "Secuencia de anotaciones con marca de tiempo que deja constancia de lo que ha ido ocurriendo en un sistema. En una red es la fuente principal para reconstruir qué pasó y en qué orden cuando algo falla, porque el fallo casi nunca se observa en el momento en que se produce."
  }
};

(function () {
  "use strict";

  // Quita acentos y unifica mayúsculas y espacios, para que el texto marcado en
  // el .qmd no tenga que coincidir carácter a carácter con la clave.
  function normalizar(texto) {
    return (texto || "")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  // Índice: clave normalizada -> clave real del glosario.
  var indice = {};
  Object.keys(window.GLOSARIO).forEach(function (clave) {
    var entrada = window.GLOSARIO[clave];
    indice[normalizar(clave)] = clave;
    indice[normalizar(entrada.termino)] = clave;
    (entrada.alias || []).forEach(function (a) { indice[normalizar(a)] = clave; });
  });

  function buscar(texto) {
    var clave = indice[normalizar(texto)];
    return clave ? { clave: clave, entrada: window.GLOSARIO[clave] } : null;
  }

  function escapar(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // Ruta a la página del glosario, relativa a la profundidad de la página actual.
  function rutaGlosario() {
    var partes = window.location.pathname.split("/").filter(Boolean);
    var i = partes.indexOf("es");
    if (i === -1) return "es/recursos/glosario.html";
    return "../".repeat(partes.length - i - 1) + "recursos/glosario.html";
  }

  function contenido(clave, entrada) {
    return "<p class=\"glos-def\">" + escapar(entrada.definicion) + "</p>" +
           "<p class=\"glos-mas\"><a href=\"" + rutaGlosario() + "#glos-" + clave +
           "\">Ver en el glosario</a></p>";
  }

  function activarPopovers() {
    var marcas = document.querySelectorAll("span.glos");
    if (!marcas.length) return;
    var hayBootstrap = typeof window.bootstrap !== "undefined" &&
                       typeof window.bootstrap.Popover === "function";

    marcas.forEach(function (marca) {
      var buscado = marca.getAttribute("data-termino") || marca.textContent;
      var hallado = buscar(buscado);
      if (!hallado) {
        // Término sin definición: se deja el texto tal cual y se avisa en consola,
        // para que se detecte al revisar la página y no en clase.
        console.warn("[glosario] término no definido: " + buscado);
        marca.classList.add("glos-sin-definicion");
        return;
      }
      var entrada = hallado.entrada;
      var titulo = entrada.termino +
                   (entrada.ingles ? " <em>(" + escapar(entrada.ingles) + ")</em>" : "");

      marca.setAttribute("tabindex", "0");
      marca.setAttribute("role", "button");
      marca.setAttribute("aria-label", entrada.termino + ": " + entrada.definicion);

      if (hayBootstrap) {
        new window.bootstrap.Popover(marca, {
          title: titulo,
          content: contenido(hallado.clave, entrada),
          html: true,
          sanitize: false,
          trigger: "focus hover",
          placement: "auto",
          customClass: "glos-popover"
        });
      } else {
        // Sin Bootstrap disponible, al menos queda la definición en el tooltip nativo.
        marca.setAttribute("title", entrada.termino + " — " + entrada.definicion);
      }
    });
  }

  // Listado completo, solo en es/recursos/glosario.qmd.
  function construirListado() {
    var destino = document.getElementById("glosario-lista");
    if (!destino) return;

    var claves = Object.keys(window.GLOSARIO).sort(function (a, b) {
      return window.GLOSARIO[a].termino.localeCompare(window.GLOSARIO[b].termino, "es");
    });

    destino.innerHTML = claves.map(function (clave) {
      var e = window.GLOSARIO[clave];
      return "<div class=\"glos-entrada\" id=\"glos-" + clave + "\">" +
             "<h3 class=\"glos-termino\">" + escapar(e.termino) +
             (e.ingles ? " <span class=\"glos-ingles\">(" + escapar(e.ingles) + ")</span>" : "") +
             "</h3><p>" + escapar(e.definicion) + "</p></div>";
    }).join("");

    var total = document.getElementById("glosario-total");
    if (total) total.textContent = claves.length;

    // Si se ha llegado con un ancla (#glos-router), resaltarla un momento.
    if (window.location.hash) {
      var objetivo = document.querySelector(window.location.hash);
      if (objetivo && objetivo.classList.contains("glos-entrada")) {
        objetivo.classList.add("glos-destacada");
        objetivo.scrollIntoView({ block: "center" });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    construirListado();
    activarPopovers();
  });
})();

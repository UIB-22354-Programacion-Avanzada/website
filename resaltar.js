// Resaltado de líneas en bloques de código — Programación Avanzada (22354)
//
// Quarto no resalta líneas concretas en documentos HTML: `code-line-numbers="2,4"`
// es sintaxis de Reveal.js y en una página normal solo numera. Esto lo suple.
//
// Uso en un .qmd:
//
//   ::: {.resaltar data-lineas="2,4-5"}
//   ```java
//   ...
//   ```
//   :::
//
// `data-lineas` admite números sueltos, rangos con guion y comas: "3", "2,7", "1,3,10-12".
// Se cuenta desde 1, incluyendo la línea del comentario con el nombre del fichero.
// No hace falta numerar el bloque, y la valla sigue siendo ```java, de modo que el
// extractor que genera tN-ejemplos no se ve afectado.

(function () {
  "use strict";

  // "1,3,10-12" -> Set {1, 3, 10, 11, 12}
  function interpretar(especificacion) {
    var lineas = new Set();
    (especificacion || "").split(",").forEach(function (trozo) {
      trozo = trozo.trim();
      if (!trozo) return;
      var rango = trozo.match(/^(\d+)\s*-\s*(\d+)$/);
      if (rango) {
        var desde = parseInt(rango[1], 10);
        var hasta = parseInt(rango[2], 10);
        if (desde > hasta) { var intercambio = desde; desde = hasta; hasta = intercambio; }
        for (var i = desde; i <= hasta; i++) lineas.add(i);
        return;
      }
      var suelta = trozo.match(/^\d+$/);
      if (suelta) {
        lineas.add(parseInt(trozo, 10));
      } else {
        console.warn("[resaltar] no entiendo esta especificación de líneas: " + trozo);
      }
    });
    return lineas;
  }

  function aplicar() {
    document.querySelectorAll("div.resaltar").forEach(function (envoltorio) {
      var deseadas = interpretar(envoltorio.getAttribute("data-lineas"));
      if (!deseadas.size) return;

      var codigo = envoltorio.querySelector("pre.sourceCode > code");
      if (!codigo) {
        console.warn("[resaltar] un div.resaltar no envuelve ningún bloque de código");
        return;
      }

      var lineas = codigo.querySelectorAll(":scope > span");
      if (!lineas.length) {
        console.warn("[resaltar] el bloque no tiene líneas identificables");
        return;
      }

      lineas.forEach(function (linea, indice) {
        if (deseadas.has(indice + 1)) linea.classList.add("linea-resaltada");
      });

      // Aviso si se pide una línea que no existe: el fallo es mudo de otro modo,
      // y aparece al añadir o quitar líneas de un listado ya marcado.
      deseadas.forEach(function (numero) {
        if (numero < 1 || numero > lineas.length) {
          console.warn("[resaltar] el bloque tiene " + lineas.length +
                       " líneas y se ha pedido resaltar la " + numero);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", aplicar);
})();

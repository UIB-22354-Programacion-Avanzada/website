# Programación Avanzada (22354) — sitio web de la asignatura

Código fuente del portal web de **Programación Avanzada (22354)**, asignatura obligatoria de
segundo curso del **Grado en Ingeniería Telemática** de la Escola Politècnica Superior de la
**Universitat de les Illes Balears**.

🌐 **[uib-22354-programacion-avanzada.github.io/website](https://uib-22354-programacion-avanzada.github.io/website/)**

El sitio reúne la guía docente, el material teórico de los cinco temas, los ejercicios, la
bibliografía y los recursos de apoyo. Está escrito en español y construido con
[Quarto](https://quarto.org/).

## Contenido de la asignatura

| Tema | Título | Horas presenciales |
|---|---|---|
| 1 | POO, principios SOLID y diseño | 12 |
| 2 | Algoritmos, complejidad y estructuras de datos | 8 |
| 3 | Programación concurrente | 16 |
| 4 | Programación de red y servicios distribuidos | 12 |
| 5 | Bases de datos: SQL, JDBC y NoSQL | 12 |

La pila técnica es **Java 25**, **Maven**, **JUnit 5**, **GitHub Codespaces** y **GitHub
Actions**. Un mismo ejemplo motivador —un monitor de servicios de red— recorre la asignatura y
va ganando concurrencia, comunicación por sockets y persistencia a medida que avanzan los temas.

## Repositorios de código

El código no vive en este repositorio, sino en uno por tema dentro de la
[organización](https://github.com/UIB-22354-Programacion-Avanzada):

- **`tN-ejemplos`** — proyecto Maven con todos los ejemplos del tema, compilables y con sus
  pruebas. Es un repositorio *plantilla*: el alumnado crea su propia copia y la abre en un
  Codespace.
- **`tN-ejercicios`** — esqueleto de los ejercicios del tema. Compila desde el primer momento,
  pero sus pruebas fallan hasta que se resuelven.

## Estructura del repositorio

```text
website/
├── _quarto.yml                 ← configuración del sitio (barra lateral, tema, crossref)
├── index.qmd                   ← página de inicio
├── es/
│   ├── informaciones/          ← guía docente, calendario y horario
│   ├── contenido/              ← temas 1–5 (un .qmd y un .bib por tema)
│   ├── ejercicios/             ← enunciados de los ejercicios
│   ├── recursos/               ← herramientas de software, exámenes anteriores
│   └── bibliografia/           ← bibliografía principal y complementaria
├── images/                     ← logotipos e ilustraciones
├── theme.scss / theme-dark.scss / styles.css
└── logo-href.js / full-view.js ← pequeños añadidos de comportamiento
```

## Construir el sitio en local

Requiere [Quarto](https://quarto.org/docs/get-started/) (versión 1.7 o posterior).

```bash
git clone https://github.com/UIB-22354-Programacion-Avanzada/website.git
cd website
quarto preview          # vista previa con recarga automática
quarto render           # genera el sitio completo en _site/
```

`freeze: auto` mantiene en `_freeze/` los resultados ya calculados, de modo que solo se vuelve
a ejecutar el código de las páginas que hayan cambiado.

## Convenciones de redacción

- **Callouts con numeración propia.** El sitio redefine los cinco tipos de callout de Quarto:
  `important` → *Concepto Clave*, `note` → *Ejemplo*, `caution` → *Error Frecuente*,
  `warning` → *Técnica de Depuración*, `tip` → *Fundamento Teórico*. Con `crossref: chapters:
  true` se numeran por página y se citan en el texto con `@imp-nombre`, `@nte-nombre`, etc.
- **Numeración de secciones.** Dentro de cada tema, los apartados `##` siguen los subapartados
  de la guía docente (1.1, 1.2, …) y los `###` se numeran `1.X.k`.
- **Diagramas** en Mermaid, incrustados directamente en el `.qmd`.
- **Bibliografía** por tema, en un `.bib` junto al `.qmd`, con la lista de referencias al final
  de la página.

## Licencia y uso

Material docente elaborado por **Alejandro Mesejo Chiong** (UIB-EPS) para el curso 2026-2027.
Se puede consultar y reutilizar con fines educativos citando la fuente.

Las **condiciones de uso de asistentes de IA** aplicables a las entregas de la asignatura están
recogidas en la
[guía docente](https://uib-22354-programacion-avanzada.github.io/website/es/informaciones/guia-docente.html).

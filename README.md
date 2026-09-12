# Programación Avanzada (22354) — sitio web de la asignatura

Código fuente del portal web de **22354 - Programación Avanzada**, asignatura obligatoria de
segundo curso del [**Grado en Ingeniería Telemática**](https://estudis.uib.es/estudis-de-grau/grau/telematica/GTT2-P/) de la [**Escola Politècnica Superior**](https://eps.uib.es/) de la
[**Universitat de les Illes Balears**](https://www.uib.es).

🌐 **[uib-22354-programacion-avanzada.github.io/website](https://uib-22354-programacion-avanzada.github.io/website/)**

El sitio reúne la guía docente, el material teórico de los cinco temas, los ejercicios, la
bibliografía y los recursos de apoyo. Está construido con [Quarto](https://quarto.org/).

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

## Licencia

© 2026 Alejandro Mesejo · [UIB-EPS](https://eps.uib.es/)
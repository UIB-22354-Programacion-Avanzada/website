// Redirige el logo del sidebar a la página de la asignatura en la UIB
document.addEventListener("DOMContentLoaded", function () {
  var logoLink = document.querySelector("a.sidebar-logo-link");
  if (logoLink) {
    logoLink.href = "https://estudis.uib.es/estudis-de-grau/grau/telematica/GTT2-P/22354/";
    logoLink.target = "_blank";
    logoLink.rel = "noopener noreferrer";
  }
});

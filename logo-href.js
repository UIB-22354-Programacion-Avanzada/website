// Redirige el logo del sidebar a la página de la asignatura en la UIB
document.addEventListener("DOMContentLoaded", function () {
  var logoLink = document.querySelector("a.sidebar-logo-link");
  if (logoLink) {
    // Actualizar la URL al enlace oficial de la asignatura 22354 en UIB
    logoLink.href = "https://estudis.uib.es/estudis-de-grau/grau/PENDIENTE/22354/index.html";
    logoLink.target = "_blank";
    logoLink.rel = "noopener noreferrer";
  }
});

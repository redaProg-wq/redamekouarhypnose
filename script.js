//Dynamisation de la page d'acceuil//

const btnCParti = document.getElementById("btnCParti");
const phraseCouleur = document.getElementById("phraseCouleur");

btnCParti.addEventListener("mouseenter", function () {
  console.log("bouton survolé");
  phraseCouleur.style.backgroundColor = "hsl(178, 60%, 49%)";
});

btnCParti.addEventListener("mouseleave", function () {
  console.log("bouton non survolé");
  phraseCouleur.style.backgroundColor = "white";
});

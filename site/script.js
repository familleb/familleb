<!DOCTYPE javascript>
<script>
<img src="image1.jpg" onmouseover="agrandirImage(this)" onmouseout="retrecirImage(this)">
function agrandirImage(img) {
  img.style.width = "200%"; // agrandit l'image à 200%
}

function retrecirImage(img) {
  img.style.width = "100%"; // remet la taille de l'image à 100%
}
<button onclick="allerALaPage()">Accueil</button>

    <script>
      function allerALaPage() {
        window.location.href ="C:\Users\Jacques\Documents\site\page_accueil.html"; // redirige vers la page d'accueil
      }
</script>


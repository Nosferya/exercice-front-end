
$(function(){
   $('#clic1').click(function(){
      $('#hide').toggle() // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON
   });
});

function off() {
document.getElementById("overlay").style.display="none";
}


function on() {
document.getElementById("overlay").style.display="block";
}

/*****************************
-----------Boutons------------
*****************************/
$(document).ready(function() {
  //Afficher/Masquer compétences
  $('.liste_outils').hide(0);
  $('#afficher_compt').click(function(){
    $('.liste_outils').toggle(500);
    $('.mes_experiences').hide();
    $('.mes_formation').hide();
    $('.mes_qualites').hide();
  })
  //Afficher/Masquer experiences
  $('.mes_experiences').hide(0);
  $('#afficher_exp').click(function(){
    $('.mes_experiences').toggle(500);
    $('.mes_formation').hide();
    $('.mes_qualites').hide();
    $('.liste_outils').hide();
  })
  //Afficher/Masquer formations
  $('.mes_formation').hide(0);
  $('#afficher_form').click(function(){
    $('.mes_formation').toggle(500);
    $('.liste_outils').hide();
    $('.mes_experiences').hide();
    $('.mes_qualites').hide();
  })
  //Afficher/Masquer qualités
  $('.mes_qualites').hide(0);
  $('#afficher_qualt').click(function(){
    $('.mes_qualites').toggle(500);
    $('.liste_outils').hide();
    $('.mes_experiences').hide();
    $('.mes_formation').hide();
  })
  /***************************
  ----------Menu burger-------
  ***************************/
  //Afficher/Masquer compétences
  $('.liste_outils').hide(0);
  $('#burger_comp').click(function(){
    $('.liste_outils').toggle(500);
    $('.mes_experiences').hide();
    $('.mes_formation').hide();
    $('.mes_qualites').hide();
  })
  //Afficher/Masquer experiences
  $('.mes_experiences').hide(0);
  $('#burger_exp').click(function(){
    $('.mes_experiences').toggle(500);
    $('.mes_formation').hide();
    $('.mes_qualites').hide();
    $('.liste_outils').hide();
  })
  //Afficher/Masquer formations
  $('.mes_formation').hide(0);
  $('#burger_form').click(function(){
    $('.mes_formation').toggle(500);
    $('.liste_outils').hide();
    $('.mes_experiences').hide();
    $('.mes_qualites').hide();
  })
  //Afficher/Masquer qualités
  $('.mes_qualites').hide(0);
  $('#burger_qualt').click(function(){
    $('.mes_qualites').toggle(500);
    $('.liste_outils').hide();
    $('.mes_experiences').hide();
    $('.mes_formation').hide();
  })
})

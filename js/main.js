$("").on("click", function(){
  $("").hide();
  $("").show();
});

var musica = new Audio('');
var tentativas = 3;
var contasom = 1;

$("section.inicio button").on("click", function(){
  musica = new Audio('musica/engenheiros.mp3')
  musica.play();
  erros = 0;

  $("section").hide();
  $("section.cantores-1").show();
});

$("section.cantores-1 ul img.certo").one("click",function(){

    musica.pause();
    musica = new Audio("musica/correct.mp3");
    musica.play();
    $("section").hide();
    $("section.cantores-3").show();

});

var erros = 0;
$("section.cantores-1 ul img.errado").one("click",function(){
  tentativas--;
  $(this).css({
    opacity: 0.5
  });
  if(tentativas < 1){
    musica.pause();
    musica = new Audio("musica/game-over-acarde.wav");
    musica.play();

    //transição de tela
    $("section").hide();
    $("section.cantores-2").show();

  }
  document.querySelector(".valTentativas").innerHTML = tentativas;

});

$("#home").on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});


$('#volume').on('click',function(){
  if(contasom == 1){
    contasom ++;
    musica.pause();
    
  }else if (contasom == 2){
    contasom --;
    musica.play();
  }
  



});

$("#ajuda").on('click',function(){
  $("#ajud").hide();
  $("#ajud2").hide();
});

$('section.cantores-2 button').on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});

$('section.cantores-3 button').on('click',function(){
  $('section').hide();
  $('section.inicio').show();
  document.location.reload();
});


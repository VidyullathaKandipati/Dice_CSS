$(document).ready(function(){

  $('#start').on('click',rollOn);
  $('#stop').on('click',stopRolling);
  function rollOn(){
    $('.box').addClass("roll");
    $('.box').removeClass("pause");
    $('#start').hide();
    $('#stop').show();
  }
  function stopRolling(){
    $('.box').addClass("pause");
    $('#stop').hide();
    $('#start').show();
  }
});

var luckTotal = 0;

$(document).ready(function(){
  $("form#fortune-teller").one('submit', function(event){
    event.preventDefault();
    $("#questionOneResponse").show();
    $("form#fortune-teller").hide();

    $("input:checkbox[name=questionOne]:checked").each(function(){
      var answerOne = parseInt($(this).val());
      luckTotal = luckTotal + answerOne;
      $("#questionOneResponse").append(answerOne + "<br>");
    });

    $("input:checkbox[name=questionTwo]:checked").each(function(){
      var answerTwo = parseInt($(this).val());
      luckTotal = luckTotal + answerTwo;
      $("#questionTwoResponse").append(answerTwo + "<br>");
    });

    $("input:radio[name=questionThree]:checked").each(function(){
      var answerThree = parseInt($(this).val());
      luckTotal = luckTotal + answerThree;
      $("#questionThreeResponse").append(answerThree + "<br>");
    });

    if (luckTotal >= 7) {
      $("#lucky").show();
    } else if (luckTotal > 0 || luckTotal < 7) {
      $("#normal").show();
    } else if (luckTotal <= 0) {
      $("#unlucky").show();
    } else {
      alert("You sucessfully broke the code and beat the game.")
    }
    //7+ very lucky
    //1-6 lucky
    //-1+ unlucky
  });

});

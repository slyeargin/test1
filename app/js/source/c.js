(function() {
  'use strict';

  $(document).ready(init);

  function init() {
    $('#controls').on('click', '#squareIt', getSquares);
  }

  var aryNumbers = [];
  var arySquares = [];

  function getSquares() {
    var $numberInput = $('#numbers').val();
    aryNumbers = $numberInput.split(',');
    var numberCount = aryNumbers.length;

    findSquares(numberCount);
    addDivs(numberCount);
  }

  function findSquares(numberCount) {
    for (var i = 0; i < numberCount; i++) {
      aryNumbers[i] *= 1;
      arySquares[i] = aryNumbers[i] * aryNumbers[i];
    }

  }

  function addDivs(numberCount){
    for (var i = 0; i < numberCount; i++){
      var divContent = $('<div></div>');
      if (arySquares[i] % 2){
        $(divContent).addClass('littleSquare').css('background-color', arySquares[i]).text(arySquares[i]);
        $('#odds').append(divContent);
      } else {
        $(divContent).addClass('littleSquare').css('background-color', arySquares[i]).text(arySquares[i]);
        $('#evens').append(divContent);
      }
    }

  }


}) ();

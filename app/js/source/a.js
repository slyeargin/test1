(function() {
  'use strict';

  $(document).ready(init);

  function init() {
    $('#controls').on('click', '#colorize', getColors);
  }

  function getColors() {
    var aryColors = [];
    var $colorInput = $('#colors').val();
    aryColors = $colorInput.split(',');
    var colorCount = aryColors.length;

    addDivs(colorCount, aryColors);
  }

  function addDivs(colorCount, aryColors) {
    for (var i = 0; i < colorCount; i++){
      var divContent = $('<div></div>');
      var divContentNum = aryColors[i].length;
      $(divContent).addClass('littleSquare').css('background-color', aryColors[i]).append(divContentNum);
      $('#output').append(divContent);
    }

  }

}) ();

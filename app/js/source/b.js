(function() {
  'use strict';

  $(document).ready(init);

  function init() {
    $('#controls').on('click', '#coinFlip', coinFlip);
  }

  var coin;
  var headCount = 0;
  var tailCount = 0;
  var totalFlipCount = 0;

  function coinFlip (){
    totalFlipCount++;

    coin = Math.floor((Math.random() * 2)+1);
    console.log(coin);

    if (coin === 1){
      headCount++;
    } else {
      tailCount++;
    }

    printOutput();
  }

  function printOutput() {
    $('#count > .heads').text(headCount);
    $('#count > .tails').text(tailCount);
    $('#percent > .heads').text((headCount / totalFlipCount)*100 + '%');
    $('#percent > .tails').text((tailCount / totalFlipCount)*100 + '%');

  }

}) ();

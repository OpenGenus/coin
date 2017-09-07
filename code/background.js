/*
 * OpenGenus Coin: The coin for charity
 * Supports 11 services currently
 */

(function(){
  function load(script) 
  {
    document.write('<'+'script src="'+script+'" type="text/javascript"><' + '/script>');
  }

  load("code.js");
  load("functions.js");

  // AMAZON SITES
  load("services/amazon/amazon_in.js");
  load("services/amazon/amazon_com.js");
  load("services/amazon/amazon_ca.js");

})();

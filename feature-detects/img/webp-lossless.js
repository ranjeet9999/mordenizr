define(['Modernizr', 'addTest'], function( Modernizr, addTest ) {
  // code.google.com/speed/webp/
  // tests for lossless webp support, as detailed in https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification
  // by @amandeep - based off of the img-webp-test

  // This test is asynchronous. Watch out.

  Modernizr.addAsyncTest(function(){
    var image = new Image();

    image.onerror = function() {
      addTest('webp-lossless', false);
    };

    image.onload = function() {
      addTest('webp-lossless', image.width == 1);
    };

    image.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
  });
});

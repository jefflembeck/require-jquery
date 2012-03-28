require(["jquery", "jquery-mobile", "jquery.alpha", "jquery.beta"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
      var $body = $.mobile.activePage;
        $body.alpha().beta();
    });
});

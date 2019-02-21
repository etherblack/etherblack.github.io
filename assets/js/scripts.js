// A $( document ).ready() block.
$(document).ready(function() {
  // Modal
  $(".modalTrigger, .modalClose").click(function(e) {
    e.preventDefault();
    $(".modal").toggleClass("show");
  });

  // NavMenu
  $(".menuTrigger").click(function(e) {
    e.preventDefault();
    $(".mobileNav").toggleClass("show");
  });
});

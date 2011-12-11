$(document).ready(function() {

  // Open external links in a new window
  hostname = window.location.hostname
  $("a[href^=http]")
    .not("a[href*='" + hostname + "']")
    .addClass('link external')
    .attr('target', '_blank');

  $('a#nextpage').click(function(event) {
    event.preventDefault();
    $('section.firstPage').fadeOut('slow', function(){
      $('section.secondPage').fadeIn();
    });
  });

  $('a#previouspage').click(function(event) {
    event.preventDefault();
    $('section.secondPage').fadeOut('slow', function(){
      $('section.firstPage').fadeIn();
    });
  });
});


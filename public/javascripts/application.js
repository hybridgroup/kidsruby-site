$(document).ready(function() {

  // Open external links in a new window
  hostname = window.location.hostname
  $("a[href^=http]")
    .not("a[href*='" + hostname + "']")
    .addClass('link external')
    .attr('target', '_blank');

  $('a#nextpage').click(function(event) {
    event.preventDefault;
    $('section.firstPage').slideUp('slow', function(){
      $('section.secondPage').show();
    });
  });

});


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
      $(window).scrollTop(1);
    });
  });

  $('a#previouspage').click(function(event) {
    event.preventDefault();
    $('section.secondPage').fadeOut('slow', function(){
      $('section.firstPage').fadeIn();
      $(window).scrollTop(1);
    });
  });

  fblink = 'http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&urls=www.kidsruby.com&format=json';

  fbObject = $.getJSON(fblink);

  $.getJSON(fblink, function(data) {
      var items = [];

      $.each(data, function(key, val) {
        items.push('<li id="' + key + '">' + val + '</li>');
      });

      $('<ul/>', {
        'class': 'my-new-list',
        html: items.join('')
      }).appendTo('section.firstPage');
    });

  twitterlink = 'http://urls.api.twitter.com/1/urls/count.json?url=www.kidsruby.com&callback=twttr.receiveCount'
  twitterObject = $.getJSON(fblink);
});



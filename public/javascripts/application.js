$(document).ready(function() {

  // Open external links in a new window
  hostname = window.location.hostname
  $("a[href^=http]")
    .not("a[href*='" + hostname + "']")
    .addClass('link external')
    .attr('target', '_blank');

  // variables to grab the section height
  var sectionheightone = $('section.firstPage').css('height');
  var sectionheighttwo = $('section.secondPage').css('height');
  var sectionheight = $('section').css('height');

  // scrolling to the top
  $('a#nextpage').click(function(event) {
    event.preventDefault();
    $('section.firstPage').fadeOut('slow', function(){
      $('section.secondPage').fadeIn();
      $('aside').css('height', sectionheighttwo);
      $(window).scrollTop(1);
    });
  });

  $('a#previouspage').click(function(event) {
    event.preventDefault();
    $('section.secondPage').fadeOut('slow', function(){
      $('section.firstPage').fadeIn();
      $('aside').css('height', sectionheightone);
      $(window).scrollTop(1);
    });
  });

  // all asides to be the same height as the sections
  $('aside').css('height', sectionheight);

  // Facebook counter using json
  fblink = 'http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&urls=www.kidsruby.com&format=json';
  $.getJSON(fblink, function(data) {
    $("span.fbcount").html(data[0].like_count);
  });

  // Twitter count using json
  twitterlink = 'http://urls.api.twitter.com/1/urls/count.json?url=www.kidsruby.com&callback=twttr.receiveCount';
  $.getJSON(twitterlink, function(data) {
    $("span.twittercount").html(data.count);
  });

  //Contact page
  function emailUs(event) {
    event.preventDefault();

    // serialize the form data here
    var form = $('form#sign-up').serialize();

    $.ajax('/contact', {
      type: 'POST',
      data: form,
      dataType: 'script'
    });
  }

  $('form#sign-up').submit(emailUs);

  $('form#sign-up').ajaxForm(function() {
    alert('hey');
  });

});

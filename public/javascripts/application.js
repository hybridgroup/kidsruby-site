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
  $.ajax({
    url: 'http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&urls=www.kidsruby.com&format=json',
    dataType: 'jsonp',
    success: function(data) { $("span.fbcount").html(data[0].like_count)}
  });

  // Twitter count using jsonp
  $.ajax({
    url: 'http://urls.api.twitter.com/1/urls/count.json?url=kidsruby.com',
    dataType: 'jsonp',
    success: function(data) {$("span.twittercount").html(data.count)}
  });

  //placeholders to work in IE
  if(!Modernizr.input.placeholder){

    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
      })
    });
  }

  //Contact page
  $('#sign-up').ajaxForm(function() {
    $('form#sign-up fieldset.top').slideUp('slow');
    $('form#sign-up fieldset.bottom').slideUp('slow');
    $('form#sign-up fieldset.submit').slideUp('slow');
    // thank you note
    $("#thankyou").slideDown("slow");

  });


  //newsletter email sign-up
  $('fieldset.subscribe').parent().ajaxForm(function(){
    $("fieldset.subscribe input").slideUp("fast");
    $("#thanks4email").slideDown("slow");
  });

});

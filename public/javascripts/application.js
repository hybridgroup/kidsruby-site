(function() {

  $(document).ready(function() {
    var hostname, sectionheight, sectionheightone, sectionheighttwo;
    hostname = window.location.hostname;
    $("a[href^=http]").not("a[href*='" + hostname + "']").addClass('link external').attr('target', '_blank');
    sectionheightone = $('section.firstPage').css('height');
    sectionheighttwo = $('section.secondPage').css('height');
    sectionheight = $('section').css('height');
    $('a#nextpage').click(function(e) {
      e.preventDefault();
      return $('section.firstPage').fadeOut('slow', function() {
        $('section.secondPage').fadeIn();
        $('aside').css('height', sectionheighttwo);
        return $(window).scrollTop(1);
      });
    });
    $('a#previouspage').click(function(e) {
      e.preventDefault();
      return $('section.secondPage').fadeOut('slow', function() {
        $('section.firstPage').fadeIn();
        $('aside').css('height', sectionheightone);
        return $(window).scrollTop(1);
      });
    });
    if ($('section') != null) $('aside').css('height', sectionheight);
    $.ajax({
      url: 'http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&urls=www.kidsruby.com&format=json',
      dataType: 'jsonp',
      success: function(data) {
        return $("span.fbcount").html(data[0].like_count);
      }
    });
    $.ajax({
      url: 'http://urls.api.twitter.com/1/urls/count.json?url=kidsruby.com',
      dataType: 'jsonp',
      success: function(data) {
        return $("span.twittercount").html(data.count);
      }
    });
    if (!Modernizr.input.placeholder) {
      $('[placeholder]').focus(function() {
        var input;
        input = $(this);
        if (input.val() === input.attr('placeholder')) {
          input.val('');
          return input.removeClass('placeholder');
        }
      }).blur(function() {
        var input;
        input = $(this);
        if (input.val() === '' || input.val() === input.attr('placeholder')) {
          input.addClass('placeholder');
          return input.val(input.attr('placeholder'));
        }
      }).blur();
      $('[placeholder]').parents('form').submit(function() {
        var input;
        $(this).find('[placeholder]').each(function() {});
        input = $(this);
        if (input.val() === input.attr('placeholder')) return input.val('');
      });
    }
    $('#sign-up').ajaxForm(function() {
      $('form#sign-up fieldset.top').fadeOut('slow');
      $('form#sign-up fieldset.bottom').fadeOut('slow');
      $('form#sign-up fieldset').fadeOut('slow');
      $('form#sign-up fieldset.submit').slideUp('slow');
      return $("#thankyou").fadeIn("slow");
    });
    $('fieldset.subscribe').parent().ajaxForm(function() {
      $("fieldset.subscribe input").slideUp("fast");
      return $("#thanks4email").slideDown("slow");
    });
    return $('.lettering').lettering();
  });

}).call(this);

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
  // twitterlink = 'http://urls.api.twitter.com/1/urls/count.json?url=www.kidsruby.com&callback=&format=json';
  // twitterlink = 'http://api.twitter.com/1/followers/ids.json?screen_name=kidsruby';
  // $.getJSON(twitterlink, function(data) {
  // });

  // var req = $.ajax({
  //   url : 'http://urls.api.twitter.com/1/urls/count.json?url=www.kidsruby.com',
  //   dataType : "json",
  //   timeout : 10000
  // });

  // req.success(function() {
  //     console.log('Yes! Success!');
  // });

  // req.error(function() {
  //     console.log('Oh noes!');
  // });

  // var url = 'http://urls.api.twitter.com/1/urls/count.json?url=www.kidsruby.com'
  // if(XMLHttpRequest)
  // {
  //   var request = new XMLHttpRequest();
  //   if("withCredentials" in request)
  //   {
  //    // Firefox 3.5 and Safari 4
  //   request.open('GET', url, true);
  //   }

  //   else if (XDomainRequest)
  //   {
  //    // IE8
  //   var xdr = new XDomainRequest();
  //   xdr.open("get", url);
  //   xdr.send();

  //   // handle XDR responses -- not shown here :-)
  //   }
  //    // This version of XHR does not support CORS  
  //    // Handle accordingly
  // }

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

  // thank you note
   $('#sign-up').ajaxForm(function() {
     $.preventDefault();
     alert('kdkdk');
    $("#thankyou").slideDown("fast");
  });

  // $.ajax({
  //  beforeSend: function(){
  //    alert('before');
  //  },
  //  complete: function(){
  //    alert('after');
  //  }
  //  // ......
  // });

  //animate the kids after submit
  $('form#sign-up fieldset.submit').live('click', function() {
    $('span.icon-kidsMail1').animate({
      opacity: 1,
      marginLeft: '+=50',
      // height: 'toggle'
    }, 5000, function() {
      // Animation complete.
    });
  });

});

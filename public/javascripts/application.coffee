$(document).ready ->
  # // Open external links in a new window
  hostname = window.location.hostname
  $("a[href^=http]")
    .not("a[href*='" + hostname + "']")
    .addClass('link external')
    .attr('target', '_blank')

  # // variables to grab the section height
  sectionheightone = $('section.firstPage').css('height')
  sectionheighttwo = $('section.secondPage').css('height')
  sectionheight = $('section').css('height')

  # // scrolling to the top
  $('a#nextpage').click (e) ->
    e.preventDefault()
    $('section.firstPage').fadeOut 'slow', ->
      $('section.secondPage').fadeIn()
      $('aside').css 'height', sectionheighttwo
      $(window).scrollTop 1

  $('a#previouspage').click (e) ->
    e.preventDefault()
    $('section.secondPage').fadeOut 'slow', ->
      $('section.firstPage').fadeIn()
      $('aside').css 'height', sectionheightone
      $(window).scrollTop(1)

  # // all asides to be the same height as the sections
  if $('section')?
    $('aside').css('height', sectionheight)

  # // Facebook counter using json
  $.ajax
    url: 'http://api.ak.facebook.com/restserver.php?v=1.0&method=links.getStats&urls=www.kidsruby.com&format=json'
    dataType: 'jsonp'
    success: (data) ->
      $("span.fbcount").html(data[0].like_count)

  # // Twitter count using jsonp
  $.ajax
    url: 'http://urls.api.twitter.com/1/urls/count.json?url=kidsruby.com'
    dataType: 'jsonp'
    success: (data) ->
      $("span.twittercount").html(data.count)

  # //placeholders to work in IE
  unless Modernizr.input.placeholder
    $('[placeholder]').focus(->
      input = $(@)
      if input.val() is input.attr 'placeholder'
        input.val ''
        input.removeClass 'placeholder'
    ).blur(->
      input = $(@)
      if input.val() is '' or input.val() is input.attr 'placeholder'
        input.addClass 'placeholder'
        input.val input.attr 'placeholder'
    ).blur()
    $('[placeholder]').parents('form').submit ->
      $(@).find('[placeholder]').each ->
      input = $(@)
      if input.val() is input.attr 'placeholder'
        input.val ''

  # //Contact page
  $('#sign-up').ajaxForm ->
    $('form#sign-up fieldset.top').fadeOut 'slow'
    $('form#sign-up fieldset.bottom').fadeOut 'slow'
    $('form#sign-up fieldset.submit').slideUp 'slow'
    # // thank you note
    $("#thankyou").fadeIn "slow"

  # //newsletter email sign-up
  $('fieldset.subscribe').parent().ajaxForm ->
    $("fieldset.subscribe input").slideUp "fast"
    $("#thanks4email").slideDown "slow"

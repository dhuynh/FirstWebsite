/*
Theme: Dark UI
Author: graphic_dev
URI:  http://themeforest.net/user/graphic_dev?ref=graphic_dev
jQuery Version: 1.0
*/

$(document).ready(function () {
  // Tabs
  $('#wrapper').easytabs({
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      tabs: "header > nav > ul > li",
      updateHash: false
  });

  $('#home-tabs, #portfolio-tabs, #contact-tabs').easytabs({
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      updateHash: false
  });

  // Home tabs
  $('#home-tabs').easytabs({
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      updateHash: false
  });

  var $tabContainer3 = $('#home-tabs'),
      $tabs3 = $tabContainer3.data('easytabs').tabs,
      $tabPanels3 = $("#home-tabs .tab")
      totalSize3 = $tabPanels3.length;

  $tabPanels3.each(function(i){
    if (i != 0) {
      prev = i - 1;
      $(this).prepend("<a href='#' class='prev-tab mover' rel='" + prev + "'>&laquo; Home</a>");
    } else {
      $(this).prepend("<span class='prev-tab'>&laquo; Prev Page</span>");
    }
    if (i+1 != totalSize3) {
      next = i + 1;
      $(this).prepend("<a href='#' class='next-tab mover' rel='" + next + "'>About Me &raquo</a>");
    } else {
      $(this).prepend("<span class='next-tab'>Next Page &raquo</span>");
    }
  });

  $('#home-tabs .next-tab, #home-tabs .prev-tab').click(function() {
    var i3 = parseInt($(this).attr('rel'));
    var tabSelector3 = $tabs3.children('a:eq(' + i3 + ')').attr('href');
    $tabContainer3.easytabs('select', tabSelector3);
    return false;
  });

  // Skills & Experience Tabs
  /* This section is commented since the Skills & Experience Page only uses one Tab */
  /*
  $('#skill-tabs').easytabs({
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      updateHash: false
  });

  var $tabContainer4 = $('#skill-tabs'),
      $tabs4 = $tabContainer4.data('easytabs').tabs,
      $tabPanels4 = $("#skill-tabs .tab")
      totalSize4 = $tabPanels4.length;

  $tabPanels4.each(function(i){
    if (i != 0) {
      prev = i - 1;
      $(this).prepend("<a href='#' class='prev-tab mover' rel='" + prev + "'>&laquo; Next</a>");
    } else {
      $(this).prepend("<span class='prev-tab'>&laquo; Prev Page</span>");
    }
    if (i+1 != totalSize4) {
      next = i + 1;
      $(this).prepend("<a href='#' class='next-tab mover' rel='" + next + "'>Previous &raquo</a>");
    } else {
      $(this).prepend("<span class='next-tab'>Next Page &raquo</span>");
    }
  });

  $('#skill-tabs .next-tab, #skill-tabs .prev-tab').click(function() {
    var i4 = parseInt($(this).attr('rel'));
    var tabSelector4 = $tabs4.children('a:eq(' + i4 + ')').attr('href');
    $tabContainer4.easytabs('select', tabSelector4);
    return false;
  });
  */

  // Portfolio tabs
  $('#portfolio-tabs').easytabs({
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      updateHash: false
  });

  var $tabContainer2 = $('#portfolio-tabs'),
      $tabs2 = $tabContainer2.data('easytabs').tabs,
      $tabPanels2 = $("#portfolio-tabs .tab")
      totalSize2 = $tabPanels2.length;

  $tabPanels2.each(function(i){
    if (i != 0) {
      prev = i - 1;
      $(this).prepend("<a href='#' class='prev-tab mover' rel='" + prev + "'>&laquo; Previous Project</a>");
    } else {
      $(this).prepend("<span class='prev-tab'>&laquo; Prev Page</span>");
    }
    if (i+1 != totalSize2) {
      next = i + 1;
      $(this).prepend("<a href='#' class='next-tab mover' rel='" + next + "'>Next Project &raquo</a>");
    } else {
      $(this).prepend("<span class='next-tab'>Next Page &raquo</span>");
    }
  });

  $('#portfolio-tabs .next-tab, #portfolio-tabs .prev-tab').click(function() {
    var i2 = parseInt($(this).attr('rel'));
    var tabSelector2 = $tabs2.children('a:eq(' + i2 + ')').attr('href');
    $tabContainer2.easytabs('select', tabSelector2);
    return false;
  });

  // Contact tabs
  $('#contact-tabs').easytabs({
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      updateHash: false
  });
  var $tabContainer = $('#contact-tabs'),
      $tabs = $tabContainer.data('easytabs').tabs,
      $tabPanels = $("#contact-tabs .tab")
      totalSize = $tabPanels.length;

  $tabPanels.each(function(i){
    if (i != 0) {
      prev = i - 1;
      $(this).prepend("<a href='#' class='prev-tab mover' rel='" + prev + "'>&laquo; Contact Page</a>");
    } else {
      $(this).prepend("<span class='prev-tab'>&laquo; Prev Page</span>");
    }
    if (i+1 != totalSize) {
      next = i + 1;
      $(this).prepend("<a href='#' class='next-tab mover' rel='" + next + "'>Alternate Contact Page &raquo</a>");
    } else {
      $(this).prepend("<span class='next-tab'>Next Page &raquo</span>");
    }
  });

  $('#contact-tabs .next-tab, #contact-tabs .prev-tab').click(function() {
    var i = parseInt($(this).attr('rel'));
    var tabSelector = $tabs.children('a:eq(' + i + ')').attr('href');
    $tabContainer.easytabs('select', tabSelector);
    return false;
  });

  //Tipsy Tooltips (Read more here: http://onehackoranother.com/projects/jquery/tipsy/)
  $('.social a').tipsy({gravity: 's', fade: true});

  // prettyPhoto
  $('a[data-rel]').each(function() {
      $(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
  });
  $("a[rel^='prettyPhoto']").prettyPhoto({
    animation_speed: 'fast', /* fast/slow/normal */
    slideshow: 5000, /* false OR interval time in ms */
    autoplay_slideshow: false, /* true/false */
    opacity: 0.80, /* Value between 0 and 1 */
    show_title: true, /* true/false */
    allow_resize: true, /* Resize the photos bigger than viewport. true/false */
    default_width: 500,
    default_height: 344,
    counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
    theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
    horizontal_padding: 20, /* The padding on each side of the picture */
    hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
    wmode: 'opaque', /* Set the flash wmode attribute */
    autoplay: true, /* Automatically start videos: True/False */
    modal: false, /* If set to true, only the close button will close the window */
    deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
    overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
    keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
    changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
    callback: function(){}, /* Called when prettyPhoto is closed */
    ie6_fallback: true,
    image_markup: '<img id="fullResImage" src="{path}" />',
    flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
    quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
    iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
    inline_markup: '<div class="pp_inline">{content}</div>',
    custom_markup: '',
    social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
  });

  // Skills 
  $('select').change(function(){
      window.location.href = this.value;
  });
  var nrOfSkills = $('.outer').length;
  var resized = 0;
  var windowWidth;
  var setWidth;
  $('#skills-experience-button').click(function(){
    windowWidth = $(window).width();
    $('.meter .outer span').each(function(i) {
      setWidth = $(this).width();
      if(windowWidth<600 && nrOfSkills-resized>0) {    
        setWidth = setWidth * (292/242);
        resized++;
      }
      else {
        if(windowWidth>=600 && resized>0) {            
          setWidth = setWidth * (242/292);
          resized--;
        }
      }        
      $(this).width(4);
      $(this).delay(700).animate({
          width: setWidth
      }, 1500 );
    });
  });

  // Mobile Navigation
  $('#mobile-nav-button').click(function(){
    $('nav').toggleClass('open',700);
    $('.mover').toggleClass('open');
    return false;
  });
  $('nav li').click(function(){
    setTimeout("$('nav').removeClass('open')", 300);
    $('.mover').removeClass('open');
  });

  // Form
  $("#contact-form").validate({
    submitHandler: function(form) {
      $(form).ajaxSubmit(options); 
      $('#form-output').show();
      $('#form-output p').remove();
      $('#form-output').append('<p class="loading">Sending your message...</p>');
      return false; 
     }
  });
  var options = { 
    target: '#form-output',
    clearForm: true  /* clear all form fields after successful submit */
  };

  // Twitter feed
  $.getJSON('http://twitter.com/status/user_timeline/envato.json?count=3&callback=?', 
    function(data){
      $.each(data, function(index, item){
        $('#twitter').append('<div class="tweet"><a href="http://twitter.com/envato" class="bird ir" target="_blank">Twitter</a><p>' + item.text.linkify() + '</p></div><hr/>');
      });
    });
    String.prototype.linkify = function() {
      return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(m) {
        return m.link(m);
      });
    };

  // Form placeholder fix for IE
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
  }).blur().parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    })
  });
});

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "fade",              //String: Select your animation type, "fade" or "slide"
        slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
        slideshow: false,                //Boolean: Animate slider automatically
        slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
        directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
        controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
        pauseOnHover: true              //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    });
});
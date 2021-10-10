$( window ).resize(function() {
  if($(window).width() > 974) {
    $(".swiper-button-next").css("display", "block");
    $(".swiper-button-prev").css("display", "block");
    $(".navbar-toggler-right").css("display", "none");
    $(".swiper-text").css("display", "block");
   } else {
    $(".navbar-toggler-right").css("display", "inline-block");
   }
});

$( document ).ready(function() {

  let modalId = $('#image-gallery');

    $('.js-scroll-trigger').on('click', function(){
      if($(window).width() < 974) {
        $('.navbar-collapse').collapse('hide');
        $(".navbar-toggler-right").css("display", "inline-block");
        $(".swiper-button-next").css("display", "block");
        $(".swiper-button-prev").css("display", "block");
        $(".swiper-text").css("display", "block");
    }
  });


  $('.navbar-toggler-right').on('click', function(){

    $(".navbar-toggler-right").css("display", "none");
    $(".swiper-button-next").css("display", "none");
    $(".swiper-button-prev").css("display", "none");
    $(".swiper-text").css("display", "none");
    if($("#navbarCollapse1").hasClass('.hide')){
      $(".navbar-toggler-right").css("display", "inline-block");
      $(".swiper-button-next").css("display", "block");
      $(".swiper-button-prev").css("display", "block");
      $(".swiper-text").css("display", "block");
    }
  })


  loadGallery(true, 'a.thumbnail');

  //This function disables buttons when needed
  function disableButtons(counter_max, counter_current) {
    $('#show-previous-image, #show-next-image')
      .show();
    if (counter_max === counter_current) {
      $('#show-next-image')
        .hide();
    } else if (counter_current === 1) {
      $('#show-previous-image')
        .hide();
    }
  }

  /**
   *
   * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
   * @param setClickAttr  Sets the attribute for the click handler.
   */

  function loadGallery(setIDs, setClickAttr) {
    let current_image,
      selector,
      counter = 0;

    $('#show-next-image, #show-previous-image')
      .click(function () {
        if ($(this)
          .attr('id') === 'show-previous-image') {
          current_image--;
        } else {
          current_image++;
        }

        selector = $('[data-image-id="' + current_image + '"]');
        updateGallery(selector);
      });

    function updateGallery(selector) {
      let $sel = selector;
      current_image = $sel.data('image-id');
      $('#image-gallery-title')
        .text($sel.data('title'));
      $('#image-gallery-image')
        .attr('src', $sel.data('image'));
      disableButtons(counter, $sel.data('image-id'));
    }

    if (setIDs == true) {
      $('[data-image-id]')
        .each(function () {
          counter++;
          $(this)
            .attr('data-image-id', counter);
        });
    }
    $(setClickAttr)
      .on('click', function () {
        updateGallery($(this));
      });
  }
});

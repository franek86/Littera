$(function(){

  toggleMenu();
  smoothScroll(300);
  priceBelt();
  offerLoad();

  //Change color to Header when scroll
  $(window).on('scroll', function(){

      var vertical = $(this).scrollTop();

      if(vertical > $('#services').offset().top - $(window).height() / 5) {
          $('header').addClass('scrolled');
          $('.logo').addClass('logo-sm');
          $('.main-nav a').css('line-height','50px');
      } else {
          $('header').removeClass('scrolled');
          $('.logo').removeClass('logo-sm');
          $('.main-nav a').css('line-height','100px');
      }

      $('.intro-tagline-container').css({
        'transform' : 'translate(-50%, '+ vertical /3 +'%)'
      })
  });

  function toggleMenu(){

    $('.mobile-nav-toggle').on('click', function(){

      var status = $(this).hasClass('is-open');
      if(status){
        $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
      } else {
        $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
      }
    });


    $('.mobile-nav a').on('click',function(){
      $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
    });
  }

  function smoothScroll (duration) {
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            },duration);
        }
    });
  }

  function priceBelt(){

    $('.btn-more').click(function(){
      $('.price-belt').css('left','-100%');
      $('.offer-price').show();
    });

    $('.back').click(function(){
      $('.price-belt').css('left','0%');
      $('.offer-price').hide(800);
    });

  }

  function  offerLoad() {

  $.ajaxSetup({ cache: true });

    $('.price-container label').click(function() {
      var $this = $(this),
  			newTitle = $this.find('h5').text(),
        newPrice = $this.find('.price-label').text(),
  			newFolder = $this.find('.circle').data('folder'),
  			newHTML = 'offer/' + newFolder + '.html';

      $('.offer-load').load(newHTML);
      $('.offer-title').text(newTitle);
      $('.offer-label').text(newPrice);
    });
  }

});

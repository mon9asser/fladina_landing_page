
$(document).ready(function(){
          "use strict";

  // set scroll bottom as a foxed
  $('html ,body').animate({
    scrollTop: $('#contact-us-section').offset().top
  },1000);


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*						                       function Contents                                         */
/*
    1- Scroll Navigation-bar top and bottom According to section
    2- Scroll To Target Section

*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* -------------------------------------------------------------------------------------------
                                  Loading Page
--------------------------------------------------------------------------------------------*/
setTimeout(function(){
  $('.loading-page').slideUp(function(){
    // change the boy overflow-y
    $('body').css({'overflow-y':'auto'});
    // Animate to top
    $('html ,body').animate({
      scrollTop: 0
    },2000);
  });
},5000);

/* -------------------------------------------------------------------------------------------
                          1-  Scroll the navbar
--------------------------------------------------------------------------------------------*/
$(window).scroll(function(){
    /*Collaps hide the Navigation bar for mobile*/
    var $navbar = $(".navbar-collapse");
    $navbar.collapse('hide');
    /*slide In Down the Navigation and make it as a top with fixed position*/
    var $navigationBar = $('#navigation-bar');
    var $targetScropOffset = $('#home-section').height()+120;
    if($(this).scrollTop() > $targetScropOffset  )
    $navigationBar.addClass('animated slideInDown navbar-fixed-top');
    else
    $navigationBar.removeClass('animated slideInDown navbar-fixed-top');
});

/* -------------------------------------------------------------------------------------------
                          2-  Smooth Scroll To Target Section
--------------------------------------------------------------------------------------------*/
 $("#navbar-menu a").each(function(){
   $(this).click(function(){
     var $targetSection = $(this).attr('href');
     $('html, body').animate({
       scrollTop : $($targetSection).offset().top
     },1000);
     return false ;
   });
 });

 /* -------------------------------------------------------------------------------------------
                          AOS Library Initialization
 --------------------------------------------------------------------------------------------*/
 AOS.init();

 /* -------------------------------------------------------------------------------------------
                          Slide Effect and open Target Box
 --------------------------------------------------------------------------------------------*/
 $('.portfolio-block').each(function(){
    $(this).click(function(){
      var $dataProject = $(this);
      // Check if box open or not { Reset Box and init it }
       var $targetBox = $('#target-project');
       if($targetBox.is(':visible')) // it's Open !
        $targetBox.slideUp();

        // Load each value according to event handler
        var $projDetails = {
          'image':$(this).attr('data-image'),
          'title' :$(this).attr('data-project-title'),
          'details' :$(this).attr('data-project-details'),
          'linkPreview' :$(this).attr('data-preview-link'),
          'screenshotLink'  :$(this).attr('data-screenshot-href'),
        };
       // Sotre Data into Target Box TO Display The-info.
       $('#target-image').attr('src','assets/images/'+$.trim($projDetails.image));
       $('#target-title').html($.trim($projDetails.title));
       $('#target-details').html($.trim($projDetails.details));
       $('#target-preview').attr('href',$.trim($projDetails.linkPreview));
       $('#target-screenshot').attr('href',$.trim($projDetails.screenshotLink));




      var $completedData =  function() {
       $targetBox.slideDown();
       }
      var $progressData = function() {

        return ;
      }

      // Animate To Target Box That Will contain The Infos
      $('html , body').animate({
        scrollTop: $('#portfolio-title').offset().top ,
      }, {
            duration: 700,
            complete:$completedData,
            progress:$progressData()
         });
    });
  });


   //----------------------------------------------------------------------------------------------
    //-------------------       Fill Skills  ----------------------------
    //----------------------------------------------------------------------------------------------

    $('.fill-indicator').bind('inview', function (event, visible) {
        if (visible == true) {
          var $skills = $('.fill-indicator');
          var $skillValue ;
           $skills.each(function(){
             // get value from attribute
              $skillValue = $(this).attr('data-indicator-value') ;
            // Set Value for text
           $(this).parent().prev('.skill-elements').children('.indicator-value').text($skillValue) ;
            // fille the ruller
            $(this).css({width:$skillValue});
           });
        }else
        $(this).css({width:'0%'});
    });

    // Profile Image zoom In
$('.img-shape img , .col-xs-sm-fit-contents').bind('inview', function (event, visible) {
  if (visible == true) {
    $(this).addClass('animated zoomIn');
  }
});




    //----------------------------------------------------------------------------------------------
    //-------------------       Form Validating   ----------------------------
    //----------------------------------------------------------------------------------------------
    $('input[type="text"], input[type="email"], textarea').keyup(function(){
     $(this).css({'border':'1px solid #555'});
     $('.show-result').slideUp(function(){
       $('.show-result').html(null).css({'color':'#fff'})
     });
    });
    window.SendEmail = function (){
      // Selectores
      var $name = $('#full-name');
      var $email = $('#user-email');
      var $phoneNumber = $('#user-phone-number');
      var $subject = $('#Subject');
      var $message = $('#Message');



      // Check Fields empty or not
      if($name.val().length === 0)
      $name.css({'border':'1px solid red'});

      if($email.val().length === 0)
      $email.css({'border':'1px solid red'});

      if($subject.val().length === 0)
      $subject.css({'border':'1px solid red'});

      if($message.val().length === 0)
      $message.css({'border':'1px solid red'});

      if($phoneNumber.val().length === 0)
      $phoneNumber.css({'border':'1px solid red'});


      // Store Values
      var dataString = {
        "full-name":$name.val() ,
        "user-email":$email.val() ,
        "user-phone-number":$phoneNumber.val() ,
        "Subject":$subject.val() ,
        "Message":$message.val()
      }

      // Calling Controller
      $.ajax({
        type: "POST",
        url: "php/controller.php",
        data: dataString,
        beforeSend:function (){
          $('.input-container > button').html('Sending ...');
        },
        success: function (response) {
          $('.show-result').slideDown(function(){
            $(this).html(response);
            $('.input-container > button').html('Send');
          });

        }
      });
    }



    // Check about Safari Browser
    var naviationB = navigator.userAgent.toLowerCase();
    if (naviationB.indexOf('safari') != -1) {
          if (naviationB.indexOf('chrome') <= -1) {
             // Delete cutting border from Image
             $('.img-block').css('border','0px');
             // delete border and set radius in 30 px for client images
             $('.client-img img').css({
               'border':'0px',
               'webkit-border-top-left-radius':'30px',
               'webkit-border-top-right-radius':'30px',
               'webkit-border-bottom-left-radius':'30px',
               'webkit-border-bottom-right-radius':'30px'
             });
          }
      }
    // Showing The Placeholder up the Texts in span ( All browsers less than IE 11 )
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) // If Internet Explorer, return version number
    {
      var versions = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))) ;
      if(versions <= 9)
        {
          // Store " Loading ... " Inside Loading Page
          $('.loading-page').html('<b>Loading ... </b>');
          // Fix Navbar to be full container
          $('#navigation-bar').addClass('ie-version-9');

        }
    }else // Other Browsers !!
    $('.loading').fadeIn();

});

$(document).ready(function(){
  /*
  Template Name: Fladina , Resume Template
  Template URI:
  Author:
  Author URI:
  Description:
  Version: 1.0
  License:
  */

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*						      Licenses and source of libraries                                      */
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    /* Jquery */
    /*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

    /* Bootstrap */
    /*!
    * Bootstrap v3.3.7 (http://getbootstrap.com)
    * Copyright 2011-2016 Twitter, Inc.
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */







/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*						                       function Contents                                         */
/*
    1- Scroll Navigation-bar top and bottom According to section
    2- Scroll To Target Section

*/
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



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

    jQuery('.fill-indicator').bind('inview', function (event, visible) {
        if (visible == true) {
          var $skills = $('.fill-indicator');

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
        success: function (response) {
          $('.show-result').slideDown(function(){
            $(this).html(response);
          });

        }
      });
    }
});

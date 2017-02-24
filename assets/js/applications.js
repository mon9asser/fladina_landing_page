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
    3- About Me Section
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


 AOS.init();
});

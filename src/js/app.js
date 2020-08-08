'use strict';
import 'bootstrap/dist/js/bootstrap';

$(function () {

  //#region MENU 
  $('.menuButton').click(function () {
    $(this).toggleClass('active');
    $(this).toggleClass('no-hover');
    $('#menu').slideToggle();
    $('.inner-menu').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
    // $('.navBar').slideToggle();
    $('header').toggleClass('change');
    $('.menu-logo li').toggleClass('change');
  });
  //#endregion
});
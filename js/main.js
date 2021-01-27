$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false
  });

  $('.GoHome').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(1);
  });
  $('.GoAbout').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(2);
  });
  $('.GoExperience').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(3);
  });
  $('.GoProjects').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(4);
  });
  $('.GoSkills').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(5);
  });
  $('.GoCareer').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(6);
  });
  $('.GoBlog').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(7);
  });
  $('.GoContact').on('click', function(e){
    e.preventDefault();
    $.fn.fullpage.moveTo(8);
  });  
});
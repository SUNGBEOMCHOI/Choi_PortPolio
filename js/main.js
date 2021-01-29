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

var sliderWrapper = document.getElementsByClassName('container'), //클래스명 container
    sliderContainer = document.getElementsByClassName('slider-container'), //클래스명 slider-container
    slides = document.getElementsByClassName('slide'), //클래스명 slide
    slidecount = Math.ceil(slides.length / 3.0), //슬라이드의 개수
    currentIndex = 0, // 현재보고있는 페이지
    navPrev = document.getElementById('blog_prev'), // 아이디 blog_prev
    navNext = document.getElementById('blog_next');  // 아이디 blog_next

//슬라이드가 있으면 가로로 배열하기
for(var i = 0;i<slidecount;i++){
  slides[i].style.left = i*100 + '%'
}

// 슬라이드 이동 함수
function goToSlide(idx){
  if(idx==0){
    sliderContainer[0].style.left = 0 + '%';
  }else{
    sliderContainer[0].style.left = (idx * -100 - idx*5.9) + '%';
  }
  sliderContainer[0].classList.add('animated');
  currentIndex = idx;

  updateNav();
}

// 버튼기능 업데이트 함수
function updateNav(){
  // 처음일때
  if(currentIndex == 0){
    navPrev.classList.add('disabled');
  }else{
    navPrev.classList.remove('disabled');
  }
  // 마지막일때
  if(currentIndex == slidecount-1){
    navNext.classList.add('disabled');
  }else{
    navNext.classList.remove('disabled');
  }
}

// 버튼을 클릭하면 슬라이드 이동시키기
navPrev.addEventListener('click', function(){
  goToSlide(currentIndex - 1);  
});

navNext.addEventListener('click', function(){
  goToSlide(currentIndex + 1);
});

goToSlide(0); // 첫 페이지에서 prev 버튼을 없애주기 위함

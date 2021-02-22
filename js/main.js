$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    slideSelector: '.horizontal-scrolling',
    navigation: false,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    scrollBar: false,
    onLeave: function( section, origin, destination, direction){
      var leavingSlide = this;
      var page = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Career', 'Blog', 'Contact'];
      $('.'+"Go"+page[section-1]).removeClass('animate');
      $('.'+"Go"+page[origin-1]).addClass('animate');

      
      if(destination== 'down'){
        if($('.About').offset().top < 1000){
          $('#my_photo').addClass('animate'); 
          $('#my_photo').prev().addClass('animate');
          $('#my_photo').next().addClass('animate');
        }        
      }
    }    
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

  // 한 페이지의 height를 100%로 변경
  function pageheight(){
    var page = document.getElementsByClassName('fp-section');
    for(var i=0; i<8; i++){
      page[i].style = "height: 100%";
    }
  }
  pageheight();

  setTimeout(() => $("#home_p1").addClass('animate'), 1000);
  setTimeout(() => $("#home_p2").addClass('animate'), 2000);
  setTimeout(() => $("#home_p3").addClass('animate'), 3000);
});

// 화면의 해상도에 따라 확대 정도를 변경
function resizeApply(){ 
  var minWidth = 1920; 
  var body = document.getElementsByTagName('body')[0]; 
  if (window.innerWidth < minWidth) { 
    body.style.zoom = (window.innerWidth / minWidth); 
  } else {
    body.style.zoom = 1; 
  }
}

resizeApply();


//Experience 슬라이드 부분
function experience_slide(){
  var sliderWrapper = document.getElementsByClassName('experience-container'), //클래스명 experience-container
  sliderContainer = document.getElementsByClassName('experience-slider-container'), //클래스명 experience-container
  slides = document.getElementsByClassName('experience-slide'), //클래스명 experience-slide
  slidecount = slides.length, //슬라이드의 개수
  currentIndex = 0, // 현재보고있는 페이지
  navPrev = document.getElementById('experience_prev'), // 아이디 experience_prev
  navNext = document.getElementById('experience_next');  // 아이디 experience_next


//슬라이드가 있으면 가로로 배열하기
for(var i = 0;i<slidecount;i++){
  slides[i].style.left = i*100 + '%'
}

// 슬라이드 이동 함수
function goToSlide(idx){
  if(idx==0){
    sliderContainer[0].style.left = 0 + '%';
  }else{
    sliderContainer[0].style.left = (idx * -100 ) + '%';
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
}
experience_slide()


//---------------------------------------------//
//Projects 슬라이드 부분
function projects_slide(){
  var sliderWrapper = document.getElementsByClassName('projects-container'), //클래스명 projects-container
  sliderContainer = document.getElementsByClassName('projects-slider-container'), //클래스명 projects-container
  slides = document.getElementsByClassName('projects-slide'), //클래스명 projects-slide
  slidecount = slides.length, //슬라이드의 개수
  currentIndex = 0, // 현재보고있는 페이지
  navPrev = document.getElementById('projects_prev'), // 아이디 projects_prev
  navNext = document.getElementById('projects_next');  // 아이디 projects_next

//슬라이드가 있으면 가로로 배열하기
for(var i = 0;i<slidecount;i++){
  slides[i].style.left = i*100 + '%'
}

// 슬라이드 이동 함수
function goToSlide(idx){
  if(idx==0){
    sliderContainer[0].style.left = 0 + '%';
  }else{
    sliderContainer[0].style.left = (idx * -100 ) + '%';
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
}
projects_slide()

function projects(){
  var parents = document.getElementsByClassName('projects-slide-content'), // 클래스명 projects-slide-content
  childs = [],
  popUp = document.getElementsByClassName('projects_popup')[0], // 팝업을 위한 변수
  navigation = document.querySelector("nav"),
  popUpModal = document.getElementsByClassName('projectsPopUp');
  
  //childs에 자식 요소를 모아둠
  for(var index=0; index < parents.length; index = index+1){
    childs.push(parents[index].childNodes[1]); // 1번째 div 태그를 가져옴
    if('soon' != parents[index].childNodes[1].classList.value){
      parents[index].childNodes[1].style.visibility='hidden';
    }
  }

  // 특정 index의 parent에 마우스가 올라가면 child의 style을 visible로 변경하는 함수
  function eventlisten(index){
    if('soon' != parents[index].childNodes[1].classList.value){
      parents[index].addEventListener('mouseover', function(){
        childs[index].style.visibility='visible';
      });
      parents[index].addEventListener('mouseout', function(){
          childs[index].style.visibility='hidden';
      });
    }
  }

  // 특정 index의 parent를 클릭하면 pop-up이 띄어지는 함수
  function experience_popup(index){
    var file_name = ['mileage.png', 'portfolio.png']
    parents[index].addEventListener('click', function(){
      if('soon' != childs[index].classList.value){
        popUp.classList.remove('hidden');
        navigation.classList.add('modal-up');
        popUpModal[0].style.background='url(./assets/Projects/'+ file_name[index] +') no-repeat';
        console.log('url(../assets/projects/'+ file_name[index] +') no-repeat');
        popUpModal[0].style['background-size']="contain";
      }
    });
    //pop-up이 띄어진 후 주변을 클릭하면 modal 창이 내려감
    $('.projects_popup').click(function(e) {
      if(!$(e.target).hasClass("projectsPopUp")){
        popUp.classList.add('hidden');
        navigation.classList.remove('modal-up');
      }
    });
  }

  //pop-up된 상태에서 이미지 이외에 다른 부분을 클릭하면 모달창이 내려가게 하는


  for(var i=0; i<parents.length; i += 1){ 
    eventlisten(i);
    experience_popup(i)
  }
}
projects();

function blog_slide(){
// Blog 슬라이드 부분
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
}

blog_slide();
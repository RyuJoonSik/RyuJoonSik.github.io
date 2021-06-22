var BTN_TOP_POINT = window.innerHeight / 2;
var BTN_TOP = document.getElementsByClassName('btn-top')[0];

BTN_TOP.addEventListener('click', function(e){
  e.preventDefault();

  window.scrollTo(0, 0);
});


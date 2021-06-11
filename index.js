window.addEventListener('load', function(){
  let burgerBtn = document.querySelector('.burger');
  let menu = document.querySelector('.menu');
  let menuList = document.querySelector('.menu__list');
  let sublist = document.querySelector('.menu__item--open');
  let doubleSublist = document.querySelector('.submenu__item--open');
  

burgerBtn.addEventListener('click', function(){
closeOpenMenu();
});


menu.addEventListener('click', function(e) {
  if(this === e.target) {
   closeOpenMenu();
  }

});

function closeOpenMenu() {
  burgerBtn.classList.toggle('active');
  menu.classList.toggle('active');
  doubleSublist.classList.remove('active');
  sublist.classList.remove('active');

};

sublist.addEventListener('click', function(e) {

  this.classList.toggle('active');
});

doubleSublist.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.toggle('active');
});


});
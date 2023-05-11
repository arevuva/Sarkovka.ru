/*$(document).ready(function(){
    $('.menu_burger').click(function(event){
        $('.menu_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('_lock')
    });
});
*/
let burger=document.querySelector('.menu_burger');
let heamenu=document.querySelector('.header_menu');
let body=document.querySelector('body');
burger.addEventListener('click',
event=>{
    burger.classList.toggle('active');
    heamenu.classList.toggle('active');
    body.classList.toggle('lock');
});

$(".gallery-list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });

let gal_spoiler1=document.querySelector('.gal-title.vorota');
let gal_list1=document.querySelector('.gallery-list.vorota');
gal_spoiler1.addEventListener('click',
event=>{
    gal_spoiler1.classList.toggle('active');
    gal_list1.classList.toggle('active');
});

let gal_spoiler2=document.querySelector('.gal-title.me');
let gal_list2=document.querySelector('.gallery-list.me');
gal_spoiler2.addEventListener('click',
event=>{
    gal_spoiler2.classList.toggle('active');
    gal_list2.classList.toggle('active');
});

let gal_spoiler3=document.querySelector('.gal-title.les');
let gal_list3=document.querySelector('.gallery-list.les');
gal_spoiler3.addEventListener('click',
event=>{
    gal_spoiler3.classList.toggle('active');
    gal_list3.classList.toggle('active');
});
let gal_spoiler4=document.querySelector('.gal-title.zab');
let gal_list4=document.querySelector('.gallery-list.zab');
gal_spoiler4.addEventListener('click',
event=>{
    gal_spoiler4.classList.toggle('active');
    gal_list4.classList.toggle('active');
});

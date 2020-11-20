let mainContentH2=document.querySelector(".main-content-home-h2");
let orderATag=document.querySelector(".order-aTag");
let orderInfo=document.querySelector(".order-info");
let icofontClose=document.querySelector(".icofont-close");
let mainContentInfo=document.querySelector(".info");
let specTitle=document.querySelector(".spec-title");
let specDetails=document.querySelector(".spec-details");
let specBorder=document.querySelector(".only-border");
let variationsNumbersH3=document.querySelector(".variations-numbers-h3");
let curvedLeft=document.querySelector(".icofont-curved-left");
let curvedRight=document.querySelector(".icofont-curved-right");
let specDetalisMb=document.querySelectorAll(".spec-details.mb div");
let curvedDown=document.querySelectorAll(".icofont-curved-down");

specDetalisMb.forEach((item, i) => {
  specDetalisMb[i].addEventListener("click",()=>{
    if (specDetalisMb[i].classList.contains("extend")) {
      specDetalisMb[i].classList.remove("extend")
    }
    else{
      specDetalisMb[i].classList.add("extend")
    }
  })
});

orderATag.addEventListener('click',()=>{
  if (orderInfo.classList.contains("active")){
    return 0;
  }
  else{
    orderInfo.classList.add("active")
  }
})
icofontClose.addEventListener("click",()=>{
  orderInfo.classList.remove("active")
})


let tlpercentage=new TimelineMax({onUpdate:updatePercentage});
let tl=new TimelineMax();
let startedTl=new TimelineMax();

startedTl.to(specTitle,0,{opacity:0});
startedTl.to(specDetails,0,{opacity:0});
startedTl.to(".variations-model.no2 .model-desc",0,{opacity:0});

tl.to(specTitle,0.5,{opacity:1});
tl.to(specBorder,0.5,{scale:1},"-=.5");
tl.to(specDetails,0.5,{opacity:1},"-=.2");

tlpercentage.to(mainContentH2, 1, { y: 200});
tlpercentage.to(mainContentInfo, 1, { y: -200}, "=-1");


const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
    triggerElement: ".home",
    duration:1000,
    triggerHook:0.001
  })
  .setTween(tlpercentage)
  .addTo(controller);

  let scene2 = new ScrollMagic.Scene({
    triggerElement:specTitle,
    triggerHook:0.80,
    reverse:false
  })
  .setTween(tl)
  .addTo(controller);

curvedLeft.addEventListener('click',()=>{
  document.querySelector(".var-active").innerHTML = "1";
  tl.to(".variations-model.no1 .model-desc",.3,{opacity:1,grayscale:0});
  tl.add(TweenLite.to(".variations-model.no2 .model-img img", .3, {css: { 'filter': 'grayscale(100%)','-webkit-filter': 'grayscale(100%)' }}),"-=.3")
  tl.add(TweenLite.to(".variations-model.no1 .model-img img", .3, {css: { 'filter': 'grayscale(0%)','-webkit-filter': 'grayscale(0%)' }}),"-=.3")
  tl.to(".variations-model.no2 .model-desc",.3,{opacity:0},"-=.3");
})
curvedRight.addEventListener('click',()=>{
  document.querySelector(".var-active").innerHTML = "2";
  tl.to(".variations-model.no2 .model-desc",.3,{opacity:1,grayscale:0});
  tl.add(TweenLite.to(".variations-model.no2 .model-img img", .3, {css: { 'filter': 'grayscale(0%)','-webkit-filter': 'grayscale(0%)' }}),"-=.3")
  tl.add(TweenLite.to(".variations-model.no1 .model-img img", .3, {css: { 'filter': 'grayscale(100%)','-webkit-filter': 'grayscale(100%)' }}),"-=.3")
  tl.to(".variations-model.no1 .model-desc",.3,{opacity:0},"-=.3");
})



  function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tlpercentage.progress();
  console.log(tlpercentage.progress());
  }

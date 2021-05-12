console.clear();
var tl = new TimelineLite({paused: true});
var dur = .5;
tl.to("#pOO", dur, {drawSVG: 0, ease: Sine.easeInOut});
tl.fromTo("#pOO", dur, 
      {drawSVG:"100% 100%", ease: Sine.easeIn},
      {drawSVG: "100% 0%", ease: Sine.easeOut, immediateRender: false}, 
      "+=");

document.querySelector(".illustration").addEventListener("mouseenter", playTimeline);

function playTimeline() {
  if ( !tl.isActive() ) {
    tl.play(0);
  }
}

var tlLayer_1 = new TimelineMax({paused: true});
tlLayer_1.to('#Layer_1>path',1,{stroke:'#ff6600'});
tlLayer_1.to('#Layer_1 g path',1,{fill:'#ff6600'},'-=1');


document.addEventListener("scroll", onScroll);

function onScroll() {
  var scrollY = window.pageYOffset || 0;
  tlLogo.tweenTo(scrollY/1072);
}
// TweenLite.from("#OO", 1, {drawSVG: 0, delay:0.5, ease: Expo.easeOut});
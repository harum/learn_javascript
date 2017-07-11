/*
 * can read here
 * https://dom.spec.whatwg.org/#introduction-to-dom-events
 */

(function(){
  console.log('learn dom event');

  const objEvent = document.getElementById('event');
  const objCapture = document.getElementById('capture');
  const myCustomEvent = new Event("callMe", { bubbles: true });

  const fn = function fn(e) {
    console.log(e.target, e.currentTarget, e.eventPhase);
  };

  document.addEventListener('callMe', fn);
  objEvent.addEventListener('callMe', fn);
  objCapture.addEventListener('callMe', fn, { capture: true });

  objEvent.dispatchEvent(myCustomEvent);
}())

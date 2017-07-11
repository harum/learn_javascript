/*
 * can read here
 * https://dom.spec.whatwg.org/#introduction-to-dom-events
 */

(function myApps(){
  console.log('learn dom event');
  /*
   * event will be running in 3 step
   * CAPTURING_PHASE = 1; ( with { capture: true } parameter )
   * AT_TARGET = 2;
   * BUBBLING_PHASE = 3;
   */

  const objEvent = document.getElementById('event');
  const objCapture = document.getElementById('capture');
  const myEvent = new Event('callMe', { bubbles: true });

  const fn = function fn(e) {
    console.log(e.target, e.currentTarget, e.eventPhase);
  };

  document.addEventListener('callMe', fn);
  objEvent.addEventListener('callMe', fn);
  objCapture.addEventListener('callMe', fn, { capture: true });
  objEvent.dispatchEvent(myEvent);


  console.log('event delegation');
  const handleDelegation = function handleDelegation(e) {
    console.log(e.target, e.currentTarget, e.eventPhase);
  };

  /*
   * instead add listener on item list
   * add the listener on its parent
   */
  const parentList = document.getElementById('list');
  parentList.addEventListener('click', handleDelegation);
}())

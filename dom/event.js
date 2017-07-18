/*
 * can read here
 * https://dom.spec.whatwg.org/#introduction-to-dom-events
 */

(function myApps(){
  /*
   * BASIC DOM EVENT
   * event will be running in 3 phase
   * CAPTURING_PHASE = 1; ( with { capture: true } parameter )
   * AT_TARGET = 2;
   * BUBBLING_PHASE = 3;
   */

  const objEvent = document.getElementById('event');
  const objCapture = document.getElementById('capture');
  const myEvent = new Event('callMe', { bubbles: true });

  const fn = function fn(e) {
    console.log(e.type, e.target, e.currentTarget, e.eventPhase);
  };

  document.addEventListener('callMe', fn);
  objEvent.addEventListener('callMe', fn);
  objCapture.addEventListener('callMe', fn, { capture: true });
  objEvent.dispatchEvent(myEvent);


  /*
   * EVENT DELEGATION
   * instead off adding event listener on each item
   * add the listener on its parent
   */
  const handleDelegation = function handleDelegation(e) {
    console.log(e.type, e.target, e.currentTarget, e.eventPhase);
  };

  const parentList = document.getElementById('list');
  parentList.addEventListener('click', handleDelegation);


  /*
   * CUSTOM EVENT
   */
  const handleCustomEvent = function handleCustomEvent(e) {
    console.log(e.type, e.target, e.currentTarget, e.eventPhase, e.detail);
  }
  const customObj = document.getElementById('custom-event');
  const customEvent = new CustomEvent('dog', {
    'detail': { 'type': 'kintamani', 'color': 'white' }
  });
  customObj.addEventListener('dog', handleCustomEvent);
  customObj.dispatchEvent(customEvent);


  /*
   * CANCELATION EVENT
   */
  const handleDelegation2 = function handleDelegation2(e) {
    console.log(e.type, e.target, e.currentTarget, e.eventPhase);
    e.preventDefault(); // canceled event
    e.stopPropagation(); // prevent event for reaching any objects other than current object
  };

  const handleDelegationParent2 = function handleDelegationParent2(e) {
    // this function will never be called caused by stopPropagation()
    console.log(e.type, e.target, e.currentTarget, e.eventPhase);
  };

  const parent2 = document.getElementById('parent2');
  const parentList2 = document.getElementById('list2');
  parent2.addEventListener('click', handleDelegationParent2);
  parentList2.addEventListener('click', handleDelegation2);

}())

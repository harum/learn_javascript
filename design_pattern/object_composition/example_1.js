(function(){
  console.log('it is composition example');

  const paymentA = function paymentA(state) {
    return {
      disablePayment: function disablePayment() {
        console.log('paymentA', 'disablePayment');
      },
      enablePayment: function enablePayment() {
        console.log('paymentA', 'enablePayment');
      },
    };
  };

  const paymentB = function paymentB(state) {
    return {
      setMessage: function showDialog() {
        console.log('paymenB', 'setMessage');
      },
      validateAccount: function closeDialog() {
        console.log('paymenB', 'validateAccount');
      },
    };
  };

  const paymentC = function paymentC(state) {
    return {
      showDialog: function showDialog() {
        console.log('paymentC', 'showDialog');
      },
      closeDialog: function closeDialog() {
        console.log('paymentC', 'closeDialog');
      },
      afterInterupt: function afterInterupt() {
        console.log('paymentC', 'afterInterupt');
        return this;
      },
      reopenPopupCheckout: function reopenPopupCheckout() {
        console.log('paymentC', 'reopenPopupCheckout');
      }
    };
  };

  const createPaymentMethod = function createPaymentMethod(state) {
    return {
      paymentEventHandler: {
        handleMethodChange: function handleMethodChange() {
          console.log('handleMethodChange');
        },
      },
      bindPaymentEvent: function bindPaymentEvent(eventHandler) {
        console.log(state.buttonClass);
        const changeBtn = document.querySelector('.js-change-payment');
        changeBtn.addEventListener('click', eventHandler.handleMethodChange, false);
      },
    }
  };

  const eventListener = function eventHandler() {
    return {
      onPaymentChange: function onPaymentChange(handler) {
        console.log('onPaymentChange');
        const changeBtn = document.querySelector('.js-change-payment');
        changeBtn.addEventListener('click', handler, false);
        return this;
      }
    }
  };


  const myPayment = function myPayment() {
    let state = {
      buttonClass: '.js-change-payment',
    }

    return Object.assign(
      {},
      paymentA(state),
      paymentB(state),
      paymentC(state),
      eventListener(state)
    )
  }

  let ohoPayment = myPayment();
  ohoPayment
    .afterInterupt()
    .onPaymentChange(ohoPayment.enablePayment);

  window.xPayment = myPayment();

  //const transfer = createTranferPaymentMethod();
  //console.log(transfer.bindPaymentEvent(transfer.paymentEventHandler));

  //const changeMethod = function changeMethod(e) {
  //  console.log('change method...');
  //};

  //changeBtn.addEventListener('click', changeMethod, false);
}());

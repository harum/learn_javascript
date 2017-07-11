var _saveRunFunction;

_saveRunFunction = function(func, args) {
  if (typeof func === 'function') {
    return func.apply(null, args);
  }
};

function cek(param1, param2) {
  console.log('haloo : ' + param1 + ', dan ' + param2);
}

function cekNull() {
  console.log('haloo bro');
}

_saveRunFunction(cek, ['putu', 'kadek']);
_saveRunFunction(cekNull);

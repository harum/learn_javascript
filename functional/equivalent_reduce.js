function ajaxCall(callback) {
  return callback('putu');
};

function hello(name) {
  return "haloo " + name;
}

//ignorant
var getServerStuff = function(callback) {
  return ajaxCall(function(json){
    return callback(json);
  });
};
console.log("ignorant...");
console.log(getServerStuff(hello))

//enlightened
var getServerStuff = ajaxCall;
console.log("enlightened....");
console.log(getServerStuff(hello));

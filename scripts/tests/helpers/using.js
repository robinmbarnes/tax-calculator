// Data provider code
function using(name, values, func){
  for (var i = 0, count = values.length; i < count; i++) {
    if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
      values[i] = [values[i]];
    }
    var oldIt = it;
    it = function(description, func) {
      oldIt(description + ' (with "' + name + '" using ' + values[i].join(', ') + ')', func);
    };
    func.apply(this, values[i]);
    it = oldIt;
  }
}
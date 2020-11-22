var math = {
    add: function(a, b) {
      return a + b;
    },
    multiply:function(a,b){return a * b},
    sum: function(arr){return arr.reduce(function(total,i){return total + i})},
  };
module.exports = math;

function compose(...fns) {
    return function(x) {
        return fns.reduceRight((v,f) => f(v), x)
    }
}
  

  const a = function(next){
    console.log("Outside A", next);
    return function(previousReturnedValue) {
      console.log("Inside A", previousReturnedValue);
      return next(previousReturnedValue + 'a');
    };
  };

  const b = function(next){
    console.log("Outside B", next);
    return function(previousReturnedValue) {
      console.log("Inside B", previousReturnedValue);
      return next(previousReturnedValue + 'b');
    };
  };
 
  const c = function(next){
    console.log("Outside C", next);
    return function(previousReturnedValue) {
      console.log("Inside C", previousReturnedValue);
      return next(previousReturnedValue + 'c');
    };
  };
  const final = function(next){
    console.log("Final", next);
    return next;
  };
 
/*  简化
compose(a, b, c)(final)('!')
*/
const dd = compose(a, b, c);
const ee = dd(final);
const ff = ee('!');

console.log("Compose Output", ff);


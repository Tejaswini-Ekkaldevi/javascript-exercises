const add = function(a,b) {
   let sum=a+b;
   return sum;
	
};

const subtract = function(a,b) {
  let sub=a-b;
  return sub;
};

const sum = function(arr) {
  
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    }
    return sum;
  
};

const multiply = function(arr) {
  let mul=1;
  for(let i=0;i<arr.length;i++){
    mul*=arr[i];
    }
    return mul;
  
};

const power = function(a,b) {
  let pow=a**b;
  return pow;
};

const factorial = function(a) {
  fact=1;
  if(a==1 || a==0){
    return 1;
  }
  if(a>1){
  for(let i=1;i<=a;i++){
  fact=fact*i;
  }
  return fact;
}
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const fibonacci = function(n) {
    if(n==0 || n==1){
        return n;
   }
   else if(n<0){
    return 'OOPS';
    }
   else{
       return fibonacci(n-1) +fibonacci(n-2);
   }

};

module.exports = fibonacci;

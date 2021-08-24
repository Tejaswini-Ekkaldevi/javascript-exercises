const sumAll = function(a,b) {
    if(a>=0 && b>=0)
    {
        if(a<b){
            var n=(b-a+1);
            var sum=n*(a+b)/2;
            return sum;
         }
         else{
            var n=(a-b+1);
            var sum=n*(a+b)/2;
            return sum;
         }
    }

    else if(a===NaN || b===NaN){
        return 'ERROR';
    }
    else
    return 'ERROR';
};

module.exports = sumAll;

const reverseString = function(str) {
    // const s=str.split(" ").reverse().join('');
     //return s;

     let srev="";
     for(let i=str.length-1;i>=0;i--){
         srev=srev+str[i];
    }
    return srev;
};

module.exports = reverseString;

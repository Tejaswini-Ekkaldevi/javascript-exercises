const palindromes = function (str) {
    let spl=str.split(",");
  
    let rev=spl.reverse();
   
    let string=rev.join(" ");
   
     if(str == string){
         return true;
     }
     else{
         return false;
     }

};

module.exports = palindromes;

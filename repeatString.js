const repeatString = function(string,cnt) {
    if(cnt==0)
        return '';
    if(cnt<0){
         return "ERROR";
    }
    if(cnt==1){
        return string
    }
    else{
    return string+repeatString(string,cnt-1);
    }

};

module.exports = repeatString;

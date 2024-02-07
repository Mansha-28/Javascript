function palindrome(str){

    let n = str.length;

    for(let i=0;i<n/2;i++){
        if(str[i] !== str[n-i-1]){
            console.log("string is not palindrome");
            return ;
        }
    }
    console.log("string is palindrome");
}

palindrome("10")
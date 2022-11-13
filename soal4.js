const checkPalindrome = (text) => {
    if (text.length <= 2) {
        console.log("kata harus lebih dari 2 huruf!");
    }else {
        let result = "";
        for(let i = text.length - 1; i >= 0; i--) {
            result += text[i]
        }
        // pengkondisian dari hasil perulangan di atas
        if (result === text) {
            console.log("palindrome!");
        }else {
            console.log("bukan palindrome!");
        }
    }
}

checkPalindrome("mamam");
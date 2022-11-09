const text = 'malam';

const checkPalindrome = (text) => {
    for(i = 0; i < text.length; i++) {
        if (text.length <= 2) {
            return "kata harus lebih dari 2 huruf";
        } if (text[i] !== text[text.length - 1 - i]) {
            return "bukan palindrome!";
        }
    }
    return "palindrome!";
}

console.log(checkPalindrome(text));
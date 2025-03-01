function isPalindrome(num) {
        let original = num.toString();
        let reversed = original.split("").reverse().join("");
        return original === reversed;
    }
    
    let num1 = parseInt(process.argv[2]);
    let num2 = parseInt(process.argv[3]);
    
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`${num1} and ${num2} are not palindromes.`);
    }
    
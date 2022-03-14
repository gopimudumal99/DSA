function isPalindrome(str) { 
    let i = 0;
    let j = str.length - 1
    while (i < j) { 
        if (str[i] !== str[j]) {
            return "no palindrome"
        } 
        i++
        j--
    }
 return "palindrome"
}
 console.log(isPalindrome("racecar"));
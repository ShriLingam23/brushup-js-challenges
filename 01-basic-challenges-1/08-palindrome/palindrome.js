function isPalindrome(str) {
    let formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reverse = formattedStr.split("").reverse().join("")
    return formattedStr == reverse
}

module.exports = isPalindrome;

function countVowels(str) {
    let count = 0;
    for(let letter of str.toLowerCase()){
        if(['a','e','i','o','u'].includes(letter))
            count++;
    }
    return count;
}

module.exports = countVowels;

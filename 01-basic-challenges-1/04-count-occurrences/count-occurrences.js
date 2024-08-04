function countOccurrences(str, char) {
    // return str.split(char).length - 1;

    let count = 0;

    for (let x of str){
        if(x == char)
            count++;
    }
    
    return count
}

module.exports = countOccurrences;

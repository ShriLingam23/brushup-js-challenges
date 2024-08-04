function findMaxNumber(arr) {
    let current = arr[0];

    for(const val of arr){
        if(current < val)
            current = val
    }

    return current

}

module.exports = findMaxNumber;

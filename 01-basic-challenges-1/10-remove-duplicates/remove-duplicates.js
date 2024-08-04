function removeDuplicates(arr) {
    let cleanArr = []
    for(let num of arr){
        if(!cleanArr.includes(num))
            cleanArr.push(num)
    }
    return cleanArr;

    // return Array.from(new Set(arr))
}

module.exports = removeDuplicates;

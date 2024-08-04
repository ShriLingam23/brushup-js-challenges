function titleCase(str) {
    // let res = ""
    // str.toLowerCase().split(" ").forEach(element => {
    //     res += " " + element[0].toUpperCase() + element.slice(1)
    // });
    // return res.trim();

    return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase())

}

module.exports = titleCase;

const palindromes = function (words) {
    let word = words.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s/g, "");
    let cleanWord = word;
    let reverseWord = word.split("").reverse().join("");
    if (cleanWord === reverseWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

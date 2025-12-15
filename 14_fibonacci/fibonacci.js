const fibonacci = function (num) {

    /*if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else if (num === -`${num}`) {
        return OOPS;
    } else {
        let arr = [0, 1];
        let sum = 0;
        for (let i = 0; i <= num; i++) {
            sum = arr[arr.length - 2] + arr[arr.length - 1];
            arr.push(sum);
        }
        return arr[num];
    }*/
    if (num < 0) {
        return "OOPS";
    } else {
        let arr = [0, 1];
        let sum = 0;
        for (let i = 0; i < num; i++) {
            sum = arr[arr.length - 2] + arr[arr.length - 1];
            arr.push(sum);
        }
        return arr[num];
    }


};

// Do not edit below this line
module.exports = fibonacci;

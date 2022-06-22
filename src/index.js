module.exports = function toReadable(num) {
    const numbers = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const dozens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function fun(arr) {
        switch (arr.length) {
            case 1:
                return numbers[arr[0]];
            case 2:
                if (arr[0] === "1") {
                    return tens[arr[1]];
                } else if (arr[0] === "0") {
                    arr.shift();
                    return numbers[arr.shift()];
                } else {
                    return dozens[arr.shift()] + " " + numbers[arr.shift()];
                }
            case 3:
                return numbers[arr.shift()] + " hundred ";
            case 4:
                return tens[arr[1]] + " thousand ";
        }
    }

    let arr = String(num).split("");
    let str = "";
    while (arr) {
        str += fun(arr);
    }
    return str;
};

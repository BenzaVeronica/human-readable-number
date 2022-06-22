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
        let index0, index1;
        switch (arr.length) {
            case 1:
                if (arr[0] === "0") {
                    arr.shift();
                    return "zero";
                } else {
                    return numbers[arr.shift()];
                }
            case 2:
                index0 = arr.shift();
                index1 = arr.shift();
                if (index0 === "1") return tens[index1];
                if (index0 === "0") return numbers[index1];
                if (index0 === "0" && index1 === "0") return;
                if (index1 === "0") return dozens[index0];
                return dozens[index0] + " " + numbers[index1];
            case 3:
                return numbers[arr.shift()] + " hundred ";
            case 4:
                return tens[arr.shift()] + " thousand ";
        }
    }

    let arr = String(num).split("");
    let str = "";
    while (arr.length) {
        str += fun(arr);
    }
    return str.trim();
};

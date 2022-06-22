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
    const types = {
        2: "hundred",
        3: "thousand",
        6: "million",
    };
    let arr = String(num).split("");
    let newArr = [];
    switch (arr.length) {
        case 1:
            return numbers[arr[0]];
        case 2:
            return tens[arr[1]];
        default:
            for (let i = arr.length - 1; i >= 0; i--) {
                if (i === 1)
                    newArr.push(
                        dozens[arr.shift()] + " " + numbers[arr.shift()]
                    );
                if (types[i])
                    newArr.push(numbers[arr.shift()] + " " + types[i]);
            }
    }
    return newArr.join(" ");
};

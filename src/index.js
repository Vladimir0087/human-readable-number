module.exports = function toReadable(number) {
    const num = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };
    const dozens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };

    let arr = number.toString().split("");
    if (arr.length===1) {
        if (number ===0) return "zero";
        return num[number];
    }
    if (arr.length===2) {
        if (number <= 20) {
            return dozens[number];
        } else {
            return (dozens[(+arr[arr.length-2])*10] + " " + num[+arr[arr.length-1]]).trim();
        }
    }
    if (arr.length===3) {
        if (arr[1] === "0") {
            return (num[+arr[0]] + " hundred " + num[+arr[arr.length-1]]).trim();
        } else if ((arr[1] === "1")) {
            return (num[+arr[0]] + " hundred " + dozens[+(arr[1]+arr[2])]).trim();
        } else {
        return (num[+arr[0]] + " hundred " + dozens[(+arr[arr.length-2])*10] + " " + num[+arr[arr.length-1]]).trim();
        }
    }



}

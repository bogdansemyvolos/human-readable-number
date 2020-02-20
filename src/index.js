module.exports = function toReadable(number) {
    var ones = new Array('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen');
    var tens = new Array('', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety');
    let result = '';
    var one = number % 10;
    var ten = Math.floor(number / 10) % 10;
    var hunder = Math.floor(number / 100);

    if (hunder != 0) {
        result = result + ones[hunder] + ' hundred';
    }
    if (ten != 0) {
        if (result != '') {
            result = result + ' ';
        }
        if (ten === 1) {
            result = result + ones[number - hunder * 100];
        } else {
            result = result + tens[ten];
        }
    }
    if (one != 0 && ten != 1) {
        if (result != '') {
            result = result + ' ';
        }
        result = result + ones[one];
    } else if (one === 0 && result === '') {
        result = ones[one];
    }
    return result;
}

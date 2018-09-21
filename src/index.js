// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    var H = 50;
    var Q = 25;
    var D = 10;
    var N = 5; 
    var P = 1;
    var divide;
    var percent;
    var obj = {};
    

    if (currency <= 0) {
        return result;
    }

    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    divide = currency / H;
    divide = parseInt(divide);
    if (divide > 0) {
        obj["H"] = divide;
    }

    percent = currency % H;
    divide = percent / Q;
    divide = parseInt(divide);
    if (divide > 0) {
        obj["Q"] = divide;
    }

    percent = percent % Q;
    divide = percent / D;
    divide = parseInt(divide);
    if (divide > 0) {
        obj["D"] = divide;
    }

    percent = percent % D;
    divide = percent / N;
    divide = parseInt(divide);
    if (divide > 0) {
        obj["N"] = divide;
    }

    percent = percent % N;
    divide = percent / P;
    divide = parseInt(divide);
    if (divide > 0) {
        obj["P"] = divide;
    }

    return obj;
}

function birthdayCakeCandles(candles) {
    var count = 0;
    var candleHeigth = 0;
    for (var i = 0; i < candles.length - 1; i++) {
        if (candles[i] >= candleHeigth) {
            candleHeigth = candles[i];
        } else if (candles[i] < candleHeigth) {
            candleHeigth = candleHeigth;
        }
    }
    for (var j = 0; j <= candles.length - 1; j++) {
        if (candles[j] === candleHeigth) {
            count++;
        }
    }
    console.log(candleHeigth, count);

}

birthdayCakeCandles([9, 8, 7, 6, 5]);
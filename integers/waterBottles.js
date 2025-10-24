// There are numBottles water bottles that are initially full of water. 
// You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

const numWaterBottles = (numBottles, numExchange) => {
    // Set variable for return value.
    let total = numBottles;
    // Set variable for our value/counter that will set our loop condition.
    let loopVal = numBottles;

    // Continue mathematical operations until the number of bottles we have is less than the exchange rate.
    while (loopVal >= numExchange) {
        // Get the large, left side of decimal value.
        // eg (16 / 5) = 3
        let big = Math.trunc(loopVal / numExchange);
        // Get the deimcal of the value
        // eg (16 % 5) = 1
        let leftOver = loopVal % numExchange;
        
        // Add the big number to the total to continuously update return value.
        total += big;
        // The larger plus the smaller number added will become our new counter value.
        loopVal = big + leftOver;
    }

    return total;
};
const coins = {
  q:25,
  d:10,
  n:5,
  p:1
}

module.exports = {

getAmount: function(coinType) {

  if (!coins[coinType]){
    throw new Error('Unrecognized coin ' + coins[coinType])
  }else {
    return coins[coinType]
  }

},

convertToChange: function(number){

  let result = [];
  let keys = Object.keys(coins);

  for(let n in keys){
    let value = coins[keys[n]];

    while(number >= value){
      result.push(keys[n]);
      number -= value;
    }
  }
  return result; //.sort() to pass Test Driven Development exercise
                // without sort passes final exercise
               // conflict in tests or solution
}

}

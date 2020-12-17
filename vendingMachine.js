
const balanceManager = require('./balanceManager');
const changeHandler = require('./changeHandler');
const productInventory = require('./productInventory');

module.exports = {

  insertCoin: function(coinType){
    let value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },

  releaseChange: function(){
    let currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return changeHandler.convertToChange(currentBalance);
  },

  vendProduct: function(productId){
    let product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },

  getProducts: function() {
    return products;
  },

};

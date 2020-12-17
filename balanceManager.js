let balance = 0;

module.exports = {

  getBalance: function(){
    return balance;
  },

  increaseBalance: function(amount){
    balance += amount;
  },

  decreaseBalance: function(amount){
    let errorMessage;
    if(!this.canAfford(amount)){
        errorMessage = "Insufficient balance";
    }
    if(errorMessage){
        throw new Error(errorMessage);
    }
    balance -= amount;
  },

  isValidAmount: function(amount){
    if(amount == null){
      return false;
    } else {
      return true;
    }
  },

  canAfford: function(amount){
    let errorMessage;
    if(!this.isValidAmount(amount)){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },

};

function Thermostat() {
  this.temperature = 20;
  this.maxTemp ;
  this.powerSavingMode('on') ;
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.temperature === this.maxTemp) {
    throw new Error('temperature over maximum')
  }
  this.temperature++
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature === 10) {
    throw new Error('brrr, that seems a bit nippy!');
  }

  this.temperature--
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
};

Thermostat.prototype.powerSavingMode = function(status) {
  if (status === 'on'){
    this.maxTemp = 25
  } else if (status === 'off') {
    this.maxTemp = 32
  }

}


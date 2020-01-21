function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature = this.temperature + 1
};
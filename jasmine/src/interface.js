$(document).ready(function() {
  var thermostat = new Thermostat()

  $('#temperature').text(thermostat.temperature);

  $('#temp-up').on('click', function(){
    thermostat.increaseTemperature();
    updateTemperature()
  })

  $('#temp-down').on('click', function(){
    thermostat.decreaseTemperature();
    updateTemperature()
  })

  $('#temp-reset').on('click', function(){
    thermostat.resetTemperature();
    updateTemperature()
  })

  $('#psm-on').on('click', function(){
    thermostat.powerSavingMode('on');
  })

  $('#psm-off').on('click', function(){
    thermostat.powerSavingMode('off');
  })

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.currentEnergyUsage())
}

})



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
    ('#temperature').attr('class', thermostat.currentEnergyUsage())
  }

  function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
  }

  displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

})



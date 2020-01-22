describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increase the temperature by one degree', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(21);
  });

  it('increase the temperature by one degree', function() {
    thermostat.increaseTemperature();
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toEqual(22);
  });

  it('decrease the temperature by one degree', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(19);
  });

  it('decrease the temperature by one degree', function() {
    thermostat.decreaseTemperature();
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toEqual(18);
  });

  it('displays an error if temperature is less than 10 degrees', function() {
    thermostat.temperature = 10;
    console.log(thermostat.temperature)
    expect( function() {thermostat.decreaseTemperature()}).toThrowError('brrr, that seems a bit nippy!');
  })

  it('temperature can reset to 20 using the reset function', function() {
    thermostat.temperature = 25;
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  })

  it('has power saving mode on', function() {
    thermostat.powerSavingMode('on')
    expect(thermostat.maxTemp).toEqual(25);
  })

  it('power saving mode off', function() {
    thermostat.powerSavingMode('off')
    expect(thermostat.maxTemp).toEqual(32);
  })

});
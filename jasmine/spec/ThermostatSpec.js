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

});
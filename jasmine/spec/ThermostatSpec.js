describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Increase temperature', function() {
    it('increase the temperature by one degree', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });
  
    it('increase the temperature by one degree', function() {
      thermostat.increaseTemperature();
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(22);
    });
  })

  describe('Decrease temperature', function() {
    it('decrease the temperature by one degree', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });
  
    it('decrease the temperature by one degree', function() {
      thermostat.decreaseTemperature();
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(18);
    });
  })

  describe('Minimum Temperature', function() {
    it('displays an error if temperature is less than 10 degrees', function() {
      thermostat.temperature = 10;
      console.log(thermostat.temperature)
      expect( function() {thermostat.decreaseTemperature()}).toThrowError('brrr, that seems a bit nippy!');
    })
  })

  describe('Maximum Temperature', function() {
    it('raises error when temperature is over 25 with power saving mode enabled', function() {
      thermostat.powerSavingMode('on');
      expect(function() {
        for (var loopcounter = 0; loopcounter < 6; loopcounter++ ) {
          thermostat.increaseTemperature()
        }
      }).toThrowError('temperature over maximum')
    })

    it('raises error when temperature is over 32 with power saving mode disbled', function() {
      thermostat.powerSavingMode('off');
      expect(function() {
        for (var loopcounter = 0; loopcounter < 13; loopcounter++ ) {
          thermostat.increaseTemperature()
        }
      }).toThrowError('temperature over maximum')
    })
  })

  describe('Reset Temperature', function() {
    it('temperature can reset to 20 using the reset function', function() {
      thermostat.temperature = 25;
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('Power Saving Mode', function() {
    it('has power saving mode on', function() {
      thermostat.powerSavingMode('on')
      expect(thermostat.maxTemp).toEqual(25);
    })
  
    it('power saving mode off', function() {
      thermostat.powerSavingMode('off');
      expect(thermostat.maxTemp).toEqual(32);
    })
  
    it('power saving mode is on by default', function() {
      expect(thermostat.maxTemp).toEqual(25);
      expect(thermostat.maxTemp).not.toEqual(32);
    })
  })

});

$(document).ready(function(){
    var thermostat = new Thermostat();
    updateTemperature();

    $('#temperature-up').click(function() { // event listener
        thermostat.up(); // update model
        updateTemperature(); // update view
    })
    $('#temperature-down').click(function(){
        thermostat.down();
        updateTemperature();
    })
    $('#temperature-reset').click(function(){
        thermostat.resetTemperature();
        updateTemperature();
    })
    $('#powersaving-on').click(function(){
        thermostat.switchPowerSavingModeOn();
        $('#power-saving').text('on')
        updateTemperature();
    })
    $('#powersaving-off').click(function(){
        thermostat.switchPowerSavingModeOff();
        $('#power-saving').text('off')
        updateTemperature();
    })

    function updateTemperature() {
        $('#temperature').text(thermostat.temperature);
        $('#temperature').attr('class', thermostat.energyUsage());
      }
})
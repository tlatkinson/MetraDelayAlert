(function() {
    'use strict';
    
    var maData = require('ma/maData').maData(),
        metraAlertWindow = require('ma/templates/metraAlertWindow').metraAlertWindow(maData);

    metraAlertWindow.open();
    
    //adding data
    maData.initialize(metraAlertWindow);
}());
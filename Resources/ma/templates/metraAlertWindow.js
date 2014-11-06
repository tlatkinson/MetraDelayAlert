exports.metraAlertWindow = function (maData) {
    'use strict';
    var metraAlertWindow, 
        timeTableView,
        baseView,
        updateButton;
    
    //Setup Window
    metraAlertWindow = Titanium.UI.createWindow({
        title:'Metra Delay Alert',
        backgroundColor:'#fff',
        layout: 'vertical',
        exitOnClose : true,
        height: Ti.UI.FILL,
        width: Ti.UI.FILL
    });
    
    //base view
    baseView = Ti.UI.createView({
        width : Ti.UI.FILL,
        height : '85%',
        layout : 'vertical'
    });
    metraAlertWindow.add(baseView);

    //time entries view
    timeTableView = Titanium.UI.createTableView({
        layout: 'vertical',
        height: Ti.UI.SIZE
    });
    
    //TODO not working and it's time to sleep
    // function clickListener () {
        // maData.updateTrainData();
    // }
//     
    // updateButton = Ti.UI.createButton({
       // title: 'Update'
    // });
    // updateButton.addEventListener('click', clickListener);
    // timeTableView.add(updateButton);
       
    baseView.add(timeTableView);
   
    metraAlertWindow.add(baseView);
    
    return metraAlertWindow;
};
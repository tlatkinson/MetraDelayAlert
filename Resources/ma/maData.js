exports.maData = function () {
    'use strict';
    
    var trainDataService = require('ma/services/trainTime'),
        metraTimeRow = require('ma/templates/metraTimeRow'),
        util = require('ma/util').util(),
        dataField = require('ma/templates/dataField').dataField,
        metraTimeView,
        ma;
    
    //TODO split into template
    function addUpdateDate () {
        var row = Ti.UI.createTableViewRow({
                layout: 'vertical'
            }),
            epochNow = new Date().getTime();
            
        row.className = 'timestamp';
    
        row.add(
            dataField({
                name: 'Last Updated', 
                value: util.convertEpoch(epochNow)
            }));
    
        metraTimeView.appendRow(row);
    }
    
    function trainDataSuccess (trainTimes) {
        var keyConstant = 'train',
            i = 1,
            nextTrainTime = trainTimes[keyConstant + i];
            
        addUpdateDate();
        
        while(nextTrainTime) {
            //TODO make this not so odd
            metraTimeRow.addMetraTimeRow(metraTimeView, nextTrainTime);
            
            i += 1;
            nextTrainTime = trainTimes[keyConstant + i];
        }
    }
    
    function updateTrainData () {
        metraTimeView.removeAllChildren();
        trainDataService.getMetraTrainsByTime(new Date().getTime(), trainDataSuccess);
    }    
    
    ma = {
        initialize : function (metraAlertWindow) {
           metraTimeView = metraAlertWindow.children[0].children[0];
           
           updateTrainData();
        },
        updateTrainData: updateTrainData
    };
    
    return ma;
};

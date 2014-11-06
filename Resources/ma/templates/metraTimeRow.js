exports.addMetraTimeRow = function (tableView, metraTime) {
    'use strict';
    
    var row = Ti.UI.createTableViewRow({
            top: '5%',
            layout: 'vertical',
            height: Ti.UI.SIZE
        }),
        util = require('ma/util').util(),
        dataField = require('ma/templates/dataField').dataField,
        dateFields = [
            'scheduled_dpt_time',
            'estimated_dpt_time',
            'scheduled_arv_time',
            'estimated_arv_time'
        ],
        ignoreFields = [
            'train_num',
            'timestamp',
            'trip_id'
        ],
        property,
        value;
    
    for(property in metraTime) {
        if(metraTime.hasOwnProperty(property) && (ignoreFields.indexOf(property) === -1)) {
            if(dateFields.indexOf(property) !== -1) {
                value = util.convertEpoch(metraTime[property]);
            } else {
                value= metraTime[property];
            }
            row.add(
                dataField({
                    name: property, 
                    value: value
                }));
        }
    }
    
    row.className = 'metraTimeRow';
    
    tableView.appendRow(row);
};
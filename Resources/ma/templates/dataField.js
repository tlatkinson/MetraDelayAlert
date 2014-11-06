exports.dataField = function (inputParams) {
    'use strict';
    
    var baseView, 
        field,
        label,       
        labelWidth = '50%',
        fontSize = 18;
    
    baseView = Ti.UI.createView({
        width : Ti.UI.FILL,
        height : Ti.UI.SIZE,
        layout : 'horizontal',
        top: '1%'
    });

    field = Ti.UI.createLabel({
        text : inputParams.value,
        color: '#000'
    });
    
    label = Ti.UI.createLabel({
        text : inputParams.name + ':',
        left : '5%',
        color: '#000',
        font : {fontSize : fontSize},
        width: labelWidth
    });
    
    baseView.add(label);
    baseView.add(field);
    
    return baseView;
};
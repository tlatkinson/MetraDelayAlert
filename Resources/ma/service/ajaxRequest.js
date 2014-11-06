exports.ajaxRequest = function (config) {
    'use strict';
    
    var client,
        serviceConfig = require('ma/service/serviceConfig').serviceConfig,
        httpMethod = require('ma/service/httpMethod').httpMethod;
    
    client = Ti.Network.createHTTPClient({
        //similar to $.ajax.success except all http responses are returned here
        onload : function () {
            if ((this.readyState === 4)) {                
                config.success(JSON.parse(this.responseText), config.params); 
            } else if ((this.readyState !== 4) && config.error){
                config.error();
            }
        },
        onerror: function () {
            if(config.error) {
                config.error();
            }
        },
        timeout: 1000 * 30           
    });
    
    if(!config.method) {
        config.method = httpMethod.get;
    }
    
    if(!config.params) {
        config.params = {};
    }
    
    client.open(config.method, serviceConfig.serviceRoot + config.url);
    client.send(config.params);
};
exports.addMetraTimeRow=function(e,t){"use strict";var a,i,r=Ti.UI.createTableViewRow({top:"5%",layout:"vertical",height:Ti.UI.SIZE}),o=require("ma/util").util(),n=require("ma/templates/dataField").dataField,s=["scheduled_dpt_time","estimated_dpt_time","scheduled_arv_time","estimated_arv_time"],c=["train_num","timestamp","trip_id"];for(a in t)t.hasOwnProperty(a)&&-1===c.indexOf(a)&&(i=-1!==s.indexOf(a)?o.convertEpoch(t[a]):t[a],r.add(n({name:a,value:i})));r.className="metraTimeRow",e.appendRow(r)};
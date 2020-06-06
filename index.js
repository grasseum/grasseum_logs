var fs = require('fs');
var path = require('path');
var dirHidden = '.grasseum';
var grasseum_core = require("grasseum_core");
exports.createLogs = function(dir){

    
    

    var pathJoin = path.join(dir,dirHidden);
    if (!fs.existsSync(pathJoin)){
       try{
        fs.mkdirSync(pathJoin);
        grasseum_core.logsColorGreen("Logs folders is now generated");
       }catch(e){
        grasseum_core.logsColorRed("Failed generate Logs folders");
       }
        
    }
}
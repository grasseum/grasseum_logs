
var path = require('path');
var dirHidden = '.grasseum';
var grasseum_core = require("grasseum_core");
var grasseum_directory = require("grasseum_directory");
var directory_cmd = grasseum_directory.directory();
const log = grasseum_core.log();
exports.createLogs = function(dir){

    
    

    var pathJoin = path.join(dir,dirHidden);
    directory_cmd.createFolder(pathJoin,function(action){
       if(action["status"] == "folder_created"){
        log.green("Logs folders is now generated");
       }
        
    },function(e){
        log.red("Failed generate Logs folders");
    })
}
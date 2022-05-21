
const path = require('path');
const dirHidden = '.grasseum';
const grasseum_console = require("grasseum_console");
const grasseum_directory = require("grasseum_directory");
const directory_cmd = grasseum_directory.directory();

exports.createLogs = function (dir) {


    const pathJoin = path.join(dir, dirHidden);

    directory_cmd.createFolder(pathJoin, function (action) {

        if (action.status === "folder_created") {

            grasseum_console.logGreen("Logs folders is now generated");

        }

    }, function (error) {

        grasseum_console.logRed("Failed generate Logs folders");
        grasseum_console.logRed(error);

    });

};

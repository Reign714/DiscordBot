var enabled = false;

module.exports = {
    run: function (message) {
        if (message.member.hasPermission("MUTE_MEMBERS")) {
            if (enabled === false) {
                message.channel.overwritePermissions("745722617696223363", {
                    SEND_MESSAGES: false,
                });
                message.channel.overwritePermissions("745795255638425701", {
                    SEND_MESSAGES: true,
                });
                enabled = true;
                message.reply("Enabled lockdown!");
            } else if (enabled === true) {
                message.channel.overwritePermissions("745722617696223363", {
                    SEND_MESSAGES: null,
                });
                message.channel.overwritePermissions("745795255638425701", {
                    SEND_MESSAGES: true,
                });
                enabled = false;
                message.reply("Disabled lockdown!");
            }
        } else {
            message.reply("Sorry, you don't have permission to use that!");
        }
    }
};

const fs = require('fs') 
  
// Data which will write in a file. 
let data = "Learning how to write in a file."
  
// Write data in 'Output.txt' . 
fs.writeFile('Output.txt', data, (err) => { 
      
    // In case of a error throw err. 
    if (err) throw err; 
}) 
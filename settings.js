const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

//SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=d216ed4e275c4683' : process.env.SESSION_ID, //botmakepaid sep9pcontac ( paid oct 27=rs.320)
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
};

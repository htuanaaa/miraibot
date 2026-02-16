const fs = require("fs");
module.exports.config = {
name: "Ban",
	version: "1.0.1",
	description: "Sợ quá",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "soqua.mp4")) request("https://tinyurl.com/yerrl52z").pipe(fs.createWriteStream(dirMaterial + "soqua.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("ban")==0) || (event.body.indexOf("Ban")==0) || (event.body.indexOf("Sợ quá")==0)) {
		var msg = {
				body: "SỢ QUÁ",
		attachment: fs.createReadStream(__dirname + `/noprefix/soqua.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
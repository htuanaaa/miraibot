Skip to content
Sign up
D-Jukie
/
jukie_uwu
Public
111
Code
Issues
1
Pull requests
Actions
Projects
Wiki
More
xem thông tin pokemon
 main
@D-Jukie
D-Jukie committed 19 days ago 
1 parent 7bf026a commit 7b9e261635d67aaa8327cf6310a88536dc53ee0a
Showing  with 42 additions and 0 deletions.
 42  pokemon.js 
@@ -0,0 +1,42 @@
module.exports.config = {
    name: "poke",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin của 1 pokemon bất kì",
    commandCategory: "Tiện ích",
    usages: "[namePoke]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];	
const namePoke = args.join(" ");
if (!namePoke) return api.sendMessage('🌻Vui lòng nhập tên 1 loài pokemon!!!', event.threadID, event.messageID)
try {
const res = await axios.get(`https://some-random-api.ml/pokedex?pokemon=${namePoke}`);
const data = res.data;
const stt = data.stats
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${data.description}`), (err, response, body) => {
        if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
return api.sendMessage(`
» Tên: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}
» Hệ: ${data.type}
» Thế hệ: ${data.generation}
» Loài: ${data.species.join(', ')}
» Nhóm trứng: ${data.egg_groups.join(', ')}
» Khả năng: ${data.abilities.join(', ')}
» Chiều cao: ${data.height}
» Cân nặng: ${data.weight}
» Trạng thái: HP ${stt.hp}, ATK: ${stt.attack}, DEF: ${stt.defense}, Speed: ${stt.speed}
» Tiến hóa: ${data.family.evolutionLine.join(' => ')}
» Mô tả: ${text}`, event.threadID, event.messageID)
})
} catch {
            return api.sendMessage('🌻Không tìm thấy tên pokemon!!!', event.threadID, event.messageID);
        }
}
0 comments on commit 7b9e261
Please sign in to comment.
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
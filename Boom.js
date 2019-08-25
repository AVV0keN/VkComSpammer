// by Awoken 19.06/19
// vk.com/avocen
//Варианты ошибок ( 9 - Флуд контрол. (попробуй перезапустить прогу\измени текст сообщений) 213 - конец сессии (жди 1 день))
//
		////
		//@author awoken
		////
		//
var request = require("request");
const title = require("console-title");
const post_id = 123; // Пиши сюда айди поста (как его узнать ? Смотри в репозиторие этого скрипта)
const user_id = 123; // <-- Туда пиши айди жертвы или свой :)
const interval = 2000; // Интервал в милисеках сюда 
const tokens = [
                // ниже пиши токены групп от которых можно коментить
		"Токен здесь! :-3"
		
		//
		////
		//@author awoken
		////
		//
		
	]
const messages = [
// ниже пиши сообщения . 
		"Awoken top",
		"123",
		"1"
		
		
	]

var count = 0;
console.log(" Сделано Авокеном.vk.com/avocen");
var spam = setInterval(function() {
	tokens.forEach(function(token) {
		var msg = messages[Math.floor(Math.random()*messages.length)];
		request({
		//
		////
		//@author awoken
		////
		//
			headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1'},
			url: `https://api.vk.com/method/wall.createComment?owner_id=${user_id}&post_id=${post_id}&from_group=1&message=${encodeURI(msg)}&v=5.95&access_token=${token}`,
			method: 'GET'
		  }, function (err, res, body) {
			if(err) console.log(err);
			if(body.includes("response")) {
				count++;
				title(`Spam by awoken~ Сделано ${count} комментариев `);
				console.log(`Commented succcesfull ${count}: ${msg}`);
			} else {
				console.log(`Error: ${body}`);
				title(`Spam by awoken~ Err сообщи код ошибки, если её нет в шапке кода авокену -> vk.com/avocen `);
			}
		  });
	});
}, interval);
        //
		////
		//@author awoken
		////
		//

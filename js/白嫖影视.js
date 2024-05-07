globalThis.jiemi=function(data, key) {
	//data=data.slice(1,-1);//不要前面和后面的双引号
	//const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
	//const str=CryptoJS.enc.Base64.stringify(encryptedHexStr);
	return decodeURIComponent(CryptoJS.RC4.decrypt(data, CryptoJS.enc.Utf8.parse(key)).toString(CryptoJS.enc.Utf8));
}
globalThis.parse='';
var rule = {
	title: '白嫖影视',
	host: 'https://www.baipiaoys.com:9092',
	hostJs:`
	let url=HOST+'/static/js/playerconfig.js';
	let html=request(url);
	log(html);
	let match=html.match(/\\"parse\\":\\"(.*?\\")/g)
	log(match);
	parse=match[1].replace(/\\\\/g,'').slice(9,-1);//去掉反斜杠
	log(parse);
	`,
	// url:'/fyclassfyfilter/indexfypage.html[/fyclassfyfilter/index.html]',
	url: '/vod/type/id/fyclass.html',
	//https://www.baipiaoys.cc/vod/type/id/1.html
	filterable: 0,
	class_name:'电视剧&电影&动漫&短剧',
	class_url:'2&1&3&4',
	searchUrl: '/search/page/fypage/wd/**.html',
	//https://www.baipiaoys.cc/search/page/2/wd/%E5%A4%A7.html
	searchable: 2,
	quickSearch: 1,
	headers: {'User-Agent': 'PC_UA',},
	//class_parse: '.mr-auto li:gt(0):lt(6);a&&Text;a&&href;/(\\w+)/index.html',
	play_parse: true,
	lazy:`js:
	let html=request(input);
    log(html);
	let match=html.match(/\\},\\"url\\":\\"(.*?\\")/i);
	log(match);
	let url=match[1].replace(/\\\\/g,'').slice(0,-1);
	log(url);
	//如果url含m3u8就直接返回地址
	if(url.indexOf('m3u8')>0){
		input=url;
	}
	else
	{
	url=parse+url;
	log(url);
	html=request(url);
	//log(html);
	match=html.match(/iframe src=\\"(.*?\\")/ig);
	url=parse.split('?')[0]+match[0].replace(/\\\\/g,'').slice(12,-1);
	html=request(url);
	match=html.match(/src=\\"(.*?\\/js\\/)/ig);
	log(match[1].replace(/\\\\/g,'').slice(5))
	
	//从https://www.baipiao-ys.cc/mizhiplayerapi/js/setting.js获取rc4的key
	
	let key='202205051426239465';
	url=parse.split('/player')[0]+match[1].replace(/\\\\/g,'').slice(5)+'setting.js';
	key=request(url);
	match=key.match(/\\'(.*)\\',1\\)\\)/ig);
	key=match[0].slice(1,-5);//获取key
	log(key);

	match=html.match(/\\"url\\": \\"(.*?\\")/ig);
	log(match);
	html=match[0].slice(8,-1);
	log(html);
	log(jiemi(html,key));
	input=jiemi(html,key);
	}
	`,
	limit: 6,
	推荐: 'li.col-md-6;div&&a&&title;div&&a&&data-original;div&&a&&span.pic-text&&Text;div&&a&&href',
	一级: '.col-md-8,.col-md-6,col-md-4;div&&a&&title;div&&a&&data-original;;div&&a&&href',
	二级: {
		//// 二级 title: 片名;类型
		"title":".stui-content__thumb&&a&&title;.stui-content__detail&&a:eq(0)&&Text",
		"img": ".stui-content__thumb&&a&&img&&data-original",
		//// 二级 desc: 主要信息;年代;地区;演员;导演
		"desc":".stui-content__detail&&p:eq(3)&&Text;.stui-content__detail&&a:eq(3)&&Text;.stui-content__detail&&a:eq(2)&&Text;.stui-content__detail&&p:eq(1)&&Text;.stui-content__detail&&p:eq(2)&&Text",
		"content": "p.hidden-xs&&Text",
		"tabs": ".b h3",
		"lists": ".b li"
	},
	搜索: 'ul.stui-vodlist__media&&li;.thumb&&a&&title;.thumb&&a&&data-original;.thumb&&a&&Text;a&&href',
}
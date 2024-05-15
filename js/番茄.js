var rule={
    title: '番薯影视',
    host: 'https://www.uuoozz.com',
    url: 'https://www.uuoozz.com/fyclass/page/fypage/',
    searchUrl: 'https://www.uuoozz.com/?s=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
    'User-Agent': 'MOBILE_UA',
    },
    class_parse: '.swiper-container-initialized&&ul&&li;a&&Text;a&&href;/(\\d+).html',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: 'body&&.pic-list;.title&&Text;img&&data-original;.module-item-note&&Text;a&&href',
    double: true,
    一级: 'body&&.pic-list;a&&title;img&&data-original;.s1&&Text;a&&href',
    二级: {
    "title": "h1&&Text;.module-info-tag&&Text",
    "img": ".lazyload&&data-original",
    "desc": ".module-info-item:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(3)&&Text",
    "content": ".module-info-introduction&&Text",
    "tabs": ".hisSwiper&&span",
    "lists": ".player.ckp:eq(#id) a"
    },
    搜索: 'body&&.pic-list;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-info-item-content&&Text',}

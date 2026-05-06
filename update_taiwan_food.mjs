import fs from 'fs';

const taiwanFoodData = {
  "provinceName": "台湾",
  "provinceId": "taiwan",
  "foodList": [
    {
      "name": "蚵仔煎",
      "description": "蚵仔煎是台湾最具代表性的传统小吃，以新鲜牡蛎（蚵仔）和地瓜粉浆煎制而成，配以特制酱汁，口感外酥里嫩，是台湾夜市的标志性美食。",
      "origin": "源于福建闽南地区，随早期移民传入台湾，在台湾发展出独特的风味。蚵仔煎是台湾饮食文化融合的典型代表。",
      "history": "从闽南小吃到台湾名片，蚵仔煎经历了从民间到文化的转变。如今已成为台湾旅游的必尝美食。",
      "culture": "蚵仔煎是台湾饮食文化的代表，体现了闽南移民与台湾本地文化的融合。它是台湾夜市文化的象征。",
      "image": "https://s.coze.cn/image/kf-dnBazRXg/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "珍珠奶茶",
      "description": "珍珠奶茶是台湾发明的特色饮品，以奶茶为基底，加入木薯粉制成的黑色珍珠（波霸），香甜可口，是台湾最具国际影响力的饮品。",
      "origin": "1980年代由台中春水堂茶馆发明创造。珍珠奶茶的发明开启了台湾手摇茶饮的时代。",
      "history": "从台湾本地到风靡全球，珍珠奶茶经历了从发明到国际化的过程。如今全球珍珠奶茶市场规模超过百亿美元。",
      "culture": "珍珠奶茶是台湾创新饮食的代表，体现了台湾人的创意。它已成为台湾文化输出的重要符号，在全球各地都有台湾珍珠奶茶店。",
      "image": "https://s.coze.cn/image/fc-oWRWZ_kk/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "卤肉饭",
      "description": "卤肉饭是台湾最具代表性的传统饭类小吃，以卤制猪肉末配米饭，浇上卤汁，饭香肉香交织，是台湾人的日常主食。",
      "origin": "源于福建卤肉饭，在台湾落地生根后形成独特风味。卤肉饭是台湾庶民饮食文化的代表。",
      "history": "从街头小摊到连锁品牌，卤肉饭经历了从民间到产业化的过程。如今已成为台湾的\"国饭\"。",
      "culture": "卤肉饭是台湾庶民饮食文化的核心，体现了台湾人的生活方式。它是台湾饮食认同的重要符号。",
      "image": "https://s.coze.cn/image/VA_Tnran3d4/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "凤梨酥",
      "description": "凤梨酥是台湾的传统糕点，以台湾本地菠萝（凤梨）为馅料，外皮酥脆，内馅酸甜可口，是台湾最具代表性的伴手礼。",
      "origin": "凤梨酥在台湾的发展超过百年，最初为改善凤梨产销问题而开发。台湾菠萝因其土质气候，品质优良。",
      "history": "从地方特产到国际伴手礼，凤梨酥经历了从传统到产业化的过程。如今台湾凤梨酥年产值超过百亿元新台币。",
      "culture": "凤梨酥是台湾伴手礼文化的代表，体现了台湾农产品的优良品质。它是台湾旅游文化的重要组成部分。",
      "image": "https://s.coze.cn/image/f9iaIPT6vz8/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "大肠蚵仔面线",
      "description": "大肠蚵仔面线是台湾的传统小吃，以面线为主料，配以大肠、蚵仔（牡蛎），勾芡煮成，口感浓稠，是台湾人喜爱的早餐或点心。",
      "origin": "源于福建面线糊，在台湾发展出独特风味。大肠蚵仔面线是台湾庙口文化的代表。",
      "history": "从街头小摊到知名老店，大肠蚵仔面线经历了从民间到品牌化的过程。如今在台湾各地都能吃到。",
      "culture": "大肠蚵仔面线是台湾小吃文化的代表，体现了台湾人对传统味道的坚持。它是台湾夜市文化的重要组成部分。",
      "image": "https://s.coze.cn/image/FWEtBJCXoPU/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "牛肉面",
      "description": "台湾牛肉面融合了大陆各省牛肉面的精华，以浓郁汤头、大块牛肉著称，是台湾最具代表性的面食之一，多次举办牛肉面节推广。",
      "origin": "1949年后随大陆各省移民传入台湾，在台湾融合创新形成独特风味。台湾牛肉面是台湾多元文化的体现。",
      "history": "从军中饮食到餐桌美食，台湾牛肉面经历了从简单到精致的转变。如今已成为台湾饮食文化的名片。",
      "culture": "台湾牛肉面是台湾包容多元饮食文化的体现，展现了台湾的融合创新能力。它是台湾美食走向国际的代表。",
      "image": "https://s.coze.cn/image/FWEtBJCXoPU/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "担仔面",
      "description": "担仔面是台南的传统小吃，以小碗盛装细面，配以肉燥、蒜泥、虾汤等配料，汤鲜味美，是台南小吃的代表。",
      "origin": "源于台南度小月担仔面，相传有上百年历史。担仔面是台南府城饮食文化的代表。",
      "history": "从挑担叫卖到店铺经营，担仔面经历了从流动摊位到品牌老店的过程。如今已成为台南的标志性美食。",
      "culture": "担仔面是台南饮食文化的代表，体现了台湾小吃文化的精致与传承。它是台湾传统美食的重要符号。",
      "image": "https://s.coze.cn/image/FWEtBJCXoPU/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "盐酥鸡",
      "description": "盐酥鸡是台湾夜市的代表性炸鸡小吃，以鸡肉块裹粉油炸，配以九层塔、盐酥粉等，香脆可口，是台湾人最爱的宵夜之一。",
      "origin": "1980年代在台湾发明，迅速成为台湾夜市的标志性美食。盐酥鸡是台湾夜市文化的代表。",
      "history": "从街头小摊到连锁品牌，盐酥鸡经历了从民间到产业化的过程。如今在台湾各地夜市都能看到。",
      "culture": "盐酥鸡是台湾夜市文化的代表，体现了台湾人对炸物的喜爱。它是台湾宵夜文化的象征。",
      "image": "https://s.coze.cn/image/VA_Tnran3d4/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "小笼包",
      "description": "台湾小笼包以薄皮多汁著称，鼎泰丰将其发扬光大，成为台湾饮食文化的代表，曾被《纽约时报》评为世界十大美食。",
      "origin": "源于上海小笼包，在台湾经过改良创新，形成皮薄、汁多、馅鲜的特点。台湾小笼包是台湾精致餐饮的代表。",
      "history": "从上海风味到台湾名产，小笼包经历了从传统到精致的转变。如今已成为台湾餐饮的代表品牌。",
      "culture": "台湾小笼包是台湾精致餐饮的代表，体现了台湾人对美食的追求。它是台湾餐饮走向世界的典范。",
      "image": "https://s.coze.cn/image/rpe9-xxlA30/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    },
    {
      "name": "剉冰",
      "description": "台湾剉冰（刨冰）是台湾夏季消暑的特色甜品，以刨冰为基底，加入各种配料如红豆、芋圆、芒果等，淋上糖水，是台湾人夏日的最爱。",
      "origin": "剉冰在台湾的发展历史与冰品技术传入有关。台湾因气候炎热，冰品文化发达。",
      "history": "从传统剉冰到多元配料，台湾剉冰经历了从简单到丰富的过程。如今配料可达数十种。",
      "culture": "台湾剉冰是台湾冰品文化的代表，体现了台湾人的创意与融合能力。它是台湾夏季饮食文化的象征。",
      "image": "https://s.coze.cn/image/fc-oWRWZ_kk/",
      "videoUrl": "https://www.bilibili.com/video/BV1Qx411v7yQ/"
    }
  ]
};

const filePath = 'f:/province/json-data/food-data.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

// 检查是否已存在台湾数据
const existingIndex = data.findIndex(item => item.provinceId === 'taiwan');

if (existingIndex >= 0) {
  // 更新现有的台湾数据
  data[existingIndex] = taiwanFoodData;
  console.log('已更新台湾美食数据');
} else {
  // 添加新的台湾数据
  data.push(taiwanFoodData);
  console.log('已添加台湾美食数据');
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log('food-data.json 更新完成！');
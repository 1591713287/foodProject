import foodData from '../../../json-data/food-data.json';
import specialtyData from '../../../json-data/specialty-data.json';
import heritageData from '../../../json-data/heritage-data.json';
import provincesData from '../../../json-data/provinces-data.json';

interface FoodItem {
  name: string;
  description: string;
  origin: string;
  history: string;
  culture: string;
  image: string;
  videoUrl: string;
}

interface ProvinceFood {
  provinceName: string;
  provinceId: string;
  foodList: FoodItem[];
}

interface ProvinceSpecialty {
  provinceName: string;
  provinceId: string;
  specialtyList: FoodItem[];
}

interface ProvinceHeritage {
  provinceName: string;
  provinceId: string;
  heritageList: FoodItem[];
}

const provinceImages: {[key: string]: string} = {
  beijing: "/image/北京_food.png",
  tianjin: "/image/天津_food.png",
  shanghai: "/image/上海_food.png",
  chongqing: "/image/重庆_food.jpeg",
  yunnan: "/image/云南_food.jpeg",
  neimenggu: "/image/内蒙_food.jpg",
  taiwan: "/image/台湾_food.jpg",
  jilin: "/image/吉林_food.jpg",
  sichuan: "/image/四川_food.png",
  ningxia: "/image/宁夏_food.png",
  shandong: "/image/山东_food.jpeg",
  shanxi: "/image/山西_food.png",
  guangdong: "/image/广东_food.jpeg",
  guangxi: "/image/广西_food.jpeg",
  xinjiang: "/image/新疆_food.png",
  jiangsu: "/image/江苏_food.png",
  jiangxi: "/image/江西_food.jpeg",
  hebei: "/image/河北_food.jpeg",
  henan: "/image/河南_food.jpeg",
  zhejiang: "/image/浙江_food.jpeg",
  hainan: "/image/海南_food.jpg",
  hubei: "/image/湖北_food.jpeg",
  hunan: "/image/湖南_food.jpeg",
  gansu: "/image/甘肃_food.jpg",
  fujian: "/image/福建_food.jpeg",
  xizang: "/image/西藏_food.png",
  guizhou: "/image/贵州_food.jpg",
  liaoning: "/image/辽宁_food.png",
  shaanxi: "/image/陕西_food.png",
  qinghai: "/image/青海_food.png",
  hongkong: "/image/香港_food.png",
  macau: "/image/澳门_food.png",
  heilongjiang: "/image/黑龙江_food.png",
  anhui: "/image/安徽_food.jpg"
};

const foodImages: {[key: string]: string} = {
  "Biángbiáng面": "/image/陕西美食图片/04_Biángbiáng面.jpg",
  "万州烤鱼": "/image/重庆美食图片/08_万州烤鱼.jpg",
  "上海红烧肉": "/image/上海美食图片/3_上海红烧肉.png",
  "东坡肉": "/image/浙江美食图片/03_东坡肉.jpg",
  "东安鸡": "/image/湖南美食图片/06_东安鸡.jpg",
  "丝娃娃": "/image/贵州美食图片/05_丝娃娃.jpg",
  "丝袜奶茶": "/image/香港美食图片/04_丝袜奶茶.jpg",
  "串串香": "/image/重庆美食图片/06_串串香.jpg",
  "九转大肠": "/image/山东美食图片/03_九转大肠.jpg",
  "乳扇": "/image/云南美食图片/5_乳扇.png",
  "云吞面": "/image/香港美食图片/05_云吞面.jpg",
  "五色糯米饭": "/image/广西美食图片/04_五色糯米饭.jpg",
  "佛跳墙": "/image/福建美食图片/01_佛跳墙.jpg",
  "傣味手抓饭": "/image/云南美食图片/7_傣味手抓饭.png",
  "八宝鸭": "/image/上海美食图片/9_八宝鸭.png",
  "兰州牛肉面": "/image/甘肃美食图片/01_兰州牛肉面.jpg",
  "凉皮": "/image/陕西美食图片/03_凉皮.jpg",
  "凤梨酥": "/image/台湾美食图片/04_凤梨酥.jpg",
  "刀削面": "/image/山西美食图片/01_刀削面.jpg",
  "剁椒鱼头": "/image/湖南美食图片/02_剁椒鱼头.jpg",
  "剉冰": "/image/台湾美食图片/10_剉冰.jpg",
  "北京烤鸭": "/image/北京美食图片/1_北京烤鸭.png",
  "十八街麻花": "/image/天津美食图片/04_十八街麻花.jpg",
  "南京盐水鸭": "/image/江苏美食图片/01_南京盐水鸭.jpg",
  "南宁老友粉": "/image/广西美食图片/03_南宁老友粉.jpg",
  "南昌拌粉": "/image/江西美食图片/02_南昌拌粉.jpg",
  "南翔小笼包": "/image/上海美食图片/1_南翔小笼包.png",
  "博望锅盔": "/image/河南美食图片/09_博望锅盔.jpg",
  "卤煮火烧": "/image/北京美食图片/4_卤煮火烧.png",
  "卤肉饭": "/image/台湾美食图片/03_卤肉饭.jpg",
  "厦门沙茶面": "/image/福建美食图片/04_厦门沙茶面.jpg",
  "叉烧": "/image/香港美食图片/01_叉烧.jpg",
  "叉烧饭": "/image/广东美食图片/03_叉烧饭.jpg",
  "口味虾": "/image/湖南美食图片/04_口味虾.jpg",
  "叫化鸡": "/image/浙江美食图片/04_叫化鸡.jpg",
  "合肥四大名点": "/image/安徽美食图片/07_合肥四大名点.jpg",
  "合肥龙虾": "/image/安徽美食图片/02_合肥龙虾.jpg",
  "和乐蟹": "/image/海南美食图片/02_和乐蟹.jpg",
  "咖喱鱼蛋": "/image/香港美食图片/09_咖喱鱼蛋.jpg",
  "哈尔滨红肠": "/image/黑龙江美食图片/01_哈尔滨红肠.jpg",
  "唐山棋子烧饼": "/image/河北美食图片/05_唐山棋子烧饼.jpg",
  "嘉兴粽子": "/image/浙江美食图片/09_嘉兴粽子.jpg",
  "四川火锅": "/image/四川美食图片/01_四川火锅.jpg",
  "回锅肉": "/image/四川美食图片/03_回锅肉.jpg",
  "固始鹅块": "/image/河南美食图片/08_固始鹅块.jpg",
  "土笋冻": "/image/福建美食图片/06_土笋冻.jpg",
  "土豆烧牦牛肉": "/image/西藏美食图片/10_土豆烧牦牛肉.jpg",
  "大列巴": "/image/黑龙江美食图片/10_大列巴.jpg",
  "大肠蚵仔面线": "/image/台湾美食图片/05_大肠蚵仔面线.jpg",
  "大连海鲜": "/image/辽宁美食图片/05_大连海鲜.jpg",
  "太原头脑": "/image/山西美食图片/04_太原头脑.jpg",
  "太原灌肠": "/image/山西美食图片/10_太原灌肠.jpg",
  "夫妻肺片": "/image/四川美食图片/04_夫妻肺片.jpg",
  "奶皮子": "/image/内蒙古美食图片/6_奶皮子.png",
  "奶豆腐": "/image/内蒙古美食图片/9_奶豆腐.png",
  "姜母鸭": "/image/福建美食图片/05_姜母鸭.jpg",
  "宁波汤团": "/image/浙江美食图片/06_宁波汤团.jpg",
  "安庆鸡汤泡炒米": "/image/安徽美食图片/09_安庆鸡汤泡炒米.jpg",
  "客家酿豆腐": "/image/江西美食图片/06_客家酿豆腐.jpg",
  "宣威火腿": "/image/云南美食图片/8_宣威火腿.png",
  "宫保鸡丁": "/image/四川美食图片/06_宫保鸡丁.jpg",
  "小笼包": "/image/台湾美食图片/09_小笼包.jpg",
  "小鸡炖蘑菇": "/image/黑龙江美食图片/05_小鸡炖蘑菇.jpg",
  "山东煎饼": "/image/山东美食图片/01_山东煎饼.jpg",
  "山东糖醋鲤鱼": "/image/山东美食图片/08_山东糖醋鲤鱼.jpg",
  "山城汤圆": "/image/重庆美食图片/10_山城汤圆.jpg",
  "山西老陈醋": "/image/山西美食图片/08_山西老陈醋.jpg",
  "山西过油肉": "/image/山西美食图片/05_山西过油肉.jpg",
  "岐山臊子面": "/image/陕西美食图片/05_岐山臊子面.jpg",
  "岳阳烧烤": "/image/湖南美食图片/08_岳阳烧烤.jpg",
  "常德牛肉粉": "/image/湖南美食图片/03_常德牛肉粉.jpg",
  "平遥牛肉": "/image/山西美食图片/03_平遥牛肉.jpg",
  "延吉冷面": "/image/吉林美食图片/1_延吉冷面.png",
  "开封灌汤包": "/image/河南美食图片/03_开封灌汤包.jpg",
  "张飞牛肉": "/image/四川美食图片/10_张飞牛肉.jpg",
  "得莫利炖鱼": "/image/黑龙江美食图片/03_得莫利炖鱼.jpg",
  "微山湖鲤鱼": "/image/山东美食图片/10_微山湖鲤鱼.jpg",
  "德州扒鸡": "/image/山东美食图片/02_德州扒鸡.jpg",
  "徽州臭鳜鱼": "/image/安徽美食图片/01_徽州臭鳜鱼.jpg",
  "恋爱豆腐果": "/image/贵州美食图片/06_恋爱豆腐果.jpg",
  "手扒羊肉": "/image/内蒙古美食图片/1_手扒羊肉.png",
  "手抓羊肉": "/image/青海美食图片/01_手抓羊肉.jpg",
  "打糕": "/image/吉林美食图片/7_打糕.png",
  "扬州炒饭": "/image/江苏美食图片/02_扬州炒饭.jpg",
  "扬州狮子头": "/image/江苏美食图片/07_扬州狮子头.jpg",
  "抱罗粉": "/image/海南美食图片/07_抱罗粉.jpg",
  "担仔面": "/image/台湾美食图片/07_担仔面.jpg",
  "排骨年糕": "/image/上海美食图片/4_排骨年糕.png",
  "排骨藕汤": "/image/湖北美食图片/03_排骨藕汤.jpg",
  "文昌鸡": "/image/海南美食图片/01_文昌鸡.jpg",
  "无锡小笼包": "/image/江苏美食图片/08_无锡小笼包.jpg",
  "早茶": "/image/广东美食图片/08_早茶.jpg",
  "朝阳小米": "/image/辽宁美食图片/10_朝阳小米.jpg",
  "朝鲜族冷面汤": "/image/吉林美食图片/9_朝鲜族冷面汤.png",
  "朝鲜族泡菜": "/image/吉林美食图片/5_朝鲜族泡菜.png",
  "杀猪菜": "/image/黑龙江美食图片/02_杀猪菜.jpg",
  "杨村糕干": "/image/天津美食图片/09_杨村糕干.jpg",
  "松鼠鳜鱼": "/image/江苏美食图片/03_松鼠鳜鱼.jpg",
  "枫泾丁蹄": "/image/上海美食图片/7_枫泾丁蹄.png",
  "柠檬鸭": "/image/广西美食图片/05_柠檬鸭.jpg",
  "查干湖胖头鱼": "/image/吉林美食图片/2_查干湖胖头鱼.png",
  "柳州螺蛳粉": "/image/广西美食图片/01_柳州螺蛳粉.jpg",
  "桂林米粉": "/image/广西美食图片/02_桂林米粉.jpg",
  "梧州龟苓膏": "/image/广西美食图片/07_梧州龟苓膏.jpg",
  "椰子饭": "/image/海南美食图片/09_椰子饭.jpg",
  "椰子鸡": "/image/海南美食图片/03_椰子鸡.jpg",
  "正定八大碗": "/image/河北美食图片/02_正定八大碗.jpg",
  "武昌鱼": "/image/湖北美食图片/02_武昌鱼.jpg",
  "武汉热干面": "/image/湖北美食图片/01_武汉热干面.jpg",
  "毛血旺": "/image/重庆美食图片/04_毛血旺.jpg",
  "水晶虾仁": "/image/上海美食图片/8_水晶虾仁.png",
  "水煮牛肉": "/image/四川美食图片/05_水煮牛肉.jpg",
  "水蟹粥": "/image/澳门美食图片/04_水蟹粥.jpg",
  "汽锅鸡": "/image/云南美食图片/2_汽锅鸡.png",
  "汾酒": "/image/山西美食图片/09_汾酒.jpg",
  "沈阳回头": "/image/辽宁美食图片/06_沈阳回头.jpg",
  "沈阳鸡架": "/image/辽宁美食图片/03_沈阳鸡架.jpg",
  "沔阳三蒸": "/image/湖北美食图片/06_沔阳三蒸.jpg",
  "沙县小吃": "/image/福建美食图片/03_沙县小吃.jpg",
  "沧州火锅鸡": "/image/河北美食图片/04_沧州火锅鸡.jpg",
  "沧州金丝小枣": "/image/河北美食图片/11_沧州金丝小枣.jpg",
  "河南烩面": "/image/河南美食图片/01_河南烩面.jpg",
  "泉州面线糊": "/image/福建美食图片/09_泉州面线糊.jpg",
  "泡椒牛蛙": "/image/重庆美食图片/09_泡椒牛蛙.jpg",
  "洛阳水席": "/image/河南美食图片/05_洛阳水席.jpg",
  "济南把子肉": "/image/山东美食图片/09_济南把子肉.jpg",
  "济南油旋": "/image/山东美食图片/06_济南油旋.jpg",
  "海口斋菜煲": "/image/海南美食图片/08_海口斋菜煲.jpg",
  "海胆蒸蛋": "/image/海南美食图片/10_海胆蒸蛋.jpg",
  "淄博博山豆腐箱": "/image/山东美食图片/07_淄博博山豆腐箱.jpg",
  "淮南牛肉汤": "/image/安徽美食图片/05_淮南牛肉汤.jpg",
  "淮安软兜长鱼": "/image/江苏美食图片/10_淮安软兜长鱼.jpg",
  "清补凉": "/image/海南美食图片/04_清补凉.jpg",
  "温州鱼丸": "/image/浙江美食图片/08_温州鱼丸.jpg",
  "湘西霉豆腐": "/image/湖南美食图片/10_湘西霉豆腐.jpg",
  "滁州雷官板鸭": "/image/安徽美食图片/10_滁州雷官板鸭.jpg",
  "潍坊朝天锅": "/image/山东美食图片/05_潍坊朝天锅.jpg",
  "潜江油焖大虾": "/image/湖北美食图片/04_潜江油焖大虾.jpg",
  "潮汕牛肉火锅": "/image/广东美食图片/07_潮汕牛肉火锅.jpg",
  "澳门杏仁饼": "/image/澳门美食图片/05_澳门杏仁饼.jpg",
  "澳门烧肉": "/image/澳门美食图片/07_澳门烧肉.jpg",
  "澳门老婆饼": "/image/澳门美食图片/10_澳门老婆饼.jpg",
  "澳门虾籽面": "/image/澳门美食图片/06_澳门虾籽面.jpg",
  "澳门鱼翅丸": "/image/澳门美食图片/09_澳门鱼翅丸.jpg",
  "濮阳壮馍": "/image/河南美食图片/06_濮阳壮馍.jpg",
  "炒田螺": "/image/江西美食图片/09_炒田螺.jpg",
  "炒米": "/image/内蒙古美食图片/8_炒米.png",
  "烤全羊": "/image/内蒙古美食图片/2_烤全羊.png",
  "烧腊": "/image/广东美食图片/02_烧腊.jpg",
  "烧鹅": "/image/香港美食图片/06_烧鹅.jpg",
  "烧麦": "/image/内蒙古美食图片/4_烧麦.png",
  "焦圈": "/image/北京美食图片/7_焦圈.png",
  "煎饼果子": "/image/天津美食图片/02_煎饼果子.jpg",
  "煲仔饭": "/image/广东美食图片/06_煲仔饭.jpg",
  "爆肚": "/image/北京美食图片/5_爆肚.png",
  "片儿川": "/image/浙江美食图片/10_片儿川.jpg",
  "牛干巴": "/image/云南美食图片/9_牛干巴.png",
  "牛肉面": "/image/台湾美食图片/06_牛肉面.jpg",
  "牦牛肉": "/image/西藏美食图片/03_牦牛肉.jpg",
  "牦牛酸奶": "/image/西藏美食图片/08_牦牛酸奶.jpg",
  "狗不理包子": "/image/天津美食图片/01_狗不理包子.jpg",
  "猪扒包": "/image/澳门美食图片/02_猪扒包.jpg",
  "猪肉炖粉条": "/image/黑龙江美食图片/08_猪肉炖粉条.jpg",
  "玉林牛巴": "/image/广西美食图片/10_玉林牛巴.jpg",
  "珍珠奶茶": "/image/台湾美食图片/02_珍珠奶茶.jpg",
  "瓦罐汤": "/image/江西美食图片/01_瓦罐汤.jpg",
  "甑糕": "/image/陕西美食图片/08_甑糕.jpg",
  "甘肃凉面": "/image/甘肃美食图片/08_甘肃凉面.jpg",
  "甘肃炒面片": "/image/甘肃美食图片/07_甘肃炒面片.jpg",
  "甘肃烩面": "/image/甘肃美食图片/09_甘肃烩面.jpg",
  "甘肃甜醅子": "/image/甘肃美食图片/10_甘肃甜醅子.jpg",
  "甘肃羊肉泡馍": "/image/甘肃美食图片/06_甘肃羊肉泡馍.jpg",
  "甘肃臊子面": "/image/甘肃美食图片/05_甘肃臊子面.jpg",
  "甘肃酿皮": "/image/甘肃美食图片/03_甘肃酿皮.jpg",
  "甜皮鸭": "/image/四川美食图片/08_甜皮鸭.jpg",
  "甜茶": "/image/西藏美食图片/06_甜茶.jpg",
  "生煎馒头": "/image/上海美食图片/2_生煎馒头.png",
  "白切鸡": "/image/广东美食图片/01_白切鸡.jpg",
  "盐酥鸡": "/image/台湾美食图片/08_盐酥鸡.jpg",
  "盘锦河蟹": "/image/辽宁美食图片/09_盘锦河蟹.jpg",
  "碗仔翅": "/image/香港美食图片/08_碗仔翅.jpg",
  "碗托": "/image/山西美食图片/06_碗托.jpg",
  "碱水粑": "/image/江西美食图片/07_碱水粑.jpg",
  "福州肉燕": "/image/福建美食图片/07_福州肉燕.jpg",
  "福州鱼丸": "/image/福建美食图片/02_福州鱼丸.jpg",
  "竹升面": "/image/澳门美食图片/03_竹升面.jpg",
  "米粉肉": "/image/江西美食图片/04_米粉肉.jpg",
  "粘豆包": "/image/黑龙江美食图片/07_粘豆包.jpg",
  "糊羹": "/image/江西美食图片/10_糊羹.jpg",
  "糌粑": "/image/西藏美食图片/01_糌粑.jpg",
  "糖水": "/image/广东美食图片/10_糖水.jpg",
  "糖油粑粑": "/image/湖南美食图片/09_糖油粑粑.jpg",
  "糖耳朵": "/image/北京美食图片/8_糖耳朵.png",
  "糟钵头": "/image/上海美食图片/5_糟钵头.png",
  "绍兴臭豆腐": "/image/浙江美食图片/07_绍兴臭豆腐.jpg",
  "缸炉烧饼": "/image/河北美食图片/07_缸炉烧饼.jpg",
  "罾蹦鲤鱼": "/image/天津美食图片/07_罾蹦鲤鱼.jpg",
  "羊杂碎": "/image/内蒙古美食图片/5_羊杂碎.png",
  "羊肉泡馍": "/image/陕西美食图片/01_羊肉泡馍.jpg",
  "羊肉粉": "/image/贵州美食图片/04_羊肉粉.jpg",
  "老北京炸酱面": "/image/北京美食图片/2_老北京炸酱面.png",
  "老爆三": "/image/天津美食图片/06_老爆三.jpg",
  "老爸茶": "/image/海南美食图片/05_老爸茶.jpg",
  "耳朵眼炸糕": "/image/天津美食图片/03_耳朵眼炸糕.jpg",
  "肉夹馍": "/image/陕西美食图片/02_肉夹馍.jpg",
  "肠旺面": "/image/贵州美食图片/03_肠旺面.jpg",
  "肠粉": "/image/广东美食图片/09_肠粉.jpg",
  "腊味合蒸": "/image/湖南美食图片/07_腊味合蒸.jpg",
  "腌笃鲜": "/image/上海美食图片/10_腌笃鲜.png",
  "艾窝窝": "/image/北京美食图片/6_艾窝窝.png",
  "芜湖虾籽面": "/image/安徽美食图片/04_芜湖虾籽面.jpg",
  "苏州糕点": "/image/江苏美食图片/04_苏州糕点.jpg",
  "荆州鱼糕": "/image/湖北美食图片/08_荆州鱼糕.jpg",
  "荔浦芋扣肉": "/image/广西美食图片/08_荔浦芋扣肉.jpg",
  "荞面饸饹": "/image/陕西美食图片/10_荞面饸饹.jpg",
  "莜面栲栳栳": "/image/山西美食图片/02_莜面栲栳栳.jpg",
  "莜面窝窝": "/image/河北美食图片/10_莜面窝窝.jpg",
  "菠萝油": "/image/香港美食图片/10_菠萝油.jpg",
  "葡国鸡": "/image/澳门美食图片/08_葡国鸡.jpg",
  "葡式蛋挞": "/image/澳门美食图片/01_葡式蛋挞.jpg",
  "葫芦头泡馍": "/image/陕西美食图片/06_葫芦头泡馍.jpg",
  "葱油拌面": "/image/上海美食图片/6_葱油拌面.jpg",
  "蒙古奶茶": "/image/内蒙古美食图片/3_蒙古奶茶.png",
  "蔚县豆腐干": "/image/河北美食图片/08_蔚县豆腐干.jpg",
  "藏面": "/image/西藏美食图片/07_藏面.jpg",
  "藏香猪": "/image/西藏美食图片/09_藏香猪.jpg",
  "藜蒿炒腊肉": "/image/江西美食图片/03_藜蒿炒腊肉.jpg",
  "虾饺": "/image/广东美食图片/04_虾饺.jpg",
  "蚌埠烧饼夹里脊": "/image/安徽美食图片/08_蚌埠烧饼夹里脊.jpg",
  "蚵仔煎": "/image/台湾美食图片/01_蚵仔煎.jpg",
  "蛋挞": "/image/香港美食图片/02_蛋挞.jpg",
  "褡裢火烧": "/image/北京美食图片/9_褡裢火烧.png",
  "襄阳牛肉面": "/image/湖北美食图片/05_襄阳牛肉面.jpg",
  "西湖醋鱼": "/image/浙江美食图片/01_西湖醋鱼.jpg",
  "豆汁儿": "/image/北京美食图片/3_豆汁儿.png",
  "豆腐酿": "/image/广西美食图片/06_豆腐酿.jpg",
  "豆花": "/image/重庆美食图片/07_豆花.jpg",
  "豆花鱼": "/image/贵州美食图片/07_豆花鱼.jpg",
  "贴饽饽熬小鱼": "/image/天津美食图片/08_贴饽饽熬小鱼.jpg",
  "贵州剔骨鸭": "/image/贵州美食图片/10_贵州剔骨鸭.jpg",
  "贵州烙锅": "/image/贵州美食图片/08_贵州烙锅.jpg",
  "贵州米豆腐": "/image/贵州美食图片/09_贵州米豆腐.jpg",
  "贾三灌汤包": "/image/陕西美食图片/07_贾三灌汤包.jpg",
  "赖汤圆": "/image/四川美食图片/09_赖汤圆.jpg",
  "车仔面": "/image/香港美食图片/07_车仔面.jpg",
  "辣子鸡": "/image/重庆美食图片/05_辣子鸡.jpg",
  "辣椒炒肉": "/image/湖南美食图片/05_辣椒炒肉.jpg",
  "过桥米线": "/image/云南美食图片/1_过桥米线.png",
  "逍遥镇胡辣汤": "/image/河南美食图片/02_逍遥镇胡辣汤.jpg",
  "道口烧鸡": "/image/河南美食图片/04_道口烧鸡.jpg",
  "邯郸永年酥鱼": "/image/河北美食图片/09_邯郸永年酥鱼.jpg",
  "郑州烤鸭": "/image/河南美食图片/07_郑州烤鸭.jpg",
  "鄱阳湖鱼头": "/image/江西美食图片/05_鄱阳湖鱼头.jpg",
  "酥油茶": "/image/西藏美食图片/02_酥油茶.jpg",
  "酱汤饭": "/image/吉林美食图片/10_酱汤饭.png",
  "酸汤鱼": "/image/贵州美食图片/01_酸汤鱼.jpg",
  "酸菜炒肉": "/image/江西美食图片/08_酸菜炒肉.jpg",
  "酸辣粉": "/image/重庆美食图片/03_酸辣粉.jpg",
  "重庆小面": "/image/重庆美食图片/02_重庆小面.jpg",
  "重庆火锅": "/image/重庆美食图片/01_重庆火锅.jpg",
  "野生菌火锅": "/image/云南美食图片/3_野生菌火锅.png",
  "金凤扒鸡": "/image/河北美食图片/03_金凤扒鸡.jpg",
  "金华火腿": "/image/浙江美食图片/05_金华火腿.jpg",
  "钟水饺": "/image/四川美食图片/07_钟水饺.jpg",
  "铁锅炖大鹅": "/image/黑龙江美食图片/06_铁锅炖大鹅.jpg",
  "锅包肉": "/image/黑龙江美食图片/09_锅包肉.jpg",
  "锅巴菜": "/image/天津美食图片/05_锅巴菜.jpg",
  "锅烙": "/image/黑龙江美食图片/04_锅烙.jpg",
  "锅盔": "/image/陕西美食图片/09_锅盔.jpg",
  "锦州烧烤": "/image/辽宁美食图片/07_锦州烧烤.jpg",
  "镇江锅盖面": "/image/江苏美食图片/09_镇江锅盖面.jpg",
  "长沙臭豆腐": "/image/湖南美食图片/01_长沙臭豆腐.jpg",
  "闻喜煮饼": "/image/山西美食图片/07_闻喜煮饼.jpg",
  "闽南烧肉粽": "/image/福建美食图片/08_闽南烧肉粽.jpg",
  "阜阳格拉条": "/image/安徽美食图片/06_阜阳格拉条.jpg",
  "阳朔啤酒鱼": "/image/广西美食图片/09_阳朔啤酒鱼.jpg",
  "阳澄湖大闸蟹": "/image/江苏美食图片/05_阳澄湖大闸蟹.jpg",
  "陵水酸粉": "/image/海南美食图片/06_陵水酸粉.jpg",
  "随州泡泡青": "/image/湖北美食图片/09_随州泡泡青.jpg",
  "青岛啤酒": "/image/山东美食图片/04_青岛啤酒.jpg",
  "青海土火锅": "/image/青海美食图片/05_青海土火锅.jpg",
  "青海尕面片": "/image/青海美食图片/04_青海尕面片.jpg",
  "青海焜锅": "/image/青海美食图片/07_青海焜锅.jpg",
  "青海甜醅": "/image/青海美食图片/06_青海甜醅.jpg",
  "青海糌粑": "/image/青海美食图片/10_青海糌粑.jpg",
  "青海酥油茶": "/image/青海美食图片/09_青海酥油茶.jpg",
  "青海酸奶": "/image/青海美食图片/02_青海酸奶.jpg",
  "青海酿皮": "/image/青海美食图片/03_青海酿皮.jpg",
  "青海青稞面": "/image/青海美食图片/08_青海青稞面.jpg",
  "青稞酒": "/image/西藏美食图片/05_青稞酒.jpg",
  "鞍山牛录馅饼": "/image/辽宁美食图片/08_鞍山牛录馅饼.jpg",
  "风干牛肉": "/image/内蒙古美食图片/7_风干牛肉.png",
  "风干牦牛肉": "/image/西藏美食图片/04_风干牦牛肉.jpg",
  "饵块": "/image/云南美食图片/6_饵块.png",
  "香河肉饼": "/image/河北美食图片/06_香河肉饼.jpg",
  "驴肉火烧": "/image/河北美食图片/01_驴肉火烧.jpg",
  "驴肉黄面": "/image/甘肃美食图片/04_驴肉黄面.jpg",
  "鱼蛋粉": "/image/香港美食图片/03_鱼蛋粉.jpg",
  "鲜花饼": "/image/云南美食图片/4_鲜花饼.png",
  "鸭血粉丝汤": "/image/江苏美食图片/06_鸭血粉丝汤.jpg",
  "麻婆豆腐": "/image/四川美食图片/02_麻婆豆腐.jpg",
  "黄山烧饼": "/image/安徽美食图片/03_黄山烧饼.jpg",
  "黄石港饼": "/image/湖北美食图片/07_黄石港饼.jpg",
  "龙井虾仁": "/image/浙江美食图片/02_龙井虾仁.jpg",
};

const provinces = provincesData.map(province => {
  const slogans: {[key: string]: string} = {
    beijing: "帝都风味，烤鸭飘香",
    tianjin: "津门故里，狗不理包子",
    shanghai: "魔都美食，小笼包香",
    chongqing: "山城火锅，麻辣鲜香",
    yunnan: "彩云之南，过桥米线",
    neimenggu: "草原风光，手扒羊肉",
    taiwan: "宝岛台湾，卤肉饭香",
    jilin: "白山黑水，延边冷面",
    sichuan: "天府之国，麻婆豆腐",
    ningxia: "塞上江南，手抓羊肉",
    shandong: "齐鲁大地，德州扒鸡",
    shanxi: "三晋大地，面食飘香",
    guangdong: "岭南风味，上白切鸡",
    guangxi: "八桂大地，螺蛳粉香",
    xinjiang: "西域风情，满满大盘鸡",
    jiangsu: "鱼米之乡，盐水鸭香",
    jiangxi: "赣鄱大地，江西瓦罐汤",
    hebei: "燕赵大地，驴肉火烧",
    henan: "中原大地，烩面走天下",
    zhejiang: "江南水乡，西湖醋鱼",
    hainan: "椰岛风情，文昌鸡鲜",
    hubei: "荆楚大地，大碗热干面",
    hunan: "潇湘大地，臭豆腐香",
    gansu: "陇原大地，兰州拉面",
    fujian: "八闽大地，佛跳墙来",
    xizang: "雪域高原，酥油茶香",
    guizhou: "黔贵大地，酸汤鸡有味",
    liaoning: "辽沈大地，大连海参",
    shaanxi: "三秦大地，肉夹馍香",
    qinghai: "大美青海，牦牛肉香",
    hongkong: "东方之珠，叉烧美食",
    macau: "赌城澳门，葡式蛋挞",
    heilongjiang: "北大荒，红肠香",
    anhui: "江淮大地，臭鳜鱼飘香"
  };
  
  return {
    ...province,
    image: provinceImages[province.id] || `https://neeko-copilot.bytedance.net/api/text2image?prompt=${encodeURIComponent(`中国${province.name}省特色美食，高清真实照片`)}&size=512x512`,
    slogan: slogans[province.id] || "特色美食，文化传承"
  };
});

const transformItem = (item: FoodItem, provinceId: string, type: string) => {
  const honors: string[] = [];
  
  // 根据实际情况添加真实荣誉
  if (provinceId === 'shanghai') {
    if (item.name === '南翔小笼包') {
      honors.push('1910年巴拿马万国博览会金奖');
      honors.push('2014年国家级非物质文化遗产');
    } else if (item.name === '生煎馒头') {
      honors.push('2024年上海市非物质文化遗产');
    } else if (item.name === '上海红烧肉') {
      honors.push('2018年全国十大经典名菜');
    } else if (item.name === '糟钵头') {
      honors.push('2014年上海市非物质文化遗产');
    } else if (item.name === '枫泾丁蹄') {
      honors.push('1915年巴拿马万国博览会金奖');
      honors.push('1988年商业部优质产品奖');
      honors.push('上海市非物质文化遗产');
    } else if (item.name === '八宝鸭') {
      honors.push('上海市非物质文化遗产');
    } else if (item.name === '崇明老白酒') {
      honors.push('2011年国家地理标志保护产品');
      honors.push('上海市非物质文化遗产');
    } else if (item.name === '顾绣') {
      honors.push('2006年上海市非物质文化遗产');
      honors.push('2016年国家地理标志保护');
    } else if (item.name === '海派绒绣') {
      honors.push('2021年国家级非物质文化遗产');
    } else if (item.name === '上海剪纸') {
      honors.push('2008年国家级非物质文化遗产');
    } else if (item.name === '石库门里弄建筑营造技艺') {
      honors.push('上海市非物质文化遗产');
    } else if (item.name === '龙凤旗袍手工制作技艺') {
      honors.push('2016年上海市非物质文化遗产');
    } else if (item.name === '本帮糟卤制作技艺') {
      honors.push('2014年国家级非物质文化遗产');
    } else if (item.name === '南翔小笼制作技艺') {
      honors.push('2014年国家级非物质文化遗产');
    } else if (item.name === '生煎馒头制作技艺') {
      honors.push('2024年上海市非物质文化遗产');
    } else if (item.name === '沈大成点心制作技艺') {
      honors.push('2024年上海市非物质文化遗产');
    } else if (item.name === '绿波廊点心制作技艺') {
      honors.push('2016年上海市非物质文化遗产');
    } else if (item.name === '城隍庙五香豆') {
      honors.push('2009年上海市非物质文化遗产');
    } else if (item.name === '高桥松饼') {
      honors.push('1983年商业部优质产品称号');
    } else if (item.name === '邵万生糟醉制品') {
      honors.push('中华老字号');
      honors.push('上海市非物质文化遗产');
    } else if (item.name === '沈大成糕团') {
      honors.push('2006年中华老字号');
      honors.push('2024年上海市非物质文化遗产');
    }
  } else if (provinceId === 'yunnan' && item.name === '过桥米线') {
    honors.push('2014年云南省非物质文化遗产');
  } else if (provinceId === 'beijing') {
    if (item.name === '北京烤鸭') {
      honors.push('国家级非物质文化遗产');
    } else if (item.name === '炸酱面') {
      honors.push('北京市非物质文化遗产');
    }
  } else if (provinceId === 'tianjin') {
    if (item.name === '天津麻花') {
      honors.push('中华老字号');
    } else if (item.name === '狗不理包子') {
      honors.push('中华老字号');
      honors.push('国家级非物质文化遗产');
    }
  } else if (provinceId === 'hebei') {
    if (item.name === '驴肉火烧') {
      honors.push('河北省非物质文化遗产');
    } else if (item.name === '正定马家鸡') {
      honors.push('中华老字号');
    }
  } else if (provinceId === 'shanxi') {
    if (item.name === '平遥牛肉') {
      honors.push('国家地理标志保护产品');
      honors.push('国家级非物质文化遗产');
    } else if (item.name === '沁州黄小米') {
      honors.push('国家地理标志保护产品');
    }
  } else if (provinceId === 'liaoning') {
    if (item.name === '大连海参') {
      honors.push('国家地理标志保护产品');
    }
  } else if (provinceId === 'jilin') {
    if (item.name === '长白山人参') {
      honors.push('国家地理标志保护产品');
    } else if (item.name === '延边辣白菜') {
      honors.push('国家级非物质文化遗产');
    }
  } else if (provinceId === 'heilongjiang') {
    if (item.name === '五常大米') {
      honors.push('国家地理标志保护产品');
    } else if (item.name === '哈尔滨红肠') {
      honors.push('中华老字号');
    }
  } else if (provinceId === 'jiangsu') {
    if (item.name === '南京盐水鸭') {
      honors.push('国家地理标志保护产品');
      honors.push('江苏省非物质文化遗产');
    } else if (item.name === '阳澄湖大闸蟹') {
      honors.push('国家地理标志保护产品');
    } else if (item.name === '扬州炒饭') {
      honors.push('江苏省非物质文化遗产');
    }
  } else if (provinceId === 'zhejiang') {
    if (item.name === '西湖龙井') {
      honors.push('国家地理标志保护产品');
      honors.push('国家级非物质文化遗产');
    } else if (item.name === '绍兴黄酒') {
      honors.push('国家地理标志保护产品');
      honors.push('国家级非物质文化遗产');
    } else if (item.name === '金华火腿') {
      honors.push('国家地理标志保护产品');
      honors.push('国家级非物质文化遗产');
    }
  } else if (provinceId === 'anhui') {
    if (item.name === '黄山毛峰') {
      honors.push('国家地理标志保护产品');
    } else if (item.name === '祁门红茶') {
      honors.push('国家地理标志保护产品');
    }
  } else if (provinceId === 'fujian') {
    if (item.name === '安溪铁观音') {
      honors.push('国家地理标志保护产品');
    } else if (item.name === '沙县小吃') {
      honors.push('国家级非物质文化遗产');
    }
  } else if (provinceId === 'jiangxi') {
    if (item.name === '赣南脐橙') {
      honors.push('国家地理标志保护产品');
    }
  } else if (provinceId === 'shandong') {
    if (item.name === '青岛啤酒') {
      honors.push('中华老字号');
      honors.push('国家地理标志保护产品');
    } else if (item.name === '章丘大葱') {
      honors.push('国家地理标志保护产品');
    } else if (item.name === '孔府菜') {
      honors.push('国家级非物质文化遗产');
    }
  } else if (provinceId === 'henan') {
    if (item.name === '开封灌汤包') {
      honors.push('河南省非物质文化遗产');
    } else if (item.name === '新郑大枣') {
      honors.push('国家地理标志保护产品');
    }
  } else if (provinceId === 'hubei') {
    if (item.name === '武昌鱼') {
      honors.push('2013年湖北省非物质文化遗产');
      honors.push('国家地理标志保护产品');
    } else if (item.name === '武汉热干面') {
      honors.push('湖北省非物质文化遗产');
    } else if (item.name === '房县黑木耳') {
      honors.push('2009年国家地理标志保护产品');
      honors.push('2020年中欧地理标志保护与合作协定首批互认互保名录');
    } else if (item.name === '房县香菇') {
      honors.push('2009年国家地理标志保护产品');
      honors.push('2020年中欧地理标志保护与合作协定首批互认互保名录');
    } else if (item.name === '房县黄酒') {
      honors.push('2014年国家地理标志保护产品');
    }
  } else if (provinceId === 'hunan') {
    if (item.name === '长沙臭豆腐') {
      honors.push('湖南省非物质文化遗产');
    } else if (item.name === '剁椒鱼头') {
      honors.push('湖南省非物质文化遗产');
    } else if (item.name === '君山银针茶') {
      honors.push('国家地理标志保护产品');
    }
  } else if (provinceId === 'guangdong') {
    if (item.name === '白切鸡') {
      honors.push('广东省非物质文化遗产');
    } else if (item.name === '广式早茶') {
      honors.push('广东省非物质文化遗产');
    }
  } else if (provinceId === 'guangxi') {
    if (item.name === '柳州螺蛳粉') {
      honors.push('2021年国家级非物质文化遗产');
    } else if (item.name === '梧州六堡茶') {
      honors.push('2014年国家级非物质文化遗产');
      honors.push('2022年联合国教科文组织人类非物质文化遗产代表作名录');
    }
  }
  
  return {
    id: `${provinceId}-${type}-${item.name}`,
    name: item.name,
    description: item.description,
    origin: item.origin,
    history: item.history,
    culture: item.culture,
    image: foodImages[item.name] || item.image || '',
    videoUrl: item.videoUrl,
    provinceId: provinceId,
    type: type,
    category: provinces.find(p => p.id === provinceId)?.name || provinceId,
    honors: honors
  };
};

const foodItems = foodData.flatMap((province: ProvinceFood) =>
  province.foodList.map(item => transformItem(item, province.provinceId, 'food'))
);

const specialtyItems = specialtyData.flatMap((province: ProvinceSpecialty) =>
  province.specialtyList.map(item => transformItem(item, province.provinceId, 'specialty'))
);

const heritageItems = heritageData.flatMap((province: ProvinceHeritage) =>
  province.heritageList.map(item => transformItem(item, province.provinceId, 'heritage'))
);

const allItems = [...foodItems, ...specialtyItems, ...heritageItems];

export const getProvinceById = (id: string) => {
  return provinces.find(province => province.id === id);
};

export const getProvinceItems = (provinceId: string) => {
  return allItems.filter(item => item.provinceId === provinceId);
};

export const getItemById = (id: string) => {
  return allItems.find(item => item.id === id);
};

export const getFoodItems = () => foodItems;
export const getSpecialtyItems = () => specialtyItems;
export const getHeritageItems = () => heritageItems;

export const getFoodByProvince = (provinceId: string) => {
  const province = foodData.find((p: ProvinceFood) => p.provinceId === provinceId);
  return province ? province.foodList.map(item => transformItem(item, provinceId, 'food')) : [];
};

export const getSpecialtyByProvince = (provinceId: string) => {
  const province = specialtyData.find((p: ProvinceSpecialty) => p.provinceId === provinceId);
  return province ? province.specialtyList.map(item => transformItem(item, provinceId, 'specialty')) : [];
};

export const getHeritageByProvince = (provinceId: string) => {
  const province = heritageData.find((p: ProvinceHeritage) => p.provinceId === provinceId);
  return province ? province.heritageList.map(item => transformItem(item, provinceId, 'heritage')) : [];
};

export { allItems as items, provinces };
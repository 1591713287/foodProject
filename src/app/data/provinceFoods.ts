export interface ProvinceFood {
  id: string;
  provinceName: string;
  provinceShortName: string;
  foodName: string;
  image: string;
  backgroundImage?: string;
  videoUrl: string;
  description: string;
  origin: string;
  history: string;
  culture: string;
}

export const provinceFoods: ProvinceFood[] = [
  {
    id: 'beijing-kaoya',
    provinceName: '北京市',
    provinceShortName: '北京',
    foodName: '北京烤鸭',
    image: 'https://img.freepik.com/free-photo/chinese-food-peking-duck_1150-45283.jpg',
    backgroundImage: 'https://img.freepik.com/free-photo/chinese-food-peking-duck_1150-45283.jpg',
    videoUrl: 'https://tv.cctv.cn/v/v1/VIDE1JLybumdI2nKaTewoXkY160215.html',
    description: '北京烤鸭是享誉世界的京菜代表，以肉质细嫩丰腴的北京填鸭为原料，经制坯、晾坯等工序后用果木炭火挂炉烤制，成品色泽枣红油亮，皮脆肉嫩、肥而不腻，搭配薄饼、葱丝、黄瓜和甜面酱卷食，风味独特，是中餐中极具代表性的佳肴。',
    origin: '其雏形可追溯至南北朝时期的"炙鸭"，元代已进入宫廷御膳，明代迁都后，南京烤鸭技艺传入北京并完成本土化改良，清代成为宫廷名菜并逐步走向民间，形成了兼具宫廷风味与市井特色的独特品类。',
    history: '1864年全聚德创立，定型挂炉烤鸭技法；民国时期成为国宴级菜品，深受皇亲国戚与各界人士喜爱；当代形成挂炉、焖炉两大流派，实现连锁化经营，不仅风靡全国，更走向国际市场。',
    culture: '作为北京乃至中国的饮食文化符号，2008年入选第二批国家级非物质文化遗产名录，多次作为国宴主菜接待中外宾客，成为中外文化交流的重要载体，承载着中国传统饮食的匠心与底蕴。'
  },
  {
    id: 'tianjin-mahua',
    provinceName: '天津市',
    provinceShortName: '天津',
    foodName: '十八街麻花',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/24369/20240815160726-1337179126.jpg',
    videoUrl: 'http://big5.cctv.com/gate/big5/news.cctv.com/2020/11/15/VIDEkPCaHGmnKv8uatJJ7bXQ201115.shtml',
    description: '十八街麻花是天津"三绝"之一，采用多股螺旋造型，以优质面粉为原料，搭配芝麻、冰糖、核桃仁等辅料，经传统工艺炸制而成，口感酥脆香甜、久放不绵，兼具颜值与风味，是天津最具代表性的传统糕点。',
    origin: '1927年，出身面点世家的刘老八在天津海河西侧东楼村十八街开设小铺，在传统麻花基础上改良配方与工艺，创制出独具特色的麻花，因地处十八街，被民众称为"十八街麻花"，逐渐声名远播。',
    history: '民国时期，十八街麻花凭借独特口感在天津口碑走红，成为市井百姓喜爱的小吃；建国后实现规模化生产，保留传统工艺的同时融入现代科技；现代开发出多口味与精美礼品包装，成为天津标志性伴手礼。',
    culture: '其制作技艺入选国家级非物质文化遗产名录，代表着天津市井饮食文化的精髓，是天津的城市名片之一，不仅带动了传统糕点产业的发展，更成为外地游客了解天津文化的重要窗口。'
  },
  {
    id: 'shanghai-xiaolongbao',
    provinceName: '上海市',
    provinceShortName: '上海',
    foodName: '南翔小笼包',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43622/20250320142644-1369947134.jpg',
    videoUrl: 'http://big5.cctv.com/gate/big5/sh.cctv.com/2022/11/17/ARTISs109eT5CdticEHcqlY7221117.shtml',
    description: '南翔小笼包是江南精致点心的代表，以上等精白面粉为皮，选用定点直供的猪前腿肉为馅，加入肉皮冻调制而成，皮薄如纸、褶纹整齐，馅鲜汁多，讲究"先喝汤再吃包"，口感鲜嫩清爽，尽显江南饮食的细腻。',
    origin: '清同治十年（1871年），南翔镇日华轩点心店主黄明贤对当地流行的大肉馒头进行"重馅薄皮，以大改小"的改良，创制出南翔小笼包的最初形态，起初作为茶点供应，后逐步定型并声名远播。',
    history: '清末，南翔小笼包传入上海城区，成为茶楼招牌点心；民国时期，其制作技艺不断完善，形成标准化流程；当代被列入非物质文化遗产，实现连锁化经营，不仅风靡全国，更走向海外市场。',
    culture: '体现了江南饮食精致细腻的特点，是海派文化与上海旅游的重要符号，承载着江南地区的饮食智慧与民俗风情，成为外地游客到访上海必尝的美食，推动了江南点心文化的传播。'
  },
  {
    id: 'chongqing-hotpot',
    provinceName: '重庆市',
    provinceShortName: '重庆',
    foodName: '重庆火锅',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36016/20240805193244-1312379611.jpg',
    videoUrl: 'https://www.bilibili.com/video/BV1CXQuBbECZ/',
    description: '重庆火锅是巴渝文化的标志性美食，以牛油、辣椒、花椒为核心熬制麻辣锅底，毛肚、鸭肠、黄喉等为经典食材，煮制后鲜香麻辣、酣畅淋漓，兼具麻、辣、鲜、香等多重风味，是重庆人生活中不可或缺的美食。',
    origin: '起源于明末清初的重庆朝天门码头，当时船工纤夫为抵御江边寒冷、果腹充饥，将牛杂与麻辣调料一同煮制，做法简单、风味浓郁，逐渐形成了重庆火锅的雏形，是底层劳动者智慧的结晶。',
    history: '抗战时期，重庆作为陪都，火锅迅速普及，成为各界人士喜爱的美食；改革开放后，重庆火锅走出重庆，在全国各大城市开设门店；现代形成完整的产业链，从锅底研发到食材供应日趋完善，风靡全球。',
    culture: '体现了重庆人豪爽、热情的性格，是重庆的第一美食名片与重要文旅IP，带动了重庆餐饮业、食材加工业的发展，成为巴渝文化的重要载体，让世界各地食客感受到中国麻辣饮食的独特魅力。'
  },
  {
    id: 'hebei-lurou',
    provinceName: '河北省',
    provinceShortName: '河北',
    foodName: '驴肉火烧（保定）',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/28493/20240523173233-1421929174.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '保定驴肉火烧是华北地区的经典小吃，选用优质面粉制成圆形火烧，经烙制后外酥内软，夹入经长时间卤制的软烂驴肉，咸香入味、肥而不腻，咬一口外脆里嫩，兼具主食的饱腹感与肉类的鲜香，是保定人日常饮食的重要选择。',
    origin: '其历史可追溯至宋代，当时已有驴肉食用的记载，明代时制作工艺逐渐成型，将卤驴肉与火烧结合的吃法开始流行，清代随着保定府的繁荣，驴肉火烧声名远播，成为当地极具代表性的小吃。',
    history: '民国时期，驴肉火烧在保定街头普及，出现了众多老字号店铺；当代实现连锁化发展，形成了保定、河间两大流派，保定驴肉火烧以圆形火烧为特色，口感更显酥脆，深受全国食客喜爱。',
    culture: '"天上龙肉，地下驴肉"的俗语深入人心，驴肉火烧成为冀中饮食文化的代表，承载着保定的市井烟火气，不仅是当地的美食符号，更成为外地游客了解河北饮食文化的重要载体。'
  },
  {
    id: 'shanxi1-pinyao',
    provinceName: '山西省',
    provinceShortName: '山西',
    foodName: '平遥牛肉',
    image: 'https://pic.baike.soso.com/ugc/baikepic/17637/20231108103423-1741347499.jpg',
    videoUrl: 'http://tv.cctv.cn/v/v2/VIDE5NpQKT27WanU69DbqlFi191227.html',
    description: '平遥牛肉是中国四大名牛肉之一，产自山西平遥，选用优质黄牛为原料，经选料、腌制、炖煮等多道传统工序制作而成，成品色泽红润、肉质酥软、瘦而不柴，咸香入味，可即食可配菜，兼具美味与营养。',
    origin: '汉代时，平遥地区就已有牛肉加工技艺，唐代时成为宫廷贡品，深受皇室喜爱；清代道光年间，平遥牛肉的制作技艺日趋成熟，形成了完整的工艺流程，出现了众多老字号店铺，成为当地的特色特产。',
    history: '晋商崛起时期，平遥牛肉作为晋商往来的特色礼品，远销北方各地；现代获得地理标志产品认证，被列入国家级非物质文化遗产名录，实现规模化、标准化生产，享誉全国。',
    culture: '作为晋商文化的重要载体，平遥牛肉是平遥古城的美食名片，不仅带动了当地畜牧业和食品加工业的发展，更成为山西饮食文化的代表，承载着山西人民的饮食智慧与民俗风情。'
  },
  {
    id: 'liaoning-haisen',
    provinceName: '辽宁省',
    provinceShortName: '辽宁',
    foodName: '大连海参',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/37362/20240819103719-1629367414.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '大连海参是辽宁大连的特色海珍品，产自黄渤海海域，因海域环境优越，海参肉质肥厚、营养丰富，富含蛋白质、氨基酸等多种营养成分，是传统的滋补佳品，可采用泡发后清蒸、红烧等多种方式烹饪，口感Q弹劲道。',
    origin: '《神农本草经》中就有大连海参的记载，将其列为滋补佳品；清代时，大连海参被列为宫廷贡品，深受皇室青睐，当时主要以野生捕捞为主，是达官贵人餐桌上的珍贵食材。',
    history: '早期大连海参以野生捕捞为主，产量有限；随着养殖技术的发展，逐渐从野生捕捞转向现代化、规模化养殖；当代形成了从养殖、加工到销售的全产业链品牌，成为大连高端特产的代表。',
    culture: '作为东北沿海滋补文化的代表，大连海参是大连的城市名片之一，带动了当地水产养殖业和食品加工业的发展，不仅是当地人滋补养生的首选，更成为外地游客馈赠亲友的高端礼品。'
  },
  {
    id: 'jilin-lengmian',
    provinceName: '吉林省',
    provinceShortName: '吉林',
    foodName: '延边冷面',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/34298/20240703101721-1431621987.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '延边冷面是吉林省延边朝鲜族自治州的特色美食，以荞麦面或小麦面为原料制成，口感劲道爽滑，搭配冰爽酸甜的牛肉汤，辅以泡菜、牛肉片、苹果梨、鸡蛋等配料，酸甜开胃、解暑解腻，是朝鲜族饮食的经典代表。',
    origin: '其制作技艺起源于高丽朝时期，据《东国世食记》记载，冷面发源于19世纪中叶朝鲜的平壤和咸兴地区，19世纪末期随着朝鲜族人口迁入传入中国，逐渐与当地饮食融合，形成独具特色的延边冷面。',
    history: '建国后，延边冷面在东北各地逐渐普及，成为朝鲜族群众日常饮食的重要组成部分；随着延边旅游的发展，冷面被更多游客熟知；现代走向全国，成为深受北方民众喜爱的特色食物，还出现了多种创新口味。',
    culture: '作为多民族饮食融合的典范，延边冷面是朝鲜族文化的重要载体，延边朝鲜族冷面制作技艺被列入省级非物质文化遗产，不仅承载着朝鲜族的民俗风情，更成为延边多民族文化融合的象征。'
  },
  {
    id: 'heilongjiang-hongchang',
    provinceName: '黑龙江省',
    provinceShortName: '黑龙江',
    foodName: '哈尔滨红肠',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/34321/20240703152932-729741394.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '哈尔滨红肠是黑龙江的标志性肉制品，原名苏联立陶宛灌肠，因外表呈枣红色而得名，以猪肉、牛肉为原料，加入淀粉、香辛料等辅料，经腌制、灌制、烘烤、熏烤等多道工序制成，肉质紧实、咸香带烟熏味，可即食或配菜。',
    origin: '20世纪初中东铁路修建期间，由俄罗斯传入中国，1900年秋林洋行率先生产立陶宛风味香肠，1913年滨江物产英国进出口有限公司引进俄籍技师，生产出哈尔滨"第一根红肠"，逐渐形成本土特色。',
    history: '民国时期，哈尔滨红肠在当地普及，成为民众喜爱的小吃；建国后，企业经过多次改革，引进现代化生产设备，实现规模化生产；2007年其制作技艺被评为省级非物质文化遗产，如今形成多品牌百花齐放的格局。',
    culture: '作为哈尔滨多元文化的缩影，哈尔滨红肠与索菲亚教堂、中央大街齐名，是"东方小巴黎"饮食文化的代表，不仅带动了当地肉类加工业的发展，更成为哈尔滨的城市符号和游客必带伴手礼。'
  },
  {
    id: 'jiangsu-shiyan',
    provinceName: '江苏省',
    provinceShortName: '江苏',
    foodName: '南京盐水鸭',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43291/20250224103027-1741134721.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '南京盐水鸭是江苏南京的传统名菜，选用南京本地肥嫩鸭为原料，经腌制、卤制等多道工序制作而成，成品皮白肉嫩、清鲜咸香，肥而不腻，秋季桂花盛开时制作的盐水鸭又称桂花鸭，香气更浓，是南京人餐桌上的经典美食。',
    origin: '南北朝时期已有盐水鸭的记载，当时的"炙鸭"是其雏形；明代时，盐水鸭成为宫廷御食，制作技艺日趋成熟；清代时，盐水鸭从宫廷走向民间，形成了标准化的制作流程，成为南京市民的日常美食。',
    history: '历经千年传承，南京盐水鸭的制作技艺不断完善，民国时期出现了众多老字号店铺；现代实现工业化、规模化生产，保留了传统风味的同时，更注重品质与卫生，成为南京最具代表性的特产。',
    culture: '作为金陵文化的代表，"无鸭不成席"是南京饮食文化的真实写照，盐水鸭是南京的城市符号，不仅承载着南京的历史记忆，更成为外地游客到访南京必尝的美食，推动了南京饮食文化的传播。'
  },
  {
    id: 'zhejiang-xihu',
    provinceName: '浙江省',
    provinceShortName: '浙江',
    foodName: '西湖醋鱼',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43283/20250224104232-2107908173.jpg',
    videoUrl: 'http://jishi.cctv.com/2017/09/14/VIDEzXTvPSKbrBaF0aQSnHec170914.shtml',
    description: '西湖醋鱼是浙江杭州的经典杭帮菜，选用西湖草鱼为原料，经氽煮后捞出，浇上特制的糖醋芡汁，成品色泽红亮，鱼肉鲜嫩细腻，酸甜适口，略带蟹香，口感层次丰富，既保留了鱼肉的本味，又融入了糖醋的鲜香。',
    origin: '始于南宋时期，与"叔嫂传珍"的民间传说相关，相传南宋时一对兄妹为躲避战乱，嫂子用醋腌制鱼肉保鲜，意外形成了独特风味；后来这道菜逐渐流传开来，成为杭帮菜的经典代表。',
    history: '明清时期，西湖醋鱼的制作技艺不断完善，成为杭州茶楼、菜馆的招牌菜品；民国时期，楼外楼等老字号对其进行改良，定型了如今的做法；当代成为杭州宴请宾客的代表菜，享誉全国。',
    culture: '作为西湖文旅的重要名片，西湖醋鱼体现了杭帮菜清鲜淡雅的风格，承载着杭州的历史文化与民俗风情，不仅是一道美食，更成为杭州城市文化的象征，吸引着众多游客慕名品尝。'
  },
  {
    id: 'anhui-chouduoyu',
    provinceName: '安徽省',
    provinceShortName: '安徽',
    foodName: '黄山臭鳜鱼',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36021/20240805200447-1869196987.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '黄山臭鳜鱼是徽菜的头牌菜品，俗称"腌鲜鱼"，选用一斤五两左右的活鳜鱼，经传统木桶腌制发酵后，搭配五花肉粒、黄山笋丁等辅料烹饪而成，成品闻臭吃香，肉质紧实呈蒜瓣状，咸鲜微辣，醇香入味。',
    origin: '起源于200多年前的徽州山区，当时沿江鱼贩将长江鳜鱼用木桶装运至徽州，为防止变质，码一层鱼洒一层淡盐水，抵达后鱼身散发异味，烹饪后却鲜香可口，逐渐形成这一特色菜品。',
    history: '最初是徽州民间的家常菜，随着徽商的崛起，臭鳜鱼逐渐走向各地；现代被列入省级非物质文化遗产，经徽菜大师改良，研发出多种创新做法，2005年被中国烹饪协会命名为中国八大名菜之一。',
    culture: '体现了徽商节俭智慧与饮食创新的结合，是徽州文化的重要符号，如今黄山市臭鳜鱼年产值达40亿元，带动就业5万余人，不仅是徽菜走向全国的招牌，更成为徽州文旅的重要名片。'
  },
  {
    id: 'fujian-fotiaoqiang',
    provinceName: '福建省',
    provinceShortName: '福建',
    foodName: '佛跳墙',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36020/20240805195842-1264634776.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '佛跳墙是福建福州的经典闽菜，被誉为闽菜巅峰，选用鲍鱼、海参、干贝、鱼翅等数十种山珍海味为原料，经分别处理后入坛，加入高汤慢煨数小时，成品荤香浓郁、软糯鲜香，营养丰富，是高端宴席的必备菜品。',
    origin: '清道光年间，福州聚春园菜馆的厨师郑春发，在民间"福寿全"菜品的基础上，改良配方与烹饪工艺，加入多种山珍海味，创制出佛跳墙，因香气浓郁，传说"佛闻弃禅跳墙来"，故而得名。',
    history: '民国时期，佛跳墙成为福州高档宴席的核心菜品，深受达官贵人喜爱；建国后，佛跳墙多次作为国宴菜品接待中外宾客；当代，其制作技艺不断完善，实现了传统工艺与现代科技的结合，享誉全球。',
    culture: '作为福建饮食的最高名片，佛跳墙体现了中式烹饪繁复精湛的技艺，承载着福建沿海地区的饮食文化与民俗风情，不仅带动了当地高端食材加工业的发展，更成为中国美食的重要代表。'
  },
  {
    id: 'jiangxi-waguantang',
    provinceName: '江西省',
    provinceShortName: '江西',
    foodName: '南昌瓦罐汤',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/41669/20241211154436-2093639279.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '南昌瓦罐汤是江西南昌的传统特色美食，选用陶土瓦罐为容器，加入肉类、菌菇、杂粮等食材，倒入矿泉水，密封后用炭火慢煨7小时以上，汤浓味醇、食材酥烂，搭配南昌米粉食用，是南昌人早餐的经典搭配。',
    origin: '起源于北宋嘉祐年间，相传当时一位洪州才子与友人郊游，仆人不慎将剩余鸡鱼肉与佐料装入瓦罐埋入灰炉，次日启罐香气四溢，这一偶然发现成为瓦罐煨汤的雏形，后经民间传承逐渐完善。',
    history: '清末明初，瓦罐汤从民间走进饭庄，成为赣菜标志性品类；建国后，瓦罐汤在南昌街头巷尾普及，成为市民日常早餐；现代实现标准化连锁经营，还走进南极科考队餐桌，漂洋过海走向世界。',
    culture: '2017年其制作技艺入选省级非物质文化遗产，承载着赣鄱大地的饮食文化与市井温情，是南昌人刻在骨子里的乡愁符号，带动了当地餐饮行业的发展，成为江西美食的重要代表。'
  },
  {
    id: 'shandong-paji',
    provinceName: '山东省',
    provinceShortName: '山东',
    foodName: '德州扒鸡',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43466/20250307104639-1479626682.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '德州扒鸡是山东德州的传统名菜，中国四大名鸡之一，选用优质嫩鸡为原料，经宰杀、腌制、油炸、卤制等多道工序制作而成，成品色泽金黄、油亮诱人，肉质脱骨软烂、五香浓郁，咸香适口，可即食可凉拌。',
    origin: '明代时，德州作为运河码头，已有扒鸡制作的记载，当时的扒鸡是码头商贩的简易小吃；清代康熙年间，扒鸡的制作技艺日趋成熟，加入多种香辛料卤制，口感更加丰富，逐渐成为当地的特色名菜。',
    history: '民国时期，德州扒鸡定型品牌，出现了众多老字号店铺，通过运河水运远销各地；现代被列入国家级非物质文化遗产名录，获得地理标志产品认证，实现规模化生产，成为山东的标志性卤味特产。',
    culture: '作为运河文化的产物，德州扒鸡承载着山东的饮食智慧与民俗风情，是山东的城市名片之一，带动了当地家禽养殖业和食品加工业的发展，成为外地游客馈赠亲友的热门选择。'
  },
  {
    id: 'henan-hulatang',
    provinceName: '河南省',
    provinceShortName: '河南',
    foodName: '逍遥镇胡辣汤',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36022/20240805201319-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '逍遥镇胡辣汤是河南周口的传统小吃，被誉为"中国十大早餐"之一，选用小麦面粉制成的面筋，配以牛肉片、花生、豆皮、木耳等食材，加入胡椒、辣椒等调料熬制而成，成品汤汁浓稠、香辣开胃，是河南人早餐的经典选择。',
    origin: '起源于河南省周口市西华县逍遥镇，相传始创于宋代，当时由回族同胞结合中亚香料与中原饮食习惯创制而成；明代时配方日趋完善，成为当地回汉群众共同喜爱的早餐美食。',
    history: '民国时期，逍遥镇胡辣汤在河南各地普及，成为街头巷尾的早餐摊点；改革开放后，实现连锁化经营，品牌化发展；现代成为河南饮食文化的代表，吸引众多食客慕名品尝。',
    culture: '作为中原饮食文化的代表，胡辣汤承载着河南人的乡愁与记忆，是"河南人早餐的标配"，不仅带动了当地餐饮业的发展，更成为外地游客了解河南饮食文化的重要窗口。'
  },
  {
    id: 'hubei-xiaogan',
    provinceName: '湖北省',
    provinceShortName: '湖北',
    foodName: '孝感麻糖',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36015/20240805192331-1312379611.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '孝感麻糖是湖北孝感的传统名点，以精制糯米、优质芝麻和绵白糖为主要原料，配以桂花、金钱橘饼等，经过12道传统工艺精制而成，口感酥脆香甜、甜而不腻，是湖北最具代表性的传统糕点。',
    origin: '起源于明朝末年，距今已有400多年历史。相传为孝子董永行孝感动天地而得名，是中华孝文化的重要象征。',
    history: '清朝乾隆年间被列为贡品，民国时期远销东南亚。新中国成立后，通过现代化改造，产量大增，成为湖北特色名片。',
    culture: '孝感麻糖承载着中华孝文化，每逢春节、中秋等传统节日，当地人必以麻糖馈赠亲友。其制作技艺被列入非物质文化遗产保护名录。'
  },
  {
    id: 'hunan-chaozhou',
    provinceName: '湖南省',
    provinceShortName: '湖南',
    foodName: '潮汕牛肉丸',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36016/20240805193244-1312379611.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '潮汕牛肉丸是广东潮汕地区的传统美食，选用新鲜牛肉，经传统手打工艺制成，口感Q弹，汤汁鲜美，是潮汕地区最具代表性的特色小吃。',
    origin: '起源于清代潮汕地区，客家人将手打肉丸技艺传入，结合潮汕饮食精细化特点，形成独特风味。',
    history: '近年来，潮汕牛肉火锅风靡全国，牛肉丸产业化发展迅速，冷链配送技术突破，年产值达百亿级。',
    culture: '潮汕人逢年过节必备牛肉丸，寓意"团圆圆满"。手打牛肉丸技艺传承至今，成为潮汕工匠精神的象征。'
  },
  {
    id: 'guangdong-jiNing',
    provinceName: '广东省',
    provinceShortName: '广东',
    foodName: '白切鸡',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36017/20240805194012-1312379611.jpg',
    videoUrl: 'https://jishi.cctv.com/2017/09/14/VIDEjwEJqYDfKwyAMtLcVSe4170914.shtml',
    description: '白切鸡是广东广州的传统名菜，选用优质土鸡为原料，以白切方式烹制而成，成品皮爽肉滑、清鲜寡油，保留了鸡肉的原汁原味，搭配姜葱酱料食用，是粤菜经典代表。',
    origin: '起源于清代广州地区，因其制作简单却对食材要求极高而闻名，体现了粤菜"清鲜嫩滑"的核心精髓。',
    history: '民国时期成为广州酒楼的招牌菜，建国后普及至广东各地，成为宴席必备菜品。',
    culture: '作为粤菜的代表作之一，白切鸡体现了广东人对食材本味的追求，是"食在广州"理念的最佳诠释。'
  },
  {
    id: 'guangxi-guilin',
    provinceName: '广西壮族自治区',
    provinceShortName: '广西',
    foodName: '桂林米粉',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36018/20240805194509-1312379611.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '桂林米粉是广西桂林的传统小吃，以当地特制的干米粉为原料，配以卤肉、卤蛋、酸豆角、葱花等辅料，淋上特制卤水而成，口感爽滑、卤香浓郁，是桂林最具代表性的特色小吃。',
    origin: '相传起源于秦代，当时为解决士兵粮草问题而发明；经过数千年发展，成为桂林人日常生活中不可或缺的美食。',
    history: '明代已成为桂林城区的主要小吃，民国时期出现众多老字号店铺。',
    culture: '桂林米粉承载着桂林的历史记忆，是桂林城市文化的重要符号，吸引无数游客慕名品尝。'
  },
  {
    id: 'hainan-wenchang',
    provinceName: '海南省',
    provinceShortName: '海南',
    foodName: '文昌鸡',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43289/20250224110304-1377626878.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '文昌鸡是海南四大名菜之首，产自海南文昌，选用当地优质土鸡，采用散养方式培育，肉质细嫩、皮薄骨酥，脂肪含量低，以白切做法为主，搭配特制蘸料，保留了鸡肉的原汁原味，清鲜可口。',
    origin: '清代时期，文昌地区就已有文昌鸡的养殖记载；民国时期，文昌鸡在全国名鸡评比中获得榜首，声名远播。',
    history: '建国后，文昌鸡的养殖逐渐规模化；随着海南旅游的发展，文昌鸡成为游客必尝的美食；现代实现标准化养殖与加工，走向全国市场。',
    culture: '体现了海南清淡、鲜美的饮食风格，是海南海岛文旅的重要美食名片，承载着海南的民俗文化与地域特色。'
  },
  {
    id: 'sichuan-huoguo',
    provinceName: '四川省',
    provinceShortName: '四川',
    foodName: '四川火锅',
    image: 'https://img.freepik.com/free-photo/sichuan-hot-pot_1150-45284.jpg',
    backgroundImage: 'https://img.freepik.com/free-photo/sichuan-hot-pot_1150-45284.jpg',
    videoUrl: 'https://tv.cctv.cn/2023/08/14/VIDEnKSRngiXgPcXWIq9auTn230814.shtml',
    description: '四川火锅以麻辣鲜香著称，采用牛油、辣椒、花椒等数十种香料熬制锅底，涮煮百味，是川渝饮食文化的代表。',
    origin: '起源于明末清初的重庆嘉陵江畔，当时码头工人将牛内脏洗净后放入锅中煮食，逐渐发展成为今天的火锅。',
    history: '改革开放后，四川火锅走向全国乃至世界，海底捞、小龙坎等品牌连锁化经营，年产值超千亿，成为餐饮业支柱。',
    culture: '四川火锅体现了四川人热情豪爽的性格，是四川饮食文化的重要符号，已成为中国美食的一张名片。'
  },
  {
    id: 'guizhou-suantangyu',
    provinceName: '贵州省',
    provinceShortName: '贵州',
    foodName: '酸汤鱼',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43287/20250224105516-1622493776.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '酸汤鱼是贵州黔东南地区的经典苗族美食，选用稻田鱼为原料，搭配当地特制的红酸汤，汤色鲜红、酸辣开胃，鱼肉细嫩入味，是苗族宴席的必备菜品。',
    origin: '起源于苗族古法发酵存食的智慧，古代苗族先民创造出"以酸代盐"的饮食方式，逐渐形成酸汤鱼这一特色菜品。',
    history: '最初是苗族民间的家常菜；随着贵州旅游的发展，酸汤鱼被更多游客熟知；现代其制作技艺被列入非物质文化遗产。',
    culture: '作为苗族文化的核心载体之一，酸汤鱼承载着苗族先民的生活智慧与民俗风情，成为贵州的文化符号。'
  },
  {
    id: 'yunnan-guoqiaomixian',
    provinceName: '云南省',
    provinceShortName: '云南',
    foodName: '过桥米线',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43286/20250224105143-1932367893.jpg',
    videoUrl: 'https://tv.cctv.cn/2020/09/01/VIDEbvYSmcsbxva0IDVgUE5L200901.shtml',
    description: '过桥米线是云南蒙自的传统特色美食，以滚烫的鸡汤为基底，搭配新鲜米线、鸡肉片、鱼片、蔬菜等食材，用鸡汤将食材烫熟后食用，米线滑嫩爽口，鸡汤鲜香浓郁。',
    origin: '清代时期，蒙自南湖有一位书生在湖心岛苦读，妻子每日过桥送饭，将鸡汤与米线分开携带，这一做法逐渐流传开来。',
    history: '最初是蒙自民间的特色小吃；后来逐渐从滇南走向云南全省；现代实现连锁化经营，风靡全国。',
    culture: '体现了云南多民族融合的饮食文化，是云南旅游的标志性美食，成为云南文化传播的重要载体。'
  },
  {
    id: 'shaanxi-jiaomor',
    provinceName: '陕西省',
    provinceShortName: '陕西',
    foodName: '腊汁肉夹馍',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43285/20250224104821-1622493776.jpg',
    videoUrl: 'http://tv.cctv.cn/v/v1/VIDEejjaUmtkbkA8UfA254D1220517.html',
    description: '腊汁肉夹馍是陕西西安的传统小吃，被誉为"中式汉堡"，选用优质面粉制成白吉馍，夹入经长时间卤制的腊汁肉，肉质软烂、肥而不腻，是西安人早餐的标配。',
    origin: '其历史可追溯至战国时期；汉唐时期，腊汁肉的制作技艺逐渐成型；唐代长安市井中，腊汁肉夹馍已成为常见小吃。',
    history: '民国时期，腊汁肉夹馍在西安街头普及；建国后被列入省级非物质文化遗产；现代实现连锁化经营。',
    culture: '作为关中饮食文化的代表，腊汁肉夹馍承载着西安的历史记忆与市井烟火气，是西安的城市名片之一。'
  },
  {
    id: 'gansu-lanzhou',
    provinceName: '甘肃省',
    provinceShortName: '甘肃',
    foodName: '兰州牛肉面',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/43284/20250224104439-1479626682.jpg',
    videoUrl: 'https://tv.cctv.cn/v/v1/VIDElaa33Hj3sP45X997gkNK210916.html',
    description: '兰州牛肉面又称兰州拉面，是甘肃兰州的传统美食，讲究"一清（汤清）、二白（萝卜白）、三红（辣椒油红）、四绿（香菜/蒜苗绿）、五黄（面条黄亮）"，汤鲜味美、面筋道。',
    origin: '起源于清代嘉庆年间，由回族厨师马保子创制；民国时期正式确立兰州牛肉面的制作标准。',
    history: '80年代后开始走出甘肃；如今成为中国三大快餐之一，在海外多个国家开设门店。',
    culture: '是回族饮食文化与汉族饮食文化融合的产物，成为兰州的城市名片和文化符号。'
  },
  {
    id: 'qinghai-gamianpian',
    provinceName: '青海省',
    provinceShortName: '青海',
    foodName: '尕面片',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36023/20240805202224-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '尕面片是青海的传统面食，"尕"在青海方言中意为"小"，将面团揪成指甲盖大小的面片，煮熟后搭配羊肉汤或素菜汤，口感筋道、汤味浓郁。',
    origin: '起源于青海的游牧民族和农耕民族的饮食融合；青海地处高原，尕面片制作简单、热量高，适合高原人民的生活需求。',
    history: '建国后在青海各地普及；90年代后随着青海旅游的发展，被更多游客熟知。',
    culture: '体现了青海多民族饮食文化的融合，是汉族、藏族、回族等各族群众共同喜爱的美食。'
  },
  {
    id: 'xinjiang-baigena',
    provinceName: '新疆维吾尔自治区',
    provinceShortName: '新疆',
    foodName: '大盘鸡',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36024/20240805202508-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '大盘鸡是新疆的特色名菜，选用土鸡为主料，配以土豆、辣椒、皮带面等炖制而成，成品色泽红艳、鸡肉软烂、土豆绵软、汤汁浓郁，是新疆饮食文化的代表。',
    origin: '起源于1980年代的新疆公路沿线，最初是为长途货车司机提供的快捷实惠的菜肴。',
    history: '经过数十年发展，大盘鸡已成为新疆的一张美食名片，在全国各地开设众多餐厅。',
    culture: '大盘鸡体现了新疆多元饮食文化的融合，是新疆热情好客的象征。'
  },
  {
    id: 'xizang-zangba',
    provinceName: '西藏自治区',
    provinceShortName: '西藏',
    foodName: '酥油茶',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36025/20240805202845-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '酥油茶是西藏的传统饮品，以砖茶为主料，加入酥油和盐，经反复搅拌至水乳交融而成，色泽淡黄、口感咸香，是藏族人民日常生活中不可或缺的饮品。',
    origin: '起源于唐代，是藏族人民在高寒环境中创造的高热量饮品，既能补充营养又能抵御寒冷。',
    history: '千百年来，酥油茶一直是藏族人民待客礼仪中不可或缺的组成部分。',
    culture: '酥油茶体现了藏族人民的智慧和对生活的热爱，是藏族文化的重要象征。'
  },
  {
    id: 'neimenggu-milktea',
    provinceName: '内蒙古自治区',
    provinceShortName: '内蒙古',
    foodName: '手把肉',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36026/20240805203212-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '手把肉是内蒙古草原的传统美食，选用草原放养的羊为原料，经清炖而成，成品肉质鲜嫩、不膻不腻，原汁原味，保留了羊肉的最大营养价值。',
    origin: '起源于蒙古族传统饮食，是草原游牧民族千百年来传承下来的经典美食。',
    history: '自古以来就是蒙古族待客的最高礼遇，现已成为内蒙古的标志性美食。',
    culture: '手把肉体现了蒙古族热情豪放的性格，是草原文化的重要载体。'
  },
  {
    id: 'guangxi-zhuangyuan',
    provinceName: '广西壮族自治区',
    provinceShortName: '广西',
    foodName: '螺蛳粉',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36027/20240805203533-1207364267.jpg',
    videoUrl: 'https://livechina.cctv.cn/2024/01/24/VIDEe7DJPQtNkBLP1EvwzrWR240124.shtml?mediaId=19rABFZj0709',
    description: '螺蛳粉是广西柳州的传统小吃，以螺蛳熬制的汤底配以米粉、酸笋、花生、木耳等辅料，成品酸辣鲜香、米粉爽滑，是柳州最具代表性的特色小吃。',
    origin: '起源于1980年代的柳州夜市，最初是路边摊的小吃。',
    history: '经过数十年发展，螺蛳粉已成为网红美食，产业化发展迅速，袋装螺蛳粉远销海内外。',
    culture: '螺蛳粉体现了柳州人敢为人先的精神，成为广西美食走向世界的代表。'
  },
  {
    id: 'ningxia-gojiberry',
    provinceName: '宁夏回族自治区',
    provinceShortName: '宁夏',
    foodName: '宁夏枸杞',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36028/20240805203856-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '宁夏枸杞是宁夏回族自治区的特产，是中国国家地理标志产品，选用当地优质枸杞为原料，粒大饱满、色泽红润、品质上乘，被誉为"红宝"。',
    origin: '宁夏种植枸杞已有500多年历史，得益于当地独特的地理和气候条件。',
    history: '宁夏枸杞在明清时期就已成为贡品；现代成为当地农业支柱产业。',
    culture: '宁夏枸杞是宁夏的一张名片，体现了西北地区农耕文明的智慧。'
  },
  {
    id: 'taiwan-lufanm',
    provinceName: '台湾省',
    provinceShortName: '台湾',
    foodName: '卤肉饭',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36029/20240805204219-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '卤肉饭是台湾的经典小吃，选用五花肉切成小丁，经慢火卤制后浇在白米饭上，成品卤香浓郁、肉质软糯、肥而不腻，是台湾最具代表性的平民美食。',
    origin: '相传起源于台湾民间，是普通百姓将剩余猪肉变废为宝的智慧结晶。',
    history: '经过数十年发展，卤肉饭已成为台湾的一张美食名片，在全球各地都能看到台湾卤肉饭餐厅。',
    culture: '卤肉饭体现了台湾人的饮食智慧和对美食的热爱，是台湾饮食文化的重要代表。'
  },
  {
    id: 'xianggang-pineapple',
    provinceName: '香港特别行政区',
    provinceShortName: '香港',
    foodName: '菠萝油',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36030/20240805204542-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '菠萝油是香港的经典小吃，由菠萝面包夹上冰凉的牛油而成，成品外酥内软、黄油咸香，是香港茶餐厅文化的代表。',
    origin: '1950年代的香港，因菠萝面包外形像菠萝而得名，是香港中西饮食文化融合的产物。',
    history: '菠萝油是香港茶餐厅的标志性美食，承载着香港人的集体记忆。',
    culture: '菠萝油体现了香港独特的饮食文化，是香港人生活方式的重要象征。'
  },
  {
    id: 'aomen-eggtao',
    provinceName: '澳门特别行政区',
    provinceShortName: '澳门',
    foodName: '葡式蛋挞',
    image: 'https://pic.baike.soso.com/ugc/baikepic2/36031/20240805204905-1207364267.jpg',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: '葡式蛋挞是澳门著名的甜点，挞皮酥脆、蛋馅嫩滑，表面有焦糖色的斑点，口感香甜细腻，是中西饮食文化交融的经典代表。',
    origin: '源自葡萄牙贝伦蛋挞，经澳门本土化改良后形成独特风味。',
    history: '葡式蛋挞是澳门回归后最具代表性的美食之一，吸引无数游客品尝。',
    culture: '葡式蛋挞体现了澳门的多元文化特色，是澳门旅游的重要名片。'
  }
];
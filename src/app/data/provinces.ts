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
  "Biángbiáng面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_Bi%C3%A1ngbi%C3%A1ng%E9%9D%A2.jpg",
  "万州烤鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E4%B8%87%E5%B7%9E%E7%83%A4%E9%B1%BC.jpg",
  "上海红烧肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/3_%E4%B8%8A%E6%B5%B7%E7%BA%A2%E7%83%A7%E8%82%89.png",
  "东坡肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E4%B8%9C%E5%9D%A1%E8%82%89.jpg",
  "东安鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E4%B8%9C%E5%AE%89%E9%B8%A1.jpg",
  "丝娃娃": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E4%B8%9D%E5%A8%83%E5%A8%83.jpg",
  "丝袜奶茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E4%B8%9D%E8%A2%9C%E5%A5%B6%E8%8C%B6.jpg",
  "串串香": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E4%B8%B2%E4%B8%B2%E9%A6%99.jpg",
  "九转大肠": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E4%B9%9D%E8%BD%AC%E5%A4%A7%E8%82%A0.jpg",
  "乳扇": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/5_%E4%B9%B3%E6%89%87.png",
  "云吞面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E4%BA%91%E5%90%9E%E9%9D%A2.jpg",
  "五色糯米饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E4%BA%94%E8%89%B2%E7%B3%AF%E7%B1%B3%E9%A5%AD.jpg",
  "佛跳墙": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E4%BD%9B%E8%B7%B3%E5%A2%99.jpg",
  "傣味手抓饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/7_%E5%82%A3%E5%91%B3%E6%89%8B%E6%8A%93%E9%A5%AD.png",
  "八宝鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/9_%E5%85%AB%E5%AE%9D%E9%B8%AD.png",
  "兰州牛肉面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%85%B0%E5%B7%9E%E7%89%9B%BE%E8%89%E9%9D%A2.jpg",
  "凉皮": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%86%B7%E7%9A%AE.jpg",
  "凤梨酥": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E5%87%A4%E6%A2%A8%E9%85%A5.jpg",
  "刀削面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%88%80%E5%89%8A%E9%9D%A2.jpg",
  "剁椒鱼头": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E5%89%81%E6%A4%92%E9%B1%BC%E5%A4%B4.jpg",
  "剉冰": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E5%89%89%E5%86%B0.jpg",
  "北京烤鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/1_%E5%8C%97%E4%BA%AC%E7%83%A4%E9%B8%AD.png",
  "十八街麻花": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E5%8D%81%E5%85%AB%E8%A1%97%E9%BA%BB%E8%8A%B1.jpg",
  "南京盐水鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%8D%97%E4%BA%AC%E7%9B%90%E6%B0%B4%E9%B8%AD.jpg",
  "南宁老友粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%8D%97%E5%AE%81%E8%80%81%E5%8F%8B%E7%B2%89.jpg",
  "南昌拌粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E5%8D%97%E6%98%8C%E6%8B%8C%E7%B2%89.jpg",
  "南翔小笼包": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/1_%E5%8D%97%E7%BF%94%E5%B0%8F%E7%AC%BC%E5%8C%85.png",
  "博望锅盔": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E5%8D%9A%E6%9C%9B%E9%94%85%E7%9B%94.jpg",
  "卤煮火烧": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/4_%E5%8D%A4%E7%85%AE%E7%81%AB%E7%83%A7.png",
  "卤肉饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%8D%A4%E8%82%89%E9%A5%AD.jpg",
  "厦门沙茶面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E5%8E%A6%E9%97%A8%E6%B2%99%E8%8C%B6%E9%9D%A2.jpg",
  "叉烧": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%8F%89%E7%83%A7.jpg",
  "叉烧饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%8F%89%E7%83%A7%E9%A5%AD.jpg",
  "口味虾": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E5%8F%A3%E5%91%B3%E8%99%BE.jpg",
  "叫化鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E5%8F%AB%E5%8C%96%E9%B8%A1.jpg",
  "合肥四大名点": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E5%90%88%E8%82%A5%E5%9B%9B%E5%A4%A7%E5%90%8D%E7%82%B9.jpg",
  "合肥龙虾": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E5%90%88%E8%82%A5%E9%BE%99%E8%99%BE.jpg",
  "和乐蟹": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E5%92%8C%E4%B9%90%E8%9F%B9.jpg",
  "咖喱鱼蛋": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E5%92%96%E5%96%B1%E9%B1%BC%E8%9B%8B.jpg",
  "哈尔滨红肠": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%93%88%E5%B0%94%E6%BB%A8%E7%BA%A2%E8%82%A0.jpg",
  "唐山棋子烧饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E5%94%90%E5%B1%B1%E6%A3%8B%E5%AD%90%E7%83%A7%E9%A5%BC.jpg",
  "嘉兴粽子": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E5%98%89%E5%8F%B0%E5%AD%90%E5%AD%90.jpg",
  "四川火锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%9B%9B%E5%B7%9D%E7%81%AB%E9%94%85.jpg",
  "回锅肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%9B%9E%E9%94%85%E8%82%89.jpg",
  "固始鹅块": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E5%9B%BA%E5%A7%8B%E9%B9%85%E5%9D%97.jpg",
  "土笋冻": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E5%9C%9F%E7%AC%8B%E5%86%BB.jpg",
  "土豆烧牦牛肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E5%9C%9F%E8%B1%86%E7%83%A7%E7%89%A6%E7%89%9B%E8%82%89.jpg",
  "大列巴": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E5%A4%A7%E5%88%97%E5%B7%B4.jpg",
  "大肠蚵仔面线": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E5%A4%A7%E8%82%A0%E8%9A%B5%E4%BB%94%E9%9D%A2%E7%BA%BF.jpg",
  "大连海鲜": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%BE%BD%E5%AE%81%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E5%A4%A7%E8%BF%9E%E6%B5%B7%E9%B2%9C.jpg",
  "太原头脑": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E5%A4%AA%E5%8E%9F%E5%A4%B4%E8%84%91.jpg",
  "太原灌肠": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E5%A4%AA%E5%8E%9F%E7%81%8C%E8%82%A0.jpg",
  "夫妻肺片": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E5%A4%AB%E5%A6%BB%E8%82%BA%E7%89%87.jpg",
  "奶皮子": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/6_%E5%A5%B6%E7%9A%AE%E5%AD%90.png",
  "奶豆腐": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/9_%E5%A5%B6%E8%B1%86%E8%85%90.png",
  "姜母鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E5%A7%9C%E6%AF%8D%E9%B8%AD.jpg",
  "宁波汤团": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E5%AE%81%E6%B3%A2%E6%B1%A4%E5%9B%A2.jpg",
  "安庆鸡汤泡炒米": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E5%AE%89%E5%BA%86%E9%B8%A1%E6%B1%A4%E6%B3%A1%E7%82%92%E7%B1%B3.jpg",
  "客家酿豆腐": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E5%AE%A2%E5%AE%B6%E9%85%BF%E8%B1%86%E8%85%90.jpg",
  "宣威火腿": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/8_%E5%AE%A3%E5%A8%81%E7%81%AB%E8%85%BF.png",
  "宫保鸡丁": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E5%AE%AB%E4%BF%9D%E9%B8%A1%E4%B8%81.jpg",
  "小笼包": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E5%B0%8F%E7%AC%BC%E5%8C%85.jpg",
  "小鸡炖蘑菇": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E5%B0%8F%E9%B8%A1%E7%82%96%E8%98%91%E8%8F%87.jpg",
  "山东煎饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%B1%B1%E4%B8%9C%E7%85%8E%E9%A5%BC.jpg",
  "山东糖醋鲤鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E5%B1%B1%E4%B8%9C%E7%B3%96%E9%86%8B%E9%B2%A4%E9%B1%BC.jpg",
  "山城汤圆": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E5%B1%B1%E5%9F%8E%E6%B1%A4%E5%9C%86.jpg",
  "山西老陈醋": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E5%B1%B1%E8%A5%BF%E8%80%81%E9%99%88%E9%86%8B.jpg",
  "山西过油肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E5%B1%B1%E8%A5%BF%E8%BF%87%E6%B2%B9%E8%82%89.jpg",
  "岐山臊子面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E5%B4%87%E5%B1%B1%E8%87%8A%E5%AD%90%E9%9D%A2.jpg",
  "岳阳烧烤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E5%B2%B3%E9%98%B3%E7%83%A7%E7%83%A4.jpg",
  "常德牛肉粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%B8%B8%E5%BE%B7%E7%89%9B%E8%82%89%E7%B2%89.jpg",
  "平遥牛肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%B9%B3%E9%81%A5%E7%89%9B%BE%8E%89.jpg",
  "延吉冷面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%90%89%E6%9E%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/1_%E5%BB%B6%E5%90%89%E5%86%B7%E9%9D%A2.png",
  "开封灌汤包": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%BC%80%E5%B0%81%E6%BB%9E%E6%B1%A4%E5%8C%85.jpg",
  "张飞牛肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E5%BC%A0%E9%A3%9E%E7%89%9B%BE%8E%89.jpg",
  "得莫利炖鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E5%BE%97%E8%8E%AB%E5%88%A9%E7%82%96%E9%B1%BC.jpg",
  "微山湖鲤鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E5%BE%AE%E5%B1%B1%E6%B9%96%E9%B2%A4%E9%B1%BC.jpg",
  "德州扒鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E5%BE%B7%E5%B7%9E%E6%89%92%E9%B8%A1.jpg",
  "徽州臭鳜鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E5%BE%BD%E5%B7%9E%E8%87%AD%E9%B3%9C%E9%B1%BC.jpg",
  "恋爱豆腐果": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E6%81%8B%E7%88%B1%E8%B1%86%E8%85%90%E6%9E%9C.jpg",
  "手扒羊肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/1_%E6%89%8B%E6%89%92%E7%BE%8A%E8%82%89.png",
  "手抓羊肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E6%89%8B%E6%8A%93%E7%BE%8A%E8%82%89.jpg",
  "打糕": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%90%89%E6%9E%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/7_%E6%89%93%E7%B3%95.png",
  "扬州炒饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E6%89%AC%E5%B7%9E%E7%82%92%E9%A5%AD.jpg",
  "扬州狮子头": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E6%89%AC%E5%B7%9E%E7%8B%AE%E5%AD%90%E5%A4%B4.jpg",
  "抱罗粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E6%8A%B1%E7%BD%97%E7%B2%89.jpg",
  "担仔面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E6%8B%85%E4%BB%94%E9%9D%A2.jpg",
  "排骨年糕": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/4_%E6%8E%92%E9%AA%A8%E5%B9%B4%E7%B3%95.png",
  "排骨藕汤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E6%8E%92%E9%AA%A8%E8%97%95%E6%B1%A4.jpg",
  "文昌鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E6%96%87%E6%98%8C%E9%B8%A1.jpg",
  "无锡小笼包": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E6%97%A0%E9%94%A1%E5%B0%8F%E7%AC%BC%E5%8C%85.jpg",
  "早茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E6%97%A9%E8%8C%B6.jpg",
  "朝阳小米": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%BE%BD%E5%AE%81%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E6%9C%9D%E9%98%B3%E5%B0%8F%E7%B1%B3.jpg",
  "朝鲜族冷面汤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%90%89%E6%9E%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/9_%E6%9C%9D%E9%B2%9C%E6%97%8F%E5%86%B7%E9%9D%A2%E6%B1%A4.png",
  "朝鲜族泡菜": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%90%89%E6%9E%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/5_%E6%9C%9D%E9%B2%9C%E6%97%8F%E6%B3%A1%E8%8F%9C.png",
  "杀猪菜": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E6%9D%80%E7%8C%AA%E8%8F%9C.jpg",
  "杨村糕干": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E6%9D%A8%E6%9D%91%E7%B3%95%E5%B9%B2.jpg",
  "松鼠鳜鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E6%9D%BE%E9%BC%A0%E9%B3%9C%E9%B1%BC.jpg",
  "枫泾丁蹄": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/7_%E6%9E%AB%E6%B3%BE%E4%B8%81%E8%B9%84.png",
  "柠檬鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E6%9F%A0%E6%AA%AC%E9%B8%AD.jpg",
  "查干湖胖头鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%90%89%E6%9E%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/2_%E6%9F%A5%E5%B9%B2%E6%B9%96%E8%83%96%E5%A4%B4%E9%B1%BC.png",
  "柳州螺蛳粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E6%9F%B3%E5%B7%9E%E8%9E%BA%E8%9B%B3%E7%B2%89.jpg",
  "桂林米粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E6%A1%82%E6%9E%97%E7%B1%B3%E7%B2%89.jpg",
  "梧州龟苓膏": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E6%A2%A7%E5%B7%9E%E9%BE%9F%E8%8B%93%E8%86%8F.jpg",
  "椰子饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E6%A4%B0%E5%AD%90%E9%A5%AD.jpg",
  "椰子鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E6%A4%B0%E5%AD%90%E9%B8%A1.jpg",
  "正定八大碗": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E6%AD%A3%E5%AE%9A%E5%85%AB%E5%A4%A7%E7%A2%97.jpg",
  "武昌鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E6%AD%A6%E6%98%8C%E9%B1%BC.jpg",
  "武汉热干面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E6%AD%A6%E6%B1%89%E7%83%AD%E5%B9%B2%E9%9D%A2.jpg",
  "毛血旺": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E6%AF%9B%E8%A1%80%E6%97%BA.jpg",
  "水晶虾仁": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/8_%E6%B0%B4%E6%99%B6%E8%99%BE%E4%BB%81.png",
  "水煮牛肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E6%B0%B4%E7%85%AE%E7%89%9B%E8%82%89.jpg",
  "水蟹粥": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E6%B0%B4%E8%9F%B9%E7%B2%A5.jpg",
  "汽锅鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/2_%E6%B1%BD%E9%94%85%E9%B8%A1.png",
  "汾酒": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E6%B1%BE%E9%85%92.jpg",
  "沈阳回头": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%BE%BD%E5%AE%81%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E6%B2%88%E9%98%B3%E5%9B%9E%E5%A4%B4.jpg",
  "沈阳鸡架": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%BE%BD%E5%AE%81%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E6%B2%88%E9%98%B3%E9%B8%A1%E6%9E%B6.jpg",
  "沔阳三蒸": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E6%B2%94%E9%98%B3%E4%B8%89%E8%92%B8.jpg",
  "沙县小吃": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E6%B2%99%E5%8E%BF%E5%B0%8F%E5%90%83.jpg",
  "沧州火锅鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E6%B2%A7%E5%B7%9E%E7%81%AB%E9%94%85%E9%B8%A1.jpg",
  "沧州金丝小枣": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/11_%E6%B2%A7%E5%B7%9E%E9%87%91%E4%B8%9D%E5%B0%8F%E6%9E%A3.jpg",
  "河南烩面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E6%B2%B3%E5%8D%97%E7%83%A9%E9%9D%A2.jpg",
  "泉州面线糊": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E6%B3%89%E5%B7%9E%E9%9D%A2%E7%BA%BF%E7%B3%8A.jpg",
  "泡椒牛蛙": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E6%B3%A1%E6%A4%92%E7%89%9B%E8%9B%99.jpg",
  "洛阳水席": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E6%B4%9B%E9%98%B3%E6%B0%B4%E5%B8%AD.jpg",
  "济南把子肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E6%B5%8E%E5%8D%97%E6%8A%8A%E5%AD%90%E8%82%89.jpg",
  "济南油旋": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E6%B5%8E%E5%8D%97%E6%B2%B9%E6%97%8B.jpg",
  "海口斋菜煲": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E6%B5%B7%E5%8F%A3%E6%96%8B%E8%8F%9C%E7%85%B2.jpg",
  "海胆蒸蛋": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E6%B5%B7%E8%83%86%E8%92%B8%E8%9B%8B.jpg",
  "淄博博山豆腐箱": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E6%B7%84%E5%8D%9A%E5%8D%9A%E5%B1%B1%E8%B1%86%E8%85%90%E7%AE%B1.jpg",
  "淮南牛肉汤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E6%B7%AE%E5%8D%97%E7%89%9B%E8%82%89%E6%B1%A4.jpg",
  "淮安软兜长鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E6%B7%AE%E5%AE%89%E8%BD%AF%E5%85%9C%E9%95%BF%E9%B1%BC.jpg",
  "清补凉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E6%B8%85%E8%A1%A5%E5%87%89.jpg",
  "温州鱼丸": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E6%B8%A9%E5%B7%9E%E9%B1%BC%E4%B8%B8.jpg",
  "湘西霉豆腐": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E6%B9%98%E8%A5%BF%E9%9C%89%E8%B1%86%E8%85%90.jpg",
  "滁州雷官板鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E6%BB%81%E5%B7%9E%E9%9B%B7%E5%AE%98%E6%9D%BF%E9%B8%AD.jpg",
  "潍坊朝天锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E6%BD%8D%E5%9D%8A%E6%9C%9D%E5%A4%A9%E9%94%85.jpg",
  "潜江油焖大虾": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E6%BD%9C%E6%B1%9F%E6%B2%B9%E7%84%96%E5%A4%A7%E8%99%BE.jpg",
  "潮汕牛肉火锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E6%BD%AE%E6%B1%95%E7%89%9B%BE%E8%89%E7%81%AB%E9%94%85.jpg",
  "澳门杏仁饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E6%BE%B3%E9%97%A8%E6%9D%8F%E4%BB%81%E9%A5%BC.jpg",
  "澳门烧肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E6%BE%B3%E9%97%A8%E7%83%A7%E8%82%89.jpg",
  "澳门老婆饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E6%BE%B3%E9%97%A8%E8%80%81%E5%A9%86%E9%A5%BC.jpg",
  "澳门虾籽面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E6%BE%B3%E9%97%A8%E8%99%BE%E7%B1%BD%E9%9D%A2.jpg",
  "澳门鱼翅丸": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E6%BE%B3%E9%97%A8%E9%B1%BC%E7%BF%85%E4%B8%B8.jpg",
  "濮阳壮馍": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E6%BF%AE%E9%98%B3%E5%A3%AE%E9%A6%8D.jpg",
  "炒田螺": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E7%82%92%E7%94%B0%E8%9E%BA.jpg",
  "炒米": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/8_%E7%82%92%E7%B1%B3.png",
  "烤全羊": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/2_%E7%83%A4%E5%85%A8%E7%BE%8A.png",
  "烧腊": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E7%83%A7%E8%85%8A.jpg",
  "烧鹅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E7%83%A7%E9%B9%85.jpg",
  "烧麦": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/4_%E7%83%A7%E9%BA%A6.png",
  "焦圈": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/7_%E7%84%A6%E5%9C%88.png",
  "煎饼果子": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E7%85%8E%E9%A5%BC%E6%9E%9C%E5%AD%90.jpg",
  "煲仔饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E7%85%B2%E4%BB%94%E9%A5%AD.jpg",
  "爆肚": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/5_%E7%88%86%E8%82%9A.png",
  "片儿川": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E7%89%87%E5%84%BF%E5%B7%9D.jpg",
  "牛干巴": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/9_%E7%89%9B%E5%B9%B2%E5%B7%B4.png",
  "牛肉面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E7%89%9B%BE%8E%89%E9%9D%A2.jpg",
  "牦牛肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E7%89%A6%E7%89%9B%E8%82%89.jpg",
  "牦牛酸奶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E7%89%A6%E7%89%9B%E9%85%B8%E5%A5%B6.jpg",
  "狗不理包子": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E7%8B%97%E4%B8%8D%E7%90%86%E5%8C%85%E5%AD%90.jpg",
  "猪扒包": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E7%8C%AA%E6%89%92%E5%8C%85.jpg",
  "猪肉炖粉条": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E7%8C%AA%E8%82%89%E7%82%96%E7%B2%89%E6%9D%A1.jpg",
  "玉林牛巴": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E7%8E%89%E6%9E%97%E7%89%9B%E5%B7%B4.jpg",
  "珍珠奶茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E7%8F%8D%E7%8F%A0%E5%A5%B6%E8%8C%B6.jpg",
  "瓦罐汤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E7%93%A6%E7%BD%90%E6%B1%A4.jpg",
  "甑糕": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E7%94%91%E7%B3%95.jpg",
  "甘肃凉面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E7%94%98%E8%82%83%E5%87%89%E9%9D%A2.jpg",
  "甘肃炒面片": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E7%94%98%E8%82%83%E7%82%92%E9%9D%A2%E7%89%87.jpg",
  "甘肃烩面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E7%94%98%E8%82%83%E7%83%A9%E9%9D%A2.jpg",
  "甘肃甜醅子": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E7%94%98%E8%82%83%E7%94%9C%E9%86%85%E5%AD%90.jpg",
  "甘肃羊肉泡馍": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E7%94%98%E8%82%83%E7%BE%8A%E8%82%89%E6%B3%A1%E9%A6%8D.jpg",
  "甘肃臊子面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E7%94%98%E8%82%83%E8%87%8A%E5%AD%90%E9%9D%A2.jpg",
  "甘肃酿皮": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E7%94%98%E8%82%83%E9%85%BF%E7%9A%AE.jpg",
  "甜皮鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E7%94%9C%E7%9A%AE%E9%B8%AD.jpg",
  "甜茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E7%94%9C%E8%8C%B6.jpg",
  "生煎馒头": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/2_%E7%94%9F%E7%85%8E%E9%A6%92%E5%A4%B4.png",
  "白切鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E7%99%BD%E5%88%87%E9%B8%A1.jpg",
  "盐酥鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E7%9B%90%E9%85%A5%E9%B8%A1.jpg",
  "盘锦河蟹": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%BE%BD%E5%AE%81%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E7%9B%98%E9%94%A6%E6%B2%B3%E8%9F%B9.jpg",
  "碗仔翅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E7%A2%97%E4%BB%94%E7%BF%85.jpg",
  "碗托": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E7%A2%97%E6%89%98.jpg",
  "碱水粑": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E7%A2%B1%E6%B0%B4%E7%B2%91.jpg",
  "福州肉燕": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E7%A6%8F%E5%B7%9E%E8%82%89%E7%87%95.jpg",
  "福州鱼丸": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E7%A6%8F%E5%B7%9E%E9%B1%BC%E4%B8%B8.jpg",
  "竹升面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E7%AB%B9%E5%8D%87%E9%9D%A2.jpg",
  "米粉肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E7%B1%B3%E7%B2%89%E8%82%89.jpg",
  "粘豆包": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E7%B2%98%E8%B1%86%E5%8C%85.jpg",
  "糊羹": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E7%B3%8A%E7%BE%B9.jpg",
  "糌粑": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E7%B3%8C%E7%B2%91.jpg",
  "糖水": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E7%B3%96%E6%B0%B4.jpg",
  "糖油粑粑": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E7%B3%96%E6%B2%B9%E7%B2%91%E7%B2%91.jpg",
  "糖耳朵": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/8_%E7%B3%96%E8%80%B3%E6%9C%B5.png",
  "糟钵头": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/5_%E7%B3%9F%E9%92%B5%E5%A4%B4.png",
  "绍兴臭豆腐": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E7%BB%8D%E5%85%B4%E8%87%AD%E8%B1%86%E8%85%90.jpg",
  "缸炉烧饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E7%BC%B8%E7%82%89%E7%83%A7%E9%A5%BC.jpg",
  "罾蹦鲤鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E7%BD%BE%E8%B9%A6%E9%B2%A4%E9%B1%BC.jpg",
  "羊杂碎": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/5_%E7%BE%8A%E6%9D%82%E7%A2%8E.png",
  "羊肉泡馍": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E7%BE%8A%E8%82%89%E6%B3%A1%E9%A6%8D.jpg",
  "羊肉粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E7%BE%8A%E8%82%89%E7%B2%89.jpg",
  "老北京炸酱面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/2_%E8%80%81%E5%8C%97%E4%BA%AC%E7%82%B8%E9%85%B1%E9%9D%A2.png",
  "老爆三": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E8%80%81%E7%88%86%E4%B8%89.jpg",
  "老爸茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E8%80%81%E7%88%B8%E8%8C%B6.jpg",
  "耳朵眼炸糕": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E8%80%B3%E6%9C%BC%E7%82%B8%E7%B3%95.jpg",
  "肉夹馍": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E8%82%89%E5%A4%B9%E9%A6%8D.jpg",
  "肠旺面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E8%82%A0%E6%97%BA%E9%9D%A2.jpg",
  "肠粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E8%82%A0%E7%B2%89.jpg",
  "腊味合蒸": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E8%85%8A%E5%91%B3%E5%90%88%E8%92%B8.jpg",
  "腌笃鲜": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E8%85%8C%E7%AC%83%E9%B2%9C.png",
  "艾窝窝": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/6_%E8%89%BE%E7%AA%9D%E7%AA%9D.png",
  "芜湖虾籽面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E8%8A%9C%E6%B9%96%E8%99%BE%E7%B1%BD%E9%9D%A2.jpg",
  "苏州糕点": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E8%8B%8F%E5%B7%9E%E7%B3%95%E7%82%B9.jpg",
  "荆州鱼糕": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E8%8D%86%E5%B7%9E%E9%B1%BC%E7%B3%95.jpg",
  "荔浦芋扣肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E8%8D%94%E6%B5%A6%E8%8A%8B%E6%89%A3%E8%82%89.jpg",
  "荞面饸饹": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E8%8D%9E%E9%9D%A2%E9%A5%B8%E9%A5%B9.jpg",
  "莜面栲栳栳": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E8%8E%9C%E9%9D%A2%E6%A0%B2%E6%A0%B3%E6%A0%B3.jpg",
  "莜面窝窝": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E8%8E%9C%E9%9D%A2%E7%AA%9D%E7%AA%9D.jpg",
  "菠萝油": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E8%8F%A0%E8%90%9D%E6%B2%B9.jpg",
  "葡国鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E8%91%A1%E5%9B%BD%E9%B8%A1.jpg",
  "葡式蛋挞": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%BE%B3%E9%97%A8%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E8%91%A1%E5%BC%8F%E8%9B%8B%E6%8A%A5.jpg",
  "葫芦头泡馍": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E8%91%AB%E8%8A%A6%E5%A4%B4%E6%B3%A1%E9%A6%8D.jpg",
  "葱油拌面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%B8%8A%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/6_%E8%91%B1%E6%B2%B9%E6%8B%8C%E9%9D%A2.jpg",
  "蒙古奶茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/3_%E8%92%99%E5%8F%A4%E5%A5%B6%E8%8C%B6.png",
  "蔚县豆腐干": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E8%94%9A%E5%8E%BF%E8%B1%86%E8%85%90%E5%B9%B2.jpg",
  "藏面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E8%97%8F%E9%9D%A2.jpg",
  "藏香猪": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E8%97%8F%E9%A6%99%E7%8C%AA.jpg",
  "藜蒿炒腊肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E8%97%9C%E8%92%BF%E7%82%92%E8%85%8A%E8%82%89.jpg",
  "虾饺": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E8%99%BE%E9%A5%BA.jpg",
  "蚌埠烧饼夹里脊": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E8%9A%8C%E5%9F%A0%E7%83%A7%E9%A5%BC%E5%A4%B9%E9%87%8C%E8%84%8A.jpg",
  "蚵仔煎": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8F%B0%E6%B9%BE%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E8%9A%B5%E4%BB%94%E7%85%8E.jpg",
  "蛋挞": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E8%9B%8B%E6%8C%9E.jpg",
  "褡裢火烧": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/9_%E8%A4%A1%E8%A3%A2%E7%81%AB%E7%83%A7.png",
  "襄阳牛肉面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E8%A5%BF%E9%98%B3%E7%89%9B%BE%E8%89%E9%9D%A2.jpg",
  "西湖醋鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E8%A5%BF%E6%B9%96%E9%99%88%E9%B1%BC.jpg",
  "豆汁儿": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%8C%97%E4%BA%AC%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/3_%E8%B1%86%E6%B1%81%E5%84%BF.png",
  "豆腐酿": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E8%B1%86%E8%85%90%E9%85%BF.jpg",
  "豆花": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E8%B1%86%E8%8A%B1.jpg",
  "豆花鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E8%B1%86%E8%8A%B1%E9%B1%BC.jpg",
  "贴饽饽熬小鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E8%B4%B4%E9%A5%BD%E9%A5%BD%E7%86%AC%E5%B0%8F%E9%B1%BC.jpg",
  "贵州剔骨鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E8%B4%B5%E5%B7%9E%E5%89%94%E9%AA%A8%E9%B8%AD.jpg",
  "贵州烙锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E8%B4%B5%E5%B7%9E%E7%83%99%E9%94%85.jpg",
  "贵州米豆腐": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E8%B4%B5%E5%B7%9E%E7%B1%B3%E8%B1%86%E8%85%90.jpg",
  "贾三灌汤包": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E8%B4%BE%E4%B8%89%E7%81%8C%E6%B1%A4%E5%8C%85.jpg",
  "赖汤圆": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E8%B5%96%E6%B1%A4%E5%9C%86.jpg",
  "车仔面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E8%BD%A6%E4%BB%94%E9%9D%A2.jpg",
  "辣子鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E8%BE%A3%E5%AD%90%E9%B8%A1.jpg",
  "辣椒炒肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E8%BE%A3%E6%A4%92%E7%82%92%E8%82%89.jpg",
  "过桥米线": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/1_%E8%BF%87%E6%A1%A5%E7%B1%B3%E7%BA%BF.png",
  "逍遥镇胡辣汤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E9%80%8D%E9%81%A5%E9%95%87%E8%83%A1%E8%BE%A3%E6%B1%A4.jpg",
  "道口烧鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E9%81%93%E5%8F%A3%E7%83%A7%E9%B8%A1.jpg",
  "邯郸永年酥鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E9%82%AF%E9%83%B8%E6%B0%B8%E5%B9%B4%E9%85%A5%E9%B1%BC.jpg",
  "郑州烤鸭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E9%83%91%E5%B7%9E%E7%83%A4%E9%B8%AD.jpg",
  "鄱阳湖鱼头": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E9%84%B1%E9%98%B3%E6%B9%96%E9%B1%BC%E5%A4%B4.jpg",
  "酥油茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E9%85%A5%E6%B2%B9%E8%8C%B6.jpg",
  "酱汤饭": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%90%89%E6%9E%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E9%85%B1%E6%B1%A4%E9%A5%AD.png",
  "酸汤鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%B4%B5%E5%B7%9E%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E9%85%B8%E6%B1%A4%E9%B1%BC.jpg",
  "酸菜炒肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E9%85%B8%E8%8F%9C%E7%82%92%E8%82%89.jpg",
  "酸辣粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E9%85%B8%E8%BE%A3%E7%B2%89.jpg",
  "重庆小面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E9%87%8D%E5%BA%86%E5%B0%8F%E9%9D%A2.jpg",
  "重庆火锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%87%8D%E5%BA%86%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E9%87%8D%E5%BA%86%E7%81%AB%E9%94%85.jpg",
  "野生菌火锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/3_%E9%87%8E%E7%94%9F%E8%8F%8C%E7%81%AB%E9%94%85.png",
  "金凤扒鸡": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E9%87%91%E5%87%A4%E6%89%92%E9%B8%A1.jpg",
  "金华火腿": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E9%87%91%E5%8D%8E%E7%81%AB%E8%85%BF.jpg",
  "钟水饺": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E9%92%9F%E6%B0%B4%E9%A5%BA.jpg",
  "铁锅炖大鹅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E9%93%81%E9%94%85%E7%82%96%E5%A4%A7%E9%B9%85.jpg",
  "锅包肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E9%94%85%E5%8C%85%E8%82%89.jpg",
  "锅巴菜": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%A4%A9%E6%B4%A5%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E9%94%85%E5%B7%B4%E8%8F%9C.jpg",
  "锅烙": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%BB%91%E9%BE%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E9%94%85%E7%83%99.jpg",
  "锅盔": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%99%95%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E9%94%85%E7%9B%94.jpg",
  "锦州烧烤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%BE%BD%E5%AE%81%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E9%94%A6%E5%B7%9E%E7%83%A7%E7%83%A4.jpg",
  "镇江锅盖面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E9%95%87%E6%B1%9F%E9%94%85%E7%9B%96%E9%9D%A2.jpg",
  "长沙臭豆腐": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E9%95%BF%E6%B2%99%E8%87%AD%E8%B1%86%E8%85%90.jpg",
  "闻喜煮饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E9%97%BB%E5%96%9C%E7%85%AE%E9%A5%BC.jpg",
  "闽南烧肉粽": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%A6%8F%E5%BB%BA%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E9%97%BD%E5%8D%97%E7%83%A7%E8%82%89%E7%B2%BD.jpg",
  "阜阳格拉条": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E9%98%9C%E9%98%B3%E6%A0%BC%E6%8B%89%E6%9D%A1.jpg",
  "阳朔啤酒鱼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B9%BF%E8%A5%BF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E9%98%B3%E6%9C%94%E5%95%A4%E9%85%92%E9%B1%BC.jpg",
  "阳澄湖大闸蟹": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E9%98%B3%E6%B4%8B%E6%B9%96%E5%A4%A7%E9%97%B8%E8%9F%B9.jpg",
  "陵水酸粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%B7%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E9%99%B5%E6%B0%B4%E9%85%B8%E7%B2%89.jpg",
  "随州泡泡青": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E9%9A%8F%E5%B7%9E%E6%B3%A1%E6%B3%A1%E9%9D%92.jpg",
  "青岛啤酒": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%B1%B1%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E9%9D%92%E5%B2%9B%E5%95%A4%E9%85%92.jpg",
  "青海土火锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E9%9D%92%E6%B5%B7%E5%9C%9F%E7%81%AB%E9%94%85.jpg",
  "青海尕面片": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E9%9D%92%E6%B5%B7%E5%B0%95%E9%9D%A2%E7%89%87.jpg",
  "青海焜锅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E9%9D%92%E6%B5%B7%E7%84%9C%E9%94%85.jpg",
  "青海甜醅": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E9%9D%92%E6%B5%B7%E7%94%9C%E9%86%85.jpg",
  "青海糌粑": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/10_%E9%9D%92%E6%B5%B7%E7%B3%8C%E7%B2%91.jpg",
  "青海酥油茶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/09_%E9%9D%92%E6%B5%B7%E9%85%A5%E6%B2%B9%E8%8C%B6.jpg",
  "青海酸奶": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E9%9D%92%E6%B5%B7%E9%85%B8%E5%A5%B6.jpg",
  "青海酿皮": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E9%9D%92%E6%B5%B7%E9%85%BF%E7%9A%AE.jpg",
  "青海青稞面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%9D%92%E6%B5%B7%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E9%9D%92%E6%B5%B7%E9%9D%92%E7%A8%9E%E9%9D%A2.jpg",
  "青稞酒": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/05_%E9%9D%92%E7%A7%91%E9%85%92.jpg",
  "鞍山牛录馅饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%BE%BD%E5%AE%81%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/08_%E9%9E%8D%E5%B1%B1%E7%89%9B%E5%BD%95%E9%A6%85%E9%A5%BC.jpg",
  "风干牛肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%86%85%E8%92%99%E5%8F%A4%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/7_%E9%A3%8E%E5%B9%B2%E7%89%9B%E8%82%89.png",
  "风干牦牛肉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E8%A5%BF%E8%97%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E9%A3%8E%E5%B9%B2%E7%89%A6%E7%89%9B%E8%82%89.jpg",
  "饵块": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/6_%E9%A5%B5%E5%9D%97.png",
  "香河肉饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E9%A6%99%E6%B2%B3%E8%82%89%E9%A5%BC.jpg",
  "驴肉火烧": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B2%B3%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/01_%E9%A9%B4%E8%82%89%E7%81%AB%E7%83%A7.jpg",
  "驴肉黄面": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E7%94%98%E8%82%83%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/04_%E9%A9%B4%E8%82%89%E9%BB%84%E9%9D%A2.jpg",
  "鱼蛋粉": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E9%A6%99%E6%B8%AF%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E9%B1%BC%E8%9B%8B%E7%B2%89.jpg",
  "鲜花饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E4%BA%91%E5%8D%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/4_%E9%B2%9C%E8%8A%B1%E9%A5%BC.png",
  "鸭血粉丝汤": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B1%9F%E8%8B%8F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/06_%E9%B8%AD%E8%A1%80%E7%B2%89%E4%B8%9D%E6%B1%A4.jpg",
  "麻婆豆腐": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%9B%9B%E5%B7%9D%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E9%BA%BB%E5%A9%86%E8%B1%86%E8%85%90.jpg",
  "黄山烧饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E5%AE%89%E5%BE%BD%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/03_%E9%BB%84%E5%B1%B1%E7%83%A7%E9%A5%BC.jpg",
  "黄石港饼": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B9%96%E5%8C%97%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/07_%E9%BB%84%E7%9F%B3%E6%B8%AF%E9%A5%BC.jpg",
  "龙井虾仁": "http://tenv8okq8.hn-bkt.clouddn.com/image/%E6%B5%99%E6%B1%9F%E7%BE%8E%E9%A3%9F%E5%9B%BE%E7%89%87/02_%E9%BE%99%E4%BA%95%E8%99%BE%E4%BB%81.jpg",
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
import fs from 'fs';

const provinceData = {
  "anhui": {
    "provinceName": "安徽",
    "provinceId": "anhui",
    "foodList": [
      {
        "name": "徽州臭鳜鱼",
        "description": "徽州臭鳜鱼是安徽传统名菜，鳜鱼经淡盐水腌制发酵，闻起来臭吃起来香，肉质鲜嫩、醇香无比，是徽菜的代表。",
        "origin": "相传清代徽商在外经商，将鳜鱼用盐腌制以便保存，意外创造了这道美味，是徽州饮食文化的经典。",
        "history": "从徽商旅途美食到徽菜代表，臭鳜鱼成为安徽美食的名片，是宴席上的必备菜肴。",
        "culture": "臭鳜鱼是徽州饮食文化的象征，承载着徽商的智慧和创新精神。",
        "image": "https://s.coze.cn/image/b90e7bec54e73680fe5b01a9e7807.jpg"
      },
      {
        "name": "合肥龙虾",
        "description": "合肥龙虾是安徽夏季美食代表，盱眙龙虾品质优良，麻辣、蒜蓉、十三香等多种口味，是夏夜聚会的必备美食。",
        "origin": "盱眙是安徽龙虾主产地，小龙虾美食在合肥发扬光大，成为安徽夜市文化的代表。",
        "history": "从地方小吃到夏季美食节，合肥龙虾节成为安徽美食文化的重要组成部分。",
        "culture": "合肥龙虾是安徽夜市文化的代表，吃龙虾喝啤酒是安徽人的夏日生活方式。",
        "image": "https://s.coze.cn/image/d53f0332d0d8db1cb62695ae86a9c.jpg"
      },
      {
        "name": "黄山烧饼",
        "description": "黄山烧饼是安徽传统糕点，酥皮层层叠叠，内馅多为梅干菜肉，烤制后酥脆香，是安徽著名的旅游小吃。",
        "origin": "起源于黄山地区，最初是当地农民的干粮，因便于携带和保存而流传开来。",
        "history": "从民间干粮到旅游特产，黄山烧饼成为游客必买的安徽伴手礼。",
        "culture": "黄山烧饼是安徽旅游饮食文化的代表，承载着徽州人的生活智慧。",
        "image": "https://s.coze.cn/image/ada15d1e6709be6ffdc875f4b51423.jpg"
      },
      {
        "name": "芜湖虾籽面",
        "description": "芜湖虾籽面是安徽传统面食，以优质面粉制成面条，撒上新鲜虾籽，鲜香可口，是安徽早餐的代表。",
        "origin": "芜湖位于长江边，水产丰富，虾籽面是当地渔民创造的特色美食。",
        "history": "从渔家早餐到餐厅名点，芜湖虾籽面成为安徽传统面食的代表。",
        "culture": "虾籽面是安徽水乡文化的美食体现，承载着芜湖渔民的历史记忆。",
        "image": "https://s.coze.cn/image/b90e7bec54e73680fe5b01a9e7807.jpg"
      },
      {
        "name": "淮南牛肉汤",
        "description": "淮南牛肉汤是安徽传统小吃，选用淮南黄牛牛肉，配以粉丝、豆皮，香气浓郁、汤鲜肉嫩，是安徽早餐的经典。",
        "origin": "淮南地区养殖黄牛历史悠久，牛肉汤是当地回民的传统美食。",
        "history": "从街头小吃到连锁品牌，淮南牛肉汤成为安徽美食的代表之一。",
        "culture": "淮南牛肉汤是安徽回民饮食文化的代表，体现着安徽饮食的多元性。",
        "image": "https://s.coze.cn/image/d53f0332d0d8db1cb62695ae86a9c.jpg"
      },
      {
        "name": "阜阳格拉条",
        "description": "阜阳格拉条是安徽传统面食，粗面条配以芝麻酱、蒜汁、辣椒油，拌匀后食用，面条筋道、酱香浓郁，是阜阳的特色美食。",
        "origin": "阜阳地区传统面食，格拉是当地方言，形容面条的嚼劲。",
        "history": "从家庭主食到地方名吃，格拉条是阜阳人最爱的日常美食。",
        "culture": "格拉条是阜阳地方饮食文化的代表，承载着阜阳人的乡愁记忆。",
        "image": "https://s.coze.cn/image/ada15d1e6709be6ffdc875f4b51423.jpg"
      },
      {
        "name": "合肥四大名点",
        "description": "合肥四大名点是合肥传统糕点，包括麻饼、烘糕、白切和寸金，历史悠久，是安徽传统糕点的代表。",
        "origin": "清代合肥地区的传统糕点，是当地人逢年过节必备的点心。",
        "history": "从传统糕点到安徽特产，合肥四大名点成为游客喜爱的伴手礼。",
        "culture": "四大名点是合肥传统点心文化的代表，承载着安徽人的节庆记忆。",
        "image": "https://s.coze.cn/image/b90e7bec54e73680fe5b01a9e7807.jpg"
      },
      {
        "name": "蚌埠烧饼夹里脊",
        "description": "蚌埠烧饼夹里脊是安徽创新美食，烧饼夹上炸里脊肉，酥脆与鲜嫩结合，是蚌埠的独创小吃。",
        "origin": "蚌埠是铁路城市，铁路工人创造了这种方便快捷的美食组合。",
        "history": "从铁路工人餐到地方名吃，烧饼夹里脊成为蚌埠的特色美食。",
        "culture": "烧饼夹里脊是蚌埠铁路文化的体现，承载着城市的工业记忆。",
        "image": "https://s.coze.cn/image/d53f0332d0d8db1cb62695ae86a9c.jpg"
      },
      {
        "name": "安庆鸡汤泡炒米",
        "description": "安庆鸡汤泡炒米是安徽传统美食，土鸡炖汤配以炒米，汤鲜米脆，是安徽人待客的特色美食。",
        "origin": "安庆地区传统待客美食，炒米便于保存，鸡汤滋补，是当地人的待客之道。",
        "history": "从家庭待客到餐厅名菜，鸡汤泡炒米成为安庆美食的代表。",
        "culture": "鸡汤泡炒米是安庆待客文化的象征，承载着安徽人的热情好客。",
        "image": "https://s.coze.cn/image/ada15d1e6709be6ffdc875f4b51423.jpg"
      },
      {
        "name": "滁州雷官板鸭",
        "description": "滁州雷官板鸭是安徽传统名菜，鸭子经特殊工艺腌制风干，鸭肉紧实、味道鲜美，是安徽的传统特产。",
        "origin": "滁州雷官镇传统腌制技艺，已有上百年历史，是当地的特色美食。",
        "history": "从地方特产到安徽名菜，雷官板鸭成为滁州的美食名片。",
        "culture": "雷官板鸭是滁州饮食文化的代表，承载着当地的传统腌制技艺。",
        "image": "https://s.coze.cn/image/b90e7bec54e73680fe5b01a9e7807.jpg"
      }
    ]
  }
};

const filePath = 'f:/province/json-data/food-data.json';
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const provinceId = 'anhui';
const existingIndex = data.findIndex(item => item.provinceId === provinceId);
const newData = provinceData[provinceId];

if (existingIndex >= 0) {
  data[existingIndex] = newData;
  console.log(`已更新 ${newData.provinceName} 美食数据`);
} else {
  data.push(newData);
  console.log(`已添加 ${newData.provinceName} 美食数据`);
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log('\nfood-data.json 更新完成！');
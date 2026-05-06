import fs from 'fs';

// 原始图片链接列表（从之前的日志中提取）
const originalImages = [
    'https://s.coze.cn/image/PpmTcuB1BLk/',
    'https://s.coze.cn/image/YvA-aJxVc2M/',
    'https://s.coze.cn/image/SCZC26M1a9o/',
    'https://s.coze.cn/image/fg5R3erBdAk/',
    'https://s.coze.cn/image/6x9n0fAxBNs/',
    'https://s.coze.cn/image/8hpojDP8F3g/',
    'https://s.coze.cn/image/q6Zw3JBmoJw/',
    'https://s.coze.cn/image/MVoC5j-dsaA/',
    'https://s.coze.cn/image/qgJwfQzLzwM/',
    'https://bkimg.cdn.bcebos.com/picture/d0438744b31c8701a18e0b947f27e.jpeg',
    'https://bkimg.cdn.bcebos.com/picture/b90e7bec54e73680fe5b01a9e7807.jpg',
    'https://bkimg.cdn.bcebos.com/picture/ada15d1e6709be6ffdc875f4b51423.jpg',
    'https://bkimg.cdn.bcebos.com/picture/d53f0332d0d8db1cb62695ae86a9c.jpg',
    'https://bkimg.cdn.bcebos.com/picture/503d27310ef55f3a0d3d6c2b3cf61.jpg',
    'https://bkimg.cdn.bcebos.com/picture/9b2a3b504d8b9b0b89a54da7a86b0.jpg'
];

function restoreImageUrls(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    let imageIndex = 0;
    for (const province of data) {
        let listKey = null;
        if ('foodList' in province) {
            listKey = 'foodList';
        } else if ('specialtyList' in province) {
            listKey = 'specialtyList';
        } else if ('heritageList' in province) {
            listKey = 'heritageList';
        }
        
        if (listKey) {
            for (const item of province[listKey]) {
                item.image = originalImages[imageIndex % originalImages.length];
                imageIndex++;
            }
        }
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`已恢复 ${filePath}: 使用原始图片链接`);
}

restoreImageUrls('f:/province/json-data/food-data.json');
restoreImageUrls('f:/province/json-data/specialty-data.json');
restoreImageUrls('f:/province/json-data/heritage-data.json');

console.log('所有JSON文件的图片链接已恢复！');
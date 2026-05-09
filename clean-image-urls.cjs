const fs = require('fs');

const filePath = 'f:/province/省份/image/cos-object-list-1778326916363.csv';

// 读取文件
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

console.log(`总行数：${lines.length}`);

// 处理每一行，删除图片扩展名后面的参数
const processedLines = lines.map(line => {
  if (!line.trim()) return line;
  
  const parts = line.split(',');
  if (parts.length >= 2) {
    const filename = parts[0].trim();
    let url = parts[1].trim();
    
    // 找到最后一个图片扩展名的位置，删除后面的所有参数
    const extensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
    for (const ext of extensions) {
      const extIndex = url.toLowerCase().indexOf(ext);
      if (extIndex !== -1) {
        url = url.substring(0, extIndex + ext.length);
        break;
      }
    }
    
    return `${filename},${url}`;
  }
  return line;
});

// 保存文件
const output = processedLines.join('\n');
fs.writeFileSync(filePath, output, 'utf8');

console.log('处理完成！');
console.log(`\n前 10 行结果:`);
processedLines.slice(0, 10).forEach(line => console.log(line));

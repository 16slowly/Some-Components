## 使用
 1. 引入 jquery.js 及 carousel-jquery.js
 2. 引入 carousel.css 样式
 3. 定义一个 id 为 carousel 的 div 标签
    
  ```js
    <div id="carousel"></div> 
   ```
 4. new  Carousel() 对象, 需要以下参数：
- images: `array`, 需要轮播的图片, 结构为 `[{cover: string , url: string}, ...]`
- showDots: `bool`, 是否显示 `Dot`, 默认为 true
- showArrows: `bool`, 是否显示箭头, 默认为 true
- delays: `number`, 自动播放的时间间隔，默认为 3000 ms
- isLock: `bool`, 鼠标hover时是否停止自动播放，默认为 false, 即停止自动播放
- layout: `object`, 轮播区域宽高, 结构为 `{width: number, height: number}`

   
    
## 知识点
- jquery
- 面向对象式编程
- 原型及原型链
- this

## 不足
- 需要维护多余节点(轮播列表前后各复制了一个节点)
- 隐含内联样式
- 样式不支持自定义

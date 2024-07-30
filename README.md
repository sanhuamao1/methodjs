# 使用

EMS

```js
import { download } from '@sanhuamao1/methodjs';
download('xxx');
```

CJS

```js
const { formatTime } = require('@sanhuamao1/methodjs');
formatTime(new Date());
```

# 方法

## Browser 浏览器相关

-  普通下载：`download(url: string, fileName?:string)`
-  下载音频：`downloadMedia(url: string, fileName?:string)`
-  播放音频：`playAudio(url: string, onError?:(err:Error)=>void)`（只有当用户跟页面互动过，才会生效，否则会报错）

## Date 时间相关

-  解析时间：`parseTime(timestamp: number | string, options)`

   ```ts
   // 选项
   type TOptions = {
       type?: 'local' | 'utc' // 默认 local
   }

   // 调用
   parseTime(new Date().getTime(), {type:'local'})
   parseTime('2024-07-30 10:10:10')

   // 返回值
   {
       year:2024,
       month:7,
       day:30,
       hour:12,
       minute:20,
       second:20
   }
   ```

-  格式化时间：`formatTime(value: number | string, format = "YYYY-MM-DD hh:mm:ss")`

   ```ts
   // 调用
   formatTime(new Date().getTime());
   formatTime('2024-07-30 10:10:10', 'YYYY年MM月DD日 hh:mm:ss'); // '2024年07月30日 10:10:10'
   ```

-  格式化时间段：`getDuration(seconds: number | string, options)`

   ```ts
   // 选项
   type TOptions = {
      lang?: 'EN' | 'CN'; // 格式 默认CN
   };

   // 调用
   getDuration(3000); // 50分
   ```

-  输入的时间距离当前时间的描述：`getLatestDes(value: number | string, options)`

   ```ts
   // 选项
   type TOption = {
      lang?: 'EN' | 'CN';
      maxDiff?: number; // 当间隔超过 maxDiff 时，显示具体时间
      minDiff?: number; // 当间隔小于 minDiff 时，显示“刚刚/just now”
   };

   // 调用
   getLatestDes('2024-07-30 10:10:10'); // 4 minutes ago
   ```
## Tree 
- 根据id生成树：`getTree(list: Array<any>, options)`
    ```js
    // 选项
    type TOptions = {
        selfField?: string, // 标识自身的字段名称
        parentField?: string // 指向父节点的字段名称
    }

    // 调用
    getTree([
        { id:1, value:1, parentId: null}
        { id:2, value:2, parentId: 1}
    ])
    ```
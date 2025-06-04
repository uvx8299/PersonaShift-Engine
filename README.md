
# PersonaShift - 敘事事件模擬器

🎭 本模組模擬角色遭遇不同敘事事件後的人格偏移與反應生成。

## 📌 功能

- 角色 + 敘事事件選擇
- 模擬人格變化（traits 增減）
- 顯示背景與角色反應描述

## 🔢 事件格式（events.json）

```json
{
  "事件名稱": {
    "description": "事件背景簡介",
    "traitImpact": { "traitA": 0.1, "traitB": -0.2 },
    "reaction": "此角色可能會做出的心理或語言反應"
  }
}
```

## ✅ 使用方式

1. 上傳至 GitHub Pages 專案根目錄或 /docs
2. characters.json 與 events.json 並存
3. 網頁開啟後選擇角色與事件，即可即時模擬人格影響與語言輸出！


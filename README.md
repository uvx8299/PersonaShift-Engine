
# PersonaShift - 人格偏移歷程可視化模組

📊 本模組可視化角色在時間序列中的人格特質變化，對應記憶偏移與互動影響。

## 🔍 功能

- 讀取角色歷史人格數據（需 characters.json 中包含 `history` 欄位）
- 使用 Chart.js 繪製多條性格維度變化線圖
- 可切換角色視覺化其演化歷程

## 🔢 JSON 結構需求

角色需包含：

```json
"history": [
  {
    "timestamp": "Day 1",
    "traits": { "logical": 0.8, "empathetic": 0.5, "rebellious": 0.3 }
  },
  ...
]
```

## ✅ 使用方式

1. 將本模組上傳至 GitHub Pages 專案
2. 請確認 characters.json 已提供歷程數據
3. 開啟頁面即可進行角色人格演化觀察


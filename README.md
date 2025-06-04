
# PersonaShift GPT 語境整合模組

此模組展示如何將角色偏移狀態輸出為 AI 調用所需的語境資料格式（JSON 物件）。

## 📡 結構輸出內容

```json
{
  "character_id": "LYF-4322",
  "type": "穩定型",
  "trust_level": 50,
  "bias_shift": 2,
  "tone": "溫和、親切",
  "memory_snippet": ["你支持了角色。", "..."]
}
```

## 💡 應用方向

- 將此 JSON 資料注入 GPT 系統 prompt 中，改變回應風格與立場
- 成為個性驅動 AI 劇情角色的基礎人格模組

未來可導入人物動機圖譜與敘事任務需求進一步強化智能行為生成。


# 🧠 PersonaShift Engine  
*A Modular Framework for Emotionally-Aware NPCs and Narrative Personality Drift Systems*  
*一套模組化的情感反應 NPC 生成系統與人格偏移敘事框架*

---

## 📌 What is PersonaShift Engine? / PersonaShift Engine 是什麼？

**PersonaShift Engine** is an open-source behavioral engine designed to help creators develop **emotionally dynamic, personality-adaptive AI characters** for games, simulations, and narrative worlds — even with minimal resources.

PersonaShift Engine 是一套開源的行為生成引擎，協助創作者打造具備「情緒變化」、「人格演進」能力的 AI 角色，適用於遊戲、模擬世界與互動式敘事，讓即使是小型創作團隊，也能創造出超越傳統 NPC 的深度互動角色。

---

## 🎯 Why this matters / 為什麼它重要？

- 💬 Most NPCs today are static and scripted. PersonaShift lets them grow, change, lie, remember, and even suffer breakdowns.  
  現今大多數 NPC 是靜態的、腳本驅動的；PersonaShift 讓他們能成長、轉變、說謊、記憶，甚至崩潰。

- 🎮 It makes Rockstar-level NPC systems *reachable* for indie developers.  
  它讓 Rockstar 級別的 NPC 系統，對獨立開發者來說成為可能。

- 🧱 It’s modular, human-readable, and can be run with or without external AI models.  
  模組化、可讀性高，無需大型語言模型也能執行。

---

## 🧬 Core Concepts / 核心概念

| Module 模組名稱 | Function 功能 |
|-----------------|----------------|
| `BasePersonality` | Initial personality traits & motivation 設定初始性格與動機 |
| `EmotionalDrift` | Tracks mood changes & life events 追蹤情緒與經歷變化 |
| `NarrativeResponse` | Generates context-based reactions 產生情境中的語言／行為反應 |
| `PersonaLog` | Stores evolution over time 記錄人格成長歷程 |
| `YAML/JSON Profile` | Editable profiles for easy control 可編輯格式，模組快速設計與重構 |

---

## 🚀 Who is this for? / 適合哪些創作者？

- 🧑‍💻 Indie Game Developers / 獨立遊戲開發者  
- 🎭 Narrative Designers / 劇情與互動體驗設計者  
- 🤖 AI + Storytelling Enthusiasts / 喜歡結合 AI 與敘事的創作者  
- 🧠 Psychology Sim Modelers / 心理模擬與角色養成模型愛好者  

---

## 🧱 Project Structure / 專案結構總覽

```
PersonaShift-Engine/
├── examples/                ← 人格偏移樣本與紀錄
├── tools/                   ← 測試與轉換工具腳本
├── docs/                    ← 架構圖與系統原理文件
├── data/                    ← 性格模組資料庫
├── LICENSE                  ← MIT授權
├── README.md                ← 本文件
```

---

## 💌 Notice on Naming Conflict / 名稱公告

This project is **not affiliated** with the similarly named repository [SahilSaxena007/EmpathAI](https://github.com/SahilSaxena007/EmpathAI).  
此專案與名稱類似之其他倉庫無任何關聯。請以本頁內容為準。

聯絡方式 Contact: `uvx8299@gmail.com`

---

## ✅ Next Steps / 下一步？

1. Explore the examples to see how a character shifts over time.  
   查看範例角色如何在互動中逐漸轉變。

2. Use the tools/ folder to simulate persona evolution locally.  
   使用 tools/ 資料夾的模擬器進行本地互動測試。

3. Contribute your own YAML profiles to extend this engine.  
   投稿你設計的 YAML 角色模組，一起擴充這套系統！

---

## 🛠 License

MIT License – Free to use, modify, and distribute with attribution.  
MIT 授權 – 可自由使用、修改與散布，請註明原作者。

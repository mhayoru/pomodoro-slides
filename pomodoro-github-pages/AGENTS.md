# AGENTS.md — Pomodoro 研究型 LLM Wiki 維護規範

## 1. 專案資料夾結構規範（GitHub Pages 相容架構）
- `AGENTS.md`（最外層）：給 AI 的規則，開工前必讀。
- `README.md`（最外層）：專案說明文件。
- `index.html`（最外層）：教學型 HTML 簡報首頁（確保 GitHub Pages 可直接開啟）。
- `style.css` & `app.js`（最外層）：簡報樣式與互動切換腳本。
- `images/`：網站與簡報使用的圖片素材資料夾。
- `notes/`：個人研究筆記與 LLM Wiki 知識庫所在目錄：
  - `notes/index.md`：Wiki 全站分類索引目錄。
  - `notes/log.md`：Wiki 演進時間軸日誌。
  - `notes/raw/`：原始資料層（5 篇核心文獻，唯讀不可修改）。
  - `notes/wiki/concepts/`：核心認知心理學與教育理論機制頁面。
  - `notes/wiki/methods/`：標準執行流程、大學生備考策略與適用限制頁面。
  - `notes/wiki/sources/`：單篇文獻獨立摘要頁。

## 2. 專案目標與語言規則
- **核心目標**：將番茄鐘工作法（Pomodoro Technique）的學術論文與權威指南轉化為實務策略與教學簡報素材。
- **目標受眾**：大學生與研究生（專注於備考、論文寫作、對抗拖延症，重視科學機制與數據背書）。
- **資訊萃取優先序**：
  1. 認知心理學與教育理論機制（核心重點）。
  2. 實證研究數據（樣本數、對照實驗結果、疲勞度指標）。
  3. 大學生實戰應用與限制。
- **語言與術語規範**：一律使用繁體中文撰寫，所有核心學術理論與專業術語首次出現時必須附上英文原文，格式為：`繁體中文名詞 (English Term)`。

## 3. 核心操作流程（Operations）
- **Ingest（Human-in-the-loop）**：新增資料至 `notes/raw/` 時，先向使用者報告摘要與預計更新的 `notes/wiki/` 頁面清單，經確認後再寫入並更新 `notes/index.md` 與 `notes/log.md`。
- **Query**：生成或更新最外層 `index.html` 簡報時，嚴格依據 `notes/wiki/` 內容並標註引用來源（Citation）。
- **Lint**：定期檢查 `notes/wiki/` 頁面間是否存在數據矛盾、孤島頁面或遺漏的引用標註。

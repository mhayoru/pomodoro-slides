# 🍅 番茄鐘工作法（Pomodoro Technique）LLM Wiki 與教學簡報

本專案採用 Karpathy 的 **LLM Wiki** 模式建構個人研究知識庫，並將研究成果轉化為可透過 **GitHub Pages** 直接瀏覽的教學型 HTML 簡報。

## 📂 資料夾結構說明
- `AGENTS.md`：AI 維護知識庫與生成簡報的運作規則（Schema）。
- `index.html` / `style.css` / `app.js`：教學型 HTML 簡報網頁（支援鍵盤左右鍵切換投影片）。
- `images/`：網站與簡報圖片素材。
- `notes/`：LLM Wiki 知識庫（包含 `raw/` 原始資料、`wiki/` 結構化知識頁面、`index.md` 目錄與 `log.md` 日誌）。

## 🚀 GitHub Pages 部署方式
1. 將整個資料夾內的所有檔案上傳至 GitHub Repository 的根目錄。
2. 前往 Repository 的 **Settings → Pages**。
3. 在 **Source** 選擇 `Deploy from a branch`，Branch 選擇 `main` / `/(root)` 並儲存，即可透過網址直接瀏覽教學簡報！

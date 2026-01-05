# App - 多產品登陸頁面

## 專案概述
基於 Jekyll 的靜態網站，用於託管多個產品的登陸頁面。部署於 GitHub Pages。

## 技術棧
- **靜態網站生成器**: Jekyll 4.3
- **CSS**: Tailwind CSS (CDN)
- **Markdown 解析器**: marked.js
- **託管平台**: GitHub Pages

## 專案結構
```
app/
├── _config.yml          # Jekyll 設定 (baseurl: /app)
├── _data/
│   └── apps.yml         # 產品設定
├── _includes/           # 共用元件
│   ├── head.html
│   ├── nav.html
│   ├── footer.html
│   └── loading-skeleton.html
├── _layouts/
│   └── app.html         # 主版型
├── assets/
│   ├── js/loader.js     # 動態 Markdown 載入器 & 多語系
│   └── images/{product}/
├── crossread/           # 產品資料夾
│   ├── index.html
│   ├── privacy.html
│   ├── terms.html
│   └── markdown/        # 多語系內容
│       ├── index.en.md
│       ├── index.zh.md
│       ├── privacy.en.md
│       └── ...
├── Gemfile
└── package.json
```

## 指令
```bash
npm start      # 啟動本機開發伺服器 http://localhost:4000/app/
npm run build  # 建置正式版本
```

## 新增產品步驟
1. 在 `_data/apps.yml` 新增產品設定
2. 在 `_config.yml` 新增預設值
3. 建立產品資料夾，包含 `index.html`、`privacy.html`、`terms.html`
4. 在 `{product}/markdown/` 新增多語系內容
5. 在 `assets/images/{product}/` 新增圖片

## URL 結構
- 本機: `http://localhost:4000/app/{product}/`
- 正式: `https://reidevbx.github.io/app/{product}/`

## 多語系 (i18n)
- 支援語言: 英文 (en)、中文 (zh)
- 語言透過 `?lang=` URL 參數保持
- 內容從 `markdown/{page}.{lang}.md` 載入

## 重要注意事項
- Markdown 中的圖片路徑必須使用絕對路徑: `/app/assets/images/...`
- 所有內部連結應包含 `?lang=${lang}` 以保持語言選擇

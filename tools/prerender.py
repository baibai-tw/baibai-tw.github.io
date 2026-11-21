"""把節日、婚喪喜慶、廟宇、金紙名稱四頁與大節日獨立頁「先跑一次」存成完整 HTML。
改了 assets/data.js 或頁面程式後執行：python3 tools/prerender.py
讓不執行 JavaScript 的搜尋／AI 爬蟲也讀得到內容；瀏覽器打開時程式照常重畫。"""
import http.server, threading, functools, re, pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
FEST = ['chunjie', 'tiangong', 'qingming', 'duanwu', 'zhongyuan', 'zhongqiu', 'dongzhi', 'weiya', 'chuxi']
PAGES = ['jieri', 'hunsang', 'miaoyu', 'mingcheng'] + ['jieri/' + f for f in FEST]
MARK = '<!-- prerendered: 內容由 tools/prerender.py 產生，資料改了要重跑 -->'

srv = http.server.ThreadingHTTPServer(('127.0.0.1', 8765), functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT)))
threading.Thread(target=srv.serve_forever, daemon=True).start()
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    pg = b.new_page()
    for name in PAGES:
        pg.goto(f'http://127.0.0.1:8765/{name}/', wait_until='networkidle')
        pg.wait_for_timeout(300)
        html = '<!DOCTYPE html>\n' + pg.evaluate('document.documentElement.outerHTML')
        html = html.replace(MARK, '')
        html = re.sub(r'(<head>)', r'\1' + MARK, html, count=1)
        (ROOT / name / 'index.html').write_text(html, encoding='utf-8')
        print(name, len(html))
    b.close()
srv.shutdown()

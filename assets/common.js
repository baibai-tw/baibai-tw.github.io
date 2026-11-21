/* 共用：圖示、頁尾來源 */
window.ICONS = {
  /* 圖示統一：墨色細線（線寬 1.6），顏色跟著文字；選中／今天時外層改紅 */
  fest: '<svg class="ico" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="節日"><path d="M20 3v4M15 8h10M15 10c-8 3-8 17 0 20h10c8-3 8-17 0-20z"/><path d="M10.2 16h19.6M10.2 24h19.6"/><path d="M15 32h10M17 32v6M23 32v6"/></svg>',
  wed: '<svg class="ico" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="婚"><rect x="8" y="7" width="24" height="27" rx="2"/><path d="M13 14h6M13 18h6M13 22h6M16 14v12M21 14h6M21 18h6M21 22h6M24 14v12M12 28h16"/></svg>',
  /* 喜慶：「喜」古字形，上鼓下口 */
  joy: '<svg class="ico" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="喜慶"><path d="M20 3.5v5M15.5 6h9"/><rect x="11" y="10" width="18" height="10" rx="2"/><path d="M11 15h18M14 20l-2.5 4M26 20l2.5 4M11 24h18"/><rect x="14" y="27.5" width="12" height="7.5" rx="1"/></svg>',
  temple: '<svg class="ico" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="廟宇"><path d="M5 15c5 0 9-3 15-8 6 5 10 8 15 8"/><path d="M9 15v3h22v-3M12 18v14M28 18v14M20 18v14M7 33h26"/></svg>',
  /* 喪：素白直式信封 */
  mourn: '<svg class="ico" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="喪"><rect x="12" y="5" width="16" height="30" rx="1.5"/><path d="M12 10.5h16"/></svg>',
  firecracker: '<b class="fire-l">鞭炮</b>'
};
ICONS.daily = ICONS.fest; ICONS.work = ICONS.fest;

window.renderSources = function(el){
  const B = window.BAIBAI;
  el.innerHTML = '<p><b style="color:var(--ink-2)">謝鈺豐香店</b>・新北市金山區中正路5號・電話 02-2498-7881・每日 07:00–20:00・付款：現金、台灣Pay</p><p>金紙不在多，心意最重要。</p><p>本站內容整理自民俗資料與店內經驗，僅供參考；各地習俗不同，請以在地慣例為準，也歡迎到店詢問。標「常見」的是一般常見做法，各地不一。</p>' +
    '<details><summary>參考來源</summary><ol>' +
    B.sources.map(s => '<li><a href="' + s[1] + '" target="_blank" rel="noopener">' + s[0] + '</a></li>').join('') +
    '</ol></details>';
};

/* 把金紙名稱轉成可點的連結（連到金紙名稱頁） */
window.linkPapers = function(text, base){
  const names = window.BAIBAI.papers.map(p => [p.name, p.id]).sort((a, b) => b[0].length - a[0].length);
  const esc = s => s.replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
  let out = '', i = 0, plain = '';
  while (i < text.length){
    const hit = names.find(([n]) => text.startsWith(n, i));
    if (hit){
      out += esc(plain); plain = '';
      out += '<a class="chip" href="' + base + '#' + hit[1] + '">' + hit[0] + '</a>';
      i += hit[0].length;
    } else { plain += text[i]; i++; }
  }
  return out + esc(plain);
};

/* 身分：象棋子。基本身分黑子；特殊群組（BAIBAI.roleSpecial）紅子 */
window.roleBadge = function(roles, size){
  const M = {fisher:['漁','討海人'], farmer:['農','作穡人'], shop:['商','做生意'], factory:['工','工廠']};
  const SP = (window.BAIBAI && BAIBAI.roleSpecial) || {};
  const s = size || 22;
  return (roles || []).map(r => {
    const m = M[r] || (SP[r] && [SP[r].ch, SP[r].name]); if (!m) return '';
    const red = !M[r];
    return '<svg class="rb" width="' + s + '" height="' + s + '" viewBox="0 0 32 32" role="img" aria-label="' + m[1] + (red ? '' : '專屬') + '"><title>' + m[1] + '</title><circle cx="16" cy="16" r="15" fill="#efe2c4" stroke="#8a6a3f" stroke-width="1.2"/><circle cx="16" cy="16" r="13.2" fill="none" stroke="#8a6a3f" stroke-width=".6"/><text x="16" y="23" text-anchor="middle" font-size="20" font-weight="700" fill="' + (red ? '#a3392a' : '#1b1916') + '" font-family="serif">' + m[0] + '</text></svg>';
  }).join('');
};

/* 共用：找某天的祭祀日 */
window.eventsOnShared = function(date){
  const B = window.BAIBAI, L = window.Lunar, DAY = 86400000;
  const l = L.lunarOf(date), out = [];
  for (const e of B.days){
    if (e.rule === 'monthly' && e.d.includes(l.d)) out.push(e);
    else if (e.rule === 'lunar' && !l.leap && l.m === e.m && l.d === e.d) out.push(e);
    else if (e.rule === 'monthEnd' && !l.leap && l.m === e.m){
      const n = L.lunarOf(new Date(date.getTime() + DAY));
      if (n.m !== e.m || n.leap) out.push(e);
    }
    else if (e.rule === 'term' && L.termDate(date.getUTCFullYear(), e.term).getTime() === date.getTime()) out.push(e);
    else if (e.rule === 'tianshe' && L.isTianshe(date)) out.push(e);
  }
  return { l, ev: out };
};

/* 大節日獨立頁網址 */
window.festUrl = e => e && e.slug ? '/jieri/' + e.slug + '/' : '';

/* 拜的順序＋展開說明（各地說法、參考） */
window.moreBlock = function(it, base){
  let h = '';
  if (it.steps) h += '<ol class="steps">' + it.steps.map(t => '<li>' + linkPapers(t, base) + '</li>').join('') + '</ol>';
  if (it.more || it.ref) h += '<details class="more"><summary>各地說法與說明</summary>' +
    (it.more ? '<p>' + linkPapers(it.more, base) + '</p>' : '') +
    (it.ref ? '<p class="ref"><span class="ref-l">參考</span>' + linkPapers(it.ref, base) + '</p>' : '') + '</details>';
  return h;
};

/* 依對象分類：拜神明、拜祖先、地基主、好兄弟 */
window.whoCats = function(it){
  const t = (it.who || '') + '｜' + (it.paper || '') + '｜' + (it.name || '');
  const c = [];
  if (/祭祖|祖先|祖墳|亡者|往生|掃墓|做七|百日|對年|合爐|撿骨|出殯|致意/.test(t)) c.push('zu');
  if (/地基主/.test(t)) c.push('di');
  if (/好兄弟|普渡|鬼門|無形/.test(t)) c.push('xd');
  if (/神|土地公|后土|媽祖|天公|玉皇|三界公|財神|帝|王|君|娘|天官|地官|水官|月下|大眾爺|床母|婆姐|壽金|福金|四色金|五色金|三色金|犒軍/.test(t)) c.push('shen');
  return c.length ? c.join(' ') : 'shen zu di xd';
};
window.WHO = [['', '全部'], ['shen', '拜神明'], ['zu', '拜祖先'], ['di', '地基主'], ['xd', '好兄弟']];


/* 婚喪喜慶卡片 */
/* 店家 7 公里內墓園・靈骨塔清單（預設收合）。box=true 用大分類框（節日頁），否則用卡片內的展開條 */
window.cemBlock = function(box){
  const B = window.BAIBAI; if (!B.cemeteries) return '';
  const list = '<ul class="big-list" style="padding:0 ' + (box ? '16px' : '0') + ' 8px">' + B.cemeteries.map(([n, km, kind, pid]) => '<li><i></i><span><b>' + n + '</b> <span class="muted">' + kind + '・約 ' + km + ' 公里</span></span><a class="muted" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(n.replace(/（.*?）/, '')) + '&query_place_id=' + pid + '" target="_blank" rel="noopener">地圖</a></li>').join('') + '</ul>' +
    '<p class="muted" style="padding:0 ' + (box ? '16px 14px' : '0 4px') + ';margin:0;font-size:13px">各墓園、納骨塔對燒金紙的規定不同，有的集中焚燒或不開放焚燒，出發前可先確認。</p>';
  return box ? '<details class="cat" id="cem"><summary>' + ICONS.mourn + '<span class="cat-name">附近墓園・靈骨塔</span><span class="muted">7 公里內</span><span class="chev" aria-hidden="true">›</span></summary>' + list + '</details>'
    : '<details class="more"><summary>附近墓園・靈骨塔（店家 7 公里內）</summary>' + list + '</details>';
};

window.occCard = function(it, base){
  const B = window.BAIBAI;
  return '<div class="card" data-who="' + whoCats(it) + '"><h4 style="margin:0;font-family:var(--serif);font-size:18px">' + it.name + (it.common ? ' <span class="star">常見</span>' : '') + (it.roles ? ' ' + roleBadge(it.roles) : '') + '</h4>' +
    moreBlock({steps: it.steps}, base) + '<dl class="kv">' +
    '<dt>金紙</dt><dd>' + linkPapers(it.paper, base) + '</dd>' +
    (it.incense ? '<dt>香燭</dt><dd>' + it.incense + '</dd>' : '') +
    (it.extra ? '<dt>備註</dt><dd>' + linkPapers(it.extra, base) + '</dd>' : '') + '</dl>' +
    moreBlock({more: it.more, ref: it.ref}, base) + (it.cem ? cemBlock(false) : '') +
    (it.shop ? '<div class="shopnote"><span class="seal">香</span><span>' + it.shop + '</span></div>' : '') +
    (it.fire ? '<div class="fire">' + ICONS.firecracker + '<span>' + B.fire[it.fire] + '</span></div>' : '') + '</div>';
};

window.templeCard = function(t, base){
  return '<dl class="kv"><dt>金紙</dt><dd>' + linkPapers(t.paper, base) + '</dd>' +
    (t.offer ? '<dt>供品</dt><dd>' + t.offer + '</dd>' : '') +
    (t.extra ? '<dt>備註</dt><dd>' + linkPapers(t.extra, base) + '</dd>' : '') + '</dl>';
};

/* 地區說明＋依對象快捷。mode 'filter'：本頁篩選；'link'：連到節日頁篩選 */
window.whoBar = function(el, mode, cur){
  const B = window.BAIBAI;
  const tags = WHO.map(([k, n]) => mode === 'filter'
    ? '<button type="button" class="who' + (k === (cur || '') ? ' on' : '') + '" data-k="' + k + '" aria-pressed="' + (k === (cur || '')) + '">' + n + '</button>'
    : (k === 'shen' || k === '') && k === (cur || '') ? '<span class="who on">' + n + '</span>'
    : '<a class="who" href="/jieri/' + (k ? '?who=' + k : '') + '">' + n + '</a>').join('');
  el.innerHTML = '<p class="region-note">' + B.regionNote + '</p>' + (mode === 'note' ? '' : '<div class="who-bar" role="group" aria-label="依祭祀對象">' + tags + '</div>');
  if (mode !== 'filter') return;
  const main = document.querySelector('main');
  const set = k => {
    if (k) main.dataset.filter = k; else delete main.dataset.filter;
    el.querySelectorAll('button.who').forEach(b => { const on = b.dataset.k === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  };
  el.querySelectorAll('button.who').forEach(b => b.onclick = () => set(b.dataset.k));
  set(cur || '');
};

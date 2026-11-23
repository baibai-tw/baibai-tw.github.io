/* 大節日獨立頁：依 <main data-slug> 找到 BAIBAI.days 裡的節日，算出下一次日期並畫出內容。
   主視覺：節日資料有 kv（{f, q, p, w}）就嵌入該節日的動畫，沒有就先放首頁竹林備用圖。 */
(function(){
  const B = BAIBAI, L = Lunar, DAY = 86400000, NAMES = '/mingcheng/', WD = ['日','一','二','三','四','五','六'];
  const main = document.querySelector('main[data-slug]'), slug = main.dataset.slug;
  const e = B.days.find(x => x.slug === slug); if (!e) return;
  const now = new Date(), today = L.utc(now.getFullYear(), now.getMonth() + 1, now.getDate());
  let hit = null;
  for (let i = 0; i < 400 && !hit; i++){
    const dt = new Date(today.getTime() + i * DAY), r = eventsOnShared(dt);
    if (r.ev.includes(e)) hit = { dt, l: r.l, days: i };
  }
  const name = e.name.split('・')[0];
  const md = d => d.getUTCFullYear() + '/' + (d.getUTCMonth() + 1) + '/' + d.getUTCDate() + '（' + WD[d.getUTCDay()] + '）';

  /* 主視覺 */
  const D = '/assets/mojing/', kv = e.kv || { p: 'cover-3x4.webp', w: 'cover-16x10.webp' };
  document.getElementById('festHero').innerHTML =
    '<picture class="fh-img" aria-hidden="true"><source media="(orientation:landscape) and (min-width:700px)" srcset="' + D + kv.w + '"><img src="' + D + kv.p + '" alt=""></picture>' +
    (kv.f ? '<iframe class="fh-anim" src="' + D + kv.f + '?embed=1' + (kv.q || '') + '" title="' + name + '主視覺" tabindex="-1" aria-hidden="true"></iframe>' : '') +
    '<div class="fh-name">' + name + '</div>';
  const fa = main.querySelector('.fh-anim');
  if (fa) addEventListener('message', m => { if (m.source === fa.contentWindow && m.data && m.data.mojing === 'ready') fa.classList.add('on'); if (m.source === fa.contentWindow && m.data && m.data.mojing === 'unsupported') fa.remove(); });

  /* 內容 */
  const row = (k, v) => v ? '<dt>' + k + '</dt><dd>' + v + '</dd>' : '';
  let h = '<p class="fest-date">' + (hit ? '農曆' + L.label(hit.l) + '・國曆 ' + md(hit.dt) + '<span class="fest-cd">' + (hit.days === 0 ? '就是今天' : '還有 ' + hit.days + ' 天') + '</span>' : '') + '</p>';
  if (e.steps) h += '<section><h2>拜的順序</h2>' + moreBlock({steps: e.steps}, NAMES) + '</section>';
  h += '<section><h2>準備什麼</h2><dl class="kv">' + row('拜誰', e.who) + row('金紙', linkPapers(e.paper, NAMES)) + row('供品', e.offer) + row('備註', e.extra && linkPapers(e.extra, NAMES)) + '</dl>' +
    moreBlock({more: e.more, ref: e.ref}, NAMES) + '</section>';
  if (e.shop) h += '<div class="shopnote"><span class="seal">香</span><span>' + e.shop + '</span></div>';
  if (e.fire) h += '<div class="fire">' + ICONS.firecracker + '<span>' + B.fire[e.fire] + '</span></div>';
  if (slug === 'qingming') h += cemBlock(true);
  h += '<p class="region-note" style="margin-top:18px">' + B.regionNote + '</p>';
  h += '<p><a href="/jieri/">← 回節日日曆</a></p>';
  document.getElementById('festBody').innerHTML = h;
  renderSources(document.getElementById('foot'));
})();

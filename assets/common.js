/* 共用：圖示、頁尾來源 */
window.ICONS = {
  /* 喜慶：祭典香爐 */
  joy: '<svg class="ico" viewBox="0 0 40 40" aria-label="喜慶" role="img"><path d="M14 6c1 2-1 3 0 5M20 4c1 2-1 3 0 6M26 6c1 2-1 3 0 5" stroke="#a3392a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M8 15h24l-2 12a8 8 0 0 1-8 6h-4a8 8 0 0 1-8-6z" fill="#a3392a"/><path d="M6 14h28" stroke="#7e2a1e" stroke-width="2.4" stroke-linecap="round"/><path d="M13 33l-2 4M27 33l2 4M20 34v3" stroke="#7e2a1e" stroke-width="2" stroke-linecap="round"/><text x="20" y="27" text-anchor="middle" font-size="9" fill="#f6e0b5" font-family="serif">囍</text></svg>',
  /* 喪事：白包 */
  mourn: '<svg class="ico" viewBox="0 0 40 40" aria-label="喪事" role="img"><rect x="9" y="5" width="22" height="31" rx="2" fill="#fff" stroke="#3a3833" stroke-width="1.6"/><path d="M9 11l11 7 11-7" fill="none" stroke="#3a3833" stroke-width="1.4"/><text x="20" y="31" text-anchor="middle" font-size="9" fill="#3a3833" font-family="serif">奠</text></svg>',
  /* 日常：清香 */
  daily: '<svg class="ico" viewBox="0 0 40 40" aria-label="日常祭祀" role="img"><path d="M15 5c2 3-2 4 0 7M20 3c2 3-2 4 0 8M25 5c2 3-2 4 0 7" stroke="#8a8172" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M15 13v13M20 12v14M25 13v13" stroke="#a3392a" stroke-width="1.6"/><path d="M9 26h22l-3 9H12z" fill="#c9a24a"/></svg>',
  /* 節日：燈籠 */
  fest: '<svg class="ico" viewBox="0 0 40 40" aria-label="節日" role="img"><path d="M20 3v4" stroke="#7e2a1e" stroke-width="1.6"/><rect x="15" y="7" width="10" height="3" rx="1" fill="#7e2a1e"/><ellipse cx="20" cy="20" rx="11" ry="10" fill="#c4553f"/><path d="M20 10v20M14 11.5c-3 5-3 12 0 17M26 11.5c3 5 3 12 0 17" stroke="#a3392a" stroke-width="1.2" fill="none"/><rect x="15" y="29" width="10" height="3" rx="1" fill="#7e2a1e"/><path d="M18 32v5M20 32v6M22 32v5" stroke="#c9a24a" stroke-width="1.2"/></svg>',
  firecracker: '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="4" y="5" width="6" height="10" rx="1" fill="#a3392a"/><path d="M7 5c0-2 2-2 3-4" stroke="#7a2a1d" fill="none"/><circle cx="11" cy="1.5" r="1.2" fill="#e2a23b"/></svg>'
};

window.renderSources = function(el){
  const B = window.BAIBAI;
  el.innerHTML = '<p>本站內容整理自民俗資料與店內經驗，僅供參考；各地習俗不同，請以在地慣例為準，也歡迎到店詢問。<span class="star">＊</span>表示一般常見做法，各地不一。</p>' +
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

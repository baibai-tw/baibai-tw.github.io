/* 農曆換算：用瀏覽器內建的中國曆（Intl），不需外部程式庫。 */
(function(){
  const fmt = new Intl.DateTimeFormat('en-u-ca-chinese', {year:'numeric', month:'numeric', day:'numeric', timeZone:'UTC'});
  const MN = ['','正','二','三','四','五','六','七','八','九','十','冬','臘'];
  const DN = ['','初一','初二','初三','初四','初五','初六','初七','初八','初九','初十',
    '十一','十二','十三','十四','十五','十六','十七','十八','十九','二十',
    '廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];

  function utc(y, m, d){ return new Date(Date.UTC(y, m - 1, d)); }

  function lunarOf(date){
    const p = {};
    for (const x of fmt.formatToParts(date)) p[x.type] = x.value;
    const leap = /bis/.test(p.month);
    return { y: +p.relatedYear, m: parseInt(p.month, 10), d: +p.day, leap };
  }

  /* 節氣（21 世紀壽星公式）：一、二月的節氣用 (Y-1)/4，其餘用 Y/4 */
  const TERM = { lichun:[2,3.87], lixia:[5,5.52], qingming:[4,4.81], liqiu:[8,7.5], lidong:[11,7.438], dongzhi:[12,21.94] };
  function termDate(y, which){
    const [m, C] = TERM[which], Y = y % 100, L = m <= 2 ? Math.floor((Y - 1) / 4) : Math.floor(Y / 4);
    return utc(y, m, Math.floor(Y * 0.2422 + C) - L);
  }

  /* 日干支：1949-10-01 為甲子日（0=甲子） */
  const A0 = Date.UTC(1949, 9, 1);
  function dayGZ(date){ return (((Math.round((date.getTime() - A0) / 86400000)) % 60) + 60) % 60; }

  /* 天赦日：春戊寅、夏甲午、秋戊申、冬甲子（四季以立春、立夏、立秋、立冬分界） */
  function isTianshe(date){
    const y = date.getUTCFullYear(), t = date.getTime();
    const need = t >= termDate(y, 'lichun').getTime() && t < termDate(y, 'lixia').getTime() ? 14
      : t >= termDate(y, 'lixia').getTime() && t < termDate(y, 'liqiu').getTime() ? 30
      : t >= termDate(y, 'liqiu').getTime() && t < termDate(y, 'lidong').getTime() ? 44 : 0;
    return dayGZ(date) === need;
  }

  function label(l){
    return (l.leap ? '閏' : '') + MN[l.m] + '月' + DN[l.d];
  }

  /* 二十四節氣（21 世紀壽星公式） */
  const T24 = [['小寒',1,5.4055],['大寒',1,20.12],['立春',2,3.87],['雨水',2,18.73],['驚蟄',3,5.63],['春分',3,20.646],['清明',4,4.81],['穀雨',4,20.1],['立夏',5,5.52],['小滿',5,21.04],['芒種',6,5.678],['夏至',6,21.37],['小暑',7,7.108],['大暑',7,22.83],['立秋',8,7.5],['處暑',8,23.13],['白露',9,7.646],['秋分',9,23.042],['寒露',10,8.318],['霜降',10,23.438],['立冬',11,7.438],['小雪',11,22.36],['大雪',12,7.18],['冬至',12,21.94]];
  function terms24(y){ const Y = y % 100; return T24.map(([n, m, C]) => ({ name: n, date: utc(y, m, Math.floor(Y * 0.2422 + C) - (m <= 2 ? Math.floor((Y - 1) / 4) : Math.floor(Y / 4))) })); }
  function termOf(date){
    const y = date.getUTCFullYear(), all = terms24(y - 1).concat(terms24(y), terms24(y + 1)), t = date.getTime();
    let k = 0; while (k + 1 < all.length && all[k + 1].date.getTime() <= t) k++;
    return { name: all[k].name, date: all[k].date, today: all[k].date.getTime() === t, next: all[k + 1] };
  }
  window.Lunar = { lunarOf, termDate, termOf, terms24, isTianshe, dayGZ, label, dayName: d => DN[d], monthName: m => MN[m] + '月', utc };
})();

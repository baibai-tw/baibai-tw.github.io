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

  window.Lunar = { lunarOf, termDate, isTianshe, dayGZ, label, dayName: d => DN[d], monthName: m => MN[m] + '月', utc };
})();

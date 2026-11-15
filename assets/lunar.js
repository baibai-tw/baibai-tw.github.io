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

  /* 節氣（21 世紀壽星公式，誤差極少） */
  function termDate(y, which){
    const Y = y % 100, C = which === 'qingming' ? 4.81 : 21.94;
    const day = Math.floor(Y * 0.2422 + C) - Math.floor((Y - 1) / 4);
    return which === 'qingming' ? utc(y, 4, day) : utc(y, 12, day);
  }

  function label(l){
    return (l.leap ? '閏' : '') + MN[l.m] + '月' + DN[l.d];
  }

  window.Lunar = { lunarOf, termDate, label, dayName: d => DN[d], monthName: m => MN[m] + '月', utc };
})();

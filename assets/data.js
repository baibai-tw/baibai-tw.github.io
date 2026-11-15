/* 拜拜參考資料。內容整理自店內既有資料（金紙區域名稱、農曆行事曆、婚喪喜慶清單）。
   改內容只要改這個檔案。common:true 表示「一般常見做法，各地不同」。 */
window.BAIBAI = {

/* ── 金紙名稱 ── */
papers: [
  {id:'tiangongjin', name:'天公金', alias:'頂極金（台南）', tl:'Thinn-kong-kim', ok:true, cat:'神明金', use:'玉皇大帝；尺寸最大張', note:'印有「叩答恩光」'},
  {id:'tianjin', name:'天金', alias:'尺金（南部）', tl:'thinn-kim', cat:'神明金', use:'天公、三界公', note:'市面上也有天金與尺金成組的「天尺金」'},
  {id:'tianchijin', name:'天尺金', alias:'', tl:'', cat:'神明金', use:'天公', note:'天金和尺金 1 比 1 成組'},
  {id:'dabo', name:'大箔壽金', alias:'大百壽金、財子壽金、太極金（南部）', tl:'tuā-po̍h-siū-kim', cat:'神明金', use:'天公、三官大帝等上界神明；也用來拜王爺、媽祖', note:'常和天金搭配'},
  {id:'shoujin', name:'壽金', alias:'大花壽金（南部）', tl:'siū-kim', ok:true, cat:'神明金', use:'大多數神明、神明誕辰、祈福', note:'有大花、二花兩種'},
  {id:'xiaoshou', name:'小壽金', alias:'三童子', tl:'', cat:'神明金', use:'三色金之一', note:''},
  {id:'guajin', name:'刈金', alias:'割金、四方金（中部）', tl:'kuah-kim', ok:true, cat:'神明金', use:'神明、祖先、地基主、犒軍', note:'四方金的地域與用途各地說法不一'},
  {id:'fujin', name:'福金', alias:'土地公金', tl:'hok-kim', cat:'神明金', use:'土地公（福德正神）', note:'有台灣紙、竹紙、大塊金箔等不同樣式'},
  {id:'dafujin', name:'大福金', alias:'', tl:'', cat:'神明金', use:'中部拜土地公', note:''},
  {id:'lianhua', name:'蓮花金', alias:'查某子金（南部）', tl:'liân-hue-kim', ok:true, cat:'神明金', use:'位階較低的神祇、往生者', note:'屬於刈金的一種；南部造墓、撿骨時由出嫁的女兒燒'},
  {id:'jiujin', name:'九金', alias:'（南部用語）', tl:'káu-kim', cat:'神明金', use:'神明、犒將、拜門口、祖先', note:''},
  {id:'penjin', name:'盆金', alias:'（南部用語）', tl:'phûn-kim', cat:'神明金', use:'天公、謝神', note:''},
  {id:'zhongjin', name:'中金', alias:'中仔金', tl:'', cat:'神明金', use:'謝外方、拜山神水神', note:'現在少見'},
  {id:'dayin', name:'大銀', alias:'', tl:'tuā-gîn', ok:true, cat:'銀紙', use:'祖先', note:''},
  {id:'xiaoyin', name:'小銀', alias:'', tl:'sió-gîn', ok:true, cat:'銀紙', use:'往生者、好兄弟、普渡、地基主', note:''},
  {id:'kuqian', name:'庫錢', alias:'', tl:'khòo-tsînn', ok:true, cat:'喪葬', use:'喪事、還庫', note:''},
  {id:'wangsheng', name:'往生錢', alias:'', tl:'', cat:'喪葬', use:'喪事、超渡', note:'印有往生咒'},
  {id:'jingyi', name:'經衣', alias:'更衣', tl:'', cat:'配件', use:'好兄弟、普渡、地基主', note:''},
  {id:'caishen', name:'五路財神金', alias:'財神金', tl:'', cat:'神明金', use:'正月初五迎財神、開工開市', note:'商家迎財神常與壽金、刈金一起準備'},
  {id:'jiama', name:'甲馬', alias:'', tl:'kah-bé', ok:true, cat:'配件', use:'迎神、送神、犒軍', note:''},
  {id:'gaoqian', name:'高錢', alias:'', tl:'', cat:'配件', use:'拜天公時掛在甘蔗上', note:''},
  {id:'chuangmu', name:'床母衣', alias:'鳥母衣', tl:'', cat:'配件', use:'床母、七娘媽、註生娘娘', note:''},
  {id:'jinbai', name:'金白錢', alias:'', tl:'', cat:'配件', use:'神明部將、壓墓', note:''},
  {id:'muzhi', name:'墓紙', alias:'五色紙、古仔紙', tl:'', cat:'配件', use:'清明壓在墳上', note:'一般不燒'}
],

/* 組合：會畫成卡片 */
combos: [
  {name:'三色金', items:[['xiaoshou','小壽金（三童子）'],['guajin','刈金'],['fujin','福金（土地公金）']], note:'最常見的基本組合'},
  {name:'拜土地公（北部）', items:[['fujin','福金'],['guajin','刈金'],['shoujin','壽金']], note:'中部常用壽金、大福金、四方金；南部常用壽金、福金、九金（臺灣文獻館）'}
],

/* ── 祭祀日：rule = 每月 / 農曆 / 節氣 / 月末 ── */
days: [
  {rule:'monthly', d:[1,15], name:'初一、十五拜神明', type:'daily', who:'神明、祖先', paper:'壽金、刈金；祖先用大銀'},
  {rule:'monthly', d:[2,16], name:'做牙（拜土地公）', type:'daily', roles:['shop','factory'], who:'土地公、地基主', paper:'福金；地基主用刈金加小銀', extra:'南部拜地基主常用九金；舊屋拜地基主可加經衣'},
  {rule:'lunar', m:1, d:1, name:'春節開正', type:'fest', big:30, offer:'', who:'神明、祖先', paper:'壽金、刈金、大銀', common:true},
  {rule:'lunar', m:1, d:4, name:'接神', type:'fest', who:'灶君、眾神', paper:'壽金、甲馬', extra:'甲馬用來迎神'},
  {rule:'lunar', m:1, d:5, name:'接財神・開工', type:'fest', only:true, roles:['shop','factory'], roleBig:14, who:'五路財神、福德正神', paper:'壽金、福金、刈金、五路財神金', offer:'三牲、發糕、糖果、橘子、香蕉、梨子、蘋果、帶葉鳳梨', extra:'正月初五是五路財神生日，商家多在這天或擇吉日開工。店裡沒有財神神位的，可在門口或廠內近門處設桌向天迎接', fire:'trad'},
  {rule:'lunar', m:1, d:9, name:'天公生', type:'fest', big:14, offer:'五牲、五齊或六齊、圈仔粿、甘蔗（掛高錢）', who:'玉皇大帝', paper:'天公金或天金、大箔壽金、壽金、刈金', extra:'高錢掛在甘蔗上；南部用頂極金、尺金、太極金。常配：五牲、五齊或六齊、圈仔粿、甘蔗'},
  {rule:'lunar', m:1, d:15, name:'上元・天官大帝誕辰', type:'fest', who:'三界公', paper:'大箔壽金、天金、壽金、刈金', common:true},
  {rule:'lunar', m:2, d:2, name:'頭牙・土地公生', type:'fest', roles:['farmer','shop','factory'], roleBig:14, offer:'三牲、發糕、水果', who:'土地公', paper:'福金、壽金'},
  {rule:'term', term:'qingming', name:'清明掃墓', type:'fest', big:21, shop:'店裡為同行的孩童與長輩準備了隨身小香袋，出門祭拜帶在身上，讓家人安心。歡迎到店詢問', offer:'墓紙（五色紙）、丁仔粿、鼠麴粿', who:'后土、祖先', paper:'先用壽金、福金、刈金拜后土，再用刈金和銀紙拜祖墳', extra:'墓紙（五色紙）壓墳；常配丁仔粿、鼠麴粿。新北市墓區的金紙要送到服務處集中焚化'},
  {rule:'lunar', m:3, d:23, name:'媽祖生', type:'fest', roles:['fisher'], roleBig:21, offer:'紅湯圓、麵線、發糕、紅龜粿、鮮花、清茶', who:'媽祖', paper:'大箔壽金、壽金、刈金', common:true},
  {rule:'lunar', m:4, d:16, name:'金包里二媽回娘家', type:'fest', only:true, roles:['fisher'], roleBig:14, who:'媽祖', paper:'金紙種類與份量依各家習慣，歡迎到店詢問', extra:'金山在地祭典：金包里慈護宮在農曆四月十六前後大退潮時，步行恭送二媽回野柳媽祖洞，是全台唯一的海岸遶境。實際日期依廟方公告'},
  {rule:'lunar', m:4, d:26, name:'神農大帝聖誕', type:'fest', only:true, roles:['farmer'], roleBig:14, who:'神農大帝（五穀王）', paper:'金紙種類與份量依各家習慣，歡迎到店詢問', extra:'農民祈求五穀豐收、風調雨順'},
  {rule:'lunar', m:5, d:5, name:'端午', type:'fest', big:14, offer:'粽子', who:'神明、祖先', paper:'壽金、刈金、大銀', common:true},
  {rule:'lunar', m:6, d:24, name:'關聖帝君聖誕', type:'fest', only:true, roles:['shop'], who:'關聖帝君（武財神）', paper:'金紙種類與份量依各家習慣，歡迎到店詢問'},
  {rule:'lunar', m:7, d:1, name:'開鬼門', type:'fest', who:'好兄弟', paper:'小銀、經衣', common:true},
  {rule:'lunar', m:7, d:7, name:'七娘媽生', type:'fest', who:'七娘媽、床母', paper:'壽金、床母衣', common:true},
  {rule:'lunar', m:7, d:15, name:'中元普渡・地官大帝誕辰', type:'fest', roles:['fisher'], big:30, offer:'鼠麴粿、芋粿、看牲', who:'地官、好兄弟', paper:'拜神用壽金、刈金；普渡用小銀、經衣', extra:'常配鼠麴粿、芋粿、看牲。經衣是否燒給自家祖先，說法不一'},
  {rule:'monthEnd', m:7, name:'關鬼門', type:'fest', who:'好兄弟', paper:'小銀、經衣', common:true},
  {rule:'lunar', m:8, d:15, name:'中秋', type:'fest', roles:['farmer'], big:14, offer:'月餅、柚子', who:'土地公、祖先', paper:'福金、刈金、大銀', common:true},
  {rule:'lunar', m:9, d:9, name:'重陽', type:'fest', who:'祖先', paper:'刈金、大銀', common:true},
  {rule:'lunar', m:10, d:10, name:'水仙尊王聖誕', type:'fest', only:true, roles:['fisher'], roleBig:14, who:'水仙尊王', paper:'金紙種類與份量依各家習慣，歡迎到店詢問', extra:'水仙尊王是船員與漁民的守護神；端午也是祭拜水仙尊王的日子'},
  {rule:'lunar', m:10, d:15, name:'下元・水官大帝誕辰', type:'fest', who:'三界公', paper:'大箔壽金、天金、壽金、刈金', common:true},
  {rule:'term', term:'dongzhi', name:'冬至祭祖', type:'fest', big:14, offer:'湯圓', who:'神明、祖先', paper:'壽金、刈金、大銀', extra:'常配湯圓', common:true},
  {rule:'lunar', m:12, d:16, name:'尾牙', type:'fest', big:14, roles:['farmer','shop','factory'], offer:'', who:'土地公、地基主', paper:'福金；地基主用刈金加小銀'},
  {rule:'lunar', m:12, d:24, name:'送神', type:'fest', who:'灶君、眾神', paper:'壽金、甲馬', extra:'甲馬用來送神；南部用雲馬總馬'},
  {rule:'monthEnd', m:12, name:'除夕', type:'fest', big:30, offer:'甜粿、發粿、菜頭粿', who:'神明、祖先、地基主', paper:'壽金、刈金、大銀；祭祖用刈金和大銀', extra:'常配甜粿、發粿、菜頭粿', common:true}
],

/* ── 婚喪喜慶與特殊祭祀 ── */
occasions: [
  {group:'婚', type:'wed', items:[
    {name:'結婚（謝天公）', paper:'天公金或天金、大箔壽金、壽金、刈金、高錢；祖先用大銀', incense:'紅燭一對、禮香；喜事不用白燭', extra:'常配五牲、甜粿、發粿、紅圓、麵線、五齊或六齊。拜天公傳統在結婚當天凌晨，現在常提早到前一天午時以後', fire:'trad'},
    {name:'訂婚', paper:'拜神明用壽金，稟告祖先用大銀'},
    {name:'安床', paper:'拜床母用床母衣和壽金；南部也有用中九金', extra:'時辰由擇日師選定'}
  ]},
  {group:'喜慶', type:'joy', items:[
    {name:'新居入厝', paper:'拜神明用壽金；拜地基主北部用刈金加小銀，中部用四方金，南部用九金', extra:'常配五味碗、米飯、湯圓、麵線、八仙綵。民間說法：拜地基主用矮桌，在屋內朝內拜'},
    {name:'開工・開市', paper:'依各地與各行業慣例準備，歡迎到店詢問', fire:'trad'},
    {name:'滿月（含三朝、四月日、週歲）', paper:'神明用壽金，床母用床母衣，祖先用大銀', extra:'常配油飯'},
    {name:'做十六歲', paper:'拜七娘媽和床母用壽金加床母衣；要謝天公的，再加天公金、高錢、壽金'}
  ]},
  {group:'喪', type:'mourn', items:[
    {name:'往生（初終到入殮）', paper:'腳尾錢用銀紙和往生錢，有的也燒庫錢。接棺時用壽金拜土地公、小銀給亡者，再圍燒隨身庫錢', incense:'白蠟燭或油燈當長明燈', extra:'常配腳尾飯、庫箱、往生蓮花。遮神、取下天公爐；喪事不用四牲'},
    {name:'做七', paper:'拜土地公用福金；拜亡者用銀紙，也會燒往生錢和庫錢', extra:'每日孝飯要燒銀紙。新北市的做七分頭七、女兒七、滿七'},
    {name:'百日、對年', paper:'銀紙', extra:'百日、對年、三年時除靈'},
    {name:'出殯・祀后土', paper:'祀后土用壽金、刈金、福金', extra:'常配蠟燭、鮮花、酒、三牲、水果'},
    {name:'合爐', paper:'歡迎到店詢問', extra:'一副牲禮（一定要有雞）、三碗紅圓、發粿、菜飯。合爐前不拜天公、不做甜粿紅龜粿、不綁粽'},
    {name:'撿骨', paper:'燒紙錢給亡者和土地公，種類歡迎到店詢問', extra:'常配金斗甕'}
  ]},
  {group:'行業專屬', type:'work', items:[
    {name:'新船下水・出海祈安', roles:['fisher'], paper:'金紙種類與份量依各家習慣，歡迎到店詢問', extra:'祈求出入平安、漁獲滿載', fire:'trad'},
    {name:'開工拜好兄弟', roles:['shop','factory'], paper:'拜神明用壽金；好兄弟用九金、銀紙', extra:'常配餅乾、糖果、汽水、水果'},
    {name:'店面・工廠拜地基主', roles:['shop','factory'], paper:'北部用刈金加小銀，中部用四方金，南部用九金', extra:'可在初二、十六做牙時一起拜'}
  ]},
  {group:'日常與特殊', type:'daily', items:[
    {name:'到靈骨塔、墓園祭拜祖先', paper:'各塔方與墓區規定不同，有的集中焚化、有的不開放燒金紙，出發前先確認；金紙種類歡迎到店詢問', extra:'清明掃墓可參考節日日曆裡的清明準備', shop:'店裡為同行的孩童與長輩準備了隨身小香袋，出門祭拜帶在身上，讓家人安心。歡迎到店詢問'},
    {name:'神明生日', paper:'壽金；高位神明加大箔壽金'},
    {name:'犒軍', paper:'北部用刈金；南部用壽金、中九金、甲馬', extra:'常配小三牲'}
  ]}
],

roles: {home:'一般家庭', fisher:'討海人（漁民）', farmer:'作穡人（農民）', shop:'做生意（商家）', factory:'工廠'},

fire: {
  trad: '開工、喜慶傳統上使用紅紙鞭炮，可向店內詢問。請依各地法規及燃放時段規定。',
  eco: '一般祭祀如需燃放鞭炮，建議使用環保鞭炮，並依各地法規及燃放時段規定。'
},

tips: [
  '過世未滿三年，有一說只燒銀紙（如大銀、小銀），滿三年才燒刈金；各地說法不一。',
  '天公金和大百壽金一份多為 100 張，習慣從大張燒到小張。'
],

sources: [
  ['臺灣民俗文物辭典：大箔壽金','https://dict.th.gov.tw/detailPage.aspx?Ca=291&ID=1366'],
  ['臺灣民俗文物辭典：天公金','https://dict.th.gov.tw/detailPage.aspx?Ca=291&ID=1361'],
  ['文化部 國家文化記憶庫：刈金與四方金','https://cmsdb.culture.tw/object/FEBF16D9-238F-44F6-8861-35F2FD40B2BE'],
  ['教育部臺灣台語常用詞辭典','https://sutian.moe.edu.tw/und-hani/su/8205/'],
  ['臺北市殯葬管理處：祭祀供品釋疑','https://mso.gov.taipei/cp.aspx?n=B166D6A50A6D9E79'],
  ['新北市清明服務網','https://www.tfunscroll.ntpc.gov.tw/TombSweepingFestival/ContentView?alias=Cht_O02&id=802'],
  ['中研院民族所：金錢在華人文化與宗教中的觀念與儀式初探','https://ianthro.ioe.sinica.edu.tw/wp-content/uploads/2018/05/etf025-001.pdf'],
  ['神酷：入厝','https://folk.tw/practices/ruocuo/'],
  ['神酷：傳統喪禮','https://folk.tw/practices/sangli/'],
  ['NOWnews 保庇網：銀紙','https://www.nownews.com/news/5627473'],
  ['NOWnews：初五迎財神拜法','https://www.nownews.com/news/6362410'],
  ['NOWnews：拜媽祖供品','https://www.nownews.com/news/6814884'],
  ['TVBS：開工拜拜準備','https://supertaste.tvbs.com.tw/hot/353166'],
  ['新頭殼：金包里二媽回野柳媽祖洞','https://newtalk.tw/news/view/2022-05-16/755679'],
  ['聯合新聞網：神農大帝聖誕','https://udn.com/news/story/7268/9559983'],
  ['Yahoo 新聞：水仙尊王','https://tw.news.yahoo.com/tag/水仙尊王'],
  ['關鍵評論網：紙錢整理','https://www.thenewslens.com/article/147154']
]
};

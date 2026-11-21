/* 拜拜參考資料。內容整理自店內既有資料（金紙區域名稱、農曆行事曆、婚喪喜慶清單）。
   改內容只要改這個檔案。common:true 表示「一般常見做法，各地不同」。 */
window.BAIBAI = {

/* ── 金紙名稱 ── */
papers: [
  {id:'tiangongjin', name:'天公金', alias:'頂極金（台南）', tl:'Thinn-kong-kim', ok:true, cat:'神明金', use:'玉皇大帝；尺寸最大張', note:'專敬玉皇大帝與三界公，一般祭祀不用。印有「叩答恩光」'},
  {id:'tianjin', name:'天金', alias:'尺金（南部）', tl:'thinn-kim', cat:'神明金', use:'天公、三界公；五色金之一', note:'專敬玉皇大帝與三界公，一般祭祀不用。市面上也有天金與尺金成組的「天尺金」'},
  {id:'tianchijin', name:'天尺金', alias:'', tl:'', cat:'神明金', use:'天公', note:'天金和尺金 1 比 1 成組'},
  {id:'dabo', name:'大壽金', alias:'大佰壽金、大箔壽金、大百壽金、財子壽金；南部稱太極金', tl:'tuā-po̍h-siū-kim', cat:'神明金', use:'天公、三官大帝等上界神明；也用來拜王爺、媽祖；四色金之一', note:'有「足百」版本，拜天公等級使用；一般使用的是較薄的版本'},
  {id:'shoujin', name:'壽金', alias:'大花壽金（南部）', tl:'siū-kim', ok:true, cat:'神明金', use:'大多數神明、神明誕辰、祈福', note:'有大花、二花兩種'},
  {id:'xiaoshou', name:'三童金', alias:'小壽金、三童子', tl:'', cat:'神明金', use:'三色金、四色金之一', note:''},
  {id:'guajin', name:'刈金', alias:'割金；中部稱四方金', tl:'kuah-kim', ok:true, cat:'神明金', use:'神明、祖先、地基主、犒軍', note:'分大刈金、小刈金：小刈金用在三色金、四色金裡；大刈金通常用來祭祀家族祖先'},
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
  {id:'jingyi', name:'經衣', alias:'更衣、巾衣', tl:'', cat:'配件', use:'好兄弟、普渡、地基主', note:''},
  {id:'caishen', name:'五路財神金', alias:'財神金', tl:'', cat:'神明金', use:'正月初五迎財神、開工開市', note:'商家迎財神常與壽金、刈金一起準備'},
  {id:'jiama', name:'甲馬', alias:'', tl:'kah-bé', ok:true, cat:'指定用途', use:'犒軍', note:'本店建議：甲馬、星君只用在犒軍'},
  {id:'gaoqian', name:'高錢', alias:'', tl:'', cat:'配件', use:'拜天公；六色金之一', note:'現在多和金紙一起放在桌上；古例是祭祀時展開，掛在主祭祀桌上的小型祭台'},
  {id:'chuangmu', name:'床母衣', alias:'鳥母衣', tl:'', cat:'配件', use:'床母、七娘媽、註生娘娘', note:''},
  {id:'jinbai', name:'金白錢', alias:'', tl:'', cat:'配件', use:'神明部將、壓墓', note:''},
  {id:'xingjun', name:'星君', alias:'', tl:'', cat:'指定用途', use:'犒軍', note:'本店建議：甲馬、星君只用在犒軍'},
  {id:'yunma', name:'雲馬', alias:'雲馬總馬', tl:'hûn-bé', cat:'指定用途', use:'過年送神（十二月廿四）、接神（正月初四）', note:'長得像一張機票，給神明搭乘往返天庭'},
  {id:'pojieyi', name:'婆姐衣', alias:'', tl:'', cat:'指定用途', use:'七夕拜床母、婆姐', note:''},
  {id:'gaiyun', name:'改運金', alias:'', tl:'', cat:'指定用途', use:'補運、改運、天赦日', note:'店裡有，歡迎詢問'},
  {id:'buyun', name:'補運錢', alias:'', tl:'', cat:'指定用途', use:'補運、天赦日', note:'店裡有，歡迎詢問'},
  {id:'dijizhu', name:'地基主金', alias:'', tl:'', cat:'指定用途', use:'地基主', note:'也有盒裝環保的地基主金紙一套'},
  {id:'muzhi', name:'墓紙', alias:'五色紙、古仔紙', tl:'', cat:'配件', use:'清明壓在墳上', note:'一般不燒'}
],

/* 組合：會畫成卡片 */
combos: [
  {name:'三色金', items:[['xiaoshou','三童金'],['guajin','小刈金'],['fujin','福金（土地公金）']], note:'最常見的基本組合'},
  {name:'四色金', items:[['dabo','大壽金'],['xiaoshou','三童金'],['guajin','小刈金'],['fujin','福金']], note:'拜一般神明的標準組合'},
  {name:'五色金', items:[['dabo','大壽金'],['xiaoshou','三童金'],['guajin','小刈金'],['fujin','福金'],['tianjin','天金']], note:'四色金再加天金；開工、開市、上樑、新船下水等大禮'},
  {name:'六色金', items:[['dabo','大壽金'],['xiaoshou','三童金'],['guajin','小刈金'],['fujin','福金'],['tianjin','天金'],['gaoqian','高錢']], note:'五色金再加高錢；拜天公、三界公。高錢現在多和金紙一起放在桌上，古例是展開掛在主祭祀桌上的小型祭台'},
  {name:'拜土地公（北部）', items:[['fujin','福金'],['guajin','刈金'],['shoujin','壽金']], note:'中部常用壽金、大福金、四方金；南部常用壽金、福金、九金（參考，臺灣文獻館）'}
],

/* ── 祭祀日：rule = 每月 / 農曆 / 節氣 / 月末 ── */
days: [
  {rule:'monthly', d:[1,15], name:'初一、十五拜神明', type:'daily', who:'神明、祖先', paper:'壽金、刈金；祖先用大銀'},
  {rule:'monthly', d:[2,16], name:'做牙（拜土地公）', type:'daily', roles:['shop','factory'], who:'土地公、地基主', paper:'土地公：福金；地基主：依家中長輩習慣', steps:['先拜土地公：福金就可以，較講究的用三色金','再拜地基主：依家中長輩習慣'], more:'地基主常見做法三選一：①四色金小份＋地基主金＋經衣、小銀（小份）②巾衣、小銀、刈金 ③地基主盒裝環保金紙一套；配簡易香燭、矮桌（在廚房或後門朝屋內拜），供便當或雙雞腿', ref:'南部拜地基主常用九金'},
  {rule:'tianshe', name:'天赦日', type:'daily', who:'玉皇大帝（天公）', paper:'補運錢、改運金店裡有，歡迎詢問', extra:'多到天公廟或廟裡辦理，金紙與疏文依廟方指示'},
  {rule:'lunar', m:1, d:1, name:'春節開正', slug:'chunjie', type:'fest', big:30, offer:'', who:'神明、祖先', paper:'壽金、刈金、大銀', common:true},
  {rule:'lunar', m:1, d:4, name:'接神', type:'fest', who:'灶君、眾神', paper:'壽金、雲馬', extra:'正月初四接神。雲馬長得像機票，給神明搭乘回來（本店建議）', ref:'部分地區接神也燒甲馬'},
  {rule:'lunar', m:1, d:5, name:'接財神・開工', type:'fest', only:true, roles:['shop','factory'], roleBig:14, who:'五路財神、福德正神', paper:'壽金、福金、刈金、五路財神金', offer:'三牲、發糕、糖果、橘子、香蕉、梨子、蘋果、帶葉鳳梨', extra:'正月初五是五路財神生日，商家多在這天或擇吉日開工。店裡沒有財神神位的，可在門口或廠內近門處設桌向天迎接', fire:'trad'},
  {rule:'lunar', m:1, d:9, name:'天公生', slug:'tiangong', type:'fest', big:14, offer:'五牲、五齊或六齊、圈仔粿、甘蔗（掛高錢）', who:'玉皇大帝', paper:'六色金：天金、大壽金（足百版）、三童金、刈金、福金、高錢；也可用天公金', extra:'高錢現在多和金紙一起放在桌上；古例是展開掛在主祭祀桌上的小型祭台。常配五牲、五齊或六齊、圈仔粿、甘蔗', more:'天公金、天金專敬玉皇大帝與三界公，一般祭祀不用。大壽金有「足百」版本，拜天公等級使用', ref:'南部用頂極金、尺金、太極金'},
  {rule:'lunar', m:1, d:15, name:'上元・天官大帝誕辰', type:'fest', who:'三界公', paper:'大壽金、天金、壽金、刈金', common:true},
  {rule:'lunar', m:2, d:2, name:'頭牙・土地公生', type:'fest', roles:['farmer','shop','factory'], roleBig:14, offer:'三牲、發糕、水果', who:'土地公', paper:'福金、壽金'},
  {rule:'term', term:'qingming', name:'清明掃墓', slug:'qingming', type:'fest', big:21, shop:'到戶外或較不熟悉的地方祭祖時，店裡為同行的孩童與長輩準備了隨身小香袋，帶在身上安心。購買祭祖金紙即加贈，也可單獨購買，歡迎到店詢問', offer:'墓紙、丁仔粿、鼠麴粿', who:'后土、祖先', paper:'后土：土地公金（福金）；祖先：大銀、小銀、大刈金', steps:['先拜后土：土地公金（福金）','再拜祖先（家族祭祀）：大銀、小銀、大刈金，燒的順序依家族習慣'], extra:'墓紙用黃色、彩色或雙色都可以。新北市墓區的金紙要送到服務處集中焚化', more:'壓墓紙：后土壓 3 張或 6 張；祖墳照「米」字去掉中間那一橫的排法，壓在墓頭、墓中、墓尾與正前方（口訣：七子八婿）。刈金分大、小，大刈金通常用來祭祀家族祖先'},
  {rule:'lunar', m:3, d:23, name:'媽祖生', type:'fest', roles:['fisher'], roleBig:21, offer:'紅湯圓、麵線、發糕、紅龜粿、鮮花、清茶', who:'媽祖', paper:'大壽金、壽金、刈金', common:true},
  {rule:'lunar', m:4, d:16, name:'金包里二媽回娘家', type:'fest', only:true, roles:['fisher'], roleBig:14, who:'媽祖', paper:'金紙種類與份量依各家習慣，歡迎到店詢問', extra:'金山在地祭典：金包里慈護宮在農曆四月十六前後大退潮時，步行恭送二媽回野柳媽祖洞，是全台唯一的海岸遶境。實際日期依廟方公告'},
  {rule:'lunar', m:4, d:26, name:'神農大帝聖誕', type:'fest', only:true, roles:['farmer'], roleBig:14, who:'神農大帝（五穀王）', paper:'金紙種類與份量依各家習慣，歡迎到店詢問', extra:'農民祈求五穀豐收、風調雨順'},
  {rule:'lunar', m:5, d:5, name:'端午', slug:'duanwu', type:'fest', big:14, offer:'粽子', who:'神明、祖先', paper:'壽金、刈金、大銀', common:true},
  {rule:'lunar', m:6, d:24, name:'關聖帝君聖誕', type:'fest', only:true, roles:['shop'], who:'關聖帝君（武財神）', paper:'金紙種類與份量依各家習慣，歡迎到店詢問'},
  {rule:'lunar', m:6, d:24, name:'西秦王爺聖誕', type:'fest', only:true, roles:['perf'], who:'西秦王爺（戲曲之神）', paper:'五色金', extra:'西秦王爺是北管、戲曲與演藝人員的祖師爺，從事表演、直播、內容創作的人也會來拜。金山武英殿（崙仔頂王爺廟）主祀西秦王爺，隔壁的金山國中是 YouTuber HowHow 的母校，活動日期依廟方公告'},
  {rule:'lunar', m:7, d:1, name:'開鬼門', type:'fest', who:'好兄弟', paper:'小銀、經衣', common:true},
  {rule:'lunar', m:7, d:7, name:'七夕・七娘媽生・拜床母', slug:'qixi', type:'fest', big:14, who:'七娘媽、床母、婆姐', paper:'七娘媽：壽金；床母：婆姐衣、刈金', offer:'七娘媽：麻油雞酒、油飯、胭脂粉餅、圓鏡、梳子、圓仔花、雞冠花；床母：麻油雞或雞腿、油飯', steps:['午後在家門口設桌拜七娘媽','傍晚在孩子的床邊拜床母','香燒一段後燒金紙，燒完就收供品'], extra:'七娘媽和床母都是守護孩子的神明。拜床母民間習慣不用魚、不擺筷子，拜完很快收起供品', more:'家中孩子滿十六歲，可加七娘媽亭、麵線「做十六歲」，金山附近也有廟宇辦理', common:true},
  {rule:'lunar', m:7, d:15, name:'中元普渡・地官大帝誕辰', slug:'zhongyuan', type:'fest', roles:['fisher'], big:30, offer:'鼠麴粿、芋粿、看牲', who:'地官、好兄弟', paper:'拜神用壽金、刈金；普渡用小銀、經衣', extra:'常配鼠麴粿、芋粿、看牲。經衣是否燒給自家祖先，說法不一'},
  {rule:'monthEnd', m:7, name:'關鬼門', type:'fest', who:'好兄弟', paper:'小銀、經衣', common:true},
  {rule:'lunar', m:8, d:15, name:'中秋', slug:'zhongqiu', type:'fest', roles:['farmer'], big:14, offer:'月餅、柚子', who:'土地公、祖先', paper:'福金、刈金、大銀', common:true},
  {rule:'lunar', m:9, d:9, name:'重陽', type:'fest', who:'祖先', paper:'刈金、大銀', common:true},
  {rule:'lunar', m:10, d:10, name:'水仙尊王聖誕', type:'fest', only:true, roles:['fisher'], roleBig:14, who:'水仙尊王', paper:'金紙種類與份量依各家習慣，歡迎到店詢問', extra:'水仙尊王是船員與漁民的守護神；端午也是祭拜水仙尊王的日子'},
  {rule:'lunar', m:10, d:15, name:'下元・水官大帝誕辰', type:'fest', who:'三界公', paper:'大壽金、天金、壽金、刈金', common:true},
  {rule:'term', term:'dongzhi', name:'冬至祭祖', slug:'dongzhi', type:'fest', big:14, offer:'湯圓', who:'神明、祖先、地基主', paper:'拜神明用四色金；祭祖、拜地基主用刈金和銀紙', extra:'常配湯圓', common:true},
  {rule:'lunar', m:12, d:16, name:'尾牙', slug:'weiya', type:'fest', big:14, roles:['farmer','shop','factory'], offer:'', who:'土地公、地基主', paper:'土地公：福金（較講究用三色金）；地基主：依家中長輩習慣', steps:['先拜土地公','再拜地基主'], more:'地基主常見做法三選一：①四色金小份＋地基主金＋經衣、小銀（小份）②巾衣、小銀、刈金 ③地基主盒裝環保金紙一套；配簡易香燭、矮桌（在廚房或後門朝屋內拜），供便當或雙雞腿'},
  {rule:'lunar', m:12, d:24, name:'送神', type:'fest', who:'灶君、眾神', paper:'壽金、雲馬', extra:'十二月廿四送神。雲馬長得像機票，給神明搭乘返回天庭（本店建議）', ref:'南部稱雲馬總馬；部分地區送神也燒甲馬'},
  {rule:'monthEnd', m:12, name:'除夕', slug:'chuxi', type:'fest', big:30, offer:'甜粿、發粿、菜頭粿', who:'神明、祖先、地基主', paper:'壽金、刈金、大銀；祭祖用刈金和大銀', extra:'常配甜粿、發粿、菜頭粿', common:true}
],

/* ── 婚喪喜慶與特殊祭祀 ── */
occasions: [
  {group:'婚', type:'wed', items:[
    {name:'結婚（謝天公）', paper:'天公金或天金、大壽金、壽金、刈金、高錢；祖先用大銀', incense:'紅燭一對、禮香；喜事不用白燭', extra:'常配五牲、甜粿、發粿、紅圓、麵線、五齊或六齊。拜天公傳統在結婚當天凌晨，現在常提早到前一天午時以後', fire:'trad'},
    {name:'訂婚', paper:'四色金、刈金', extra:'稟告天地神明與祖先'},
    {name:'安床', paper:'拜床母用床母衣和壽金', extra:'時辰由擇日師選定', ref:'南部也有用中九金'}
  ]},
  {group:'喜慶', type:'joy', items:[
    {name:'新居入厝', paper:'拜神明用四色金；拜地基主依家中長輩習慣', extra:'門前掛紅彩；常配五味碗、米飯、湯圓、麵線、八仙綵', more:'地基主常見做法三選一：①四色金小份＋地基主金＋經衣、小銀（小份）②巾衣、小銀、刈金 ③地基主盒裝環保金紙一套；配簡易香燭、矮桌（在廚房或後門朝屋內拜），供便當或雙雞腿', ref:'中部拜地基主用四方金，南部用九金'},
    {name:'新居落成', paper:'四色金', extra:'搬入新家的祭拜可參考「新居入厝」', fire:'trad'},
    {name:'開工・開市', paper:'五色金', extra:'商家新春開市或新店開幕', fire:'trad'},
    {name:'滿月（含三朝、四月日、週歲）', paper:'神明用壽金，床母用床母衣，祖先用大銀', extra:'常配油飯'},
    {name:'做十六歲', paper:'拜七娘媽和床母用壽金加床母衣；要謝天公的，再加天公金、高錢、壽金'}
  ]},
  {group:'喪', type:'mourn', items:[
    {name:'家族掃墓', paper:'后土：土地公金（福金）；祖先：大銀、小銀、大刈金', steps:['先拜后土：土地公金（福金）','再拜祖先：大銀、小銀、大刈金，燒的順序依家族習慣'], extra:'各場所規定不同，有的集中焚化、有的不開放燒金紙，出發前先確認', more:'壓墓紙：后土壓 3 張或 6 張；祖墳照「米」字去掉中間那一橫的排法，壓在墓頭、墓中、墓尾與正前方（口訣：七子八婿）', shop:'到戶外或較不熟悉的地方祭祖時，店裡為同行的孩童與長輩準備了隨身小香袋，帶在身上安心。購買祭祖金紙即加贈，也可單獨購買，歡迎到店詢問'},
    {name:'親友致意', paper:'小銀或往生錢（往生錢可折成蓮花）', extra:'前往靈堂拈香、致意'},
    {name:'往生（初終到入殮）', paper:'腳尾錢用銀紙和往生錢，有的也燒庫錢。接棺時用壽金拜土地公、小銀給亡者，再圍燒隨身庫錢', incense:'白蠟燭或油燈當長明燈', extra:'常配腳尾飯、庫箱、往生蓮花。遮神、取下天公爐；喪事不用四牲'},
    {name:'做七', paper:'拜土地公用福金；拜亡者用銀紙，也會燒往生錢和庫錢', extra:'每日孝飯要燒銀紙。新北市的做七分頭七、女兒七、滿七'},
    {name:'百日、對年', paper:'銀紙', extra:'百日、對年、三年時除靈'},
    {name:'出殯・祀后土', paper:'祀后土用壽金、刈金、福金', extra:'常配蠟燭、鮮花、酒、三牲、水果'},
    {name:'合爐', paper:'銀紙、刈金', extra:'對年或三年後，把新亡者牌位請入祖先牌位合祀。一副牲禮（一定要有雞）、三碗紅圓、發粿、菜飯。合爐前不拜天公、不做甜粿紅龜粿、不綁粽'},
    {name:'撿骨', paper:'燒紙錢給亡者和土地公，種類歡迎到店詢問', extra:'常配金斗甕'}
  ]},
  {group:'行業專屬', type:'work', items:[
    {name:'新船下水・出海祈安', roles:['fisher'], paper:'五色金', extra:'祈求出入平安、漁獲滿載；營造上樑也用五色金', fire:'trad'},
    {name:'開工拜好兄弟', roles:['shop','factory'], paper:'拜神明用四色金、土地公金；好兄弟用經衣、小銀', extra:'常配餅乾、糖果、汽水、水果', ref:'南部好兄弟用九金'},
    {name:'店面・工廠拜地基主', roles:['shop','factory'], paper:'依家中長輩習慣', extra:'可在初二、十六做牙時一起拜', more:'常見做法三選一：①四色金小份＋地基主金＋經衣、小銀（小份）②巾衣、小銀、刈金 ③地基主盒裝環保金紙一套；配簡易香燭、矮桌（在廚房或後門朝屋內拜），供便當或雙雞腿', ref:'中部用四方金，南部用九金'}
  ]},
  {group:'日常與特殊', type:'daily', items:[
    {name:'到戶外或不熟悉的地方祭祖', paper:'各場所規定不同，有的集中焚化、有的不開放燒金紙，出發前先確認；金紙種類歡迎到店詢問', extra:'清明掃墓可參考節日日曆裡的清明準備', shop:'到戶外或較不熟悉的地方祭祖時，店裡為同行的孩童與長輩準備了隨身小香袋，帶在身上安心。購買祭祖金紙即加贈，也可單獨購買，歡迎到店詢問'},
    {name:'神明生日', paper:'壽金；高位神明加大壽金'},
    {name:'犒軍', paper:'四色金或刈金、甲馬、星君', extra:'初一、十五犒賞神明部將與兵馬；常配小三牲。本店建議甲馬、星君只用在犒軍', ref:'南部用壽金、中九金'},
    {name:'日常消災・補運', paper:'經衣、銀紙', extra:'身體微恙、運勢不順時，敬獻給無形眾生；補運錢、改運金店裡也有'}
  ]}
],

regionNote: '本站以北台灣常見禮俗為主，各家習慣不同，依家中慣例即可。燒金紙的順序，有從大張到小張、也有從小張到大張的說法，依家族習慣即可。點「各地說法」可看其他地區的名稱與做法（標「參考」）。',

roles: {home:'一般家庭', fisher:'討海人（漁民）', farmer:'作穡人（農民）', shop:'做生意（商家）', factory:'工廠', perf:'演藝・創作者'},
roleSpecial: {perf:{ch:'創', name:'演藝・創作者'}},

temples: [
  {id:'mazu', name:'媽祖廟', who:'媽祖（天上聖母）', paper:'四色金：大壽金、三童金、刈金、福金', offer:'紅湯圓、麵線、發糕、紅龜粿、鮮花（成對，不用假花）、清茶三杯', extra:'農曆三月廿三媽祖生'},
  {id:'caishen', name:'財神廟', who:'五路財神、文武財神', paper:'壽金、刈金、福金、五路財神金', offer:'糖果、餅乾等甜食，水果三或五樣', extra:'民間說法：避開蓮霧（空心）與「酥」類點心；拜武財神不用豬肉'},
  {id:'tudi', name:'土地公廟', who:'福德正神', paper:'三色金：三童金、刈金、福金', offer:'發糕、麻糬、刈包、潤餅；水果可選香蕉、李子、鳳梨（招你旺）', extra:'初二、十六做牙；二月初二頭牙、十二月十六尾牙最熱鬧'},
  {id:'dazhong', name:'大眾爺廟', who:'大眾爺', paper:'三色金（三童金、刈金、福金）、小銀、經衣（巾衣）', extra:'各地拜法略有差異，也可先請教廟方'},
  {id:'yuelao', name:'月老（求姻緣）', who:'月下老人', paper:'許多月老廟備有月老金（姻緣金）可現場購買；自備金紙歡迎到店詢問', offer:'糖果、巧克力等甜食，冰糖、帶殼龍眼乾、紅棗、桂圓、鮮花；數量以雙數為宜', extra:'民間說法：拜月老不帶傘（諧音「散」）、不戴帽子。先拜天公與主神，再拜月老'}
],
nearby: [
  ['金山廣安宮', 0.1, '開漳聖王', '', 'ChIJO1sDwldLXTQRyMx8yHTU55g'],
  ['金山武英殿', 0.2, '西秦王爺（戲曲之神）', '', 'ChIJ_Ze24lZLXTQROQMWC_xIxIc'],
  ['金包里慈護宮', 0.4, '媽祖', 'mazu', 'ChIJ_xrGQ12zQjQRvRtteX0gvR0'],
  ['福德宮（民生路）', 0.8, '土地公', 'tudi', 'ChIJgy6hhy5LXTQR06eawE8ZZME'],
  ['金山承天宮', 0.8, '國姓爺（鄭成功）', '', 'ChIJ1w0I8FtLXTQRsiTf3hw7f6o'],
  ['福德宮（磺港漁港）', 1.5, '土地公', 'tudi', 'ChIJX8BK7kJLXTQRdhbw3wOlahw'],
  ['金山財神廟', 2.1, '五路財神', 'caishen', 'ChIJV_n6FEuzQjQRaWI4M7gjCvM'],
  ['萬里情月老廟', 2.2, '月下老人', 'yuelao', 'ChIJ92enEEuzQjQRTN5HLGdkq5M'],
  ['三和福德宮', 2.9, '土地公', 'tudi', 'ChIJxz9438OzQjQR5mVFqcpBiGg']
],
templeTip: '到廟裡拜拜，先拜天公爐再拜主神；有些廟宇集中焚化或不燒金紙，請依廟方規定。',

fire: {
  trad: '開工、喜慶傳統上使用紅紙鞭炮，可向店內詢問。請依各地法規及燃放時段規定。',
  eco: '一般祭祀如需燃放鞭炮，建議使用環保鞭炮，並依各地法規及燃放時段規定。'
},

tips: [
  '過世未滿三年，有一說只燒銀紙（如大銀、小銀），滿三年才燒刈金；各地說法不一。',
  '天公金和大壽金一份多為 100 張。'
],

sources: [
  ['臺灣民俗文物辭典：大壽金','https://dict.th.gov.tw/detailPage.aspx?Ca=291&ID=1366'],
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
  ['TVBS：拜土地公供品與金紙','https://health.tvbs.com.tw/life/352227'],
  ['蝦皮生活誌：拜土地公三色金','https://shopee.tw/blog/land-worship/'],
  ['蕃薯藤旅遊：拜財神供品','https://travel.yam.com/article/136653'],
  ['TVBS：財神廟參拜','https://health.tvbs.com.tw/nutrition/360367'],
  ['NOWnews：拜月老步驟','https://www.nownews.com/news/6786362'],
  ['關鍵評論網：七夕拜月老供品','https://www.thenewslens.com/article/190536'],
  ['關鍵評論網：紙錢整理','https://www.thenewslens.com/article/147154']
]
};

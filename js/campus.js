window.onload = move()

function move() {
  var elem = document.getElementById('myBar')
  var width = 0
  var id = setInterval(frame, 10)
  function frame() {
    if (width == 100) {
      alert('加载完毕')
      clearInterval(id)
      elem.style.display = 'none'
      loadData()
    } else {
      width++
      elem.style.width = width + '%'
    }
  }
}

function loadData() {
  let students = [
    {
      id: '1',
      name: '王锋',
      nickname: '小王',
      hometown: '江苏徐州',
      birthday: '1999.02.23',
      constellation: '双鱼',
      mobile: '14752191369',
      qq: '1244353765',
      email: '1244353765@qq.com',
      avatar: 'http://ww1.sinaimg.cn/large/0084EtCNgy1gcd67rpn01j30hs0hsgmi.jpg',
      github: 'https://github.com/wangfeng351',
      hobby: '编程，听歌，吃，运动',
      signature: '不能输给自己！！！',
      color: '#7986CB'
    },

    {
      id: '2',
      name: '颜子皓',
      nickname: '小颜',
      hometown: '江苏无锡',
      birthday: '2000.03.06',
      constellation: '双鱼',
      mobile: '19825088733',
      qq: '3149991705',
      email: '3149991705@qq.com',
      avatar: 'http://ww1.sinaimg.cn/large/007YO3iLgy1gcd72p3hmxj30i60c90tr.jpg',
      github: 'https://github.com/yzh888',
      hobby: '音乐，电影，捉蜂王',
      signature: '要想生活过得去',
      color: '#fb6e50'
    },

    {
      id: '3',
      name: '刘恋',
      nickname: '花无泪',
      hometown: '贵州毕节',
      birthday: '1996.09.15',
      constellation: '天秤',
      mobile: '19850099791',
      qq: '2313673906',
      email: '2313673906@qq.com',
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/img/timg.jpg',
      github: 'https://github.com/ll2313673906',
      hobby: '吃饭，看电影',
      signature: '就喜欢你看不惯我，又灭不掉我的样子',
      color: '#003A44'
    },

    {
      id: '4',
      name: '席光平',
      nickname: '糖醋排骨',
      hometown: '安徽阜阳',
      birthday: '1999.08.18',
      constellation: '处女',
      mobile: '18851137516',
      qq: '2816540069',
      email: '2816540069@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/53549653?s=460&v=4',
      github: 'https://github.com/CodeJasmine',
      hobby: '吃，喝，rush B',
      signature: '没有理所当然的成功，也没有毫无道理的平庸',
      color: '#FF6F00'
    },

    {
      id: '5',
      name: '曹暝桕',
      nickname: 'asdfghjkl',
      hometown: '江苏无锡',
      birthday: '2000.03.09',
      constellation: '双鱼',
      mobile: '15152231582',
      qq: '2731964526',
      email: '15152231582@163.com',
      avatar: 'https://student-manage-ll.oss-cn-beijing.aliyuncs.com/img/timg.jpg',
      github: 'https://github.com/caomingjiu',
      hobby: '打游戏',
      signature: '没有理所当然的成功，也没有毫无道理的平庸',
      color: '#1DE9B6'
    },

    {
      id: '6',
      name: '陶永新',
      nickname: 'Tao.',
      hometown: '江苏扬州',
      birthday: '2000.01.01',
      constellation: '摩羯',
      mobile: '17826012341',
      qq: '1427177855',
      email: 'tyxu1427177855@126.com',
      avatar: 'https://avatars0.githubusercontent.com/u/55398415?s=460&v=4',
      github: 'https://github.com/taoyongxin',
      hobby: '篮球、追剧',
      signature: 'Kepp Calm and Carry On（保持冷静，继续前行）',
      color: '#20a0f1'
    },

    {
      id: '7',
      name: '侯粤嘉',
      nickname: '无梦相赠',
      hometown: '湖南郴州',
      birthday: '2000.09.01',
      constellation: '处女',
      mobile: '18851853957',
      qq: '2298090131',
      email: '2298090131@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/45200072?s=460&v=4',
      github: 'https://github.com/hyj200091',
      hobby: '篮球',
      signature: '虚度年华',
      color: '#9575CD'
    },

    {
      id: '8',
      name: '曾传志',
      nickname: '夢想，理應飛翔',
      hometown: '江西赣州',
      birthday: '1999.10.18',
      constellation: '天秤',
      mobile: '18851697603',
      qq: '599984243',
      email: '599984243@qq.com',
      avatar: 'https://ae01.alicdn.com/kf/U84c4005a0b274d39901e3b7ca2b37f52p.png',
      github: 'https://github.com/czzeng-code',
      hobby: '羽毛球，音乐, 电影',
      signature: '年轻就要醒着拼',
      color: '#87CEFA'
    },

    {
      id: '9',
      name: '管江宇',
      nickname: 'Faith',
      hometown: '江苏南京',
      birthday: '2000.06.19',
      constellation: '双子',
      mobile: '18851862391',
      qq: '2501015371',
      email: 'gjy0619@126.com',
      avatar: 'https://qlogo4.store.qq.com/qzone/2501015371/2501015371/100?1556427576',
      github: 'https://github.com/2501015371',
      hobby: '篮球，健身，游戏',
      signature: '青春在于拼搏',
      color: '#218077'
    },

    {
      id: '10',
      name: '韩源',
      nickname: '玛卡巴卡',
      hometown: '山西忻州',
      birthday: '2000.02.06',
      constellation: '水瓶',
      mobile: '18851860919',
      qq: '2641013950',
      email: '2641013950@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/51700682?s=60&v=4',
      github: 'https://github.com/Macabaka',
      hobby: '吃饭、睡觉、打豆豆',
      signature: '丰碑无语，行胜于言',
      color: '#5C6BC0'
    },

    {
      id: '11',
      name: '孙文龙',
      nickname: 'Kuzma',
      hometown: '江苏淮安',
      birthday: '2000.07.09',
      constellation: '巨蟹',
      mobile: '18805167526',
      qq: '2673327266',
      email: '2673327266@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/55436087?s=60&v=4',
      github: 'https://github.com/Kuzma77',
      hobby: '篮球，音乐，摄影，电影',
      signature: '路还很长，天总会亮。',
      color: '#00897B'
    },

    {
      id: '12',
      name: '赵玉杰',
      nickname: 'Libra',
      hometown: '江苏南京',
      birthday: '2000.02.28',
      constellation: '天秤',
      mobile: '18852017973',
      qq: '1836686674',
      email: '1836686674@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/55378225?s=460&v=4',
      github: 'https://github.com/LibraZYJ',
      hobby: '吃饭、睡觉、打豆豆',
      signature: '我就站在你面前，你看我几分像从前！',
      color: '#26A69A'
    },

    {
      id: '13',
      name: '谢晓茜',
      nickname: '原味冰淇淋',
      hometown: '重庆开州',
      birthday: '1999.04.30',
      constellation: '金牛',
      mobile: '17783208600',
      qq: '2320832818',
      email: '2320832818@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/55443431?s=460&v=4',
      github: 'https://github.com/xiexiaoqian',
      hobby: '乒乓球，电影，户外运动',
      signature: 'Beasty',
      color: '#EC407A'
    },

    {
      id: '14',
      name: '杨晶',
      nickname: '毛毛',
      hometown: '江苏盐城',
      birthday: '1997.12.29',
      constellation: '摩羯',
      mobile: '18452555712',
      qq: '846272692',
      email: '846272692@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/45115317?s=460&v=4',
      github: 'https://github.com/yj846272692',
      hobby: '骑行、音乐、书法',
      signature: '一蓑烟雨任平生',
      color: '\t#B0C4DE'
    },

    {
      id: '15',
      name: '杨阳',
      nickname: '杨阳',
      hometown: '江苏南通',
      birthday: '2000.04.28',
      constellation: '金牛',
      mobile: '17625835438',
      qq: '1294898797',
      email: '1294898797@qq.com',
      avatar: 'https://s2.ax1x.com/2020/02/29/3sH5vT.jpg',
      github: 'https://github.com/RuErJieFei',
      hobby: '看电视、看别人的电视',
      signature: '别太一样',
      color: '#bc3639'
    },

    {
      id: '16',
      name: '王林',
      nickname: '林林',
      hometown: '四川自贡',
      birthday: '1999.01.21',
      constellation: '水瓶',
      mobile: '18094247962',
      qq: '1987153442',
      email: '1987153442@qq.com',
      avatar: 'https://p1.pstatp.com/large/pgc-image/1539249812874260d011c57',
      github: 'https://github.com/wanglin1987153442',
      hobby: '运动，听歌',
      signature: '就这？就这？就这？就这！',
      color: '#716371'
    },

    {
      id: '17',
      name: '苏玉溪',
      nickname: '苏先森',
      hometown: '广西玉林',
      birthday: '1999.04.12',
      constellation: '白羊座',
      mobile: '13457513856',
      qq: '2296887348',
      email: '2296887348@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/55439911?s=400&v=4',
      github: 'https://github.com/suyuxi1',
      hobby: '听歌，看电影',
      signature: '生活总得风雨交加',
      color: '#0097A7'
    },

    {
      id: '18',
      name: '赵肖龙',
      nickname: '撒野',
      hometown: '江苏无锡',
      birthday: '2000.4.20',
      constellation: '金牛',
      mobile: '18851860805',
      qq: '1019916061',
      email: '1019916061@qq.com',
      avatar: 'https://avatars2.githubusercontent.com/u/55444160?s=460&v=4',
      github: 'https://github.com/zhao-rgb',
      hobby: '打球',
      signature: '撒野啊',
      color: '#E57373'
    },

    {
      id: '19',
      name: '袁腾飞',
      nickname: 'Rapids',
      hometown: '安徽阜阳',
      birthday: '1998.07.30',
      constellation: '狮子座',
      mobile: '18851856989',
      qq: '798763046',
      email: '798763046@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/44634313?s=460&v=4',
      github: 'https://github.com/RRapids',
      hobby: '打球',
      signature: '若青春只顾疯狂，卑微就越来越近',
      color: '#dd4639'
    },

    {
      id: '20',
      name: '张浩杰',
      nickname: '寻寻觅',
      hometown: '山西晋城',
      birthday: '1999.05.11',
      constellation: '巨蟹座',
      mobile: '18851999738',
      qq: '1224178565',
      email: '1224178565@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/55377835?s=460&v=4',
      github: 'https://github.com/GitHub-fly',
      hobby: '什么也不懂，什么都不会',
      signature: '寻寻觅觅，冷冷清清',
      color: '#BA68C8'
    },

    {
      id: '21',
      name: '尚宇驰',
      nickname: '盏茶浅抿',
      hometown: '江苏徐州',
      birthday: '2000.04.02',
      constellation: '白羊座',
      mobile: '18094246920',
      qq: '351234359',
      email: '351234359@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/55419799?s=400&u=06400cc24a3dd8b97880a631daad51e37a6792d8&v=4',
      github: 'https://github.com/ycshang123',
      hobby: '追剧、编程、电影、音乐',
      signature: '少年抬头，仰望明天。仰望，就有希望。',
      color: '#FF80AB'
    },

    {
      id: '22',
      name: '许源',
      nickname: 'Away',
      hometown: '重庆酉阳',
      birthday: '2000.2.15',
      constellation: '水瓶座',
      mobile: '15025762624',
      qq: '2414704205',
      email: '2414704205@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/60567523?s=460&v=4',
      github: 'https://github.com/xuyuan-215',
      hobby: '音乐， 篮球',
      signature: '热爱漫无边际，生活自有分寸',
      color: '#0097A7'
    },

    {
      id: '23',
      name: '黄敬理',
      nickname: '小黄',
      hometown: '广西灵山',
      birthday: '1999.01.01',
      constellation: '天秤座',
      mobile: '18278743357',
      qq: '2368046759',
      email: '2368046759@qq.com',
      avatar: 'https://aadsadas.oss-cn-beijing.aliyuncs.com/img/avatar.jpg',
      github: 'https://github.com/huangjingliANBAO',
      hobby: '看足球 小视频',
      signature: '有事情做真好',
      color: '#EF5350'
    },

    {
      id: '24',
      name: '唐小梁',
      nickname: 'XL码的唐',
      hometown: '广西贵港',
      birthday: '1998.07.16',
      constellation: '巨蟹座',
      mobile: '18805167507',
      qq: '1255965856',
      email: '1255965856@qq.com',
      avatar: 'http://dwz.date/BbR',
      github: 'https://github.com/',
      hobby: '一切的不务正业都是我的爱好',
      signature: '真常应物，真常得性；常应常静，常清静矣',
      color: '#0097a7'
    },

    {
      id: '25',
      name: '倪涛涛',
      nickname: '事在人为',
      hometown: '江苏徐州',
      birthday: '1999.05.27',
      constellation: '双子座',
      mobile: '18851855106',
      qq: '1914866205',
      email: '1914866205@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/58495771?s=460&v=4',
      github: 'https://github.com/1914866205',
      hobby: '学习，跑步，聊天',
      signature: '事在人为',
      color: '#736472'
    },

    {
      id: '26',
      name: '黄启佳',
      nickname: '小半吻',
      hometown: '广西桂林',
      birthday: '19991117',
      constellation: '天枰座',
      mobile: '19850099797',
      qq: '1559022933',
      email: '1559022933@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/51233828?s=460&v=4',
      github: 'https://github.com/CHINAHUANGQIJIA',
      hobby: '音乐，美术，鼓乐，球类运动',
      signature: '公平',
      color: '#455A64'
    },

    {
      id: '27',
      name: '秦健',
      nickname: 'N',
      hometown: '江苏苏州',
      birthday: '2000.02.17',
      constellation: '水瓶座',
      mobile: '13739173619',
      qq: '1293340422',
      email: '1293340422@qq.com',
      avatar: 'https://pic2.zhimg.com/80/v2-b89c9d9d283288b3060910f1fa258edb_720w.jpg',
      github: 'https://github.com/Mrqinforce',
      hobby: '打球',
      signature: '专注',
      color: '#c73b6b'
    },

    {
      id: '28',
      name: '陈蓉琪',
      nickname: 'mob',
      hometown: '湖南衡阳',
      birthday: '2001.2.15',
      constellation: '水瓶座',
      mobile: '18851699003',
      qq: '2631315464',
      email: '2631315464@qq.com',
      avatar: 'https://avatars1.githubusercontent.com/u/51233828?s=460&v=4',
      github: 'https://github.com/1802343228',
      hobby: '动漫 游戏 音乐 jk制服',
      signature: '走出舒适圈',
      color: '#d26b86'
    },

    {
      id: '29',
      name: '郁杰原',
      nickname: '枫津栈',
      hometown: '江苏盐城',
      birthday: '2000.01.22',
      constellation: '水瓶座',
      mobile: '15370000688',
      qq: '2641617428',
      email: '2641617428@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/55391822?s=460&v=4',
      github: 'https://github.com/yjyqq123',
      hobby: '吃喝玩乐',
      signature: '开心每一天',
      color: '#9575CD'
    },

    {
      id: '30',
      name: '田震',
      nickname: 'Crihero_',
      hometown: '山西吕梁',
      birthday: '1998.11.06',
      constellation: '天蝎座',
      mobile: '19850099292',
      qq: '1299088269',
      email: 'zhent1106@163.com',
      avatar: 'https://uploader.shimo.im/f/IZuPjlOpBRUTU7oZ.jpg!avatar',
      github: 'https://github.com/zhent1106',
      hobby: '听歌，阅读，创新',
      signature: '山川湖泊和我都在看你',
      color: '#4574C1'
    },

    {
      id: '31',
      name: '王欢乐',
      nickname: 'Sunny',
      hometown: '甘肃平凉',
      birthday: '1998.08.07',
      constellation: '处女座',
      mobile: '18805162578',
      qq: '1162608075',
      email: '1162608075@qq.com',
      avatar:
        'https://upload.jianshu.io/users/upload_avatars/14351850/e3e19f54-57bf-4427-b12a-d7d1d563e20c?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',
      github: 'https://github.com/WHL1998w',
      hobby: '阅读，听歌，追剧',
      signature: '你就是你，不一样的烟火',
      color: '#3db0da'
    },

    {
      id: '32',
      name: '王登科',
      nickname: 'For',
      hometown: '山西吕梁',
      birthday: '1997.5.20',
      constellation: '巨蟹座',
      mobile: '18851998839',
      qq: '1091886414',
      email: '1091886414@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/55445762?s=460&v=4',
      github: 'https://github.com/wangDk199',
      hobby: '打球、编程',
      signature: '忠',
      color: '#FF5252'
    },

    {
      id: '33',
      name: '郑亮',
      nickname: '郑亮',
      hometown: '安徽宿州',
      birthday: '1999.2.8',
      constellation: '水瓶座',
      mobile: '18851697510',
      qq: '1945256212',
      email: '1945256212@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/55389274?s=460&v=4',
      github: 'https://github.com/ZL521990208',
      hobby: '听歌、电影',
      signature: '红红火火过大年',
      color: '#87CEEB'
    },

    {
      id: '34',
      name: '郭瑞昌',
      nickname: '郭瑞昌',
      hometown: '山西临汾',
      birthday: '1999.04.16',
      constellation: '双子座',
      mobile: '18851853897',
      qq: '48038411',
      email: '48038411@qq.com',
      avatar: 'https://avatars0.githubusercontent.com/u/44643400?s=460&v=4',
      github: 'https://github.com/48038411',
      hobby: '打篮球，编程',
      signature: '世界这么大最自己喜欢的事',
      color: '#8db6ed'
    },

    {
      id: '35',
      name: '杨苏祥',
      nickname: '杨苏祥',
      hometown: '安徽阜阳',
      birthday: '1999.12.21',
      constellation: '射手座',
      mobile: '15178114095',
      qq: '3597107837',
      email: '3597107837@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/45230662?s=460&v=4',
      github: 'https://github.com/suxiangyang1',
      hobby: '听歌 看足球',
      signature: '无奈无名氏',
      color: '#26C6DA'
    },

    {
      id: '36',
      name: '王庆媛',
      nickname: '啦',
      hometown: '贵州贵阳',
      birthday: '2000.9.7',
      constellation: '处女座',
      mobile: '18851861839',
      qq: '1950016253',
      email: '1950016253@qq.com',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4GOLrJQhyxNivTABKcy6JWfuOjXNFvjtj67BOaGJzPoCXaiyt',
      github: 'https://github.com/Wang-qing-yuan',
      hobby: '电影，听歌',
      signature: '事在人为',
      color: 'rgb(255,174,189)'
    },

    {
      id: '37',
      name: '吴家浩',
      nickname: 'Re',
      hometown: '江苏苏州',
      birthday: '2000.8.16',
      constellation: '狮子座',
      mobile: '18851697931',
      qq: '1273163614',
      email: '1273163614@qq.com',
      avatar: 'https://avatars3.githubusercontent.com/u/51556409?s=460&v=4',
      github: 'https://github.com/Baby20000816',
      hobby: '音乐，游戏',
      signature: 'No game no life',
      color: '#a992e1'
    },

    {
      id: '38',
      name: '陈宇航',
      nickname: 'Archer',
      hometown: '江苏常州',
      birthday: '1999.12.14',
      constellation: '射手座',
      mobile: '18932386185',
      qq: '1797262364',
      email: '1797262364@qq.com',
      avatar: 'https://avatar-cdn.shimo.im/TqsbEAzOKIo6ZiUd/sheshouzuo.jpg__avatar',
      github: 'https://github.com/kchenyuhang',
      hobby: '游戏、音乐、钓鱼、阅读',
      signature: 'No Freedom No Life',
      color: '#dc4e41'
    },

    {
      id: '39',
      name: '位哲武',
      nickname: '隨颩洏萣',
      hometown: '江苏徐州',
      birthday: '2000.06.06',
      constellation: '双子座',
      mobile: '13013947768',
      qq: '2316860587',
      email: '2316860587@qq.com',
      avatar: 'https://avatars2.githubusercontent.com/u/43782207?s=460&v=4',
      github: 'https://github.com/weizhewu',
      hobby: '轻音乐、阅读',
      signature: '永远不要跟傻瓜吵架，因为别人会分不清到底谁是傻瓜',
      color: '#67CCAA'
    },

    {
      id: '40',
      name: '岳凡',
      nickname: '派大星',
      hometown: '江苏常州',
      birthday: '2000.03.23',
      constellation: '白羊座',
      mobile: '16651100323',
      qq: '1412666584',
      email: '1412666584@qq.com',
      avatar:
        'https://public-cdn-oss.mosoteach.cn/avatar/2018/BD/78ad5f1737d80986b420a23fb07d530c.jpg?v=1551849938&x-oss-process=style/s200x200',
      github: 'https://github.com/YFuean',
      hobby: '电影、阅读、追剧、乒乓、手游、桌游',
      signature: '别逼我打野',
      color: '#87ceeb'
    },

    {
      id: '41',
      name: '丁怡凡',
      nickname: '唯一',
      hometown: '山西运城',
      birthday: '2000.10.09',
      constellation: '天蝎座',
      mobile: '18851862081',
      qq: '510040515',
      email: '510040515@qq.com',
      avatar: 'http://m.imeitou.com/uploads/allimg/2020022416/xcjlklpqncw-lp.jpeg',
      github: 'https://github.com/dyf-yifan',
      hobby: '阅读、音乐、电影',
      signature: '甩掉忧伤找回快乐@',
      color: '#eb8001'
    }
  ]

  let container = document.getElementById('container')
  let index = 0
  for (let i = 0; i < 4; i++) {
    let queue = document.createElement('div')
    queue.classList.add('queue')
    container.appendChild(queue)
    for (let j = 0; j < 11; j++) {
      let student = students[index]
      let cardContent = `<div>
            <img src="${student.avatar}" onclick="show(this)"/>
            <h3>
              ${student.name}
            </h3>
            <p>
             ${student.signature}
            </p>
            <div class="content" style="background-color:${student.color}" onclick="hide(this)">
             <p>昵称：${student.nickname}</p> 
             <p>籍贯：${student.hometown}</p> 
             <p>生日: ${student.birthday}</p> 
             <p>星座：${student.constellation}</p> 
             <p>手机：${student.mobile}</p> 
             <p>邮箱：${student.email}</p> 
             <p>爱好：${student.hobby}</p> 
            </div>
           </div>`
      let card = document.createElement('div')
      card.innerHTML = cardContent
      card.style.backgroundColor = student.color
      card.classList.add('item')
      queue.appendChild(card)
      index++
    }
  }
}

function show(data) {
  let el = data.parentNode.children[3]
  el.style.display = 'block'
  el.classList.add('in')
}

function hide(data) {
  data.style.display = 'none'
  data.classList.add('out')
}

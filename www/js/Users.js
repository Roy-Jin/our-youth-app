// 该文件个人数据未经许可不可滥用, 或传播和分享!
// 该文件个人数据未经许可不可滥用, 或传播和分享!
// 该文件个人数据未经许可不可滥用, 或传播和分享!

// 点击联系方式时触发的事件
var _Invokes = {
    qq: "url=>mqqapi://card/show_pslcard?src_type=internal&version=1&uin=%v",
    wx: "copy=>复制成功!\n请自行搜索并添加微信账号;url=>weixin://",
    phone: "tel=>%v",
}

/**
 * _DATA_ 个人信息数据
 * @Object [students]>[User]:Array 学生信息数组
 * @Object [teachers]>[User]:Array 教师信息数组
 * 
 * User -> 用户信息对象 (*表示必填项)
 * @String *[name] 用户姓名
 * @String *[id] 用户ID --> 学生>222000、教师>0
 * @Number *[gender] 性别 --> 0=>女、1=>男
 * @Array *[tags]  标签数组 --> 至少一个标签(学生、教师)
 * @String *[password] 密码 --> 用于登录(一般为小写首字母+2220)
 * @Array *[alias] 别名数组 --> 包括英文名、昵称等
 * @String [avatar] 头像 --> 图片链接
 * @String [birth] 出生日期 --> 格式任意
 * @Array [contact]>[title,value,invoke]:String 联系方式数组
 * 
 * Contact对象 ---> 用于联系方式
 * @String [title] 联系方式名称 --> 如QQ、微信、电话等
 * @String [value] 联系方式值 --> 如QQ号、微信号、手机号等
 * @String [invoke] 点击触发事件 --> 支持url、tel、web等,若不填则默认复制到剪贴板
 */

const _DATA_ = {
    students: [
        {
            id: 222001,
            name: "曾文雯",
            gender: 0,
            birth: "二〇〇六年五月廿七",
            tags: ["学生", "团支书"],
            password: "zww2220",
            alias: ["zww", "ZengWenWen"]
        },
        {
            id: 222002,
            name: "罗会璇",
            gender: 0,
            birth: "二〇〇六年五月廿三",
            tags: ["学生", "艺术生", "美术"],
            password: "lhx2220",
            alias: ["lhx", "LuoHunXuan"]
        },
        {
            id: 222003,
            name: "陈家翔",
            gender: 1,
            tags: ["学生", "体育生"],
            password: "cjx2220",
            alias: ["cjx", "ChenJiaXiang"]
        },
        {
            id: 222004,
            name: "陈斯俊",
            gender: 0,
            birth: "2007年10月1日",
            tags: ["学生", "英语课代表"],
            password: "csj2220",
            alias: ["csj", "ChenSiJun", "鸡"]
        },
        {
            id: 222005,
            name: "陈子豪",
            gender: 1,
            birth: "二〇〇六年九月十八",
            tags: ["学生"],
            password: "czh2220",
            alias: ["czh", "ChenZiHao", "卡卡"]
        },
        {
            id: 222006,
            name: "戴玉娜",
            gender: 0,
            birth: "2007年8月2日",
            tags: ["学生"],
            password: "dyn2220",
            alias: ["dyn", "DaiYuNa"]
        },
        {
            id: 222007,
            name: "董汉泽",
            gender: 1,
            birth: "2006年12月3日",
            tags: ["学生", "体育生"],
            password: "dhz2220",
            alias: ["dhz", "DongHanZe", "皇上"]
        },
        {
            id: 222008,
            name: "范大为",
            gender: 1,
            tags: ["学生", "艺术生", "音乐"],
            password: "fdw2220",
            alias: ["fdw", "FanDaWei", "大为", "大维"]
        },
        {
            id: 222009,
            name: "冯有聪",
            gender: 1,
            birth: "二〇〇六年二月廿五",
            tags: ["学生", "副班长"],
            password: "fyc2220",
            alias: ["fyc", "FengYouCong"],
            contact: [
                {
                    title: "QQ",
                    value: "2607613157",
                    invoke: _Invokes.qq
                },
                {
                    title: "微信",
                    value: "f200602250324",
                    invoke: _Invokes.wx
                }]
        },
        {

            id: 222010,
            name: "冯垣",
            gender: 1,
            tags: ["学生", "体育委员", "体育生"],
            password: "fy2220",
            alias: ["fy", "FengYuan"]
        },
        {
            id: 222011,
            name: "干梦雪",
            gender: 0,
            birth: "二〇〇七年九月初二",
            tags: ["学生"],
            password: "gmx2220",
            alias: ["gmx", "GanMengXue"]
        },
        {
            id: 222012,
            name: "龚凌聪",
            gender: 1,
            birth: "2008年1月20日",
            tags: ["学生"],
            password: "glc2220",
            alias: ["glc", "GongLingCong"]
        },
        {

            id: 222013,
            name: "何振涛",
            gender: 1,
            birth: "二〇〇七年四月廿六",
            tags: ["学生"],
            password: "hzt2220",
            alias: ["hzt", "HeZhenTao"]
        },
        {

            id: 222014,
            name: "洪瑞",
            gender: 1,

            tags: ["学生"],
            password: "hr2220",
            alias: ["hr", "HongRui"]
        },
        {
            id: 222015,
            name: "胡俊",
            gender: 1,
            birth: "2005年9月30日",
            tags: ["学生"],
            password: "hj2220",
            alias: ["hj", "HuJun"]
        },
        {

            id: 222016,
            name: "胡启俊",
            gender: 1,
            tags: ["学生", "地理课代表"],
            password: "hqj2220",
            alias: ["hqj", "HuaQiJun"]
        },
        {
            id: 222017,
            name: "黄浩文",
            gender: 0,
            birth: "二〇〇七年大年初八",
            tags: ["学生"],
            password: "hhw2220",
            alias: ["hhw", "HuangHaoWen"]
        },
        {
            id: 222018,
            name: "黄思纤",
            gender: 1,
            birth: "二〇〇六年九月初二",
            tags: ["学生", "劳动委员", "体育生"],
            password: "hsq2220",
            alias: ["hsq", "HuangSiQian"]
        },
        {
            id: 222019,
            name: "黄婷",
            gender: 0,
            birth: "二〇〇七年九月初三",
            tags: ["学生", "班长"],
            password: "ht2220",
            alias: ["ht", "YellowStop", "HuangTing"]
        },
        {
            id: 222020,
            name: "黄轩",
            gender: 0,
            birth: "二〇〇七年六月廿三",
            tags: ["学生", "心理委员"],
            password: "hx2220",
            alias: ["hx", "HuangXuan"]
        },
        {
            id: 222021,
            name: "黄雅萱",
            gender: 0,
            birth: "2007年10月26日",
            tags: ["学生"],
            password: "hyx2220",
            alias: ["hyx", "HuangYaXuan"]
        },
        {
            id: 222022,
            name: "饶展颜",
            gender: 0,
            birth: "二〇〇八年十二月廿七",
            tags: ["学生"],
            password: "rzy2220",
            alias: ["rzy", "RaoZhanYan"]
        },
        {
            id: 222023,
            name: "江于扬",
            gender: 1,
            birth: "2006年8月13日",
            tags: ["学生", "生活委员", "体育生"],
            password: "jyy2220",
            alias: ["jyy", "JiangYuYang"]
        },
        {
            id: 222024,
            name: "李汉钊",
            gender: 1,
            tags: ["学生"],
            password: "lhz2220",
            alias: ["lhz", "LiHanZhao"]
        },
        {
            id: 222025,
            name: "李锦",
            gender: 0,
            birth: "二〇〇七年二月廿五",
            tags: ["学生", "政治课代表"],
            password: "lj2220",
            alias: ["lj", "LiJin", "里脊肉"]
        },
        {
            id: 222026,
            name: "李炎",
            gender: 1,
            birth: "二〇〇七年冬月初二",
            tags: ["学生"],
            password: "ly2220",
            alias: ["ly", "LiYan"]
        },
        {
            id: 222027,
            name: "李椅",
            gender: 0,
            birth: "二〇〇七年冬月十八",
            tags: ["学生"],
            password: "ly2220",
            alias: ["ly", "LiYi"]
        },
        {
            id: 222028,
            name: "凌学楠",
            gender: 1,
            birth: "2006年9月15日",
            tags: ["学生", "心理委员", "体育生"],
            password: "lxn2220",
            alias: ["lxn", "LinXueNan"]
        },
        {
            id: 222029,
            name: "刘馨润",
            gender: 1,
            birth: "2007年10月11日",
            tags: ["学生", "体育生"],
            password: "lxr2220",
            alias: ["lxr", "LiuXinRui"]
        },
        {
            id: 222030,
            name: "吕邦国",
            gender: 1,
            birth: "二〇〇六年三月初八",
            tags: ["学生"],
            password: "lbg2220",
            alias: ["lbg", "LvBangGuo"]
        },
        {
            id: 222031,
            name: "卢俊超",
            gender: 1,
            birth: "二〇〇七年·七夕节",
            tags: ["学生", "体育生"],
            password: "ljc2220",
            alias: ["ljc", "LuJunChao"]
        },
        {
            id: 222032,
            name: "罗明涛",
            gender: 0,
            birth: "二〇〇六年九月廿四",
            tags: ["学生"],
            password: "lmt2220",
            alias: ["lmt", "LuoMingTao", "海狸"]
        },
        {
            id: 222033,
            name: "马聪",
            gender: 1,
            birth: "二〇〇六年八月十六",
            tags: ["学生", "体育生"],
            password: "mc2220",
            alias: ["mc", "MaCong"]
        },
        {
            id: 222034,
            name: "梅峻恺",
            gender: 1,
            birth: "2005年4月17日",
            tags: ["学生", "历史课代表"],
            password: "mjk2220",
            alias: ["mjk", "MeiJunKai"]
        },
        {
            id: 222035,
            name: "倪万成",
            gender: 1,
            birth: "2007年7月20日",
            tags: ["学生", "体育生"],
            password: "nwc2220",
            alias: ["nwc", "NinWanCheng", "龙哥"]
        },
        {
            id: 222036,
            name: "沈永杰",
            gender: 1,
            birth: "2007年6月10日",
            tags: ["学生", "体育生", "学生会长"],
            password: "syj2220",
            alias: ["syj", "ShenYongJie", "葱哥", "聪哥"]
        },
        {
            id: 222037,
            name: "帅书宇",
            gender: 1,
            birth: "2006年12月31日",
            tags: ["学生"],
            password: "ssy2220",
            alias: ["ssy", "ShuaiShuYu", "小帅"]
        },
        {
            id: 222038,
            name: "苏子惠",
            gender: 0,
            tags: ["学生", "艺术生", "舞蹈"],
            password: "szh2220",
            alias: ["szh", "SuZiHui"]
        },
        {
            id: 222039,
            name: "汤子恒",
            gender: 1,
            birth: "2007年9月13日",
            tags: ["学生"],
            password: "tzh2220",
            alias: ["tzh", "TangZiHeng"]
        },
        {
            id: 222040,
            name: "王家权",
            gender: 1,
            birth: "二〇〇六年正月三十",
            tags: ["学生", "学习委员", "体育生"],
            password: "wjq2220",
            alias: ["wjq", "WangJiaQuan", "甲醛"]
        },
        {
            id: 222041,
            name: "王晋",
            gender: 1,
            birth: "二〇〇七年九月初四",
            tags: ["学生", "英语课代表"],
            password: "wj2220",
            alias: ["wj", "Roy", "WangJin", "小学生"],
            contact: [{
                title: "QQ",
                value: "724011786",
                invoke: _Invokes.qq
            }]
        },
        {
            id: 222042,
            name: "王永轩",
            gender: 1,
            birth: "二〇〇七年九月廿",
            tags: ["学生"],
            password: "wyx2220",
            alias: ["wyx", "WangYongXuan"]
        },
        {
            id: 222043,
            name: "王宗阳",
            gender: 1,
            birth: "二〇〇六年七月十六",
            tags: ["学生", "历史课代表"],
            password: "wzy2220",
            alias: ["wzy", "WangZongYang"]
        },
        {
            id: 222044,
            name: "吴辰",
            gender: 1,
            birth: "2007年11月20日",
            tags: ["学生"],
            password: "wc2220",
            alias: ["wc", "WuChen"]
        },
        {
            id: 222045,
            name: "吴红梅",
            gender: 0,
            birth: "二〇〇七年梅月初六",
            tags: ["学生", "数学课代表"],
            password: "whm2220",
            alias: ["whm", "WuHongMei", "卡拉米"]
        },
        {
            id: 222046,
            name: "吴金旺",
            gender: 1,
            birth: "二〇〇六年冬月初五",
            tags: ["学生"],
            password: "wjw2220",
            alias: ["wjw", "WuJinWang", "校草"]
        },
        {
            id: 222047,
            name: "吴正超",
            gender: 1,
            birth: "二〇〇六年八月初五",
            tags: ["学生"],
            password: "wzc2220",
            alias: ["wzc", "WuZhenChao"]
        },
        {
            id: 222048,
            name: "肖凡",
            gender: 1,
            birth: "2007年1月21日",
            tags: ["学生"],
            password: "xf2220",
            alias: ["xf", "XiaoFan"]
        },
        {
            id: 222049,
            name: "熊小杰",
            gender: 1,
            birth: "2006年8月17日",
            tags: ["学生"],
            password: "xxj2220",
            alias: ["xxj", "XiongXiaoJie"]
        },
        {
            id: 222050,
            name: "熊艺萍",
            gender: 0,
            birth: "2007年10月25日",
            tags: ["学生", "语文课代表"],
            password: "xyp2220",
            alias: ["xyp", "XiongYiPing"]
        },
        {
            id: 222051,
            name: "徐莹菲",
            gender: 0,
            birth: "二〇〇七年正月初六",
            tags: ["学生"],
            password: "xyf2220",
            alias: ["xyf", "XuYingFei"]
        },
        {
            id: 222052,
            name: "于倩",
            gender: 0,
            birth: "二〇〇七年冬月十一",
            tags: ["学生"],
            password: "yq2220",
            alias: ["yq", "YuQian"]
        },
        {
            id: 222053,
            name: "余相瑶",
            gender: 0,
            birth: "二〇〇六年十月十四",
            tags: ["学生", "文艺委员"],
            password: "yxy2220",
            alias: ["yxy", "YuXiangYao"]
        },
        {
            id: 222054,
            name: "岳彬",
            gender: 1,
            birth: "二〇〇五年九月廿三",
            tags: ["学生", "体育生"],
            password: "yb2220",
            alias: ["yb", "YueBin"]
        },
        {
            id: 222055,
            name: "赵文博",
            gender: 1,
            birth: "2007年3月19日",
            tags: ["学生", "体育生"],
            password: "zwb2220",
            alias: ["zwb", "ZhaoWenBo"]
        },
        {
            id: 222056,
            name: "李雨恒",
            gender: 1,
            birth: "2006年2月28日",
            tags: ["学生"],
            password: "zyh2220",
            alias: ["zyh", "LiYuHeng"]
        },
        {
            id: 222057,
            name: "赵云杰",
            gender: 1,
            birth: "2006年9月4日",
            tags: ["学生"],
            password: "zyj2220",
            alias: ["zyj", "ZhaoYunJie"]
        },
        {
            id: 222058,
            name: "周启波",
            gender: 1,
            birth: "二〇〇六年五月十二",
            tags: ["学生"],
            password: "zqb2220",
            alias: ["zqb", "ZhouQiBo", "周波"]
        },
        {
            id: 222059,
            name: "朱铭慧",
            gender: 0,
            birth: "二〇〇七年七月初十",
            tags: ["学生"],
            password: "zmh2220",
            alias: ["zmh", "ZhuMingHui"]
        },
        {
            id: 222060,
            name: "熊思哲",
            gender: 1,
            birth: "2007年5月20日",
            tags: ["学生", "传媒生"],
            password: "xsz2220",
            alias: ["xsz", "XiongSiZhe"]
        },
        {
            id: 222061,
            name: "陈丽雯",
            gender: 0,
            tags: ["学生", "艺术生", "舞蹈"],
            password: "clw2220",
            alias: ["clw", "ChenLiWen"]
        },
        {
            id: 222062,
            name: "徐锦昊",
            gender: 1,
            birth: "2007年8月23日",
            tags: ["学生", "安全委员", "体育生"],
            password: "xjh2220",
            alias: ["xjh", "XuJinHao", "小黑", "老黑"]
        },
        {
            id: 222063,
            name: "周海雲",
            gender: 0,
            tags: ["学生", "艺术生", "舞蹈"],
            password: "zhy2220",
            alias: ["zhy", "ZhouHaiYun"]
        },
        {
            id: 222064,
            name: "罗梦娟",
            gender: 0,
            tags: ["学生", "艺术生", "音乐"],
            password: "lmj2220",
            alias: ["lmj", "LuoMengJuan"]
        },
        {
            id: 222065,
            name: "吕广森",
            gender: 1,
            tags: ["学生", "艺术生", "舞蹈"],
            password: "lgs2220",
            alias: ["lgs", "LvGuangSen"]
        },
        {
            id: 222066,
            name: "汤悦铃",
            gender: 0,
            tags: ["学生", "艺术生", "舞蹈"],
            password: "tyl2220",
            alias: ["tyl", "TaoYueLing"]
        },
        {
            id: 222067,
            name: "黄昊妍",
            gender: 0,
            tags: ["学生", "艺术生", "音乐"],
            password: "hhy2220",
            alias: ["hhy", "HuangHaoYan"]
        },
        {
            id: 222068,
            name: "杨显帅",
            gender: 1,
            tags: ["学生", "体育生"],
            password: "yxs2220",
            alias: ["yxs", "YangXianShuai"]
        },
        {
            id: 222069,
            name: "李子豪",
            gender: 1,
            tags: ["学生", "体育生"],
            password: "lzh2220",
            alias: ["lzh", "LiZhiHao"]
        },
        {
            id: 222070,
            name: "袁聪",
            gender: 1,
            tags: ["学生", "体育生"],
            password: "yc2220",
            alias: ["yc", "YuanCong", "洋葱"]
        },
        {
            id: 222071,
            name: "吴宪",
            gender: 1,
            tags: ["学生", "体育生"],
            password: "wx2220",
            alias: ["wx", "WuXian"]
        },
        {
            id: 222072,
            name: "干乐佳",
            gender: 1,
            tags: ["学生", "体育生"],
            password: "lyj2220",
            alias: ["glj", "GanLeJia", "干辣椒"]
        },
        {
            id: 222073,
            name: "刘锦锋",
            gender: 1,
            tags: ["学生"],
            password: "ljf2220",
            alias: ["ljf", "LiuJinFeng"]
        },
        {
            id: 222074,
            name: "尧天磊",
            gender: 1,
            tags: ["学生", "体育生"],
            password: "ytl2220",
            alias: ["ytl", "YaoTianLei"]
        },
    ],
    teachers: [
        {
            id: 1,
            name: "邓志刚",
            gender: 1,
            tags: ["教师", "班主任"],
            password: "dzg2220",
            avatar: "../data/avatar/M.png",
            alias: ["dzg", "DengZhiGang", "老班", "小夫", "老师"],
            contact: [{
                title: "电话",
                value: "13426587133",
                invoke: _Invokes.phone
            }]
        },
        {
            id: 2,
            name: "张友石",
            gender: 1,
            tags: ["教师", "语文老师"],
            password: "zys2220",
            avatar: "../data/avatar/M.png",
            alias: ["zys", "ZhangYouShi", "石头", "卤蛋"],
            contact: [{
                title: "电话",
                value: "13755293178",
                invoke: _Invokes.phone
            }]
        },
        {
            id: 3,
            name: "邓安庆",
            gender: 1,
            avatar: "../data/avatar/M.png",
            tags: ["教师", "数学老师"],
            password: "djp2220",
            alias: ["djp", "DengAnQing"],
            contact: [
                {
                    title: "电话",
                    value: "13879206619",
                    invoke: _Invokes.phone
                }
            ]

        },
        {
            id: 4,
            name: "万菊珍",
            gender: 0,
            avatar: "../data/avatar/W (1).png",
            tags: ["教师", "英语老师"],
            password: "wjz2220",
            alias: ["wjz", "WanJuZhen"],
            contact: [
                {
                    title: "电话",
                    value: "13979207309",
                    invoke: _Invokes.phone
                }
            ]
        },
        {
            id: 5,
            name: "李小波",
            gender: 1,
            avatar: "../data/avatar/M.png",
            tags: ["教师", "政治老师"],
            password: "lxb2220",
            alias: ["lxb", "LiXiaoBo"],
            contact: [
                {
                    title: "电话",
                    value: "18770096781",
                    invoke: _Invokes.phone
                }
            ]
        },
        {
            id: 6,
            name: "陈仁荣",
            gender: 0,
            avatar: "../data/avatar/W (2).png",
            tags: ["教师", "历史老师"],
            password: "crr2220",
            alias: ["crr", "ChenRenRong"],
            contact: [
                {
                    title: "电话",
                    value: "13507063713",
                    invoke: _Invokes.phone
                }
            ]
        },
        {
            id: 7,
            name: "吕杰",
            gender: 1,
            avatar: "../data/avatar/M.png",
            tags: ["教师", "地理老师"],
            password: "lj2220",
            alias: ["lj", "Jack", "LvJie"],
            contact: [
                {
                    title: "电话",
                    value: "13755213498",
                    invoke: _Invokes.phone
                }
            ]
        },
        {
            id: 8,
            name: "蔡剑英",
            gender: 1,
            avatar: "../data/avatar/M.png",
            tags: ["教师", "体育老师"],
            password: "zjy2220",
            alias: ["zjy", "CaiJianYing", "老蔡"]
        }
    ]
}

class USERS_CLASS {
    constructor(_DATA_) {
        this.DATA = _DATA_;
    }

    // 搜索用户
    search(keyword, by = ["name", "id", "tag", "alias", "gender"], collection = ["students", "teachers"]) {
        if (!keyword) return [];
        keyword = keyword.trim().replace(/\s+/g, "");

        const [condition, results] = [{
            id: U => U.id === parseInt(keyword) + 222000 || U.id === parseInt(keyword) && U.id > 222000,
            tag: U => U.tags.some(t => t.toLowerCase().includes(keyword.toLowerCase())),
            name: U => U.name.toLowerCase().includes(keyword.toLowerCase()),
            alias: U => U.alias.some(a => a.toLowerCase().startsWith(keyword.toLowerCase())),
            gender: U => U.gender === parseInt(keyword === "男" ? 1 : keyword === "女" ? 0 : null)
        }, []];

        by.forEach(type => {
            results.push(...((type) => {
                // type => name, id, tag, alias, gender
                const results = [];
                collection.forEach(S_T => {
                    // S_T => student or teacher
                    this.DATA[S_T].forEach(U => {
                        // U => user
                        if (condition[type](U)) {
                            results.push(U);
                        }
                    });
                });
                return results;
            })(type))
        })

        return [...new Set(results)];
    }

    // 获取用户信息
    getUserInfo(name) {
        if (!name) return null;
        const USER = this.DATA.students.concat(this.DATA.teachers).find(user => user.name === name);
        return USER ? USER : null;
    };

    // 检查密码是否正确
    checkPassword(name, password) {
        if (!name || !password) return false;
        const USER = this.getUserInfo(name);
        return (USER && USER.password === password) ? USER : false;
    }

}

// const USERS = new USERS_CLASS(_DATA_);
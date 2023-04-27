let RspyList = {
    /* 监控信息配置 */
    SpyList: [
        {
            Name: '【KR】店铺抽奖 · 超级无线&jd_luck_draw.js',
            Script: 'KingRan_KR/jd_luck_draw.js',
            ListenEnv: [
                'M_WX_LUCK_DRAW_URL',
                'LUCK_DRAW_URL',
            ],
            SetEnv: {
                M_WX_LUCK_DRAW_URL: 'LUCK_DRAW_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】组队瓜分奖品 · 超级会员&jd_cjzdgf.js',
            Script: 'KingRan_KR/jd_cjzdgf.js',
            ListenEnv: [
                'jd_cjhy_activityId',
                'jd_cjhy_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】无线游戏 · 超级无线&jd_wxgame.js',
            Script: 'KingRan_KR/jd_wxgame.js',
            ListenEnv: [
                'jd_wxgame_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】盖楼有礼 · 超级无线&jd_wxBuildActivity.js',
            Script: 'KingRan_KR/jd_wxBuildActivity.js',
            ListenEnv: [
                'jd_wxBuildActivity_activityId',
                'M_WX_BUILD_DRAW_URL',
            ],
            SetEnv: {
                M_WX_BUILD_DRAW_URL: 'jd_wxBuildActivity_activityId',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】加购有礼 · 超级会员&jd_wxCollectionActivity.js',
            Script: 'KingRan_KR/jd_wxCollectionActivity.js',
            ListenEnv: [
                'jd_wxCollectionActivity_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】店铺抽奖刮刮乐 · 超级无线&jd_drawCenter.js',
            Script: 'KingRan_KR/jd_drawCenter.js',
            ListenEnv: [
                'jd_drawCenter_activityId',
                'M_WX_CENTER_DRAW_URL',
            ],
            SetEnv: {
                M_WX_CENTER_DRAW_URL: 'jd_drawCenter_activityId',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】完善信息有礼 · 超级无线&jd_completeInfoActivity.js',
            Script: 'KingRan_KR/jd_completeInfoActivity.js',
            ListenEnv: [
                'jd_completeInfoActivity_activityId',
                'jd_completeInfoActivity_venderId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】粉丝互动通用活动&jd_wxFansInterActionActivity.js',
            Script: 'KingRan_KR/jd_wxFansInterActionActivity.js',
            ListenEnv: [
                'jd_wxFansInterActionActivity_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】关注店铺有礼 · 超级无线&jd_wxShopFollowActivity.js',
            Script: 'KingRan_KR/jd_wxShopFollowActivity.js',
            ListenEnv: [
                'jd_wxShopFollowActivity_activityUrl',
                'M_WX_FOLLOW_DRAW_URL',
            ],
            SetEnv: {
                M_WX_FOLLOW_DRAW_URL: 'jd_wxShopFollowActivity_activityUrl',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】分享有礼 · 超级无线&jd_wxShareActivity.js',
            Script: 'KingRan_KR/jd_wxShareActivity.js',
            ListenEnv: [
                'jd_wxShareActivity_activityId',
                'M_WX_SHARE_URL',
            ],
            SetEnv: {
                M_WX_SHARE_URL: 'jd_wxShareActivity_activityId',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】生日礼包/会员等级礼包 · 超级无线&jd_wxMcLevelAndBirthGifts.js',
            Script: 'KingRan_KR/jd_wxMcLevelAndBirthGifts.js',
            ListenEnv: [
                'jd_wxMcLevelAndBirthGifts_activityId',
                'M_WX_LEVEL_BIRTH_URL',
            ],
            SetEnv: {
                M_WX_LEVEL_BIRTH_URL: 'jd_wxMcLevelAndBirthGifts_activityId',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】集卡抽奖通用活动&jd_wxCollectCard.js',
            Script: 'KingRan_KR/jd_wxCollectCard.js',
            ListenEnv: [
                'jd_wxCollectCard_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】店铺礼包特效 · 超级无线&jd_wxShopGift.js',
            Script: 'KingRan_KR/jd_wxShopGift.js',
            ListenEnv: [
                'jd_wxShopGift_activityUrl',
                'M_WX_SHOP_GIFT_URL',
            ],
            SetEnv: {
                M_WX_SHOP_GIFT_URL: 'jd_wxShopGift_activityUrl',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】购物车锦鲤 · 超级无线&jd_wxCartKoi.js',
            Script: 'KingRan_KR/jd_wxCartKoi.js',
            ListenEnv: [
                'jd_wxCartKoi_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】ZJ瓜分京豆&jd_zdjr.js',
            Script: 'KingRan_KR/jd_zdjr.js',
            ListenEnv: [
                'jd_zdjr_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】超级无线店铺签到-监控版&jd_sevenDayjk.js',
            Script: 'KingRan_KR/jd_sevenDayjk.js',
            ListenEnv: [
                'jd_sevenDay_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】读秒拼手速 · 超级无线&jd_wxSecond.js',
            Script: 'KingRan_KR/jd_wxSecond.js',
            ListenEnv: [
                'jd_wxSecond_activityId',
                'M_WX_SECOND_DRAW_URL',
            ],
            SetEnv: {
                M_WX_SECOND_DRAW_URL: 'jd_wxSecond_activityId',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】LZ让福袋飞&jd_wxUnPackingActivity.js',
            Script: 'KingRan_KR/jd_wxUnPackingActivity.js',
            ListenEnv: [
                'jd_wxUnPackingActivity_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】加购有礼（超级无线欧莱雅）&jd_lzkj_loreal_cart.js',
            Script: 'KingRan_KR/jd_lzkj_loreal_cart.js',
            ListenEnv: [
                'jd_lzkj_loreal_cart_url',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】店铺抽奖（超级无线欧莱雅）&jd_lzkj_loreal_draw.js',
            Script: 'KingRan_KR/jd_lzkj_loreal_draw.js',
            ListenEnv: [
                'jd_lzkj_loreal_draw_url',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】关注店铺有礼（超级无线欧莱雅）&jd_lzkj_loreal_followShop.js',
            Script: 'KingRan_KR/jd_lzkj_loreal_followShop.js',
            ListenEnv: [
                'jd_lzkj_loreal_followShop_url',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】邀好友赢大礼&jd_prodev.py',
            Script: 'KingRan_KR/jd_prodev.py',
            ListenEnv: [
                'yhyauthorCode',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】店铺抽奖-JK&jd_dpcj.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_dpcj.py',
            ListenEnv: [
                'DPCJID',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】邀好友赢大礼&jd_inviteFriendsGift.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_inviteFriendsGift.py',
            ListenEnv: [
                'jd_inv_authorCode',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】jinggeng邀请入会有礼&jd_jinggengInvite.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_jinggengInvite.py',
            ListenEnv: [
                'jinggengInviteJoin',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】通用开卡-joinCommon系列&jd_joinCommon_opencard.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_joinCommon_opencard.py',
            ListenEnv: [
                'jd_joinCommonId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】通用抽奖机&jd_lottery.js',
            Script: 'HarbourJ_HarbourToulu_main/jd_lottery.js',
            ListenEnv: [
                'jd_lotteryId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】jd_lzkjInteract邀请有礼&jd_lzkjInteract.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_lzkjInteract.py',
            ListenEnv: [
                'jd_lzkjInteractUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】joy通用开卡&jd_opencardJoy.js',
            Script: 'HarbourJ_HarbourToulu_main/jd_opencardJoy.js',
            ListenEnv: [
                'jd_joyOpenId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】超级无线店铺签到&jd_sevenDay.js',
            Script: 'HarbourJ_HarbourToulu_main/jd_sevenDay.js',
            ListenEnv: [
                'SEVENDAY_LIST',
                'SEVENDAY_LIST2',
                'SEVENDAY_LIST3',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】店铺会员礼包-监控脚本&jd_shopCollectGift.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_shopCollectGift.py',
            ListenEnv: [
                'jd_shopCollectGiftId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】关注有礼-JK&jd_shopFollowGift.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_shopFollowGift.py',
            ListenEnv: [
                'jd_shopFollowGiftId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】通用开卡-shopLeague系列&jd_shopLeague_opencard.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_shopLeague_opencard.py',
            ListenEnv: [
                'jd_shopLeagueId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】微定制组队瓜分-监控脚本&jd_wdz.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wdz.py',
            ListenEnv: [
                'jd_wdz_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】生日等级礼包-监控脚本&jd_wxBirthGifts.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBirthGifts.py',
            ListenEnv: [
                'jd_wxBirthGiftsId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】盖楼有礼-监控脚本&jd_wxBulidActivity.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBulidActivity.py',
            ListenEnv: [
                'jd_wxBulidActivityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】加购有礼-监控脚本&jd_wxCollectionActivity.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxCollectionActivity.py',
            ListenEnv: [
                'jd_wxCollectionActivityUrl',
                'M_WX_ADD_CART_URL',
            ],
            SetEnv: {
                M_WX_ADD_CART_URL: 'jd_wxCollectionActivityUrl',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】完善信息有礼-监控脚本&jd_wxCompleteInfo.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxCompleteInfo.py',
            ListenEnv: [
                'jd_wxCompleteInfoId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】关注店铺有礼-JK&jd_wxShopFollow.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxShopFollow.py',
            ListenEnv: [
                'jd_wxShopFollowId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【船长】店铺特效关注有礼-监控脚本&jd_wxShopGift.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxShopGift.py',
            ListenEnv: [
                'jd_wxShopGiftId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        

        
    ],
    /* 监控列表 */
    ListenList: [
        {
            Name: '等风来BNC监控日志',
            Id: '-972978749',
        },
        {
            Name: '麦基线报群',
            Id: '-1001654299303',
        },
        {
            Name: '锦鲤偷撸',
            Id: '-1001720740578',
        },
        {
            Name: 'KR线报频道',
            Id: '-1001749005484',
        }
    ],

    //非静默触发消息多少秒撤回 0不撤回
    delMsgWaitTime: 0,
    //静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
    Taboo: true,
    TabooOriginalMsg: true /* 静默后推送的消息是否显示触发消息 */,
    //1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
    DisableAllLogs: false,
    //2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
    DisableErrLogs: false,
    //3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
    DisableRunLogs: false,
    //4 禁用控制台日志 改为true后,控制台不会显示任何消息
    DisableConsoleLog: false,
    //队列模式 1先进先出  2先进后出  其他值均视为 先进先出
    ListMode: 2,
    /* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
    runLogsInfo: {
        platform: 'HumanTG', //发送平台
        toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
        Id: '-990138740', //个人id 或群id
    },
    /* 静默后监控结果输出位置  可填多个*/
    TabooLogsInfo: [
         	{
         	platform: "HumanTG",
         	toGroupOrUser: "groupId",   //通知类型,个人userId //群groupId
         	Id: "-990138740"
         },
         //{
         //    platform: 'tgBot', //发送平台
         //    toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
         //    Id: '-990138740', //个人id 或群id
         //},
    ],
};


module.exports = {
    RspyList,
};

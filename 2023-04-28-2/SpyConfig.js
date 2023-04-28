let RspyList = {
    /* 监控信息配置 */
    SpyList: [
		{
            Name: 'M幸运抽奖&m_jd_wx_luckDraw.js',
            Script: 'walle1798_WALL.E/m_jd_wx_luckDraw.js',
            ListenEnv: [
                'M_WX_LUCK_DRAW_URL',
                'LUCK_DRAW_URL',
            ],
            SetEnv: {
                LUCK_DRAW_URL: 'M_WX_LUCK_DRAW_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M加购有礼&m_jd_wx_addCart.js',
            Script: 'walle1798_WALL.E/m_jd_wx_addCart.js',
            ListenEnv: [
                'M_WX_ADD_CART_URL',
                'jd_wxCollectionActivityUrl',
                'jd_wxCollectionActivity_activityUrl',
            ],
            SetEnv: {
                jd_wxCollectionActivityUrl: 'M_WX_ADD_CART_URL',
                jd_wxCollectionActivity_activityUrl: 'M_WX_ADD_CART_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M关注抽奖&m_jd_wx_followDraw.js',
            Script: 'walle1798_WALL.E/m_jd_wx_followDraw.js',
            ListenEnv: [
                'M_WX_FOLLOW_DRAW_URL',
                'jd_wxShopFollowActivity_activityUrl',
            ],
            SetEnv: {
                jd_wxShopFollowActivity_activityUrl: 'M_WX_FOLLOW_DRAW_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M关注有礼无线&m_jd_wx_shopGift.js',
            Script: 'walle1798_WALL.E/m_jd_wx_shopGift.js',
            ListenEnv: [
                'M_WX_SHOP_GIFT_URL',
                'jd_wxShopGift_activityUrl',
            ],
            SetEnv: {
                jd_wxShopGift_activityUrl: 'M_WX_SHOP_GIFT_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M收藏有礼&m_jd_fav_shop_gift.js',
            Script: 'walle1798_WALL.E/m_jd_fav_shop_gift.js',
            ListenEnv: [
                'M_FAV_SHOP_ARGV',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M关注有礼&m_jd_follow_shop.js',
            Script: 'walle1798_WALL.E/m_jd_follow_shop.js',
            ListenEnv: [
                'M_FOLLOW_SHOP_ARGV',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M读秒手速&m_jd_wx_secondDraw.js',
            Script: 'walle1798_WALL.E/m_jd_wx_secondDraw.js',
            ListenEnv: [
                'M_WX_SECOND_DRAW_URL',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M盖楼领奖&m_jd_wx_buildDraw.js',
            Script: 'walle1798_WALL.E/m_jd_wx_buildDraw.js',
            ListenEnv: [
                'M_WX_BUILD_DRAW_URL',  
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M粉丝红包&m_jd_fans_redPackt.js',
            Script: 'walle1798_WALL.E/m_jd_fans_redPackt.js',
            ListenEnv: [
                'M_FANS_RED_PACKET_URL',
                'wxFansInterActionActivity',
            ],
            SetEnv: {
                jd_wxFansInterActionActivity_activityId: 'M_FANS_RED_PACKET_URL',
                jd_task_fshd_custom: 'M_FANS_RED_PACKET_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M无线游戏&m_jd_wx_game.js',
            Script: 'walle1798_WALL.E/m_jd_wx_game.js',
            ListenEnv: [
                'M_WX_GAME_URL',
            ],
            SetEnv: {
                jd_lzkj_wxGameActivity_activityId: 'M_WX_GAME_URL',
                jd_cjhy_wxGameActivity_activityId: 'M_WX_GAME_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M分享有礼&m_jd_wx_share.js',
            Script: 'walle1798_WALL.E/m_jd_wx_share.js',
            ListenEnv: [
                'M_WX_SHARE_URL',
                'jd_task_fxyl_custom',
                'jd_task_fsyl_custom',
                'jd_fxyl_activityId',
                'ACTIVITY_ID',
            ],
            SetEnv: {
                jd_task_fxyl_custom: 'M_WX_SHARE_URL',
                jd_task_fsyl_custom: 'M_WX_SHARE_URL',
                jd_fxyl_activityId: 'M_WX_SHARE_URL',
                ACTIVITY_ID: 'M_WX_SHARE_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M组队瓜分&m_jd_wx_team.js',
            Script: 'walle1798_WALL.E/m_jd_wx_team.js',
            ListenEnv: [
                'M_WX_TEAM_URL',
                'M_WX_TEAM_JF_URL',
            ],
            SetEnv: {
                M_WX_TEAM_JF_URL: 'M_WX_TEAM_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M完善有礼&m_jd_wx_completeDraw.js',
            Script: 'walle1798_WALL.E/m_jd_wx_completeDraw.js',
            ListenEnv: [
                'M_WX_COMPLETE_DRAW_URL',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M打豆豆&m_jd_wx_dadoudou.js',
            Script: 'walle1798_WALL.E/m_jd_wx_dadoudou.js',
            ListenEnv: [
                'M_WX_DADOUDOU_URL',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M老虎机抽奖&m_jd_wx_centerDraw.js',
            Script: 'walle1798_WALL.E/m_jd_wx_centerDraw.js',
            ListenEnv: [
                'M_WX_CENTER_DRAW_URL',
                'jd_task_lhjcj_custom',
            ],
            SetEnv: {
                jd_task_lhjcj_custom: 'M_WX_CENTER_DRAW_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M等级/生日礼包&m_jd_wx_levelBirth.js',
            Script: 'walle1798_WALL.E/m_jd_wx_levelBirth.js',
            ListenEnv: [
                'M_WX_LEVEL_BIRTH_URL',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M知识超人&m_jd_wx_knowledge.js',
            Script: 'walle1798_WALL.E/m_jd_wx_knowledge.js',
            ListenEnv: [
                'M_WX_KNOWLEDGE_URL',
                'jd_wxKnowledgeActivity_activityUrl',
            ],
            SetEnv: {
                jd_wxKnowledgeActivity_activityUrl: 'M_WX_KNOWLEDGE_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: 'M集卡抽奖&m_jd_wx_collectCard.js',
            Script: 'walle1798_WALL.E/m_jd_wx_collectCard.js',
            ListenEnv: [
                'M_WX_COLLECT_CARD_URL',
                'jd_task_jkyl_custom',
            ],
            SetEnv: {
                jd_task_jkyl_custom: 'M_WX_COLLECT_CARD_URL',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】品类联合任务&jd_categoryUnion.js',
            Script: 'KingRan_KR/jd_categoryUnion.js',
            ListenEnv: [
                'jd_categoryUnion_activityId',
            ],
            SetEnv: {
                categoryUnion_activityId: 'jd_categoryUnion_activityId',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】品类联合抽奖&jd_categoryUnion_draw.js',
            Script: 'KingRan_KR/jd_categoryUnion_draw.js',
            ListenEnv: [
                'jd_categoryUnion_activityId',
                'categoryUnion_activityId',
            ],
            SetEnv: {
                categoryUnion_activityId: 'jd_categoryUnion_activityId',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】邀请入会赢好礼（京耕）&jd_jinggeng_showInviteJoin.js',
            Script: 'KingRan_KR/jd_jinggeng_showInviteJoin.js',
            ListenEnv: [
                'jd_showInviteJoin_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】JoinCommon金币卡开卡专用&jd_opencardJBK.js',
            Script: 'KingRan_KR/jd_opencardJBK.js',
            ListenEnv: [
                'opencard_id',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】京东抽奖机&jd_lottery.js',
            Script: 'KingRan_KR/jd_lottery.js',
            ListenEnv: [
                'JD_Lottery',
                'jd_lotteryId',
            ],
            SetEnv: {
                jd_lotteryId: 'JD_Lottery',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】邀请入会有礼&jd_lzkj_loreal_invite.js',
            Script: 'KingRan_KR/jd_lzkj_loreal_invite.js',
            ListenEnv: [
                'jd_lzkj_loreal_invite_url',
                'jd_lzkjInteractUrl',
                'M_INTERACT_INVITE_URL',
            ],
            SetEnv: {
                jd_lzkjInteractUrl: 'jd_lzkj_loreal_invite_url',
                M_INTERACT_INVITE_URL: 'jd_lzkj_loreal_invite_url',
            },
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】关注店铺有礼&jd_lzkj_loreal_followShop.js',
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
            Name: '【KR】收藏大师-加购有礼&jd_txzj_cart_item.js',
            Script: 'KingRan_KR/jd_txzj_cart_item.js',
            ListenEnv: [
                'jd_cart_item_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】收藏大师-幸运抽奖&jd_txzj_lottery.js',
            Script: 'KingRan_KR/jd_txzj_lottery.js',
            ListenEnv: [
                'jd_lottery_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】收藏大师-关注商品&jd_txzj_collect_shop.js',
            Script: 'KingRan_KR/jd_txzj_collect_shop.js',
            ListenEnv: [
                'jd_collect_shop_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】收藏大师-关注有礼&jd_txzj_collect_item.js',
            Script: 'KingRan_KR/jd_txzj_collect_item.js',
            ListenEnv: [
                'jd_collect_item_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】CJ组队瓜分京豆&jd_cjzdgf.js',
            Script: 'KingRan_KR/jd_cjzdgf.js',
            ListenEnv: [
                'jd_cjhy_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】LZ组队瓜分京豆&jd_zdjr.js',
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
            Name: '【KR】读秒拼手速 · 超级无线&jd_wxSecond.js',
            Script: 'KingRan_KR/jd_wxSecond.js',
            ListenEnv: [
                'jd_wxSecond_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】LZ店铺游戏 · 超级无线&jd_wxgame.js',
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
            Name: '【KR】分享有礼 · 超级无线&jd_wxShareActivity.js',
            Script: 'KingRan_KR/jd_wxShareActivity.js',
            ListenEnv: [
                'jd_wxShareActivity_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】店铺抽奖中心 · 老虎机&jd_drawCenter.js',
            Script: 'KingRan_KR/jd_drawCenter.js',
            ListenEnv: [
                'jd_drawCenter_activityId',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】集卡抽奖通用&jd_wxCollectCard.js',
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
            Name: '【KR】店铺左侧刮刮乐&jd_shopDraw.js',
            Script: 'KingRan_KR/jd_shopDraw.js',
            ListenEnv: [
                'jd_shopDraw_activityUrl',
            ],
            TimeOut: 30,
            Interval: 10,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '【KR】店铺签到 · 超级无线&jd_sevenDayjk.js',
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
            Name: '【船长】生日礼包/会员等级礼包&jd_wxBirthGifts.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBirthGifts.py',
            ListenEnv: [
                'jd_wxMcLevelAndBirthGifts_activityId',
                'jd_wxBirthGiftsId',
            ],
            SetEnv: {
                jd_wxMcLevelAndBirthGifts_activityId: 'jd_wxBirthGiftsId',
            },
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
                'yhyauthorCode',
                'invite_code',
            ],
            SetEnv: {
                yhyauthorCode: 'jd_inv_authorCode',
                invite_code: 'jd_inv_authorCode',
            },
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
                'prodevactCode',
            ],
            SetEnv: {
                prodevactCode: 'jinggengInviteJoin',
            },
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
                'M_WX_WDZ_ID',
                'WDZactivityId',
            ],
            SetEnv: {
                M_WX_WDZ_ID: 'jd_wdz_activityId',
                WDZactivityId: 'jd_wdz_activityId',
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
            Name: '【船长】盖楼有礼-监控脚本&jd_wxBulidActivity.py',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBulidActivity.py',
            ListenEnv: [
                'jd_wxBulidActivityId',
                'jd_wxBuildActivity_activityId',
            ],
            SetEnv: {
                jd_wxBuildActivity_activityId: 'jd_wxBulidActivityId',
            },
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

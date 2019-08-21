//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        slo: '传播即是希望!愿天下的宝贝都能永伴自己父母身边.',
        userInfoItem: [{
                index: '0',
                name_en: 'history',
                img: '../../images/icon_item1.png',
                name: '浏览历史'
            },
            {
                index: '1',
                name_en: 'collection',
                img: '../../images/icon_item2.png',
                name: '我的收藏'
            },
            {
                index: '2',
                name_en: 'comment',
                img: '../../images/icon_item3.png',
                name: '我的评论'
            }
        ],
        yingyong: [{
                index: '0',
                img: '../../images/yingyong1.png',
                name: '公告'
            },
            {
                index: '1',
                img: '../../images/yingyong2.png',
                name: '分享'
            },
            {
                index: '2',
                img: '../../images/yingyong3.png',
                name: '客服'
            },
            {
                index: '3',
                img: '../../images/yingyong4.png',
                name: '联系方式'
            },
            {
                index: '4',
                img: '../../images/yingyong5.png',
                name: '意见反馈'
            },
            {
                index: '5',
                img: '../../images/yingyong6.png',
                name: '我的发布'
            },
            {
                index: '6',
                img: '../../images/yingyong7.png',
                name: '打赏'
            }
        ]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
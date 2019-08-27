//news.js
//获取应用实例
const app = getApp();

let getListsUrl = 'https://api.isoyu.com/gy/data.js';

Page({
    data: {
        imgUrls: [
            '../../images/ban3.jpg',
            '../../images/ban4.png'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        circular: true,
        interval: 5000,
        duration: 500,
        previousMargin: 0,
        nextMargin: 0,
        gonggao: '版本更新公告...',
        dataList: null
    },
    changeProperty: function(e) {
        var propertyName = e.currentTarget.dataset.propertyName
        var newData = {}
        newData[propertyName] = e.detail.value
        this.setData(newData)
    },
    changeIndicatorDots: function(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function(e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function(e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function(e) {
        this.setData({
            duration: e.detail.value
        })
    },
    // 以上是微信swiper组件方法
    onLoad: function(options) {
        // Do some initialize when page load.
        let that = this;
        wx.request({
            url: 'https://www.easy-mock.com/mock/5d63c5f00e59634a99eac17e/wxapp/wxbabyhome', //仅为示例，并非真实的接口地址
            data: {},
            method: 'GET',
            header: {
                'content-type': 'application/json' // 默认值
            },
            dataType: 'json',
            success(res) {
                // console.log(res.data.data)
                that.setData({ dataList: res.data.data })
            },
            fail: function(res) {
                console.log(res.data);
            }
        });
        wx.showShareMenu({
            withShareTicket: true
        })
    },
    onShareAppMessage: function(data) {
        // 当页面被分享时会进入这个回调
        // 返回一个对象，作为小程序处理分享的参数，对象内容和小程序页面 onShareAppMessage 回调可返回对象内容基本一致，具体可参考官方文档：https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object
        return {
            title: '公益中国:宝贝回家',
            path: '/home/index', // 这里的 path 是页面 url，而不是小程序路由
            imageUrl: 'https://www.sunxiaoning.com/usr/uploads/2019/03/3616970405.jpeg'
        }
    },
    alertMsg: function() {
        wx.showModal({
            title: '提示',
            content: '因个人类型的小程序功能限制,暂不开放此功能',
            showCancel: false
        })
    }
})
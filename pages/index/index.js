//news.js
//获取应用实例
const app = getApp();

let getListsUrl = 'https://api.isoyu.com/gy/data.js';

Page({
    data: {
        imgUrls: [
            '../../images/ban1.png',
            '../../images/ban2.png',
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
        nextMargin: 0
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
    }
})
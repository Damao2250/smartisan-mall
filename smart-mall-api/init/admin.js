
const mongoose    = require('mongoose')
const User        = require('./../models/user')
mongoose.connect('mongodb://127.0.0.1:27017/mymall', {useMongoClient: true})

function initAdmin() {
    return new Promise(resolve => {
        User.create({
            "userId": "9527",
            "name": "锤子科技",
            "avatar": "https://dummyimage.com/168x168/c7c7c7/fff.png&text=admin",
            "userName": "admin",
            "userPwd": "admin",
            "orderList": [],
            "cartList": [],
            "addressList": []
        }, (err) => {
            if (err) console.log('发生错误');
            resolve()
        })
    })
}
module.exports = initAdmin
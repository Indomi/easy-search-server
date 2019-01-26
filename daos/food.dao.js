const Model = require('../sequelize/models/model')
const db = require('../sequelize/db/index')
const Sequelize = require('sequelize')
const FoodModel = Model.food(db, Sequelize)

const FoodDao = {
    queryFoodList(pageSize, pageNum) {
        return FoodModel.findAndCountAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: pageSize,
            offset: (pageNum - 1) * pageSize
        })
    },

    saveFoodInfo(foodInfo) {
        console.log('插入一条美食商家数据：' + foodInfo.shopName);

        return FoodModel.create(foodInfo);
    }
}

module.exports = FoodDao;
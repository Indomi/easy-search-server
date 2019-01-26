const DAO = require('../daos/dao')

const FoodService = {
    listFoods(pageSize, pageNum) {
        return DAO.food.queryFoodList(pageSize, pageNum);
    },

    addFood(foodInfo) {
        return DAO.food.saveFoodInfo(foodInfo);
    }
}

module.exports = FoodService;
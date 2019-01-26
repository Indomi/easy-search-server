const express = require('express');
const router = express.Router();
const FoodService = require('../../service/food.service');
const refreshFoods = require('../../utils/refreshFoods');

const listFoods = (req, res, next) => {
    const params = req.query;
    const pageSize = params.pageSize ? parseInt(params.pageSize) : 30;
    const pageNum = params.pageNum ? parseInt(params.pageNum) : 1;

    FoodService.listFoods(pageSize, pageNum).then(ret => {
        res.locals.queryResult = ret
        next()
    })
}

router.get('/listFoods', listFoods, (req, res, next) => {
    res.json(res.locals.queryResult)    
})

router.get('/refreshFoods', (req, res, next) => {
    refreshFoods().then(() => {
        res.json({
            res_code: 200,
            res_msg: '刷新成功'
        })
    }).catch(err => {
        res.json({
            res_code: 500,
            res_msg: err
        })
    })
})

module.exports = router
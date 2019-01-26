const request = require('request');
const FoodService = require('../service/food.service');

const CityList = [
    ["上海", "fce2e3a36450422b7fad3f2b90370efd71862f838d1255ea693b953b1d49c7c0"],
    ["北京", "d5036cf54fcb57e9dceb9fefe3917fff71862f838d1255ea693b953b1d49c7c0"],
    ["广州", "e749e3e04032ee6b165fbea6fe2dafab71862f838d1255ea693b953b1d49c7c0"],
    ["深圳", "e049aa251858f43d095fc4c61d62a9ec71862f838d1255ea693b953b1d49c7c0"],
    ["天津", "2e5d0080237ff3c8f5b5d3f315c7c4a508e25c702ab1b810071e8e2c39502be1"],
    ["杭州", "91621282e559e9fc9c5b3e816cb1619c71862f838d1255ea693b953b1d49c7c0"],
    ["南京", "d6339a01dbd98141f8e684e1ad8af5c871862f838d1255ea693b953b1d49c7c0"],
    ["苏州", "536e0e568df850d1e6ba74b0cf72e19771862f838d1255ea693b953b1d49c7c0"],
    ["成都", "c950bc35ad04316c76e89bf2dc86bfe071862f838d1255ea693b953b1d49c7c0"],
    ["武汉", "d96a24c312ed7b96fcc0cedd6c08f68c08e25c702ab1b810071e8e2c39502be1"],
    ["重庆", "6229984ceb373efb8fd1beec7eb4dcfd71862f838d1255ea693b953b1d49c7c0"],
    ["西安", "ad66274c7f5f8d27ffd7f6b39ec447b608e25c702ab1b810071e8e2c39502be1"]
]

const urlPerfix = 'http://www.dianping.com/mylist/ajax/shoprank?rankId='

const AgentList = [
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1",
    "Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11",
    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6",
    "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6",
    "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/19.77.34.5 Safari/537.1",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5"
]

const randomAgent = () => {
    return AgentList[Math.floor(Math.random() * 6 )];
}

module.exports = () => {
    return new Promise((resolve, reject) => {
        CityList.map((city, idx) => {
            const options = {
                url: urlPerfix + city[1],
                headers: {
                    "User-Agent": randomAgent()
                }
            }
            request(options, (error, response, body) => {
                console.log(body);
                if(!error && response.statusCode === 200) {
                    const info = JSON.parse(body)
                    if(info.shopBeans) {
                        const foodsList = [];
                        info.shopBeans.map(item => {
                            foodsList.push({
                                shopAddress : item.address,
                                avgPrice: item.avgPrice,
                                defaultPic : item.defaultPic,
                                mainCategoryName : item.mainCategoryName,
                                mainRegionName: item.mainRegionName,
                                tasteScore: item.score1,
                                environmentScore: item.score2,
                                serviceScore: item.score3,
                                shopId: item.shopId,
                                shopUrl: `http://www.dianping.com/shop/${item.shopId}`,
                                shopName: item.shopName,
                                shopPower: item.shopPower,
                                createdAt: (new Date()).valueOf(),
                                updatedAt: (new Date()).valueOf(),
                                city: city[0]
                            })
                        })
                        foodsList.map(item => {
                            FoodService.addFood(item);
                        })
                        resolve();
                    }
                }else {
                    console.log('失败', error);
                    reject(error);
                }
            })
        })
    })
}



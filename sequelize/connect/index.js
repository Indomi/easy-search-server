const db = require('../db')

db.authenticate().then(() => {
    console.log('connect success !');
}).catch(e => {
    console.error('unable to connect to the database', e)
})
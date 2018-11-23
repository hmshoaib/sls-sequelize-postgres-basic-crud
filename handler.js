'use strict'
const db = require('./models/index');
module.exports.getAllUsers = (event, context, callback)=>{
    db.users.findAndCountAll({
        include:[{
            model:db.groups,
            as: 'group',
            required:false,
        }]
    }).then(res=>{
        callback(null, res)
        db.sequelize.close();
    })
}

module.exports.attachGroup = (event, context, callback)=>{
    db.User.findById(event.id).then(user=>{
        user.setGroup(event.groupId).then(res=>{
            console.log(user);
            db.sequelize.close();
        })
    }).catch(err=>{
        console.log(err.name+':'+err.message)
        db.sequelize.close();
    })
}
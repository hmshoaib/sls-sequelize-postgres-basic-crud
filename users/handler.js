'use strict'
const db = require('../models/index');
const User = require('./user.js');
const user = new User(db);
module.exports.getAllUsers = (event, context, callback) => {
    user.all(event).then(res => {
        callback(null, {success: true, data: res})
        db.sequelize.close();
    }).catch(err => {
        callback(err);
        db.sequelize.close();
    });
}
module.exports.getUser = (event, context, callback) => {
    user.one(event).then(res => {
        callback(null, {success: true, data: res})
        db.sequelize.close();
    }).catch(err => {
        callback(err);
        db.sequelize.close();
    });
}

module.exports.saveUser = (event, context, callback) => {
    user.save(event).then(res => {
        callback(null, {success: true, data: res});
        db.sequelize.close();
    }).catch(err => {
        callback(err);
        db.sequelize.close();
    })
}

module.exports.updateUser = (event, context, callback) => {
    user.update(event).then(res => {
        callback(null, {success: true, data: res});
        db.sequelize.close();
    }).catch(err => {
        callback(err);
        db.sequelize.close();
    })
}
module.exports.deleteUser = (event, context, callback) => {
    user.delete(event).then(res => {
        callback(null, {success: true, data: res});
        db.sequelize.close();
    }).catch(err => {
        callback(err);
        db.sequelize.close();
    })
}

module.exports.attachGroup = (event, context, callback) => {
    db.User.findById(event.id).then(user => {
        user.setGroup(event.groupId).then(res => {
            console.log(user);
            db.sequelize.close();
        })
    }).catch(err => {
        console.log(err.name + ':' + err.message)
        db.sequelize.close();
    })
}
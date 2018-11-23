'use strict'

class User {
    constructor(db) {
        this.db = db;
    }

    all(event) {
        return new Promise((resolve, reject) => {

            let limit = 1;
            let offset = 0;
            if (
                event.params !== undefined &&
                event.params !== null &&
                event.params.querystring !== null &&
                event.params.querystring.length !== null &&
                event.params.querystring.length !== undefined
            ) {
                limit = parseInt(event.params.querystring.length)
            }
            if (event.params !== undefined &&
                event.params !== null &&
                event.params.querystring !== null &&
                event.params.querystring.start !== null &&
                event.params.querystring.start !== undefined
            ) {
                offset = parseInt(event.params.querystring.start)
            }

            this.db.users.findAndCountAll({
                limit: limit,
                offset: offset,
                include: [{
                    model: this.db.groups,
                    as: 'group',
                    required: false,
                }]
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err.name + ": " + err.message)
            })
        })

    }

    one(event) {
        return new Promise((resolve, reject) => {
            if (event.id !== undefined && event.id !== null) {

                this.db.users.find({
                    where: {id: event.id},
                    include: [{
                        model: this.db.groups,
                        as: 'group',
                        required: false,
                    }]
                }).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err.name + ": " + err.message)
                })
            }
            else {
                reject('id is missing');
            }
        })
    }

    save(event) {
        return new Promise((resolve, reject) => {
            if (event.body !== null && event.body !== undefined) {
                this.db.users.create(event.body).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err.name + ": " + err.message)
                })
            } else {
                reject('body is empty');
            }
        })
    }

    update(event) {
        return new Promise((resolve, reject) => {
            if (event.id !== null && event.id !== undefined &&
                event.body !== null && event.body !== undefined) {
                this.db.users.update(event.body, {where: {id: event.id}}).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err.name + ": " + err.message)
                })
            } else {
                reject('target id or body is empty');
            }
        })
    }

    delete(event){
        return new Promise((resolve, reject) => {
            if (event.id !== null && event.id !== undefined) {
                this.db.users.destroy({where: {id: event.id}}).then(res => {
                    resolve(res);
                }).catch(err => {
                    reject(err.name + ": " + err.message)
                })
            } else {
                reject('id is missing');
            }
        })
    }
}

module.exports = User;
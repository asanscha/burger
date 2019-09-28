var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res);
        })
    },

    update: function(id, cb) {
        orm.update(id, cb);
    },

    add: function(name, cb){
        orm.add(name, cb)
    }
}

module.exports = burger;
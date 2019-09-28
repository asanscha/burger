var connection = require("./connection.js");

var orm = {
    all: function(input, cb) {
        connection.query('SELECT * FROM  burgers' , function(err, res) {
            if (err) throw err;
            cb(res)
        })
    },

    update: function(id, cb) {
        connection.query('UPDATE burgers SET devoured=true WHERE id=' + id + ';', function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    add: function(name, cb){
        console.log(name)
        connection.query(`INSERT into burgers (burger_name, devoured) VALUES ("${name}", FALSE);`, function(err, res){
            if (err) throw err;
            cb(res)
        })
    }
}

module.exports = orm;
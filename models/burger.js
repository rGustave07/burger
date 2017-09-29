const orm = require('../config/orm.js');

let burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    },

    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    },

    create: function(table, nameOfBurger, cb){
        orm.create(table, nameOfBurger, function(res){
            cb(res);
        });
    }
}

module.exports = burger;

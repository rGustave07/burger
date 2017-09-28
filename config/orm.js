const connection = require('./connection.js');

let orm = {
    all: function(tableInput, cb){
        let queryString = `SELECT * FROM ${tableInput};`

        connection.query(queryString, function(err, result){
            if (err) {
                console.log(err);
            }
            console.log(result);
            cb(result);
        })
    },

    delete: function(table, condition, cb){
        let queryString = `DELETE FROM ${table} WHERE ${condition}`;

        connection.query(queryString, function(err, result){
            if (err) {
                console.log(err);
            }
            cb(result);
        })
    }
}

module.exports = orm;

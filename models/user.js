var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    getTable: function (data,callback) {
        // console.log(data);
        mysqlDB.getTableInfo(data, callback);
    },
    updateUsers: function (data, callback) {
        // console.log(data);
        mysqlDB.updateTable(data, callback)
    },
    deleteUsers: function (data, callback) {
        mysqlDB.deleteTable(data, callback);
    },
    addUsers: function (data, callback) {
        // console.log(data);
        mysqlDB.insertTable(data, callback);
    }
};
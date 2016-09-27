var mysql = require("mysql");
//下面的这个插件主要是解决从数据库中获取的时间的格式的问题；
var moment = require('moment');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'jikebaidunews'
});

function openConnection() {
    connection.open();
}

function closeConnection() {
    connection.end();
}
//将从数据库中获取的日期的列（releaseTime）全部转化为YYYY-MM-DD HH:mm的格式；
function getTime(rows)
{
    for(var i=0;i<rows.length;i++)
    {
        rows[i].releaseTime=moment(rows[i].releaseTime).format('YYYY-MM-DD HH:mm');
    }
    return rows;
}
module.exports = {

 /**
     * 主要是查询数据表中的所有数据，或者某一条数据
     * @param options
     * options：是一个对象，sql是key;
     * sql : String
     * callback : 在route/index.js里面的function(data),其实是一个匿名的函数
     * @return
     * data : Array
     * status : Boolean
     */

     getTableInfo: function (options, callback) {
        try {
            var data = {data: null, status: false};
            console.log(options.sql);
            if (!options.sql)
                return;
            connection.query(options.sql, function (err, rows, fields) {
                if (!err) {
                    newRow=getTime(rows);
                    data.data = newRow;
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * 带有参数的插入数据，
     * @param options
     * options：是一个对象的类型
     * sql : String
     * data : data(user)
     * callback : 在route/index.js里面的function(data),其实是一个匿名的函数
     * @return 不包含任何的数据的对象；
     * data
     * id : Number
     * status : Boolean
     */
    insertTable: function (options, callback) {
        try {
            // console.log(options.sql);
            // console.log(options.data);
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            connection.query(options.sql, options.data, function (err, rows, fields) {
                if (!err) {
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * 删除表中额度数据
     * @param options
     * options
     * sql : String
     * callback : 在route/index.js里面的function(data),其实是一个匿名的函数
     * @return 不返回数据的对象值；
     * data
     * status : Boolean
     */
    deleteTable: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            connection.query(options.sql, function (err, rows, fields) {
                if (!err) {
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * 更新表的操作；
     * @param options
     * options
     * sql : String
     * params : Array
     * callback : 在route/index.js里面的function(data),其实是一个匿名的函数
     * @return
     * data
     * status : Boolean
     */
    updateTable: function (options, callback) {
        try {
            console.log(options.sql);
            console.log(options.params);
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            connection.query(options.sql, options.params, function (err, rows, fields) {
                if (!err) {
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
};
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

// load module
var conn_user = require("../models/user.js");

/* GET baidu home page. */
router.get('/', function (req, res) {
        sql = "select * from recomend";
        conn_user.getTable({sql:sql},function (data) {
            if (data.status) {
                data.title = "查看recomend表中的数据";
                res.render('index', data);
            } else {
                res.render('error', {message: "信息加载失败"});
            }
        });
    });
// post baidu home page. swich to different table*/
router.post('/table', function (req, res,next) {
        // var table=req.body.table;
        // console.log(table);
        conn_user.getTable({sql: "select * from "+ req.body.tableName},function(data)
        {
            if (data.status) {
                data.title = "查看recomend/local/baijia表中的数据";
                // console.log(data);
                res.send(data);
                
            } else {
                // console.log()
                res.render('error', {message: "信息加载失败"});
            }
        });
    });


/* get baidu admin home page. */
router.get('/admin/', function(req, res, next) {
     sql = "select * from recomend";
    conn_user.getTable({sql:sql},function (data) {
        if (data.status) {
            data.title = "后台管理首页，默认是recomend数据表";
            // console.log(data);
            res.render('admin/index', data);
        } else {
            res.render('error', {message: "信息加载失败"});
        }
    });
});

// post baidu admin home page. swich to different table*/
router.post('/admin/table', function (req, res,next) {
        // var table=req.body.table;
        // console.log(table);
        conn_user.getTable({sql: "select * from "+ req.body.tablesName},function(data)
        {
            if (data.status) {
                data.title = "后台管理首页，包含recomend/local/baijia数据表";
                // console.log(data);
                res.send(data);
                
            } else {
                // console.log()
                res.render('error', {message: "信息加载失败"});
            }
        });
    });
//post baidu admin home  page ,when click the del btn on home page;
router.post('/admin/delData',function (req,res,next)
{
    var sql='DELETE FROM '+req.body.table+' WHERE id =' + req.body.id;
    conn_user.deleteUsers({sql:sql},function(data)
    {
        if(data.status)
        {
            data.title = "点击后台管理首页删除按钮";
            res.send(data);
        }
        else
        {
            res.render('error',{message:'信息加载失败！'})
        }
    });
});



// /*get baidu admin add page. when click the add btn on home page */
router.get('/admin/add', function(req, res, next) {
  res.render('admin/add', { title: '管理后台添加数据页面' });
});

//post baidu admin add page ,when id input blur on add page ;to ensure the id right
router.post('/admin/addCheckId',function(req, res, next) {  
  conn_user.getTable({sql: "select * from "+req.body.tableName+" where id="+req.body.id},function(data)
        {
            if (data.status) {
                data.title = "管理后台添加数据页面recomend/local/baijia中的ID值不重复";
                // console.log(data);
                res.send(data);
                
            } else {
                // console.log()
                res.render('error', {message: "管理后台添加数据页面recomend/local/baijia中的ID值不正确"});
            }
        });
});


// /* post baidu admin add page , when click the submit btn on add page */
router.post('/admin/additem', function(req, res, next) {
    var postData={
        id:req.body.id,
        titile:req.body.titile,
        property:req.body.property,
        pictureLink:req.body.picture,
        releaseTime:req.body.datemarks,
        content:req.body.content
    };
    var addsql='insert into '+req.body.table+' SET ?';
    // console.log(postData);
    conn_user.addUsers({data:postData,sql:addsql},function(data)
    {
         if (data.status) {
                data.titile = "管理后台添加数据成功！";
                // console.log(data);
                res.send("<h1>添加数据成功！</h1><p><a href='/admin/'>返回首页</a></p>");
                
            } else {
                // console.log()
                res.render('error', {message: "信息加载失败"});
            }
    });
});
// get baidu admin home  page ,when click the modify btn on home page;
router.get('/admin/modify', function(req, res, next) {
  res.render('admin/modify', { title: '管理后台修改数据页面' });
});

// /* post baidu admin modify  page. load its data on modify page*/
router.post('/admin/modifyData', function(req, res, next) {
    // console.log(req.query.table);
     conn_user.getTable({sql: "select * from "+req.body.table+" where id="+req.body.id},function(data)
     {
         if (data.status) {
                data.title = "管理后台修改页面数据查询完毕";
                res.render('/admin/modify',function(err,html)
                {
                    res.send(data.data);
                });  
        } else {
            // console.log()
            res.render('error', {message: "信息加载失败"});
        }
     }); 
});
// post baidu admin modify  page ! when click submit btn on modify page ! if success,show it
router.post('/admin/dbModify', function(req, res, next) {
    //修改的时候这个是一个数组
    var postData=[
        req.body.titile,
        req.body.property,
        req.body.picture,
        req.body.datemarks,
        req.body.content,
        req.body.id,
    ];
    var sql='update '+req.body.table+' SET titile=?,property=?,pictureLink=?,releaseTime=?,content=? WHERE id = ?'
    // console.log(postData);
    conn_user.updateUsers({params:postData,sql:sql},function(data)
    {
         if (data.status) {
                data.title = "管理后台修改数据页面的数据修改成功！";
                console.log(data);
                res.send("<h1>修改数据成功！</h1><p><a href='/admin/'>返回首页</a></p>");
                
            } else {
                // console.log()
                res.render('error', {message: "信息加载失败"});
            }
    });
});
// /* get baidu admin login page. */
router.get('/admin/login', function(req, res, next) {
  res.render('admin/login', { title: '登陆页面首页' });
});

module.exports = router;

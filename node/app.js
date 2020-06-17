var http = require("http").createServer();
var ws = require("nodejs-websocket");
var { connection } = require("./bean");
var url = require("url");
var queryString = require("querystring");
var finalhandler = require("finalhandler");
var sqlFunc = require("./sqlcode");
http.on("request",(req,res)=>{
    var done = finalhandler(req,res)
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    const { pathname } = url.parse(req.url);
    console.log(req.url)
    console.log(pathname)
    if(pathname == "/api/getUserList"){
        console.log(url.parse(req.url,true))
        const { to_user } = url.parse(req.url,true).query;
        var getUserList = sqlFunc.getUserList({to_user},connection)
        getUserList.then((value)=>{
            res.end(JSON.stringify(value))
        })
    }else if(pathname == "/api/getChatList"){ // 获取聊天室信息条数
        const { form_user, to_user } = url.parse(req.url,true).query;
        var getChatList = sqlFunc.getChatList({form_user,to_user},connection)
        getChatList.then((value)=>{
            res.end(JSON.stringify(value))
        })
    }else if(pathname == "/api/getChatUser"){// 获取聊天室的用户信息
        const { form_user, to_user } = url.parse(req.url,true).query;
        console.log(form_user,to_user)
        var getChatUser = sqlFunc.getChatUser({form_user,to_user},connection)
        getChatUser.then((value)=>{
            res.end(JSON.stringify(value))
        })
    }
}).listen(3000,()=>{
    console.log("服务器已经启动，请访问localhost:3000端口")
})

var server = ws.createServer(function(conn){
    conn.on("text", function (str) {
        const { time,form_user,to_user,text,info_type=0 } = JSON.parse(str)
        var addChat = sqlFunc.addChat({time,form_user,to_user,text,info_type},connection);
        addChat.then(()=>{
            var getChatList = sqlFunc.getChatList({form_user,to_user},connection)
            getChatList.then((value)=>{
                conn.sendText(JSON.stringify(value))
            })
        }).catch(err=>{
            console.log(err);
        })
    })
    conn.on("close", function (code, reason) {
        console.log("关闭连接")
    });
    conn.on("error", function (code, reason) {
        console.log("异常关闭")
    });
}).listen(8001)
console.log("WebSocket建立完毕")
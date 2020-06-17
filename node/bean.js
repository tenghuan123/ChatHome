var mysql = require("mysql");
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '123',
  database : 'nodechat'
})
connection.connect();
// var datapromise = new Promise((res,rej)=>{
//   connection.query('SELECT * FROM chatinfos', function (error, results, fields) {
//     if(error){
//         console.log('[SELECT ERROR] - ',error.message);
//         return;
//       }
//       res(results)
//     //  console.log('--------------------------SELECT----------------------------');
//     //  console.log(results);
//     //  console.log('------------------------------------------------------------\n\n');  
//   });
// })
module.exports = {
  connection
}
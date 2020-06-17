function sqlmodelcode(connection,sqlcode){
   return new Promise((res,rej)=>{
        connection.query(sqlcode,(error,results,fields)=>{
            if(error){
                done(error);
                return;
            }
            res(results);
        })
    })
}
module.exports = {
    getUserList:function(prames,connection) {
        const {to_user} = prames;
        const sqlcode = `SELECT chatinfos.*,user.image_url,user.name,any_value(user.name) from chatinfos inner JOIN user ON chatinfos.form_user = user.id 
        WHERE chatinfos.to_user = ${to_user}
        GROUP BY form_user`
        console.log(sqlcode)
        return sqlmodelcode(connection,sqlcode)
    },
    getChatList:function(parmes,connection){
        const {form_user, to_user} = parmes;
        const sqlcode = `SELECT chatinfos.*,user.name,user.image_url from chatinfos inner JOIN user ON chatinfos.form_user = user.id
        WHERE (to_user = ${to_user} AND form_user = ${form_user}) OR (to_user = ${form_user} AND form_user = ${to_user})`
        return sqlmodelcode(connection,sqlcode)
    },
    getChatUser:function(parmes,connection){
        const {form_user, to_user} = parmes;
        const sqlcode = `SELECT name,image_url,id FROM user
        WHERE id = ${form_user} or id = ${to_user}`
        return sqlmodelcode(connection,sqlcode)
    },
    addChat:function(parmes,connection){
        const { time,form_user,to_user,text,info_type } = parmes;
        const sqlcode = `INSERT INTO chatinfos (form_user,to_user,chat_time,chat_msg,info_type)
        VALUES (${form_user},${to_user},${time},"${text}",${info_type})`
        console.log(sqlcode);
        return sqlmodelcode(connection,sqlcode)
    }
}
<template>
<div class="ChatHome">
 <Myheader :post-title="this.form_userName"></Myheader>
 <div class="Chat">
     <chatOne v-for="(item,index) in this.dataList " :key="index" :items="item"></chatOne>
 </div>
 <div class="UserInput">
     <input type="text" v-model="userText" class="inputItem">
     <div class="inputIcon">
         <span class="airport" @click="this.sendmessage">
         </span>
         <span class="maikefeng">
         </span>
     </div>
 </div>
 </div>
</template>

<script>
import Myheader from "./Header/Myheader";
import chatOne from './ChatOne/chatOne'
import { mapState } from 'vuex'
export default {
    name:'ChatHome',
    data:function(){
        return {
            dataList:[],
            userText:'',
            websock:null,
            userId:this.$store.state.userId,
            form_user:'',
            form_userName:'',
        }
    },
    created(){
        this.initWebScoket();
    },
    destroyed(){
        this.websock.close();
    },
    methods:{
        sendmessage(){// 发送消息
            const data = {
                time:new Date().getTime(),
                form_user:this.userId,
                to_user:this.form_user,
                text:this.userText,
            }
            console.log("我执行了")
            this.websocketsend(JSON.stringify(data))
            this.userText = '';
        },
        initWebScoket(){// 初始化websocket
            const wsuri = "ws://127.0.0.1:8001";
            this.websock = new WebSocket(wsuri);
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onopen = this.websocketonopen;
            this.websock.onerror = this.websocketonerror;
            this.websock.onclose = this.websocketclose;
        },
        websocketonopen(){//连接建立
        },
        websocketonerror(){// 建立连接失败重连
            // this.initWebScoket()
        },
        websocketonmessage(e){// 数据接收
            const redata = JSON.parse(e.data);
            redata.map(item=>{
                item.form_user == this.userId?item.position = 'right':item.position = 'left'
            })
            this.dataList = redata;
        },
        websocketsend(Date){// 数据发送
            this.websock.send(Date);
        },
        websocketclose(e){// 关闭
            console.log('断开连接',e)
        }
    },
    created(){
        const { current: {query} } = this.$router.history;
        const {form_userName} = query;
        this.form_userName = form_userName;
        console.log(form_userName)
    },
    async mounted(){
        const { current: {query} } = this.$router.history;
        const { form_user } = query;
        const userId = this.userId;
        this.form_user = +form_user
        console.log(`/api/getChatList?to_user=${userId}&form_user=${form_user}`)
        const getChatList = this.$axios.get(`/api/getChatList?to_user=${form_user}&form_user=${userId}`)
        const getChatUser = this.$axios.get(`/api/getChatUser?to_user=${form_user}&form_user=${userId}`)
        await Promise.all([getChatList,getChatUser]).then(result=>{
            result.forEach((item)=>{
                const { data, config:{ url },status } = item;
                if(status == 200&url.split("?")[0] == "/api/getChatList"){
                    data.map(item=>{
                        item.form_user == userId?item.position = 'right':item.position = 'left'
                    })
                    this.dataList = data;
                }else{
                    this.dataList.map(item=>{
                        const [user] = data.filter(value=>{
                            return item.form_user == value.id;
                        })
                        item.name = user.name;
                        item.image_url = user.image_url;
                    })
                }
            })
        }).then(()=>{
            this.initWebScoket();
        })
        // console.log(this.dataList)
    },
    updated(){
        var scrollHeight = document.querySelector(".Chat").scrollHeight;
            document.querySelector(".Chat").scrollTop = scrollHeight;
    },
    computed:mapState({
        userId:'userId',
    }),
    components:{
        Myheader,
        chatOne
    }
}
</script>

<style lang="scss">
.ChatHome{
    height: 100%;
    display: flex;
    flex-direction: column;
    .Chat {
        padding: 20px;
        flex: 1 1 auto;
        overflow-y: scroll;
    }
    .UserInput {
        flex: 0 0 40px;
        background: #fff;
        display: flex;
        padding: 0px 20px;
        height: 40px;
        .inputItem {
            border: none;
            outline: none;
            flex: 1 1 auto;
        }

        .inputIcon {
            flex: 0 0 100px;
            display: flex;
            justify-content: space-around;
            span{
                display: inline-block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
            .airport{
                background: url("/static/airport.svg") no-repeat;
                background-size: contain;
                background-size: 75%;
                background-position: center;
            }
            .maikefeng{
                background: url("/static/maikefeng.svg") no-repeat;
                background-size: contain;
            }
        }
    }
}
</style>
<template>
  <div class="chatOne" :class="data.position">
      <div class="chatImage">
          <img :src="data.image_url" />
      </div>
      <div class="chatText">
          <span>{{data.chat_msg}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"chatOne",
    data:function(){
        return {
            data:{
                name:'',
                chat_time:'',
                chat_msg:'',
                image_url:'',
                position:''
            }
        }
    },
    props:[
        "items"
    ],
    mounted(){
        const { items } = this._props;
        this.data = items;
        console.log(this.data)
    }

}
</script>

<style lang="scss">
.ChatHome{
    background: #F9F9F9;
    .chatOne{
        &.right{
            flex-direction: row-reverse;
            .chatText{
                background: #FF7D91;
                color: #FFF6F7;
            }
        }
        &.left{
            flex-direction: row;
            .chatText{
                background: #FFF;
                color: #3A3A3A;
            }
        }
        display: flex;
        margin-bottom: 50px;
        .chatImage{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .chatText {
            margin: 0 10px;
            display: inline-flex;
            align-items: center;
            padding: 0px 20px;
            border-radius: 20px;
            box-shadow: 0px 1px 15px rgba(0,0,0,0.25);
        }
    }
}
</style>
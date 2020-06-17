<template>
  <div class="chatlist">
    <Myheader post-title="Message"></Myheader>
    <div class="List">
      <mt-cell-swipe
        v-for="item in dataList"
        :key="item.id"
        :title="item.title"
        :label="item.label"
        :to="item.history"
        :right="[
        {
            content: 'Delete',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
        }
        ]"
      >
        <img slot="icon" :src="item.img" width="40" height="40" />
        <span>{{item.time}}</span>
      </mt-cell-swipe>
    </div>
  </div>
</template>

<script>
import Myheader from "./Header/Myheader";
import { CellSwipe } from "mint-ui";
export default {
  name: "Chatlist",
  data() {
    return {
      msg: "",
      dataList: [
      ]
    };
  },
  methodes: {
  },
  mounted() {
    this.$axios.get("/api/getUserList?to_user=1").then(respone => {
      const { status, data } = respone;
      if (status == 200) {
      var num = data.map((item, index) => {
         const {id, name:title, chat_msg:label,chat_time,image_url,name} = item;
         const getTime = function(chat_time) {
            let d = new Date(chat_time);
            let Timedate =
              // d.getFullYear() +
              // "-" +
              // (d.getMonth() + 1) +
              // "-" +
              // d.getDate() +
              " " +
              d.getHours() +
              ":" +
              d.getMinutes() +
              ":" +
              d.getSeconds();
            return Timedate;
          }
         return {
           id,
           title,
           label,
           time:getTime(chat_time),
           img:image_url,
           history:`/ChatHome?form_user=${item.form_user}&form_userName=${name}`
         }
        });
      
      }
      this.dataList = num;
    })
  },
  components: {
    Myheader,
    CellSwipe
  }
};
</script>

<style lang="scss">
.List {
  .mint-cell-wrapper {
    padding: 26px 20px;
    background-image: none;
  }
  .mint-cell-title {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .mint-cell-value {
    font-size: 12px;
  }
  .mint-cell-text {
    position: absolute;
    top: 25px;
    left: 75px;
  }

  .mint-cell-label {
    position: absolute;
    bottom: 25px;
    left: 75px;
  }
  .mint-cell-swipe-button {
    display: flex;
    align-items: center;
  }
  .mint-cell img{
      vertical-align: middle;
      border-radius: 50%;
  }
}
</style>

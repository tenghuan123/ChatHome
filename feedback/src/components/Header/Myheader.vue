<template>
  <mt-header :title="titleHeader">
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
import { Header } from "mint-ui";

export default {
  name: "Myheader",
  data: function() {
    return {
      titleHeader: ""
    };
  },
  props: ["postTitle"],
  methods: {},
  created() {
    console.log(this)
    if (this.postTitle != null) {
      this.titleHeader = this.postTitle;
    }
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
.mint-header {
  background-color: #fff;
  color: #080808;
  border-bottom: 1px solid #F2F2F2;

  .mint-header-title{
    font-weight: bold;
}
}
</style>
<template>
  <div class="cart-list">
    <scroll class="content">
      <!-- <li v-for="item in cartList">{{item}}</li> -->
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Scroll from "components/common/scroll/scroll";
import CartListItem from "./CartListItem"

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>
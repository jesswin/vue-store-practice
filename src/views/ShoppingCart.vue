<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-8 pt-5">
        <CartItem
          v-for="product in getCartData"
          :product="product"
          :key="product.id"
        />
      </div>
      <div class="col-md-4 pt-5">
        <Cart />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CartItem from "../components/CartItem.vue";
import Cart from "../components/Cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    CartItem,
    Cart,
  },

  computed: {
    ...mapGetters(["getCartData"]),
  },
};
</script>

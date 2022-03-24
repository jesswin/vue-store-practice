<template>
  <div class="row cart-item-row">
    <div class="col-md-6">
      <Product :product="product" />
    </div>
    <div class="col-md-4">
      <div class="row">
        <div class="col-md-5">
          <button @click="changeQuantity()" class="btn btn-primary btn-block">
            +
          </button>
        </div>
        <div class="col-md-2 text-center">{{ itemQuantity }}</div>
        <div class="col-md-5">
          <button
            @click="changeQuantity('decrease')"
            class="btn btn-warning btn-block"
          >
            -
          </button>
        </div>
      </div>
      <div class="row cart-remove-button">
        <div class="col-md-12">
          <button @click="removeItem()" class="btn btn-danger btn-block">
            Remove Item
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "./Product.vue";
export default {
  name: "CartItem",
  props: ["product"],

  methods: {
    ...mapActions(["updateCartItem", "removeCartItem"]),
    changeQuantity(action = "add") {
      if (action == "add") {
        this.product.quantity = this.product.quantity + 1;

        this.updateCartItem(this.product);
      } else {
        if (this.product.quantity > 1) {
          this.product.quantity = this.product.quantity - 1;
          this.updateCartItem(this.product);
        } else {
          //Remove the item
          this.removeCartItem(this.product);
        }
      }
    },
    removeItem() {
      this.removeCartItem(this.product);
    },
  },
  computed: {
    ...mapGetters(["getCartData"]),
    itemQuantity() {
      console.log(this.getCartData);
      let get_product = this.getCartData.filter(
        (item) => item.id == this.product.id
      );
      console.log(get_product);
      return get_product[0]?.quantity;
    },
  },
  components: {
    Product,
  },
};
</script>
<style scoped>
.cart-item-row {
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
}
.cart-remove-button {
  margin-top: 10px;
}
</style>

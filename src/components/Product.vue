<template>
  <div class="col mb-4">
    <div class="card">
      <img :src="product.url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">
          ${{ product.price }}
          <br />
          <small>
            {{ product.shortdesc }}
          </small>
        </p>
        <a
          @click="addToCart()"
          :disabled="itemInCart"
          href="#"
          class="btn btn-primary"
          >{{ itemInCart ? "Added" : "Add to Cart" }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Product",
  props: ["product"],
  methods: {
    ...mapActions(["addCartItem"]),
    addToCart() {
      if (!this.itemInCart) {
        this.addCartItem(this.product);
      } else {
        alert("Item already added to Cart");
      }
    },
  },
  computed: {
    ...mapGetters(["getCartData"]),
    itemInCart() {
      let inCart = false;
      this.getCartData.forEach((item) => {
        if (item.id == this.product.id) {
          inCart = true;
        }
      });

      return inCart;
    },
  },
};
</script>

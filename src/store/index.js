import { createStore } from "vuex";
import Cart from "./Modules/Cart";

const store = createStore({
  modules: {
    Cart,
  },
});

export default store;

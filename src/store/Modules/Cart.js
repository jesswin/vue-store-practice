const state = {
  products: [
    {
      id: 1,
      name: "Chelsea Shoes",
      price: 200,
      shortdesc: "Best Drip in the Market",
      url: "images/chelsea-shoes.png",
    },
    {
      id: 2,
      name: "Kimono",
      price: 50,
      shortdesc: "Classy, Stylish, Dope",
      url: "images/kimono.png",
    },
    {
      id: 3,
      name: "Watch",
      price: 2500,
      shortdesc: "Elegance built in",
      url: "images/rolex.png",
    },
    {
      id: 4,
      name: "Wallet",
      price: 80,
      shortdesc: "Sleek, Trendy, Clean",
      url: "images/wallet.png",
    },
    {
      id: 5,
      name: "Lady Handbags",
      price: 230,
      shortdesc: "Fabulous, Exotic, Classy",
      url: "images/handbag.png",
    },
    {
      id: 6,
      name: "Casual Shirts",
      price: 30,
      shortdesc: "Neat, Sleek, Smart",
      url: "images/shirt.png",
    },
    {
      id: 7,
      name: "Formal Shirts",
      price: 30,
      shortdesc: "Neat, Sleek, Smart",
      url: "images/shirt.png",
    },
    {
      id: 8,
      name: "Wallet 2",
      price: 80,
      shortdesc: "Sleek, Trendy, Clean",
      url: "images/wallet.png",
    },
    {
      id: 9,
      name: "Chelsea Shoes",
      price: 200,
      shortdesc: "Best Drip in the Market",
      url: "images/chelsea-shoes.png",
    },
  ],
  cart: [],
};
const getters = {
  getProds: (state) => state.products,
  getCartData: (state) => state.cart,
};
const actions = {
  addCartItem({ commit }, item) {
    item.quantity = 1;
    commit("addItem", item);
  },
  updateCartItem({ commit, state }, updatedItem) {
    let updatedItemsInCart = state.cart.map((cartItem) => {
      if (cartItem.id == updatedItem.id) {
        return updatedItem;
      }

      return cartItem;
    });
    commit("updateItems", updatedItemsInCart);
  },
  removeCartItem({ commit }, item) {
    commit("removeItems", item);
  },
};
const mutations = {
  addItem: (state, item) => state.cart.push(item),
  updateItems: (state, items) => (state.cart = [...items]),
  removeItems: (state, item) => {
    state.cart = state.cart.filter((cartItem) => {
      return cartItem.id != item.id;
    });
  },
};

export default { state, getters, actions, mutations };

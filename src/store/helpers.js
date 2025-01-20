import { mapGetters, mapActions, mapMutations } from 'vuex'
// -----------  购物车 ----------
export const globalComputed = {
  ...mapGetters('global', ['token','userInfo'])
}

export const globalMethods = {
  ...mapActions('global', [ 'setToken','setUserInfo']),
  ...mapMutations('global', [ 'SET_TOKEN','SET_USER_INFO']),
}

export const cartComputed = {
  ...mapGetters('cart', ['count', 'order'])
}
export const cartMethods = {
  ...mapActions('cart', ['_addToCart', '_getCartCount', '_payFor']),
  ...mapMutations('cart', ['SET_ORDER', 'SET_CART_COUNT'])
}

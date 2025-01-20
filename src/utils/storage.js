/* eslint-disable */
/* eslint-disable */
export default function storage(key, val) {
  if (val) uni.setStorageSync(key, val)
  else return uni.getStorageSync(key)
}

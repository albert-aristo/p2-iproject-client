<template>
  <div>
    <form @submit.prevent="submitEditStockForm">
      <div>
          <div class="each-form">
              <label>Product name</label>
              <input type="text" v-model="productName">
          </div>
          <div class="each-form">
              <label>Available quantity</label>
              <input type="password" v-model="availableQuantity">
          </div>
          <div class="each-form">
              <label>Harga Pokok Penjualan</label>
              <input type="password" v-model="HPP">
          </div>
          <div class="each-form">
              <label>SKU</label>
              <input type="password" v-model="SKU">
          </div>
          <div class="each-form">
              <label>Category</label>
              <input type="password" v-model="Category">
          </div>
          <div class="each-form">
              <button type="submit">Save</button>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productName: '',
      Category: '',
      SKU: '',
      HPP: '',
      availableQuantity: ''
    }
  },
  methods: {
    submitEditStockForm () {
      this.$store.dispatch('submitEditPage', { product_name: this.productName, category: this.Category, SKU: this.SKU, cost_of_goods_sold: this.HPP, available_quantity: this.availableQuantity })
    }
  },
  computed: {
    editStock () {
      return this.$store.state.pageForEditStock
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <form @submit.prevent="submitEditStockForm(editStock.id)">
      <div>
          <div class="each-form">
              <label>Product name</label>
              <input type="text" v-model="productName">
          </div>
          <div class="each-form">
              <label>Available quantity</label>
              <input type="number" v-model="availableQuantity">
          </div>
          <div class="each-form">
              <label>Harga Pokok Penjualan</label>
              <input type="number" v-model="HPP">
          </div>
          <div class="each-form">
              <label>SKU</label>
              <input type="text" v-model="SKU">
          </div>
          <div class="each-form">
              <label>Category</label>
              <input type="text" v-model="Category">
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
    submitEditStockForm (id) {
      this.$store.dispatch('submitEditPage', { id, product_name: this.productName, category: this.Category, SKU: this.SKU, cost_of_goods_sold: this.HPP, available_quantity: this.availableQuantity })
    }
  },
  computed: {
    editStock () {
      return this.$store.state.pageForEditStock
    }
  },
  created () {
    this.productName = this.editStock.product_name
    this.Category = this.editStock.category
    this.SKU = this.editStock.SKU
    this.HPP = this.editStock.cost_of_goods_sold
    this.availableQuantity = this.editStock.available_quantity
  }
}
</script>

<style>

</style>

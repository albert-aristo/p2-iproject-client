<template>
  <div>
    <form @submit.prevent="newInvoice">
      <div>
          <div class="each-form">
              <label>Product name</label>
              <input type="text" v-model="name">
          </div>
          <div class="each-form">
              <label>Available quantity</label>
              <input type="number" v-model="qty">
          </div>
          <div class="each-form">
              <label>Harga Pokok Penjualan</label>
              <input type="number" v-model="hpp">
          </div>
          <div class="each-form">
              <label>SKU</label>
              <input type="text" v-model="sku">
          </div>
          <div class="each-form">
              <label>Category</label>
              <input type="text" v-model="category">
          </div>
          <div class="each-form">
              <button type="submit">Submit</button>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      qty: '',
      hpp: '',
      sku: '',
      category: ''
    }
  },
  methods: {
    newInvoice () {
      this.$store.dispatch('newStock', { product_name: this.name, available_quantity: this.qty, cost_of_goods_sold: this.hpp, SKU: this.sku, category: this.category })
    }
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

#app{
    font-size: 34px;
}

.each-form{
    display: flex;
    justify-content: center;
    margin: 30px;
}

button{
    font-size: 48px;
}

label{
    margin-right: 10px;
}

.eachForm{
    display: flex;
    justify-content: center;
    margin: 30px;
    border: 3px solid black;
    border-radius: 20px;
}

.eachForm input{
    height: 39px;
    font-size: 39px;
}
</style>

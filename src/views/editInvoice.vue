<template>
  <div>
    <form @submit.prevent="editInvoice">
      <div>
          <div class="each-form">
              <label>Product name</label>
              <input type="text" v-model="p">
          </div>
          <div class="each-form">
              <label>Available quantity</label>
              <input type="password" v-model="p">
          </div>
          <div class="each-form">
              <label>Harga Pokok Penjualan</label>
              <input type="password" v-model="p">
          </div>
          <div class="each-form">
              <label>SKU</label>
              <input type="password" v-model="p">
          </div>
          <div class="each-form">
              <label>Category</label>
              <input type="password" v-model="p">
          </div>
          <div class="each-form">
              <button type="submit">Login</button>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    methods: {
        editInvoice
    }
}
</script>

<style>

</style>

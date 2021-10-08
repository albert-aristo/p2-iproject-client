<template>
    <div>
        <table>
            <tr>
                <th>Title</th>
                <th>HPP</th>
                <th>Available of stock</th>
                <th>SKU</th>
                <th>Category</th>
            </tr>
            <tr>
                <td>{{ stock.product_name }}</td>
                <td>{{ stock.available_quantity }}</td>
                <td>{{ stock.cost_of_goods_sold }}</td>
                <td>{{ stock.SKU }}</td>
                <td>{{ stock.category }}</td>
            </tr>
        </table>

        <form @submit.prevent="submitAddStock(stock.id)">
            <div class="each-form">
                <label>Quantity</label>
                <input type="text" v-model="quantity">
            </div>
            <div class="each-form">
                <label>Price Per Pcs</label>
                <input type="text" v-model="price">
            </div>
            <div class="each-form">
                <button type="submit">Add</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      quantity: 0,
      price: 0
    }
  },
  computed: {
    stock () {
      return this.$store.state.pageForEditStock
    }
  },
  methods: {
    submitAddStock (id) {
      this.$store.dispatch('submitAddStock', { id: id, quantity: this.quantity, price: this.price })
    }
  }
}
</script>

<style>
.each-form{
    display: flex;
    justify-content: center;
    margin: 30px;
    font-size: 34px;
}

button{
    font-size: 48px;
}

label{
    margin-right: 10px;
}
</style>

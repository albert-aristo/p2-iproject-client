<template>
    <div>
        <table>
            <tr>
                <th>Title</th>
                <th>Available of stock</th>
                <th>HPP</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Action</th>
            </tr>
            <tr v-for="stock in arrayStock" :key="stock.id">
                <td>{{ stock.product_name }}</td>
                <td>{{ stock.available_quantity }}</td>
                <td>{{ stock.cost_of_goods_sold }}</td>
                <td>{{ stock.SKU }}</td>
                <td>{{ stock.category }}</td>
                <td><a @click.prevent="editPage(stock.id)">Edit</a> || <a @click.prevent="deleteStock(stock.id)">Delete</a> || <a @click.prevent="addStock(stock.id)">Add</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  methods: {
    editPage (id) {
      this.$store.dispatch('editPage', id)
    },
    deleteStock (id) {
      this.$store.dispatch('delete', id)
      this.arrayOfStock()
    },
    addStock (id) {
      this.$store.dispatch('addStock', id)
    },
    arrayOfStock () {
      this.$store.dispatch('arrayOfStock')
    }
  },
  computed: {
    arrayStock () {
      return this.$store.state.arrayOfStock
    }
  },
  created () {
    this.$store.dispatch('arrayOfStock')
  }
}
</script>

<style>

table, th, td {
  border: 1px solid black;
}

table {
  /* border: 1px solid black; */
  width: 100%;
  border-collapse: collapse;
}

th {
    font-size: 34px;
}

td {
    font-size: 30px;
}

</style>

<template>
  <div>
    <table>
      <tr>
        <th>Date</th>
        <th>Product</th>
        <th>Category</th>
        <th>Modal per pcs</th>
        <th>Quantity</th>
        <th>Harga Sebelum Discount</th>
        <th>Discount</th>
        <th>Harga Jual</th>
        <th>Total Penjualan</th>
        <th>Penerima</th>
        <th>Action</th>
      </tr>
      <tr v-for="per in invoice.sales" :key="per.id">
        <td v-html="getShortDate(invoice.date)"></td>
        <td>{{ per.stockProduct.product_name }}</td>
        <td>{{ per.stockProduct.category }}</td>
        <td>{{ per.stockProduct.cost_of_goods_sold }}</td>
        <td>{{ per.quantity }}</td>
        <td>{{ hargaSebelumDiscount(per.after_discount, per.discount) }}</td>
        <td>{{ per.discount }}%</td>
        <td>{{ per.after_discount }}</td>
        <!-- <td>{{ per.stockProduct.cost_of_goods_sold * per.quantity }}</td> -->
        <td>{{ per.total }}</td>
        <td>{{ invoice.recipient.name_of_recipient }}, {{ invoice.recipient.status }} {{ invoice.recipient.name_of_company }}</td>
        <td><a @click.prevent="showDetail(invoice.id)">Edit</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    invoice () {
      return this.$store.state.arrayInvoice
    }
  },
  methods: {
    getShortDate (date) {
      return new Date(date).toLocaleString()
      // return (`${new Date(date).getDate()} - ${new Date(date).getMonth()} - ${new Date(date).getFullYear()}`)
    },
    totalSale (array) {
      let total = 0
      for (let a = 0; a < array.length; a++) {
        total += array[a].total
      }
      return total
    },
    showDetail (id) {
      this.$store.dispatch('specificInvoice', id)
    },
    hargaSebelumDiscount (harga, discount) {
      return Math.round(harga + ((harga / 100) * discount))
    }
  }
}
</script>

<style>

</style>

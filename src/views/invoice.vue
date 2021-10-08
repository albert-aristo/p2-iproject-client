<template>
  <div>
    <table>
      <tr>
        <th>Date</th>
        <th>Product</th>
        <th>Total</th>
        <th>Penerima</th>
        <th>Action</th>
      </tr>
      <tr v-for="invoice in invoiceArray" :key="invoice.id">
        <td v-html="getShortDate(invoice.date)"></td>
        <td v-html="productCategory(invoice.sales)"></td>
        <td v-html="totalSale(invoice.sales)"></td>
        <td>{{ invoice.recipient.name_of_recipient }}, {{ invoice.recipient.status }} {{ invoice.recipient.name_of_company }}</td>
        <td><a @click.prevent="showDetail(invoice.id)">Detail</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    invoiceArray () {
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
    productCategory (array) {
      let output = []
      for (let a = 0; a < array.length; a++) {
        let izin = true
        for (let c = 0; c < output.length; c++) {
          if (output[c] === array[a].stockProduct.category) {
            izin = false
          }
        }
        if (izin) {
          output.push(array[a].stockProduct.category)
        }
      }
      output = output.join(',')
      return output
    },
    showDetail (id) {
      console.log(id)
      this.$store.dispatch('specificInvoice', id)
    }
  },
  created () {
    this.$store.dispatch('allInvoice')
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

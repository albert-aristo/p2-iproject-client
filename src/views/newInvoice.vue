<template>
  <div>
    <form @submit.prevent="newInvoiceList">
      <div>
          <div class="each-form">
              <label>Product name</label>
              <select v-model="productName" >
                  <option v-for="item in listOfProduct" :key=item.id :value="{ name: item.product_name, id: item.id}">{{ item.product_name }}</option>
              </select>
          </div>
          <div class="each-form">
              <label>Penerima</label>
              <select v-model="recipientName" >
                  <option v-for="item in listOfPenerima" :key=item.id :value="{ id: item.id, name: item.name_of_recipient }">{{ item.name_of_recipient }}, {{ item.status }} {{ item.name_of_company }}</option>
              </select>
          </div>
          <div class="each-form">
              <label>quantity</label>
              <input type="number" v-model="quantity">
          </div>
          <div class="each-form">
              <label>Harga Jual</label>
              <input type="number" v-model="hargaJual">
          </div>
          <div class="each-form">
              <label>Discount</label>
              <input type="number" v-model="discount">
          </div>
          <div class="each-form">
              <label>After Discount</label>
              <label>{{ ((1 -( discount / 100))* hargaJual).toFixed(2) }}</label>
          </div>
          <div class="each-form">
              <label>Total Amount</label>
              <label>{{ (((1 -( discount / 100))* hargaJual) * quantity).toFixed(2) }}</label>
          </div>
          <div class="each-form">
              <button type="submit">Add</button>
          </div>
      </div>
    </form>
    <div class="each-form">
        <button @click.prevent="submitInvoice" type="submit">Submit</button>
    </div>
    <table v-if="listOfArray.length > 0">
        <tr>
            <th>Product Name</th>
            <th>Recipient</th>
            <th>Quantity</th>
            <th>Harga Jual</th>
            <th>Discount</th>
            <th>After Discount</th>
            <th>Total Amount</th>
        </tr>
        <tr v-for="sale in listOfArray" :key="sale.id">
            <td>{{ sale.prudctName }}</td>
            <td>{{ sale.recipientName }}</td>
            <td>{{ sale.quantity }}</td>
            <td>{{ sale.hargaJual }}</td>
            <td>{{ sale.discount }}</td>
            <td>{{ sale.afterDiscount }}</td>
            <td>{{ sale.totalAmount }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quantity: '',
      hargaJual: '',
      discount: '',
      listOfArray: [],
      productName: { id: '', name: '' },
      recipientName: { id: '', name: '' }
    }
  },
  methods: {
    triagle () {
      this.$store.dispatch('arrayOfStock')
    },
    newInvoiceList () {
      this.listOfArray.push({ quantity: this.quantity, hargaJual: this.hargaJual, discount: this.discount, prudctName: this.productName.name, prudctid: this.productName.id, recipientName: this.recipientName.name, recipientid: this.recipientName.id, afterDiscount: ((1 - (this.discount / 100)) * this.hargaJual).toFixed(2), totalAmount: (((1 - (this.discount / 100)) * this.hargaJual) * this.quantity).toFixed(2) })
      this.quantity = ''
      this.hargaJual = ''
      this.discount = ''
      this.productName = { id: '', name: '' }
      this.recipientName = { id: '', name: '' }
    },
    penerima () {
      this.$store.dispatch('allRecipient')
    },
    submitInvoice () {
      this.$store.dispatch('newInvoice', this.listOfArray)
    }
  },
  computed: {
    listOfProduct () {
      return this.$store.state.arrayOfStock
    },
    listOfPenerima () {
      return this.$store.state.recipient
    }
  },
  watch: {
    quantity () {
      for (let a = 0; a < this.listOfProduct.length; a++) {
        if (this.productName.name === this.listOfProduct[a].product_name) {
          if (this.quantity > this.listOfProduct[a].available_quantity) {
            this.quantity = this.listOfProduct[a].available_quantity
          }
        }
      }
    }
  },
  created () {
    this.triagle()
    this.penerima()
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

table, th, td {
  border: 1px solid black;
}

table {
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

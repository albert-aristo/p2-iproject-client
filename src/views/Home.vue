<template>
  <div class="container mt-5 text-center">
    <button @click.prevent="newInvoice" class="buton">New Invoice</button><button @click.prevent="newStock" class="buton">New Stock</button><button @click.prevent="Recipients" class="buton">Recipients</button>
    <GoogleChart :data='data' />
    <h2>KURS</h2>
    <h2> USD  {{ kurs.USD }}</h2>
    <h2> IDR  {{ kurs.IDR }}</h2>
    <h2> CNY  {{ kurs.CNY }}</h2>
  </div>
</template>

<script>
import GoogleChart from '../components/GoogleChart.vue'

export default {
  name: 'App',
  components: {
    GoogleChart
  },
  computed: {
    data () {
      return this.$store.state.googleCHart
    },
    kurs () {
      return this.$store.state.kurs
    }
  },
  methods: {
    arrayOfChart () {
      this.$store.dispatch('allInvoice')
    },
    usd () {
      this.$store.dispatch('apiKeyExChangeRate')
    },
    newInvoice () {
      this.$router.push({ name: 'newInvoice' })
    },
    newStock () {
      this.$router.push({ name: 'newStock' })
    },
    Recipients () {
      this.$router.push({ name: 'Recipients' })
    }
  },
  created () {
    this.arrayOfChart()
    this.usd()
  }
}
</script>

<style>
.buton {
  padding: 15px 25px;
  margin: 0px 25px;
}
</style>

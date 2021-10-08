<template>
  <div>
    <h2>Penjualan bulan</h2>

    <GChart
      type='PieChart'
      :options='options'
      :data='data2'/>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'App',
  components: {
    GChart
  },
  data () {
    return {

      // data: [
      //   ['Daily Routine', 'Hours per Day'],
      //   ['Work', 14],
      //   ['Eat', 1],
      //   ['Reading', 2],
      //   ['Exercise', 2],
      //   ['Sleep', 5]
      // ],
      options: {
        width: 1100,
        height: 400
      }
    }
  },
  computed: {
    data2 () {
      return this.$store.state.googleCHart
    }
  },
  methods: {
    arrayOfChart () {
      this.$store.dispatch('allInvoice')
    }
  },
  created () {
    this.arrayOfChart()
  }
}
</script>

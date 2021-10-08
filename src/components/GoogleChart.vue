<template>
  <div>
    <h2>Penjualan bulan</h2>

    <GChart
      type='PieChart'
      :options='options'
      :data='data'/>
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
      data: [ 
        ['Product Name', 'Unit Sold'],
        ['iPhone 13 Blue 512GB', 4],
        ['iPhone 13 Pink 512GB', 11],
        ['AirPods Pro', 2],
        ['iPhone 13 Midnight 512GB', 3],
        ['iPhone 13 Stralight 512GB', 2],
        ['iPhone 13 RED 512GB', 3],
        ['iPhone 13 HARD CASE', 4],
        ['iPhone 13 SOFT CASE', 8],
        ['AirPods', 9]
      ],
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
    // data () {
    //   return this.$store.state.googleCHart
    // }
  },
  methods: {
    arrayOfChart () {
      this.$store.dispatch('allInvoice')
    }
  },
  created () {
    arrayOfChart()
  }
}
</script>

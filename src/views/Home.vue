<template>
  <div class="container mt-5 text-center">
    <GoogleChart :data='data' />
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
    }
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

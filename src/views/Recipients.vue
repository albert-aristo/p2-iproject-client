<template>
  <div>
      <form @submit.prevent="addNewRecipient">
        <div>
          <h1>Recipient</h1>
            <div class="each-form">
                <label>Name</label>
                <input type="text" v-model="name">
            </div>
            <div class="each-form">
                <label>Company</label>
                <input type="text" v-model="company">
            </div>
            <div class="each-form">
                <label>Position</label>
                <input type="text" v-model="position">
            </div>
            <div class="each-form">
                <label>Address</label>
                <input type="text" v-model="address">
            </div>
            <div class="each-form">
                <button type="submit">Add</button>
            </div>
        </div>
    </form>
      <table>
          <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Position</th>
              <th>Address</th>
          </tr>
          <tr v-for="user in penerima" :key="user.id">
              <td>{{ user.name_of_recipient }}</td>
              <td>{{ user.name_of_company }}</td>
              <td>{{ user.status }}</td>
              <td>{{ user.address }}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      company: '',
      position: '',
      address: ''
    }
  },
  computed: {
    penerima () {
      return this.$store.state.recipient
    }
  },
  methods: {
    callPenerima () {
      this.$store.dispatch('allRecipient')
    },
    addNewRecipient () {
      this.$store.dispatch('newRecipient', { nameOfRecipient: this.name, nameOfCompany: this.company, status: this.position, address: this.address })
    }
  },
  created () {
    this.callPenerima()
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
</style>

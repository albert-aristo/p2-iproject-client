import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
const baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginCondition: false,
    arrayOfStock: [],
    pageForEditStock: {},
    arrayInvoice: [],
    googleCHart: [],
    kurs: {},
    recipient: []
  },
  mutations: {
    assignLoginCondigiton (state, payload) {
      state.loginCondition = payload
    },
    assignArrayOfStock (state, payload) {
      state.arrayOfStock = payload
    },
    assignpageForEdit (state, payload) {
      state.pageForEditStock = payload
      console.log(payload)
    },
    assignArrayInvoice (state, payload) {
      state.arrayInvoice = payload
    },
    assignGoogleChart (state, payload) {
      const arrayOfChart = [['Product Name', 'Unit Sold']]
      for (let a = 0; a < payload.length; a++) {
        for (let b = 0; b < payload[a].sales.length; b++) {
          let flag = true
          for (let c = 0; c < arrayOfChart.length; c++) {
            if (arrayOfChart[c][0] === payload[a].sales[b].stockProduct.product_name) {
              arrayOfChart[c][1] += payload[a].sales[b].quantity
              flag = false
            }
          }
          if (flag) {
            arrayOfChart.push([payload[a].sales[b].stockProduct.product_name, payload[a].sales[b].quantity])
          }
        }
      }
      console.log(arrayOfChart)
      state.googleCHart = arrayOfChart
    },
    assignKurs (state, payload) {
      state.kurs = payload
    },
    assignRecipient (state, payload) {
      state.recipient = payload
    }
  },
  actions: {
    register (context, obj) { // done
      axios({
        method: 'post',
        url: `${baseURL}/user/register`,
        data: { name: obj.name, email: obj.email, password: obj.password, role: obj.role }
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Login' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login (context, obj) { // done
      console.log('masuk ke line 75')
      axios({
        method: 'post',
        url: `${baseURL}/user/login`,
        data: { email: obj.email, password: obj.password }
      })
        .then(({ data }) => {
          console.log('sudah login')
          context.commit('assignLoginCondigiton', true)
          localStorage.setItem('token', data)
          router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    allInvoice (context) { // done
      axios({
        method: 'get',
        url: `${baseURL}/invoice`,
        headers: localStorage.getItem('token')
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignGoogleChart', data)
          context.commit('assignArrayInvoice', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    specificInvoice (context, id) {
      console.log(id)
      axios({
        method: 'get',
        url: `${baseURL}/invoice/${id}`,
        headers: localStorage.getItem('token')
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignArrayInvoice', data)
          router.push({ name: 'InvoiceDetail' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    allRecipient (context) { // recipient
      axios({
        method: 'get',
        url: `${baseURL}/recipient`,
        headers: localStorage.getItem('token')
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignRecipient', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    newRecipient (context, obj) {
      const { nameOfRecipient, nameOfCompany, status, address } = obj
      axios({
        method: 'post',
        url: `${baseURL}/recipient`,
        headers: localStorage.getItem('token'),
        data: { name_of_recipient: nameOfRecipient, name_of_company: nameOfCompany, status, address }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('allRecipient')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delete (context, id) {
      console.log(id)
      axios({
        method: 'patch',
        url: `${baseURL}/stock/${id}`,
        headers: localStorage.getItem('token')
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('arrayOfStock')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    arrayOfStock (context, id) {
      axios({
        method: 'get',
        url: `${baseURL}/stock`,
        headers: localStorage.getItem('token')
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignArrayOfStock', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editPage (context, id) {
      axios({
        method: 'get',
        url: `${baseURL}/stock/${id}`,
        headers: localStorage.getItem('token')
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignpageForEdit', data)
          router.push({ name: 'EditStockPage' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    submitEditPage (context, obj) {
      axios({
        method: 'put',
        url: `${baseURL}/stock/${obj.id}`,
        headers: localStorage.getItem('token'),
        data: { product_name: obj.product_name, category: obj.category, SKU: obj.SKU, cost_of_goods_sold: obj.cost_of_goods_sold, available_quantity: obj.available_quantity }
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Stock' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addStock (context, id) {
      axios({
        method: 'get',
        url: `${baseURL}/stock/${id}`,
        headers: localStorage.getItem('token')
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignpageForEdit', data)
          router.push({ name: 'addStock' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    submitAddStock (context, obj) {
      console.log(obj)
      axios({
        method: 'post',
        url: `${baseURL}/stock/addStock/${obj.id}`,
        headers: localStorage.getItem('token'),
        data: { quantity: obj.quantity, price: obj.price }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('assignpageForEdit', data)
          router.push({ name: 'Stock' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    apiKeyExChangeRate (context) {
      axios({
        method: 'get',
        url: 'https://v6.exchangerate-api.com/v6/80fb2493b2d015b7c3906fea/latest/USD'
      })
        .then(({ data }) => {
          context.commit('assignKurs', { USD: data.conversion_rates.USD, IDR: data.conversion_rates.IDR.toFixed(2), CNY: data.conversion_rates.CNY.toFixed(2) })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    newInvoice (context, obj) {
      axios({
        method: 'POST',
        url: `${baseURL}/invoice`,
        headers: localStorage.getItem('token'),
        data: obj
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Invoice' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    newStock (context, obj) {
      axios({
        method: 'POST',
        url: `${baseURL}/stock/addNewStock`,
        headers: localStorage.getItem('token'),
        data: { product_name: obj.product_name, available_quantity: obj.available_quantity, cost_of_goods_sold: obj.cost_of_goods_sold, SKU: obj.SKU, category: obj.category }
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Stock' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    checkLogin (context) {
      if (localStorage.getItem('token')) {
        context.commit('assignLoginCondigiton', true)
        router.push({ name: 'Home' })
      } else {
        context.commit('assignLoginCondigiton', false)
      }
    }
  }
})

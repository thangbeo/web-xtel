<template>
  <div class="pa-4" align="center">
    <v-card elevation="5" max-width="700">
      <v-card-text v-if="transactionMasterInfo !== null">
        <div align="center" class="mb-2">
          <v-progress-circular color="red" :value="100" size="70">
            <v-icon size="50" color="red">mdi-exclamation</v-icon>
          </v-progress-circular>
        </div>
        <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
        <h1 v-else>{{ otherError }}</h1>
        <h1>Code: {{ error.statusCode }}</h1>
      </v-card-text>
    </v-card>
    <!-- <div align="center" class="mt-2">
        <v-btn color="primary" to="/" elevation="5">Về trang chủ</v-btn>
    </div>-->
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Có lỗi xảy ra. Vui lòng thử lại sau!',
      otherError: 'Có lỗi xảy ra. Vui lòng thử lại sau!',
      transactionMasterInfo: ''
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
  padding: 10px;
  font-weight: 400;
  color: red;
}
</style>

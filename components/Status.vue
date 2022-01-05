<template>
  <v-chip
    small
    text-color="white"
    :color="(status === 1) ? 'green' : 'warning'"
  >{{(status === 1) ? 'kích hoạt' : 'không kích hoạt'}}</v-chip>
</template>

<script>
export default {
  name: 'Status',
  props: ['status']
}
</script>

<style scoped>
</style>

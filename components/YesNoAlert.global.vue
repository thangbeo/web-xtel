<template>
  <!-- 
  Cách dùng:
  - prop 'open' là giá trị đóng mở dialog (Boolean)
  - prop 'alertMsg' dùng để hiển thị câu hỏi của dialog (Number/String)
  - Event 'toggle' dùng để đóng hoặc mở dialog
  - Khi bấm OK sẽ emit event 'OK' và event 'toggle'
  - Khi bấm 'Hủy' sẽ emit event toggle
  -->
  <div>
    <v-dialog
      :value="open"
      @keydown="($event.key === 'Escape') && toggle()"
      @click:outside="toggle"
      max-width="400"
    >
      <v-card>
        <v-card-text class="pt-8 text-center black--text">{{alertMsg}}</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="OK" width="49%">OK</v-btn>
          <v-btn color="secondary" @click="toggle" width="49%">Hủy</v-btn>
          <!-- <div class="d-flex justify-space-around align-center w-100">
            
          </div>-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: ['open', 'alertMsg'],
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    OK() {
      this.$emit('OK')
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="scss">
</style>
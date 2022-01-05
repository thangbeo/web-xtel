<template>
  <v-dialog ref="dialog" v-model="visible" persistent width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="label"
        :value="displayDate"
        readonly
        clearable
        dense
        outlined
        :error-messages="error_messages"
        :error="error"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker :value="value" @input="onChange($event)" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="secondary" @click="onCancel">Đóng</v-btn>
      <v-btn text class="primary" color="white" @click="onSave">Chọn</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
import moment from 'moment'
import Vue from 'vue'

Vue.prototype.moment = moment
//Muon dung ham nay truoc tien
//value phai co dang yyyy-MM-dd
//khi nay textbox se phai convert sang dang dd/MM/yyyy de hien thi
//muon update thi ta convert date sang dd/MM/yyyy_HH:mm:ss
export default {
  name: 'SingeDatePicker',
  props: ['label', 'value', 'error', 'error_messages'],
  data: () => ({
    visible: false
  }),

  methods: {
    onCancel() {
      this.visible = false
      this.$emit('onCancel', event)
    },
    onChange(value) {
      //this.visible = false
      this.$emit('onChange', value)
    },
    onSave() {
      this.visible = false
      this.$emit('onSave', this.value)
    }
  },
  computed: {
    //Do truyen vao se la YYYY-MM-dd nen can convert sang
    displayDate() {
      let strDate = this.value
      if (!strDate) return ''
      return moment(strDate).format('DD-MM-YYYY')
    }
  }
}
</script>

<style scoped></style>

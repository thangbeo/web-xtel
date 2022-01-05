<template>
  <v-dialog
    :value="open"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    persistent
    no-click-animation
  >
    <v-card>
      <v-app-bar color="primary" fixed class="border-radius-0">
        <v-toolbar-title>
          <div style="color: white">{{ dialogName }}</div>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn v-if="CRUD" color="white" text @click="actionsUser">
          <v-icon class="pr-1" color="white">mdi-content-save-all</v-icon>Lưu
        </v-btn>
        <v-btn color="white" text @click="toggle">
          <v-icon class="pr-1" color="white">mdi-close-box</v-icon>Đóng
        </v-btn>
      </v-app-bar>
      <v-content class="dialog-content">
      <slot></slot>
    </v-content>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'FullscreenDialog',
  props: ['dialogName', 'open', 'CRUD'],
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    actionsUser() {
      this.$emit('actionsUser')
    }
  }
}
</script>

<style scoped></style>

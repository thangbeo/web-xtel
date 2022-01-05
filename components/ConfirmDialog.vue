<template>
	<v-dialog :value="open" width="500" @click:outside="toggle">
		<v-card>
			<v-card-title class="headline primary lighten-2">
				Xác nhận
			</v-card-title>
			<p></p>
			<v-card-text>
				{{message}}
			</v-card-text>
			<v-divider></v-divider>
			<v-card-actions>
				<div class="flex-grow-1"></div>
				<v-btn color="primary lighten-2" @click="toggle">
					Đóng
				</v-btn>
				<v-btn color="primary lighten-2" @click="confirmAction">
					Đồng ý
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
  export default {
    name: 'ConfirmDialog',
		props: ['open', 'message'],
		methods: {
      toggle() {
        this.$emit('toggle')
			},
      confirmAction() {
        this.$emit('confirmAction')
			}
		}
  }
</script>

<style scoped>

</style>

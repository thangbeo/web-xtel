<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      observer: null
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('reached')
      }
    })

    this.observer.observe(this.$el)
  }
}
</script>
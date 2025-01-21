<template>
  <div class="sc-message--emoji">
    <slot :message="message">
      {{ message.data.emoji }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.sc-message--emoji {
  font-size: 40px;
}
</style>

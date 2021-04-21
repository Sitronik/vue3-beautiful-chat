<template>
  <div class="demo-footer" :style="{color: linkColor}">
    <div>
      <div>&copy; {{ new Date().getFullYear() }} sitronik/vue3-beautiful-chat</div>
      <div>
        <a
          :style="{color: linkColor}"
          href="https://www.npmjs.com/package/vue3-beautiful-chat"
          target="\_parent"
        >
          <img alt="" src="https://img.shields.io/npm/dm/vue3-beautiful-chat.svg" />
        </a>
      </div>
    </div>
    <div>
      <div>
        Check the React version
        <a
          :style="{color: linkColor}"
          href="https://mattmezza.github.io/react-beautiful-chat/"
          target="new"
          >react-beautiful-chat</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Object,
      required: true
    },
    chosenColor: {
      type: String,
      required: true
    }
  },
  computed: {
    linkColor() {
      return this.chosenColor === 'dark' ? this.colors.sentMessage.text : this.colors.launcher.bg
    },
    backgroundColor() {
      return this.chosenColor === 'dark' ? this.colors.messageList.bg : '#fff'
    }
  }
}
</script>

<style scoped>
.demo-footer {
  max-width: 1100px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 20px 0px;
  border-top: solid 2px #f0f4fa;
  color: #8694ab;
  font-weight: 100;
  font-size: 14px;
}
</style>

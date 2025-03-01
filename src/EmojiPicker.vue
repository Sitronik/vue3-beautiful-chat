<template>
  <div
    ref="domNode"
    tabIndex="0"
    class="sc-emoji-picker"
    :style="{background: colors.emojiPicker.bg ?? 'white'}"
    @blur="onBlur"
  >
    <div class="sc-emoji-picker--content">
      <div v-for="category in emojiData" :key="category.name" class="sc-emoji-picker--category">
        <div
          class="sc-emoji-picker--category-title"
          :style="{color: colors.emojiPicker.text ?? '#b8c3ca'}"
        >
          {{ category.name }}
        </div>
        <span
          v-for="emoji in category.emojis"
          :key="emoji"
          class="sc-emoji-picker--emoji"
          @click="emojiClicked(emoji)"
        >
          {{ emoji }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import EmojiConvertor from 'emoji-js'
import emojiData from './emojiData'

export default {
  props: {
    onBlur: {
      type: Function,
      required: true
    },
    onEmojiPicked: {
      type: Function,
      required: true
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      emojiData,
      emojiConvertor: new EmojiConvertor()
    }
  },
  mounted() {
    const elem = this.$refs.domNode
    elem.style.opacity = 0
    window.requestAnimationFrame(() => {
      elem.style.transition = 'opacity 350ms'
      elem.style.opacity = 1
    })
    this.$refs.domNode.focus()

    const style = document.createElement('style')
    style.innerHTML = `
      .sc-emoji-picker:after {
        background: ${this.colors.emojiPicker.bg ?? 'white'};
      }
    `
    document.head.appendChild(style)

    this.emojiConvertor.init_env()
  },
  methods: {
    emojiClicked(emoji) {
      this.onEmojiPicked(emoji)
      this.$refs.domNode.blur()
    }
  }
}
</script>

<style scoped>
.sc-emoji-picker {
  position: absolute;
  bottom: 50px;
  right: 0px;
  width: 330px;
  max-height: 215px;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.3);
  border-radius: 10px;
  outline: none;
}

.sc-emoji-picker:after {
  content: '';
  width: 14px;
  height: 14px;
  position: absolute;
  bottom: -6px;
  right: 55px;
  transform: rotate(45deg);
  border-radius: 2px;
}

.sc-emoji-picker--content {
  padding: 10px;
  overflow: auto;
  width: 100%;
  max-height: 195px;
  margin-top: 7px;
  box-sizing: border-box;
}

.sc-emoji-picker--category {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.sc-emoji-picker--category-title {
  min-width: 100%;
  font-weight: 200;
  font-size: 13px;
  margin: 5px;
  letter-spacing: 1px;
}

.sc-emoji-picker--emoji {
  margin: 5px;
  width: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  font-size: 28px;
  transition: transform 60ms ease-out;
  z-index: 1;
}

.sc-emoji-picker--emoji:hover {
  transform: scale(1.4);
}
</style>

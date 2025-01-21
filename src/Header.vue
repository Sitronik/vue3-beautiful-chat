<template>
  <div class="sc-header" :style="{background: colors.header.bg, color: colors.header.text}">
    <img v-if="titleImageUrl" class="sc-header--img" :src="titleImageUrl" alt="" />
    <div v-if="!disableUserListToggle" class="sc-header--title enabled" @click="toggleUserList">
      <slot>
        {{ title }}
      </slot>
    </div>
    <div v-else class="sc-header--title">
      <slot>
        {{ title }}
      </slot>
    </div>

    <div v-if="showMinimizeButton" class="sc-header--minimize-button" @click="$emit('minimize')">
      <!-- <img v-if="icons.minimize.img" :src="icons.minimize.img" :alt="icons.minimize.name" /> -->
      <svg
        :style="{fill: colors.header.text}"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 47.971 47.971"
      >
        <g><rect x="0" y="20" width="47.971" height="6.5" rx="3" ry="3" /></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
    <div v-if="showCloseButton" class="sc-header--close-button" @click="$emit('close')">
      <!-- <img v-if="icons.close.img" :src="icons.close.img" :alt="icons.close.name" /> -->
      <svg
        :style="{fill: colors.header.text}"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 47.971 47.971"
      >
        <g>
          <path
            d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
		c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
		C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
		s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  </div>
</template>

<script>
import {mapState} from './store/'

export default {
  props: {
    /*icons: {
      type: Object,
      default: function () {
        return {
          close: {
            img: null,
            name: 'default'
          },
          minimize: {
            img: null,
            name: 'default'
          }
        }
      }
    },*/
    title: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      inUserList: false
    }
  },
  computed: {
    ...mapState(['disableUserListToggle', 'titleImageUrl', 'showCloseButton', 'showMinimizeButton'])
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList
      this.$emit('userList', this.inUserList)
    }
  }
}
</script>

<style scoped>
.sc-header {
  min-height: 75px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
}

.sc-header--img {
  border-radius: 50%;
  align-self: center;
  padding: 10px;
}

.sc-header--title {
  align-self: center;
  padding: 10px;
  flex: 1;
  user-select: none;
  font-size: 20px;
}

.sc-header--title.enabled {
  cursor: pointer;
  border-radius: 5px;
}

.sc-header--title.enabled:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}

.sc-header--close-button {
  width: 40px;
  align-self: center;
  height: 40px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
}

.sc-header--minimize-button {
  width: 40px;
  align-self: center;
  height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
}

.sc-header--close-button:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, 0.1);
}

.sc-header--close-button img,
.sc-header--close-button svg {
  width: 100%;
  height: 100%;
  padding: 13px;
  box-sizing: border-box;
}

.sc-header--minimize-button img,
.sc-header--minimize-button svg {
  width: 100%;
  height: 100%;
  padding: 13px;
  box-sizing: border-box;
}

@media (max-width: 450px) {
  .sc-header {
    border-radius: 0px;
  }
}
</style>

import {reactive} from 'vue'

const store = {
  state: reactive({
    editMessage: null
  }),

  setState(key, val) {
    this.state[key] = val
  }
}

function mapState(keys) {
  const map = {}
  keys.forEach((key) => {
    map[key] = function () {
      return store.state[key]
    }
  })
  return map
}

export default store
export {mapState}

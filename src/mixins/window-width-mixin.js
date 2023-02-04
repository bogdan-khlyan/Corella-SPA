export default {
  data() {
    return {
      windowWidth: 0,
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWindowWidth)
  },
  created() {
    window.addEventListener('resize', this.setWindowWidth)
    this.setWindowWidth()
  },
  methods: {
    setWindowWidth() {
      this.windowWidth = window.innerWidth
    },
  },
}

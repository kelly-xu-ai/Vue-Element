<template>
  <div class="about">
    <h1>点击这个选择框</h1>
    <theme-picker style="" @change="themeChange" />
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'

export default {
  components: { ThemePicker },
  data() {
    return {}
  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      }
      )
    }
  }
}
</script>


<template>
  <div id="app">
    <div>
      <router-link to="/">home</router-link>
    </div>
    <div>
      <router-link to="/about">换肤（ThemePicker）</router-link>
    </div>
    <div>
      <router-link to="/theme">换肤（select）</router-link>
    </div>
    <div>
      <router-link to="/mutest">查看图表</router-link>
    </div>
    <div>
      <router-link to="/i18n">国际化</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

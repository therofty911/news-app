<template>
  <div id="app">
    <HomeMenu />
    <img src="https://media.discordapp.net/attachments/891579314401869864/891681330180522014/news_logo_ts.png?width=396&height=121" alt="Speedy UMN" class="mb-3 my-3 h-img">
    <router-view/>
  </div>
</template>
<script>
import HomeMenu from '@/components/Menu'

export default {
  name: 'vue_signup',
  components: {
    HomeMenu
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media only screen and (max-width: 600px){
  .h-img{
    width: 250px;
  }
}
</style>

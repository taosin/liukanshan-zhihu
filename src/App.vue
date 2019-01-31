<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li v-for="(nav, index) in navs" :key="index">
          <router-link :to="nav.url">{{ nav.title }}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
import '@/assets/css/style.css';
export default {
  name: 'App',
  data(){
    return {
      navs: [
      { title: 'Home', url: '/' },
      { title: '动漫', url: '/about' },
      { title: '下载', url: '/' },
      { title: '商店', url: '/' },
      { title: '历史', url: '/' }
      ]
    }
  }
}
</script>
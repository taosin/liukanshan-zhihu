<template>
  <div id="app">
    <nav class="page-navbar receptacle">
      <ul>
        <li v-for="(nav, index) in navs" :key="index">
          <router-link :to="nav.url" class="nav-link" :class="nav.class">
            <span class="nav-text">{{ nav.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import '@/assets/css/style.css';
export default {
  name: 'App',
  data(){
    return {
      navs: [
      { title: 'Home', url: '/', class: 'home' },
      { title: '动漫', url: '/about', class: 'comics' },
      { title: '下载', url: '/', class: 'downloads' },
      { title: '商店', url: '/', class: 'shop' },
      { title: '历史', url: '/', class: 'history' }
      ]
    }
  }
}
</script>
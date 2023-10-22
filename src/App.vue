<template>
  <router-view v-slot="{ Component }">
    <keep-alive >
      <component :is="Component" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive"/>
  </router-view>
</template>


<!-- vue-router.mjs:35  [Vue Router warn]: <router-view> can no longer be used directly inside <transition> or <keep-alive>.
  Use slot props instead:
  
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view> -->
  
<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  created() {
    if (localStorage.getItem('sourceList')) {
      this.$store.commit('setSourceList', JSON.parse(localStorage.getItem('sourceList')))
    }
  }
};
</script>

<style>
.fade-to-top-leave-to,
.fade-to-top-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.fade-to-top-enter-active,
.fade-to-top-leave-active {
  transition: all 0.5s ease-in-out;
}



.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.btn-add {
  padding: 10px 20px 10px 20px;
  min-width: 100px;
  border-radius: 10px;
  border: var(--border-light-gray);
  cursor: pointer;
  background-color: var(--color-blue);
  color: rgba(255, 255, 255, 0.942);
  transition: all 0.5s ease-in-out;
}

.btn-add:hover {
  background-color: var(--color-green);
}

.btn-added {
  background-color: #f0f0f0;
  color: rgb(77, 77, 77);
}

.btn-added:hover {
  background-color: rgb(164, 44, 44);
  color: white;
}

:root {
  --border-light-gray: 1px solid rgb(187, 187, 187);
  --shadow-light-gary: rgba(188, 188, 188, 0.496);
  --color-blue: rgb(9, 9, 144);
  --color-green: rgb(9, 144, 90);
  --shadow-gray: rgb(43, 43, 43);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  color: black;
  text-decoration: none;
}
</style>

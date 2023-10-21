<template>
  <div class="list-control" v-if="isShowed">
    <h3>{{ title }} {{ items.length }}</h3>
    <img src="../assets/images/icons/close.png" alt="" @click="hideList">
  </div>
  <transition name="fade-to-top">
    <div v-if="isShowed && showedResults.length > 0">
      <ul :id="mode + 'List'">
        <li v-for="item in showedResults" :key="item">
          <UserInfoFull :userInfo="item" :mode="mode"></UserInfoFull>
        </li>
      </ul>

      <div class="list-pages" v-if="items.length / showedCount > 1">
        <span v-for="n in Math.ceil(items.length / showedCount)" :key="n" :class="{ 'active-page': n == activePage + 1 }"
          @click="getToPage(n - 1)">{{ n }}</span>
      </div>

    </div>

  </transition>
</template>

<script>
import UserInfoFull from '@/components/UserInfoFull.vue'
export default {
  name: 'UsersList',
  components: {
    UserInfoFull
  },
  props: ['items', 'startState', 'mode', 'title'],
  data() {
    return {
      showedCount: 20,
      activePage: 0,
      isShowed: this.startState
    }
  },
  computed: {
    showedResults() {
      let results = JSON.parse(JSON.stringify(this.items));
      return results.splice(this.showedCount * this.activePage, this.showedCount);
    }
  },
  watch: {
    showedResults(newValue) {
      if (newValue.length > 0) this.isShowed = true;
    }
  },
  methods: {
    getToPage(n) {
      this.activePage = n;
      let ul = document.querySelector(`#${this.mode}List`);
      /*       let scrollDiv = ul.offsetTop - ul.clientHeight + 100;
            window.scrollTo({ top: scrollDiv, behavior: 'smooth' }); */
      /* ul.scrollTo({ top: 0, behavior: 'smooth' }); */
      ul.scrollTop=0;
      ul.scrollIntoView({ behavior: 'smooth' });
    },
    hideList() {
      this.isShowed = false;
      if (this.mode == 'source' || this.mode == 'friends') {
        this.$emit('onHide');
      }
      /* this.$store.commit('setSearchResults', []); */
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  margin-top: 30px;
}

.list-control img {
  cursor: pointer;
  margin-left: auto;
  transition: all 0.3s ease-in-out;
}

.list-control img:hover {
  transform: rotateZ(90deg);
}

ul {
  max-height: 80vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  border: var(--border-light-gray);
}

li {
  flex-basis: 50%;
  padding: 15px;
  border-bottom: var(--border-light-gray);
  border-right: var(--border-light-gray);
}

li:nth-child(2n) {
  border-right: 1px solid transparent;
}

.list-pages {
  padding-top: 15px;
}

.list-pages span {
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.list-pages span:hover {
  color: gray;
  transform: scale(1.1);
}

.active-page {
  color: red;
}
</style>

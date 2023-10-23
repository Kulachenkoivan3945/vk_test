<template>
  <div class="list-control">
    <h3>{{ title }} {{ items.length }}</h3>
    <img src="../assets/images/icons/close.png" alt="" @click="hideList">
  </div>
  <transition name="fade-to-top">
    <div v-if="showedResults.length > 0">
      <ul :id="mode + 'List'">
        <li v-for="item in showedResults" :key="item">
          <UserInfoFull :userInfo="item" :mode="mode" :isNoActions="mode === 'friends'"></UserInfoFull>
        </li>
      </ul>

      <div class="list-pages" v-if="items.length / showedCount > 1">
        <span @click="getToPage(-1)" :class="{ 'active-page': n == 0 }">В начало</span>
        <span v-for="(n, index) in pagesList" :key="n" :class="{ 'active-page': n == activePage }"
          @click="getToPage(index)"> {{ n + 1
          }}</span>
        <span @click="getToPage(-2)" :class="{ 'active-page': n == Math.ceil(items.length / showedCount) - 1 }">В
          конец</span>
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
      isShowed: this.startState,
      pagesList: [0, 1, 2, 3, 4]
    }
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.items.length / this.showedCount);
    },
    showedResults() {
      /* let results = JSON.parse(JSON.stringify(this.items)); */
      return JSON.parse(JSON.stringify(this.items)).splice(this.showedCount * this.activePage, this.showedCount);
    }
  },
  watch: {
    showedResults(newValue) {
      if (newValue.length > 0) this.isShowed = true;
    },
    items() {
      this.setPagesCount(Math.ceil(this.items.length / this.showedCount));
    }
  },
  methods: {
    setPagesCount(n) {
      if (this.pagesList.length < 5) {
        this.pagesList = [];
        for (let i = 0; i < n; i++) {
          this.pagesList.push(i);
          if (i == 4) return;
        }
      }
    },
    getToPage(n) {
      this.activePage = this.getNextPageNumber(n);
      let ul = document.querySelector(`#${this.mode}List`);
      ul.scrollIntoView({ behavior: 'smooth' })

    },
    getNextPageNumber(n) {
      if (n == -2) {
        this.pagesList = [];
        for (let i = 5; i >=1; i--) {
          this.pagesList.push(this.pagesCount - i);
        }
        return this.pagesList[4];
      }
      if (n == -1) {
        this.pagesList = [];
        for (let i = 0; i <= 4; i++) {
          this.pagesList.push(i);
        }
        return this.pagesList[0];
      }
      switch (n) {
        case 0: {
          if (this.activePage == this.pagesList[0]) return this.pagesList[0];
          if (this.activePage == this.pagesList[1]) {
            if (this.pagesList[0] == 0) return this.pagesList[0];
            else {
              this.pagesList.forEach(el => el--);
              return this.pagesList[1];
            }
          }
          if (this.activePage >= this.pagesList[2]) {
            if (this.pagesList[0] == 0) return this.pagesList[0];
            else if (this.pagesList[0] == 1) {
              let newArray = JSON.parse(JSON.stringify(this.pagesList));
              this.pagesList = [];
              newArray.forEach(el => {
                el -= 1;
                this.pagesList.push(el);
              });
              return this.pagesList[1];
            }
            else {
              let newArray = JSON.parse(JSON.stringify(this.pagesList));
              this.pagesList = [];
              newArray.forEach(el => {
                el -= 2;
                this.pagesList.push(el);
              });
              return this.pagesList[2];
            }
          }
          break;
        }
        case 1: {
          if (this.activePage == this.pagesList[0]) return this.pagesList[1];
          if (this.activePage == this.pagesList[1]) return this.pagesList[1];
          if (this.activePage >= this.pagesList[2]) {
            if (this.pagesList[0] == 0) return this.pagesList[1];
            else {
              let newArray = JSON.parse(JSON.stringify(this.pagesList));
              this.pagesList = [];
              newArray.forEach(el => {
                el -= 1;
                this.pagesList.push(el);
              });
              return this.pagesList[2];
            }
          }
          break;
        }
        case 2: {
          return this.pagesList[2];
        }
        case 3: {
          if (this.activePage >= this.pagesList[3]) return this.pagesList[3];
          if (this.activePage <= this.pagesList[2]) {
            if (this.pagesList[4] == this.pagesCount - 1) return this.pagesList[3];
            else {
              let newArray = JSON.parse(JSON.stringify(this.pagesList));
              this.pagesList = [];
              newArray.forEach(el => {
                el += 1;
                this.pagesList.push(el);
              });

              return this.pagesList[2];
            }
          }
          break;
        }
        case 4: {
          if (this.activePage == this.pagesList[4]) return this.pagesList[4];
          if (this.activePage <= this.pagesList[3]) {
            if (this.pagesList[4] == this.pagesCount - 1) return this.pagesList[4];
            else if (this.pagesList[4] == this.pagesCount - 2 || this.activePage == this.pagesList[3]) {
              let newArray = JSON.parse(JSON.stringify(this.pagesList));
              this.pagesList = [];
              newArray.forEach(el => {
                el += 1;
                this.pagesList.push(el);
              });

              return this.pagesList[3];
            }
            else {
              let newArray = JSON.parse(JSON.stringify(this.pagesList));
              this.pagesList = [];
              newArray.forEach(el => {
                el += 2;
                this.pagesList.push(el);
              });

              return this.pagesList[2];
            }

          }
          break;
        }
      }
    },
    hideList() {
/*       this.isShowed = false; */
      this.$emit('onHide');

    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: left;
  padding-right: 10px;
}

.list-control {
  display: flex;
  justify-content: center;
  align-items: center;
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
  /*max-height: 80vh;
  overflow-y: scroll;*/
  margin-top: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  border: var(--border-light-gray);
}

li {
  flex-basis: 50%;
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
  color: red !important;
}


@media (max-width:960px) {



  li {
    flex-basis: 100%;
  }

}
</style>

<template >
  <div class="user-list">
    <div class="list-control">
      <h3>{{ title }} {{ items.length }}</h3>
      <img src="../assets/images/icons/close.png" alt="" @click="hideList">
    </div>
    <div class="sort" v-if="mode === 'friends'" @click="sortbarState = !sortbarState">
      <img src="../assets/images/icons/sort.png" alt="">
      <p>Сортировать по: {{ SortTypeText }}</p>

    </div>
    <transition name="fade">
      <div class="sort-bar-full" v-if="sortbarState">
        <label for="sort0"> фамилии(возр)
          <input type="radio" id="sort0" value="0" v-model="sortType">
        </label>
        <label for="sort1"> фамилии(убыв)
          <input type="radio" id="sort1" value="1" v-model="sortType">
        </label>
        <label for="sort2"> имени(возр)
          <input type="radio" id="sort2" value="2" v-model="sortType">
        </label>
        <label for="sort3"> имени(убыв)
          <input type="radio" id="sort3" value="3" v-model="sortType">
        </label>
        <label for="sort4"> кол-ву общих друзей(возр)
          <input type="radio" id="sort4" value="4" v-model="sortType">
        </label>
        <label for="sort5"> кол-ву общих друзей(убыв)
          <input type="radio" id="sort5" value="5" v-model="sortType">
        </label>
        <label for="sort6"> имени и фамилии(возр)
          <input type="radio" id="sort6" value="6" v-model="sortType">
        </label>
        <label for="sort7"> имени и фамилии(убыв)
          <input type="radio" id="sort7" value="7" v-model="sortType">
        </label>
        <label for="sort8"> фамилии и имени(возр)
          <input type="radio" id="sort8" value="8" v-model="sortType">
        </label>
        <label for="sort9"> фамилии и имени(убыв)
          <input type="radio" id="sort9" value="9" v-model="sortType">
        </label>
        <label for="sort10"> первой букве фамилии/имени(возр)
          <input type="radio" id="sort10" value="10" v-model="sortType">
        </label>
        <label for="sort11"> первой букве фамилии/имени(убыв)
          <input type="radio" id="sort11" value="11" v-model="sortType">
        </label>
      </div>
    </transition>
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
  </div>
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
      pagesList: [0, 1, 2, 3, 4],
      sortType: 10,
      sortbarState: false
    }
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.items.length / this.showedCount);
    },
    showedResults() {
      return JSON.parse(JSON.stringify(this.items)).splice(this.showedCount * this.activePage, this.showedCount);
    },
    SortTypeText() {
      switch (Number(this.sortType)) {
        case 0:
          return "фамилии(возр)";
        case 1:
          return "фамилии(убыв)";
        case 2:
          return "имени(возр)";
        case 3:
          return "имени(убыв)";
        case 4:
          return "кол-ву общих друзей(возр)";
        case 5:
          return "кол-ву общих друзей(убыв)";
        case 6:
          return "имени и фамилии(возр)";
        case 7:
          return "имени и фамилии(убыв)";
        case 8:
          return "фамилии и имени(возр)";
        case 9:
          return "фамилии и имени(убыв)";
        case 10:
          return "первой букве фамилии/имени(возр)";
        case 11:
          return "первой букве фамилии/имени(убыв)";
        default:
          return "без сортировки"

      }
    }
  },
  watch: {
    showedResults(newValue) {
      if (this.pagesList.length < 5) this.setPagesCount(this.pagesCount);
      if (newValue.length > 0) this.isShowed = true;
    },
    sortType(){
      this.$emit('onSortTypeChanged', Number(this.sortType));
      this.sortbarState = false;
    }
  },
  methods: {
    setPagesCount(n) {
      this.pagesList = [];
      for (let i = 0; i < n; i++) {
        this.pagesList.push(i);
        if (i == 4) return;
      }
    },
    getToPage(n) {
      this.activePage = this.getNextPageNumber(n);
      let ul = document.querySelector(`#${this.mode}List`);
      ul.scrollIntoView({ behavior: 'smooth' })

    },
    getNextPageNumber(n) {
      if (n == -2) {
        if (this.pagesList.length == 5) {
          this.pagesList = [];
          for (let i = 5; i >= 1; i--) {
            this.pagesList.push(this.pagesCount - i);
          }
          return this.pagesList[4];
        }
        else return this.pagesList[this.pagesList.length - 1];
      }
      if (n == -1) {
        if (this.pagesList.length == 5) {
          this.pagesList = [];
          for (let i = 0; i <= 4; i++) {
            this.pagesList.push(i);
          }
        }
        return this.pagesList[0];
      }
      switch (n) {
        case 0: {
          if (this.activePage == this.pagesList[0]) return this.pagesList[0];
          if (this.activePage == this.pagesList[1]) {
            if (this.pagesList[0] == 0) return this.pagesList[0];
            else {
              let newArray = JSON.parse(JSON.stringify(this.pagesList));
              this.pagesList = [];
              newArray.forEach(el => {
                el -= 1;
                this.pagesList.push(el);
              });
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
  mounted() {
    this.setPagesCount(this.pagesCount);
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-list{
  transition: all 0.5s ease-in-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0px;
  transform: scaleY(0);

}

h3 {
  text-align: left;
  padding-right: 10px;
}


.sort {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
  min-width: 230px;
}

.sort p {
  margin: 0;
  margin-top: 5px;
  margin-left: 10px;

}

.sort-bar-full {
  width: 80vw;
  min-width: 280px;
  top: 30px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-height: 1000px;
  background-color: rgba(243, 243, 243, 0.297);
  border-radius: 10px;
  backdrop-filter: blur(3px);
  z-index: 20;
}

.sort-bar-full label {
  display: flex;
  cursor: pointer;
  padding: 5px;
  padding-left: 0;
  gap: 10px;
}

.sort-bar-full input {
  order: -5;
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
  transition: all 0.5s ease-in-out;
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

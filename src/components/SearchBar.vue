<template>
  <div class="search-container" @mouseleave="isSearched = false" @mouseover="isSearched = true">
    <label for="searchBar">
      <img src="../assets/images/icons/search.png" alt="">
      <input type="search" id="searchBar" name="searchBar" v-model="query" @input="fastSearch" @keydown.enter="search"
        placeholder="Введите запрос...">
      <button @click="search">найти</button>
      <label class="checkbox-id" for="IDSearch"><span>Искать по числовому id</span>
        <input type="checkbox" name="IDSearch" id="IDSearch" 
        v-model="isSearchByID"
        @change="fastSearch">
        
      </label>
    </label>

    <transition name="fade">
      <div class="auto-complete" v-if="isSearched && query != ''">
        <ul v-if="autoCompleteResults.length > 0">
          <li v-for="autoCompleteItem in autoCompleteResults" :key="autoCompleteItem"
            @click="selectQueryItem(autoCompleteItem)">
            <UserInfoMin :userInfo="autoCompleteItem"></UserInfoMin>
          </li>
        </ul>
        <p v-else>По вашему запросу ничего не найдено</p>
      </div>
    </transition>
  </div>
</template>

<script>
import vk_api from '@/services/service.js';
import UserInfoMin from '@/components/UserInfoMin.vue'
import _ from 'lodash'
export default {
  name: 'SearchBar',
  components: {
    UserInfoMin,
  },
  data() {
    return {
      query: '',
      isSearchByID: false,
      autoCompleteResults: [],
      isSearched: false
    }
  },
  watch: {
    query(newValue) {
      if (newValue != '') {
        document.querySelector('.search-container').style.maxHeight = 400 + 'px';
      }
      else {
        document.querySelector('.search-container').style.maxHeight = '70px'
      }
    },
    isSearched(newValue) {
      if (newValue) {
        document.querySelector('.search-container').style.maxHeight = 400 + 'px';
      }
      else {
        document.querySelector('.search-container').style.maxHeight = '70px'
      }
    }
  },
  methods: {
    selectQueryItem(item) {
      if(!this.isSearchByID) this.query = `${item.first_name} ${item.last_name}`;
      /*       this.fastSearch(); */
      this.search();
    },
    search() {
      this.isSearched = false;
      let query = '';
      if(this.isSearchByID) query = 'id' + this.query;
      else query = this.query;
      vk_api.getInfo(
        "users.search",
        {
          q: query,
          fields: "sex,photo_100,bdate",
          count: 100,
          language: "ru",
        },
        (res) => {
          try {
            this.$store.commit('setSearchResults', res.response.items);
            this.$emit('onSearched');
          }
          catch {
            this.isSearched = false;
            this.$emit('onSearched');
            this.$store.commit('setSearchResults', []);
          }
        }
      )
    },
    fastSearch: _.debounce(function () {
      this.isSearched = true;
      let query = '';
      if(this.isSearchByID) query = 'id' + this.query;
      else query = this.query;
      vk_api.getInfo(
        "users.search",
        {
          q: query,
          fields: "photo_50",
          count: 5,
          language: "ru",
        },
        (res) => {
          try {
            this.autoCompleteResults = res.response.items;
          }
          catch {
            this.isSearched = false;
            this.autoCompleteResults = [];
          }
        }
      )
    }, 200)
  },
  created() {

  },
  mounted() {
    /* document.querySelector('.search-container').style.height = '40px' */
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-container {
  width: 100%;
  max-height: 70px;
  transition: all 0.6s ease-in-out;
}


label {
  position: relative;
}

label img {
  position: absolute;
  width: 25px;
  left: 5px;
  top: -5px;
  height: 25px;

}

label button {
  position: absolute;
  top: -6px;
  right: 5px;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: var(--color-blue);
  color: white;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

label button:hover {
  background-color: var(--color-green);
}

input {

  width: 100%;
  padding: 5px 80px 5px 35px;
  border-radius: 10px;
  font-size: 1.2rem;
  border: var(--border-light-gray);
}

.checkbox-id{
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  margin-top: 5px;
}
.checkbox-id input{
  margin: 0;
  width: 40px;
  height: 17px;
  order: -1;
  
}
.auto-complete {
  border: var(--border-light-gray);
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px var(--shadow-light-gary);
}

.auto-complete li {
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.auto-complete li:hover {
  background-color: var(--color-blue);
  transform: scale(1.1);
  color: white;
}
</style>

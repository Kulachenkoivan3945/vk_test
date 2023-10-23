<template>
  <div class="home">
    <section class="search">
      <SearchBar @onSearched="setSearchResults"></SearchBar>
    </section>
    <section class="search-results">
      <UsersList :items="searchResults" v-if="isSearchListShowed" :startState="false" :mode="'search'"
        :title="'Количество результатов по вашему запросу : '" @onHide="isSearchListShowed = false">
      </UsersList>
    </section>

    <section class="source-list">
      <button v-if="!isConnected" class="btn-add" @click="logIn">
        Авторизоваться (без этого функционал недоступен)
      </button>
      <button class="btn-add" v-if="!isSourceListShowed" @click="isSourceListShowed = true">Показать исходный
        список</button>
      <UsersList v-else :items="sourceList" :startState="isSourceListShowed" :mode="'source'"
        :title="'Количество пользователей в исходном списке : '" @onHide="isSourceListShowed = false">
      </UsersList>
    </section>
    <section class="friends">
      <button class="btn-add" v-if="!isFriendsListShowed" @click="buildFriendsList">Построить</button>
      <UsersList v-else :items="friendsList" :startState="isFriendsListShowed" :mode="'friends'"
        :title="'Количество пользователей в списке друзей: '" @onHide="isFriendsListShowed = false">
      </UsersList>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import UsersList from '@/components/UsersList.vue'
import { mapState } from 'vuex'
import vk_api from '@/services/service.js';
/* import VK from 'vk-openapi'; */

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    UsersList
  },
  data() {
    return {
      isSearchListShowed: false,
      isSourceListShowed: true,
      isFriendsListShowed: false,
      friendsList: [],
      isConnected: false
    }
  },
  computed: {
    ...mapState({
      searchResults: state => state.searchResults,
      sourceList: state => state.sourceList
      // ...
    })
  },

  methods: {
    setSearchResults() {
      this.isSearchListShowed = true;
      console.log(1);
    },
    buildFriendsList() {
      this.friendsList = [];
      for (let i = 0; i < this.sourceList.length; i++) {
        this.getUserFriends(this.sourceList[i].id)
      }
      this.isFriendsListShowed = true;
    },
    sortUsers(array, type) {
      switch (type) {
        case 0:
          array.sort((a, b) => {
            return a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase())
          });
          break;
        case 1:
          array.sort((a, b) => {
            return a.first_name.toLowerCase().localeCompare(b.first_name.toLowerCase())
          });
          break;
        case 2:
          array.sort((a, b) => {
            return b.commomFriends.length - a.commomFriends.length
          });
          break;
        default:
          return array
      }
    },
    getUserFriends(id) {
      vk_api.getInfo(
        "friends.get",
        {
          user_id: id,
          fields: "sex,photo_100,bdate",
        },
        (res) => {
          res.response.items.forEach(el => {
            el.commomFriends = [id];
            let index = this.friendsList.findIndex(friend => friend.id === el.id)
            if (index === -1) {
              this.friendsList.push(el);
            }
            else {
              this.friendsList[index].commomFriends.push(id);
            }
          });
          this.sortUsers(this.friendsList, 0);
        }
      )
    },
    logIn() {
      vk_api.checkConnection((res) => {
        console.log(res);
        if (res.status === "connected") {
          this.isConnected = true;
          return
        }
        vk_api.login((res) => {
          console.log(res);
          if (res.status ==="connected") {
            this.isConnected = true;
          }
          else this.isConnected = false
          return;
        })
      });
    }

  },
  mounted() {
    this.logIn();
  }
}
</script>

<style scoped>
.home {
  padding-top: 50px;
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  transition: all 0.5s ease-in-out;
}

.search {
  width: 50vw;
  max-width: 600px;
  min-width: 200px;
  max-height: 400px;
}

.search-results {
  width: 80vw;
}

.source-list {
  width: 80vw;
  margin-top: 30px;
  padding-bottom: 30px;
}

.friends {
  width: 80vw;
}


@media (max-width:650px) {
  .search {
    width: 80vw;
    max-width: 80vw;
  }
}

@media (max-width:500px) {
  .search {
    width: 90vw;
    max-width: 90vw;
  }

  .search-results {
    width: 90vw;
  }

  .source-list {
    width: 90vw;
    margin-top: 30px;
    padding-bottom: 30px;
  }

  .friends {
    width: 90vw;
  }
}
</style>
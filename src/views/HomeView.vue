<template>
  <div class="home">
    <section class="search">
      <SearchBar></SearchBar>
    </section>
    <section class="search-results">
      <UsersList :items="searchResults" :startState="false" :mode="'search'" :title="'Количество результатов по вашему запросу : '"
      >
      </UsersList>
    </section>
    <section class="source-list">
      <button class="btn-add" v-if="!isSourceListShowed" @click="isSourceListShowed = true">Показать исходный
        список</button>
      <UsersList v-else :items="sourceList" :startState="isSourceListShowed" :mode="'source'"
        :title="'Количество пользователей в исходном списке : '" @onHide="isSourceListShowed = false" >
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
      isSourceListShowed: true,
      isFriendsListShowed: false,
      friendsList: []
    }
  },
  computed: {
    ...mapState({
      searchResults: state => state.searchResults,
      sourceList: state => state.sourceList
      // ...
    })
  },
  watch: {

  },
  methods: {
    buildFriendsList() {
      this.friendsList = [];
      for (let i = 0; i < this.sourceList.length; i++) {
        this.getUserFriends(this.sourceList[i].id)
      }
      this.isFriendsListShowed = true;
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
            else{
              this.friendsList[index].commomFriends.push(id);
            }
          })
        }
      )

    }

  },
  created() {
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

.friends{
  width: 80vw;
}
</style>
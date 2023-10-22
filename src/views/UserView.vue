<template>
  <div class="user">
    {{ sourceFriends }}
  </div>
</template>

<script>
// @ is an alias to /src
/* import SearchBar from '@/components/SearchBar.vue'
import UsersList from '@/components/UsersList.vue' */
import { mapState } from 'vuex'
import vk_api from '@/services/service.js';

export default {
  name: 'UserView',
  components: {
    /*     SearchBar,
        UsersList */
  },
  data() {
    return {
      sourceFriends: [],
      user_id: this.$route.params.id
    }
  },
  computed: {
    ...mapState({
      sourceList: state => state.sourceList
      // ...
    })
  },
  watch: {

  },
  methods: {
    getUserFriends() {
      vk_api.getInfo(
        "friends.get",
        {
          user_id: this.user_id,
          fields: "sex,photo_100,bdate"
        },
        (res) => {
          let friends = res.response.items;
          this.sourceList.forEach(el => {
            if (friends.findIndex(item => item.id === el.id) !== - 1) {
              this.sourceFriends.push(el);
            }
          });
        }
      );
    },
    getUserInfo(){
      vk_api.getInfo(
        "users.get",
        {
          user_ids: this.user_id,
          fields: "sex,photo_200,bdate"
        },
        (res) => {
          let friends = res.response.items;
          this.sourceList.forEach(el => {
            if (friends.findIndex(item => item.id === el.id) !== - 1) {
              this.sourceFriends.push(el);
            }
          });
        }
      );
    }

  },
  created() {
    this.getUserFriends();
    this.getUserInfo();
  }
}
</script>

<style scoped>
.user {
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

</style>
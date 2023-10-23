<template>
  <div class="user">
    <div class="user-info">
      <div class="go-back" @click="toMain">
        <img src="../assets/images/icons/go-back.png" alt="">
        <p>Вернуться назад</p>
      </div>
      <img class="user-photo" :src="userInfo.photo_200" alt="">
      <div class="user-data">
        <p class="name">{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
        <p class="bdate">Дата рождения: {{ bDate }}</p>
        <p class="sex">Пол: {{ sex }}</p>
      </div>
    </div>
    <div class="user-content">
      <div class="user-friends">
        <h2>Друзья из исходного списка:</h2>
        <ul>
          <li v-for="friend in sourceFriends" :key="friend">
            <UserInfoFull :user-info="friend" :is-no-actions="true"></UserInfoFull>
          </li>
        </ul>
      </div>
      <div class="user-wall">
        <h2>Записи со стены пользователя</h2>
        <p v-if="isPrivate">У пользователя закрытый аккаунт</p>
        <p v-else-if="userWall.length==0">У пользователя нет записей</p>
        <ul v-else>
          <li v-for="post in userWall" :key="post">
            <UserPost :item-info="post"></UserPost>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import UserInfoFull from '@/components/UserInfoFull.vue'
import UserPost from '@/components/UserPost.vue'

import { mapState } from 'vuex'
import vk_api from '@/services/service.js';

export default {
  name: 'UserView',
  components: {
    UserInfoFull,
    UserPost

  },
  data() {
    return {
      sourceFriends: [],
      user_id: this.$route.params.id,
      userInfo: {},
      userWall: [],
      isPrivate: false
    }
  },
  computed: {
    sex() {
      switch (this.userInfo.sex) {
        case 1:
          return 'Ж';
        case 2:
          return 'М';
        default: return '*';
      }
    },
    bDate() {
      if (!this.userInfo.bdate) return 'не указана';
      else return this.userInfo.bdate;
    },
    ...mapState({
      sourceList: state => state.sourceList
      // ...
    })
  },
  watch: {

  },
  methods: {
    toMain(){
      this.$router.back();
    },
    getUserFriends() {
      let commomFriends = this.$store.getters.getFriendsInSource;
      commomFriends = commomFriends.join(',');
      vk_api.getInfo(
        "users.get",
        {
          user_ids: commomFriends,
          fields: "sex,photo_100,bdate"
        },
        (res) => {
          this.sourceFriends = res.response
        }
      );
      
    },
    getUserInfo() {
      vk_api.getInfo(
        "users.get",
        {
          user_ids: this.user_id,
          fields: "sex,photo_200,bdate"
        },
        (res) => {
          this.userInfo = res.response[0];
        }
      );
    },
    getUserWall(){
      vk_api.getInfo(
        "wall.get",
        {
          owner_id: this.user_id
        },
        (res) => {
          if(res.error){
            this.isPrivate = true;
          }
          else this.userWall = res.response.items;
        }
      );
    }

  },
  created() {
    this.getUserFriends();
    this.getUserInfo();
    this.getUserWall();
  }
}
</script>

<style scoped>
.user {
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  transition: all 0.5s ease-in-out;
  background-color: rgb(245, 245, 245);
}
.go-back{
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.go-back:hover{
  color: rgb(255, 255, 255);
  transform: translateX(-10px);
  padding-right: 10px;
}

.user-info img {
  border-radius: 50%;
}

.user-info {
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-blend-mode: screen;
  background:
    linear-gradient(limegreen, transparent),
    linear-gradient(90deg, skyblue, transparent),
    linear-gradient(-90deg, rgb(250, 158, 124), transparent);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.user-data {
  text-align: left;
  display: flex;
  flex-direction: column;

  gap: 5px;
  color: rgb(69, 69, 69);
}

.user-content{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
  gap: 20px;
}

.user-content h2{
  text-align: left;
  margin-bottom: 15px;
  margin-left: 10px;
}
.user-friends{
  flex-basis: 30%;
}
.user-friends ul{
  min-height: 50px;
  border: var(--border-light-gray);
  background-color: white;
  height: fit-content;
  border-radius: 20px;
  overflow: hidden;
}
.user-friends li{
  border-bottom: var(--border-light-gray);
  padding-left: 10px;
  padding-right: 10px;
}
.user-friends li:first-child{
  padding-top: 10px;
}

.user-friends li:last-child{
  border-bottom: 0px;
  padding-bottom: 10px;
}

.user-wall{
  flex-basis: 60%;
  max-width: 60%;
}

.user-wall p{
  border: var(--border-light-gray);
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-wall ul{
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.user-wall li{
  border: var(--border-light-gray);
  background-color: white;
  height: fit-content;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
}


@media (max-width:1000px) {
  .user-content{
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
  .user-wall{
    width: 100%;
    max-width: 100%;
  }
  .user-photo{
    width: 100px;
    height: 100px;
  }
}

@media (max-width:800px) {
  .user-info{
    justify-content: flex-end;
  }
}

@media (max-width:580px) {
  .go-back{
    position: relative;
    margin-bottom: 10px;
    align-self: flex-start;
    color: transparent;
  }
  .user-info{
    flex-direction: column;
    padding-top: 0;
  }
}

@media (max-width:500px) {
  .user-wall li{
    padding: 5px;
  }
  .user-friends li{
    padding-left: 5px;
    padding-right: 5px;
  }
}

</style>
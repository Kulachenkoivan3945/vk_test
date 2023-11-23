<template>
  <div class="user-info-full" :class="{ 'friend-card': mode === 'friends' }" :style="{ 'background-color': panelBgColor }"
    @click="toPage">
    <div class="user-info">
      <img :src="userInfo.photo_100" alt="">
      <div class="user-data">
        <p class="name">{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
        <p class="bdate">Дата рождения: {{ bDate }}</p>
        <p class="sex">Пол: {{ sex }}</p>
        <p class="friends" v-if="mode == 'friends'">В друзьях у: {{ userInfo.commomFriends.length }} пользователя</p>
        <p class="friends" v-if="mode == 'friends' && userInfo.friendsCount!== undefined">Кол-во друзей: {{ userInfo.friendsCount }}</p>
      </div>
    </div>
    <div class="actions" v-if="!isNoActions">
      <button v-if="!isInSorceList" class="btn-add" @click.stop="addToSourceList">Добавить</button>
      <button v-else class="btn-add btn-added" @click.stop="removeFromSourceList">Удалить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserInfoFull',
  props: ['userInfo', 'mode', 'isNoActions'],
  data() {
    return {

    }
  },
  computed: {
    isInSorceList(){
      return this.$store.getters.isInSourceList(this.userInfo.id)
    },
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
    panelBgColor() {
      if (this.mode !== 'friends') return 'white'
      else {
        let r = 255 - ((this.userInfo.commomFriends.length - 1) * 20);
        let g = 255 - ((this.userInfo.commomFriends.length - 1) * 20 * 0.5)
        if (r <= 0) r = 20;
        if (g <= 0) g = 20;
        let color = `rgba(${r},${g},255,0.8)`;
        return color;
      }
    }
  },
  methods: {
    toPage() {
      if (this.mode !== 'friends') return;
      this.$store.commit('setFriendsInSource', this.userInfo.commomFriends);
      this.$router.push(`/user/${this.userInfo.id}`);
    },
    addToSourceList() {
      this.$store.commit('addToSourceList', this.userInfo);
      this.isInSorceList = true;
    },
    removeFromSourceList() {
      this.$store.commit('removeFromSourceList', this.userInfo);
      this.isInSorceList = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.friend-card {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.friend-card:hover {
  box-shadow: 5px 5px 15px 3px var(--shadow-gray);
}

img {
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
}

.user-info-full {
  display: flex;
  flex-direction: row;
  padding: 15px;
  align-items: center;
}

.user-info {
  display: flex;
  flex-direction: row;
}

.user-data {
  align-self: flex-start;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
}

.actions {
  margin-left: auto;
  padding-left: 10px;
}

p {
  text-align: left;
  line-height: 1.5rem;
}

@media (max-width:550px) {
  .user-info-full {
    flex-direction: column;
  }

  .user-info {
    align-self: start;
  }

  .actions {
    width: 100%;
    margin: 0;
    margin-top: 10px;
  }
}


@media (max-width:400px) {
  .user-info-full {
    padding: 10px;
  }

  img {
    width: 70px;
    height: 70px;
    max-width: 70px;
    max-height: 70px;
  }
}

@media (max-width:320px) {

  .user-info {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .user-data {
    margin: 0;
    width: 100%;
    align-items: center;
    text-align: center;
  }

}</style>

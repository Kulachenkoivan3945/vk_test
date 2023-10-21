<template>
  <div class="user-info-full" :style="{'background-color' :panelBgColor}">
    <img :src="userInfo.photo_100" alt="">
    <div class="user-data">
      <p class="name">{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
      <p class="bdate">Дата рождения: {{ bDate }}</p>
      <p class="sex">Пол: {{ sex }}</p>
      <p class="friends" v-if="mode == 'friends'">В друзьях у: {{ userInfo.commomFriends.length }} пользователя</p>
    </div>
    <div class="actions">
      <button v-if="!isInSorceList" class="btn-add" @click="addToSourceList">Добавить</button>
      <button v-else class="btn-add btn-added" @click="removeFromSourceList">Удалить</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserInfoFull',
  props: ['userInfo', 'mode'],
  data() {
    return {
      isInSorceList: this.$store.getters.isInSourceList(this.userInfo.id),

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
    panelBgColor() {
      if (this.mode !== 'friends') return 'white'
      else{
        let brightness = 255 - ((this.userInfo.commomFriends.length - 1)*20);
        if(brightness<0) brightness = 0;
        let color = `rgba(${brightness},255,${brightness},0.8)`;
        return color;
      }
    }
  },
  methods: {
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
.user-info-full {
  display: flex;
  flex-direction: row;
  padding: 15px;
  align-items: center;
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
}

p {
  text-align: left;
  line-height: 1.5rem;
}

img {
  /*min-height: 100%;
  min-width: 130px;
  align-self: stretch;*/
}
</style>

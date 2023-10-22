<template>
  
  <div class="user-info-full" :class="{'friendCard' :mode === 'friends'}" :style="{'background-color' :panelBgColor}"
  @click="toPage">
    <img :src="userInfo.photo_100" alt="">
    <div class="user-data">
      <p class="name">{{ userInfo.first_name }} {{ userInfo.last_name }}</p>
      <p class="bdate">Дата рождения: {{ bDate }}</p>
      <p class="sex">Пол: {{ sex }}</p>
      <p class="friends" v-if="mode == 'friends'">В друзьях у: {{ userInfo.commomFriends.length }} пользователя</p>
    </div>
    <div class="actions">
      <button v-if="!isInSorceList" class="btn-add" @click.stop="addToSourceList">Добавить</button>
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
        let r = 255 - ((this.userInfo.commomFriends.length - 1)*20);
        let g = 255 - ((this.userInfo.commomFriends.length - 1)*20*0.5)
        if(r<=0) r = 20;
        if(g<=0) g = 20;
        let color = `rgba(${r},${g},255,0.8)`;
        return color;
      }
    }
  },
  methods: {
    toPage(){
      if(this.mode !=='friends'){

      }
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
.friend-card{
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.friend-card:hover{
  box-shadow: 5px 5px 15px 3px var(--shadow-gray);
}

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

<template>
  <div class="user-info-min">
    <img :src="userInfo.photo_50" alt="">
    <p>{{userInfo.first_name}}  {{userInfo.last_name}}</p>
  </div>
</template>

<script>

export default {
  name: 'UserInfoMin',
  props: ['userInfo']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info-min{
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  max-width: 100%;
}
img{
  width: 50px;
  height: 50px;
}
p{
  margin-left: 15px;
}
</style>

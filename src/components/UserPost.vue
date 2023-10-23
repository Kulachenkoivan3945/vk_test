<template>
  <div class="user-post">
    <p class="post-date">{{ postDate }}</p>
    <p class="post-text">{{ itemInfo.text }}</p>

    <!-- отображение постов пользователя -->
    <div class="post-content">

      <div class="photos post-content-item" v-if="postInfo.photos.length > 0">
        <ul :class="gridClass(postInfo.photos)">
          <li v-for="photo in postInfo.photos" :key="photo">
            <img :src="photo" alt="">
          </li>
        </ul>
      </div>

      <div class="videos photos" v-if="postInfo.videos.length > 0">
        <ul :class="gridClass(postInfo.videos)">
          <li v-for="video in postInfo.videos" :key="video">
            <img :src="video" alt="">
          </li>
        </ul>
      </div>


      <div class="audios" v-if="postInfo.audios.length > 0">
        <ul>
          <li v-for="audio in postInfo.audios" :key="audio">
            <div>
              <p>{{ audio.artist }}</p>
              <p>{{ audio.title }}</p>
            </div>
            <audio :src="audio.url" controls></audio>
          </li>
        </ul>
      </div>
      
      <div class="links" v-if="postInfo.links.length > 0">
        <ul>
          <li v-for="link in postInfo.links" :key="link">
            <a :href="link.url">
              <div v-if="link.photo != ''" class="link-image-wrapper">
                <div>
                  <p>{{ link.title }}</p>
                </div>
                <img :src="link.photo" />
              </div>
              <div v-else class="link-no-image">
                <p>Ссылка</p>
                <p v-if="link.title">{{ link.title }}</p>
                <p v-else>{{ link.url }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
   <!--  отображение записи, если это репост -->
    <div class="post-content repost">
      <p class="post-text">{{ repostInfo.text }}</p>
      <div class="photos" v-if="repostInfo.photos.length > 0">
        <ul :class="gridClass(repostInfo.photos)">
          <li v-for="photo in repostInfo.photos" :key="photo">
            <img :src="photo" alt="">
          </li>
        </ul>
      </div>

      <div class="videos photos" v-if="repostInfo.videos.length > 0">
        <ul :class="gridClass(repostInfo.videos)">
          <li v-for="video in repostInfo.videos" :key="video">
            <img :src="video" alt="">
          </li>
        </ul>
      </div>

      <div class="audios" v-if="repostInfo.audios.length > 0">
        <ul>
          <li v-for="audio in repostInfo.audios" :key="audio">
            <div>
              <p>{{ audio.artist }}</p>
              <p>{{ audio.title }}</p>
            </div>
            <audio :src="audio.url" controls></audio>
          </li>
        </ul>
      </div>

      <div class="links" v-if="repostInfo.links.length > 0">
        <ul>
          <li v-for="link in repostInfo.links" :key="link">
            <a :href="link.url">
              <div v-if="link.photo != ''" class="link-image-wrapper">
                <div>
                  <p>{{ link.title }}</p>
                </div>
                <img :src="link.photo" />
              </div>
              <div v-else class="link-no-image">
                <p>Ссылка</p>
                <p v-if="link.title">{{ link.title }}</p>
                <p v-else>{{ link.url }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'UserPost',
  props: ['itemInfo'],
  data() {
    return {
    }
  },
  computed: {
    postDate() {
      let date = new Date(this.itemInfo.date * 1000);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      return `${day}-${month}-${year}`;
    },
    isRepost() {
      return this.itemInfo.copy_history
    },
    postInfo() {
      let audios = [];
      let photos = [];
      let links = [];
      let videos = [];
      let text = this.itemInfo.text;
      if (this.itemInfo.attachments.length > 0) {
        this.itemInfo.attachments.forEach(el => {
          if (el.type === 'audio') audios.push(el.audio);
          if (el.type === 'photo') photos.push(el.photo.sizes[el.photo.sizes.length - 1].url);
          if (el.type === 'video') videos.push(el.video.image[el.video.image.length - 1].url);
          if (el.type === 'link') {
            let title = '';
            let photo = '';
            if (el.link.photo) {
              photo = el.link.photo.sizes[el.link.photo.sizes.length - 1].url
            }
            if (el.link.title) title = el.link.title;
            links.push({
              photo: photo,
              title: title,
              url: el.link.url
            });
          }
        })
      }
      return {
        audios: audios,
        photos: photos,
        text: text,
        links: links,
        videos: videos
      };
    },

    repostInfo() {
      let audios = [];
      let photos = [];
      let videos = [];
      let links = [];
      let text = "";
      if (this.itemInfo.copy_history) {
        text = this.itemInfo.copy_history[0].text;
        if (this.itemInfo.copy_history[0].attachments) {
          if (this.itemInfo.copy_history[0].attachments.length > 0) {
            this.itemInfo.copy_history[0].attachments.forEach(el => {
              if (el.type === 'audio') audios.push(el.audio);
              if (el.type === 'photo') photos.push(el.photo.sizes[el.photo.sizes.length - 1].url);
              if (el.type === 'video') videos.push(el.video.image[el.video.image.length - 1].url);
              if (el.type === 'link') {
                let title = '';
                let photo = '';
                if (el.link.photo) {
                  photo = el.link.photo.sizes[el.link.photo.sizes.length - 1].url
                }
                if (el.link.title) title = el.link.title;
                links.push({
                  photo: photo,
                  title: title,
                  url: el.link.url
                });
              }
            })
          }
        }
      }
      return {
        audios: audios,
        photos: photos,
        text: text,
        links: links,
        videos: videos
      };
    },
  },
  methods: {
    gridClass(items) {
      let count = items.length;
      if (count == 1) return 'grid-1-el';
      if (count == 2) return 'grid-2-el';
      if (count == 3) return 'grid-3-el';
      else return 'grid-more-el'
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-post {
  padding: 20px;
}

.repost {
  padding-left: 30px;
  margin-top: 10px;
  border-left: var(--border-light-gray);
}

p {
  text-align: left;
  line-height: 1.5rem;
}

.post-text {
  max-width: 95%;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.post-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.photos {
  width: 100%;

}

.photos ul {
  display: grid;
  gap: 5px;
  margin-top: 10px;
  background-color: rgb(243, 243, 243);
  border-radius: 10px;
}

.grid-1-el {
  grid-template-columns: 1fr;
}

.grid-2-el {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3-el {
  grid-template-columns: repeat(3, 1fr);
}

.grid-more-el {
  grid-template-columns: repeat(3, 1fr);
}

.photos img,
.links img {
  object-fit: cover;
  max-width: 100%;

  max-height: 80vh;
  min-height: 100%;
  border-radius: 10px;
}

.links {
  width: 100%;
  min-height: 100px;
}

.links li {
  padding-top: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.links a {
  width: 100%;
}

.links img{
  width: 100%;
}
.link-image-wrapper {}

.link-image-wrapper div {
  position: absolute;
  min-height: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
  text-shadow: 5px 5px 10px black;
}

.empty-link-photo {
  width: 100%;
  background-color: aliceblue;
  height: 100%;
}

.link-no-image {
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(239, 239, 239, 0.351);
  width: 100%;
  border-radius: 10px;
  color: rgb(151, 4, 171);
  cursor: pointer;

}

.links li button {
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  border: var(--border-light-gray);
  background-color: white;
  margin: 10px;
  border-radius: 10px;

}

.audios {
  padding-top: 20px;
  width: 100%;
}

.audios li {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: 15px;

}

audio {
  width: 100%;
}

.post-date {
  color: gray;
}

.audios li div {
  display: flex;
  gap: 15px;
  color: rgb(66, 2, 161);
  padding-bottom: 5px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

@media (max-width:500px) {
  .user-post {
    padding: 10px;
  }

  .repost {
    padding-left: 10px;
  }
}
</style>

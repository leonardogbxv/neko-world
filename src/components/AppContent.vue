<template>
  <div class="container">
    <section>
      <button @click="getRandomNekos()">RANDOM</button>
      <button @click="getNekos('dance')">DANCE</button>
      <button @click="getNekos('slap')">SLAP</button>
      <button @click="getNekos('nekos')">NEKO</button>
    </section>

    <div
      class="error"
      v-if="error"
      v-html="error">
    </div>

    <main v-else>
      <neko-loading v-show="isLoading"/>
      <img
        v-show="!isLoading"
        @load="loadImage"
        :src="neko" 
        alt="neko"
      >
    </main>
  </div>
</template>

<script>
import NekoLoading from './NekoLoading.vue'
import gifs from '../static/nekos.best.js'

export default {
  name: 'app-content',
  components: {
    NekoLoading
  },
  data() {
    return {
      neko: '',
      isLoading: false,
      error: ''
    }
  },

  mounted() {
    this.getNekos('sleep')
  },

  methods: {
    async getNekos(button) {
      this.isLoading = true
      this.error = ''

      // let query = {
      //   params: {
      //     amount: 5
      //   }
      // }

      try {
        const response = await this.$axios.get(`https://nekos.best/api/v1/${button}`)
        this.neko = response.data.url
      } catch (error) {
        this.error = `
          <h1 style="background-color: transparent;">${error.response.data.code} ${error.response.data.error}</h1><br>
          <span style="background-color: transparent;">${error.response.data.message}</span>
        `
      }
    },

    loadImage() {
      return this.isLoading = false
    },

    getRandomNekos() {
      const randomGif = gifs[Math.floor(Math.random() * gifs.length)]

      this.getNekos(randomGif.replace(/[^a-zA-Z]+/g, ''))
    }
  }
}

</script>

<style scoped>
  .container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 4vh 18vw 4vh 18vw;
  }

  .error {
    background-color: #DC143C;
    margin: 4vh 4vh;
    padding: 20px;
    border-radius: 5px;
  }

  main img {
    max-width: 100%;
    max-height: 70vh;
    margin: 4vh;
  }

  button {
    background-color: #c7ccd8;
    color: #1d1f2b;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 20px;
    padding: 10px 40px;
    font-size: 16px;
  }


  button:hover {
    color: #c7ccd8;
    background-color: #DC143C;
    transition: background-color 0.2s ease-out;
    cursor: pointer;
  }

  button:first-child {
    background-color: #DC143C;
    color: #c7ccd8;
  }

  button:first-child:hover {
    background-color: #c7ccd8;
    color: #1d1f2b;
    transition: background-color 0.2s ease-out;
    cursor: pointer;
  }
</style>

<template>
  <div class="container">
    <header>
      <h1
        class="logo-neko"
        @click="twistLogo('neko')"
      >Neko&nbsp;</h1>
      <h1
        class="logo-world"
        @click="twistLogo('world')"
      >World</h1>
    </header>

    <nav>
      <a href="/">猫</a>
      <a href="https://docs.nekos.best/" target="_blank">API</a>
      <a href="/">About</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  mounted() {
    this.$anime({
      targets: '.container',
      translateY: [-200,0],
      easing: "spring(1, 50, 10, 0)",
      duration: 2000
    })
  },

  methods: {
    twistLogo(logo) {
      this.$anime({
        targets: `.logo-${logo}`,
        scale: [
          {value: .5, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        rotate: [
          {value: 360, easing: 'easeOutSine', duration: 0},
          {value: 0, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: this.$anime.stagger(0, {grid: [14, 5], from: 'center'})
      })
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    margin: 4vh 18vw 4vh 18vw;
  }

  .logo-neko {
    cursor: pointer;
  }

  .logo-world {
    color: #DC143C;
    cursor: pointer;
  }

  header {
    display: flex;
    margin-right: 20px;
    letter-spacing: 3px;
  }

  a {
    text-align: center;
    padding: 10px;
    border-radius: 6px;
  }

  a:hover {
    color: #DC143C;
    transition: color 0.2s ease-out;
  }
</style>

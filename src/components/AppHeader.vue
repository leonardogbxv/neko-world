<template>
  <div class="container">
    <header>
      <h1 class="logo">
        Neko <span>World</span>
      </h1>
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
  name: 'app-header'
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    margin: 4vh 18vw 4vh 18vw;
  }

  .logo span {
    color: #DC143C;
  }

  header h1 {
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

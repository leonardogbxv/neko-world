<template>
  <div class="neko rotate">
    <div class="neko-head"></div>
    <div class="neko-face"></div>
    
    <div class="neko-ears">
      <div class="neko-left-ear"></div>
      <div class="neko-right-ear"></div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'neko-loading',
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {},
  watch: {}
}

</script>

<style scoped>
  .neko {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }

  .neko-head {
    position: absolute;
    background: #DC143C;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-top: 50px;
  }

  .neko-face {
    position: absolute;
    background: #dd647d;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin-top: 50px;
  }

  .neko-ears {
    display: flex;
    justify-content: space-between;
    margin: 0 0 -5px 0;
    background-color: transparent;
  }

  .neko-left-ear,
  .neko-right-ear {
    width: 0;
    height: 0;
    border-radius: 50%;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 50px solid #DC143C;
    background-color: transparent;
  }

  .neko-left-ear {
    margin-right: -3px;
    transform: rotate(-20deg);
  }

  .neko-right-ear {
    margin-left: -3px;
    transform: rotate(17deg);
  }

  /* Rotate animation */
  .rotate {
    background-color: transparent;
    animation: pendulum 0.2s alternate infinite linear;
  }

  @keyframes pendulum {
    from {
    transform: rotate(-10deg);
    }
    to {
    transform: rotate(10deg);
    }
  }
</style>

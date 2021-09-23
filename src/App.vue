<template>
  <div id="app">
    <app-header /> 
    <app-content />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppContent from './components/AppContent.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<style>
  * {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background: #1d1f2b;
    color: #c7ccd8;
    padding: 0;
    margin: 0;
    border: 0;
    text-decoration: none;
  }
</style>

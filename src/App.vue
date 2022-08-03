<template>
  <div id="app-dashboard">
    <mainDashboard :item="item" @show-project-dash="showProjectDashboard" v-if="showMain"/>
    <projectDashboard :personObj="item" v-if="showProject"/>
  </div>
</template>

<script>
import mainDashboard from './components/mainDashboard.vue'
import projectDashboard from './components/projectDashboard.vue'

export default {
  name: 'App',
  components: {
    mainDashboard,
    projectDashboard
  },
  data() {
    return {
      showMain: true,
      showProject: false,

      personObj: null,
    }
  },
  methods: {
    showProjectDashboard() {
      // console.log(item)
      console.log("showing project dashboard")
      this.showMain = false
      this.showProject = true
    }
  }
}
</script>

<style>

  * {
    margin: 0;
  }

  #app-dashboard {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

</style>
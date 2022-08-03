<template>
  <div id="main-dashboard">
    <div id="header">
      <h1>Passion Projects</h1>
      <div id="search-bar-container">
        <input id="search-bar" type="textbox" placeholder="Search here...">
      </div>
    </div>
    <div id="body">
      <div id="card-container">
        <div :class="'cards card-' + item.project_ID" :key="index" v-for="(item, index) in studentArr" @mouseenter="selectIndex(index)" @mouseleave="deselectIndex()" @click="goToProject(item)">
          <div :class="'cards-top card-' + item.project_ID" v-if="cardIndex != index">
            <h2 class="cards-title">{{ item.project_name }}</h2>
            <p class="cards-owner">Created by {{ item.first_name }}</p>
          </div>
          <div :class="'cards-bottom'" v-show="cardIndex == index">
            <p class="cards-brief"> {{ item.project_brief }} </p>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">

    </div>
  </div>
</template>

<script>
import { getStudents, getProjects } from '@/firebase.js'
// import { toRaw } from 'vue'

export default {
  name: 'mainDashboard',
  props: [],
  data() {
    return {
      item: '',
      index: '',

      mainList: [],

      cardHover: false,
      cardIndex: null,

      cards: [{first_name: 'Olioni', last_name: 'Taumoepeau', project_ID: 1, student_ID: 1, project_name: 'Earthquake Prevention App', project_brief: 'App dedicated to warning people of impending earthquakes.'}]
    }
  },
  methods: {
    selectIndex(index) {
      this.cardIndex = index
    },
    deselectIndex() {
      this.cardIndex = null
    },
    goToProject(item) {
      this.$emit('show-project-dash', item)
    }
  },
  mounted() {
    let studentArr = getStudents()
    let projectArr = getProjects()

    console.log('STUDENTS', studentArr)
    console.log('PROJECTS:', projectArr)

    let student, project;
    let mergeObj = null

    for (let a in studentArr) {
      console.log('hello')
      student = studentArr[a]
      for (let b in projectArr) {
        project = projectArr[b]

        if (student.project_ID == project.project_ID) {
          console.log(student.f_name, student.project_ID)
          mergeObj = {
            'first_name': student.f_name,
            'last_name': student.l_name,
            'student_ID': student.student_ID,
            'project_name': project.project_name,
            'project_ID': project.project_ID,
            'project_brief': project.project_brief
          }

          console.log('hello?')

          console.log(this.mainList)
          this.mainList.push(mergeObj)
        }

      }
    }


    
    // let projectList = projectArr
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  * {
    margin: 0;
  }

  #main-dashboard {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  #header {
    width: 100vw;
    height: 15vh;

    /* background-color: orange; */

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    font-family:Arial, Helvetica, sans-serif;
  }

  #search-bar-container {
    width: 90vw;
    height: 5vh;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
  }

  #search-bar {
    width: 89vw;
    height: 4.5vh;

    font-size: 16px;

    border: none;
    outline: none;
  }

  #search-bar, #search-bar-container {
    background-color: rgb(240, 240, 240);
  }

  #body {
    width: 100vw;
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    /* background-color: purple; */
  }

  #footer {
    width: 100vw;
    height: 5vh;

    /* background-color: red; */
  }

  #card-container {
    width: 98.5vw;
    height: 77vh;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    /* background-color: green; */
    flex-wrap: wrap;
  }

  .cards {
    width: 14vw;
    height: 28vh;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: rgb(226, 226, 226);

    cursor: pointer;

    transition: 0.3s;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;

    margin: 2px;
    padding: 3px;

    border-radius: 5px;

    padding: 10px;
  }

  .cards:hover {
    width: 15vw;
    height: 30vh;

    font-size: 22px;
  }

  .cards-title {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cards-brief {
    font-size: 17px;
    text-align: left;
  }

</style>

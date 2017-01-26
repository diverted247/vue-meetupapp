<template>
  <div class="pure-u-1-1">
      <h1>Bleeding Edge Web Meetup - Admin</h1>
      <p>
          <button @click="sortBy=0;direction=!direction">By First Name</button>
          <button @click="sortBy=1;direction=!direction">By Last Name</button>
      </p>
  </div>
</template>

<script>
import model from '../modules/model'
export default {
    data(){
        return model;
    },
    methods:{
        sortFirst(){
            this.sortBy = 0;
            this.direction = !this.direction;
        },
        sortLast(){
            this.sortBy = 1;
            this.direction = !this.direction;
        }
    }
}
</script>

<style scoped>
div{
    padding:0.1em 2em;
    background-color: #FFF;
}
</style> 
<template>
  <div class="movie border border-dark rounded mb-4" @click="setActiveMovie">
    <h5>{{movieProp.title}}</h5>
  </div>
</template>


<script>
  export default {
    name: 'movie',
    //NOTE comes from the home component
    props: ["movieProp"],
    data() {
      return {}
    },
    computed: {},
    methods: {
      setActiveMovie() {
        this.$store.dispatch("setActiveMovie", this.movieProp)
      }
    },
    components: {}
  }
</script>


<style scoped>

</style>
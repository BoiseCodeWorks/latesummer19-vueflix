<template>
  <div class="movie-details">
    <h3>{{movie.title}}</h3>
    <img :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="">
    <p>Lang: {{movie.original_language}}</p>
  </div>
</template>


<script>
  export default {
    name: 'movie-details',
    data() {
      return {}
    },
    computed: {
      movie() {
        return this.$store.state.activeMovie
      }
    },
    methods: {},
    components: {}
  }
</script>


<style scoped>
  img {
    height: 200px;
  }
</style>
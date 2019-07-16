<template>
  <div class="home container">
    <div class="row">
      <h1 class="col">
        MO
        <img alt="Vue logo" src="../assets/logo.png">IES
      </h1>
    </div>
    <div class="row">
      <Search></Search>
      <div class="col-6 border border-dark rounded">
        <h3>Results</h3>
        <movie v-for="movie in movies" :movieProp="movie"></movie>
      </div>
      <div class="col-6 border border-dark rounded">
        <h3>Details</h3>
        <MovieDetails></MovieDetails>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from '../components/Search'
  import Movie from '../components/Movie'
  import MovieDetails from '@/components/MovieDetails'
  export default {
    name: 'home',
    computed: {
      movies() {
        return this.$store.state.movies
      }
    },
    components: {
      Search,
      Movie,
      MovieDetails
    }
  }
</script>
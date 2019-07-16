<template>
  <div class="search col-12">
    <form @submit.prevent="search">
      <label for="search">Search: </label>
      <input name="search" type="text" placeholder="Search..." v-model="query">
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "search",
    data() {
      return {
        query: ""
      }
    },
    methods: {
      search() {
        this.$store.dispatch("search", this.query)
      }
    },
    computed: {

    }
  }
</script>

<style>

</style>
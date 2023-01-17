<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr>
    <router-link to="/">Go to top</router-link>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      title: "other",
      message: "hoge",
    }
  },
}
</script>

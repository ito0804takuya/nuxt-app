<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p v-html="message">no message</p>
    <hr>
    <router-link to="/">Go to top</router-link>
  </section>
</template>

<script>
export default {
  validate ({ params }) {
    if (params.id == undefined || params.pass == undefined) {
      return false;
    } else {
      return true;
    }
  },
  data: function() {
    return {
      title: "Login!",
    }
  },
  computed: {
    message: function() {
      const id = this.$route.params.id != undefined ? this.$route.params.id : "no id";
      const pass = this.$route.params.pass != undefined ? this.$route.params.pass : "no password";
      return "ID: " + id + "<br>PASS:" + pass;
    }
  },
}
</script>

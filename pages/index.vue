<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <!-- <p>{{ message }}</p> -->
    <p>{{ $store.state.message }}</p>
    <hr>
    <div class="link" 
      @click="$store.commit('doit')" 
    >
    hoge
    </div>
    <div>
      <a @click.stop="$store.commit('reset')">
        clicked: {{ $store.state.counter }}
      </a>
    </div>
    <router-link to="/other">Go to other</router-link>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      title: "hello!",
      // message: "this is message",
      // now: "wait...",
    }
  },
}
</script>

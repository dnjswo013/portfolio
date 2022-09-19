<script setup lang="ts">
import { ref } from "vue";

const skills = ref<string[]>([]);
skills.value = ["Vue.js", "Python", "TypeScript"];
</script>

<template>
  <div class="header">Skill Page</div>
  <div class="wrapper">
    <div v-for="skill in skills" :key="skill" class="card">
      <div class="container">
        <h4>
          <b>{{ skill }}</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
  padding: 25px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  margin: auto;
}

.card:hover {
  box-shadow: 4px 8px 16px 4px rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>

<template>
  <div class="home">
    <Profile message="Welcome to my portfolio." />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Profile from "@/components/Profile.vue"; // @ is an alias to /src

const component = defineComponent({
  name: "HomeView",
});
</script>

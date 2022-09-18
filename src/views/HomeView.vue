<template>
  <div class="home">
    <ProfileComponent />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import ProfileComponent from "@/components/ProfileComponent.vue"; // @ is an alias to /src

const component = defineComponent({
  name: "HomeView",
});
</script>

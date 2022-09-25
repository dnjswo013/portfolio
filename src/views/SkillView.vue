<script setup lang="ts">
import { reactive } from "vue";
import { Skill } from "@/interface/skill";

const skill_list = reactive<Skill[]>([
  {
    name: "Vue.js + TypeScript",
    image: require("../assets/ahoudori.jpeg"),
    content: "Frontend",
  },
  {
    name: "Python + Flask",
    image: require("../assets/ahoudori.jpeg"),
    content: "Backend",
  },
  {
    name: "AWS Services",
    image: require("../assets/ahoudori.jpeg"),
    content: "Infrastructure",
  },
  {
    name: "Docker Desktop",
    image: require("../assets/ahoudori.jpeg"),
    content: "Container Service",
  },
  {
    name: "LPIC-3 Virtualization & High Availability",
    image: require("../assets/ahoudori.jpeg"),
    content: "Infrastructure",
  },
]);
</script>

<template>
  <div class="header">Skills</div>
  <div class="card_group">
    <div class="card" v-for="skill in skill_list" :key="skill.name">
      <!-- <img class="card__imgframe" :src="skill.image" /> -->
      <div class="description">
        <h4>{{ skill.name }}</h4>
        <p>{{ skill.content }}</p>
      </div>
    </div>
  </div>
</template>

<style src="../style/card.css" scoped></style>

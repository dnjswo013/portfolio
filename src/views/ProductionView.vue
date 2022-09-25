<script setup lang="ts">
import { reactive } from "vue";
import { Production } from "@/interface/production";

const skill_list = reactive<Production[]>([
  {
    name: "Production",
    image: require("../assets/ahoudori.jpeg"),
    content: "Full Stack Engineering",
  },
]);
</script>

<template>
  <div class="header">Productions</div>
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

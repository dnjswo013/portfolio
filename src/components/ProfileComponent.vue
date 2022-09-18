<script setup lang="ts">
import { reactive, defineComponent } from "vue";

const component = defineComponent({
  name: "ProfileComponent",
});

const profile = reactive({
  nameJapanese: "あほうどり",
  nameEnglish: "Ahoudori",
  introduction: `世界一のフルスタックエンジニアを目指しているあほうどりです。
  これからもじっくり勉強していい人材になるように心がけます。
  ぜひ、見守ってください！`,
});
</script>

<template>
  <div class="wrapper">
    <div class="profile-image">
      <img class="profile" src="../assets/ahoudori.jpeg" alt="Avatar" />
    </div>
    <div class="name-intro">
      <div class="name">
        <p>{{ profile.nameJapanese }}</p>
        <p>{{ profile.nameEnglish }}</p>
      </div>
      <div class="intro">
        <p>{{ profile.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  padding-right: 50px;
}

.profile-image .profile {
  max-width: 200px;
  border-radius: 10rem;
}

.name-intro {
  font-size: larger;
}

.intro {
  white-space: pre-line;
}
</style>

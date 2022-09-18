<template>
  <nav>
    <router-link to="/">Profile</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #322c50;
}

nav {
  text-align: center;
  font-size: x-large;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #4262b9;
}
</style>

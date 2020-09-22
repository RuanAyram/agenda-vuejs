<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap');
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  body {
    background-color: #EEEEEE;
    font-family: 'Lakki Reddy', cursive;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }

  body, html {
    margin: 0;
    height: 100%;
  }

  #app {
    width: 50%;
  }

  #nav {
    padding: 30px;
    text-align: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

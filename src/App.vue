<template>
  <div id="app">
    <div id="nav">
      <button class="logout" @click="logOut">Log out</button>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Observer } from 'mobx-vue';
import Auth from '@/store/auth';

@Observer
@Component
export default class App extends Vue {

authService: any = Auth;
  constructor() {
    super();
    this.authService = new Auth();
  }

  public logOut() {
     this.authService.logOut();
    }

}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px 150px 0 150px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

.logout{
  float: right;
}

}
</style>

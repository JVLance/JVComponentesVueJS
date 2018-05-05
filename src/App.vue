<template>
    <router-view/>
</template>

<script>
import * as CONFIG from '@/config.js';

export default {
  name: 'App',
   mounted: function () {
        
        //Reviso el localstorage para saber si hay un usuario loggeado
        let webtoken = localStorage.getItem(CONFIG.webtoken);
        if (webtoken == null){
          //Si no lo hay, manda al login
          this.$router.push('/login');
          return;
        }
        //De lo contrario, prosigue

        //Si mandan una ruta vacía, desvía a dashboard
        if (this.$route.path == '/' || this.$route.path == '/app'){
          this.$router.push('/app/dashboard');
          return;
        }
        
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

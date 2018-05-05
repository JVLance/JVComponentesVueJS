<template>
    <div style = 'height:auto;'>
        <Breadcrumbs v-bind:titulo = "titulo" v-bind:crumbs = "crumbs" v-bind:icono = "icono"></Breadcrumbs>

        <div class = 'caja'>
            <div class = 'caja-header'>{{subtitulo}}</div>

            <div class = 'container'>
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>

import Breadcrumbs from '@/components/common/Breadcrumbs'
/* Componente base para las pantallas */
export default {
  name: 'Model',
  components : {
      'Breadcrumbs' : Breadcrumbs,
  },
  data : function (){
      return {
        module : 'users',
        titulo : '',
        subtitulo: '',
        icono : '',
        crumbs : {
        },
        view : ''
      }
  }
  
}
</script>
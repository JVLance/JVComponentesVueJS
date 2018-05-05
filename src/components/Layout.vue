<template>
    <div>
        <Navbar user = 'PRUEBA1'></Navbar>
        <Sidebar></Sidebar>
        <div class = "side-page"></div>
        <div class = "cuerpo">
            <router-view></router-view>
		</div>
    </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import * as CONFIG from '@/config.js';

export default {
  name: 'Layout',
  components : {
      'Navbar' : Navbar,
      'Sidebar' : Sidebar,
  }
}
</script>
<script>

import Index from '@/components/common/template/Model'

export default {
  name: 'Dashboard',
  mixins: [Index],
  data : function (){
      return {
        titulo : 'Dashboard',
        icono : 'user-circle-o',
        crumbs : {
            Home : 'dashboard'
        }
      }
  }
}
</script>
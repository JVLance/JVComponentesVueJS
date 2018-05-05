<script>
/* 
COMPONENTE CONECTOR DEL MANTENEDOR 

Enlaza los componentes Read y Form.
Tambien especifica el titulo, subtitulo, las breadcrumbs y el icono principal.

Para cambiar entre Read y Form modificar el valor de view en data() por el componente respectivo
*/

import Index from '@/components/common/template/Model'
import Read from '@/components/users/Read'

export default {
  name: 'Users',
  mixins: [Index],
  components : {
    'Read' : Read
  },
  data (){
      return {
        view: 'Read',
        titulo : 'Usuarios',
        subtitulo: 'Listado de Usuarios',
        icono : 'user-circle-o',
        crumbs : {
            Home : 'dashboard',
            Usuarios : ''
        }
      }
  }
}
</script>
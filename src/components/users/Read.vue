<template>
    <div>
        <div class = "row">
            <div class = "col-md-12">
                <btn-nuevo label = 'Crear Usuario'></btn-nuevo>
            </div>
        </div>
        <div class = "row">
            <div class = "col-md-12">
                <Table></Table>
            </div>
        </div>
    </div>
</template>

<script>

import Table from '@/components/common/crud/Table'
import btnNuevo from '@/components/common/crud/btnNuevo'
import * as CONFIG from '@/config.js';

let usersTable = {
    mixins:[Table],
    data () {
        return {
            dataurl : CONFIG.api.users.read,
            fields : ['name', 'email']
        }
    }
}

export default {
    name: 'Read',
    components : {
        'Table' : usersTable,
        'btnNuevo' : btnNuevo
    },
    methods: {
        nuevo () {

        }
    }
}

</script>
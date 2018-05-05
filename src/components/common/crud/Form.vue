<template>
    <div class = "row">
        <div class = "col-md-12">
            <button type ="button" class ="btn btn-success boton pull-left">
                <icon name = "save"></icon> Guardar
            </button>

            <button type ="button" class ="btn btn-danger boton pull-left barra raichu" v-on:click="cancel()">
                <icon name = "reply"></icon> Cancelar
            </button>
        </div>
        <form class = "col-md-12">
            <slot></slot>
        </form>
    </div>
</template>

<script>
    export default {
        name : 'Form',
        methods: {
            cancel () {
                let path = this.$route.path.split('/');
                if (typeof path[2] == 'undefined'){
                    return;
                }

                let submenu = path[2];

                this.$router.push('/app/' + submenu);
            }
        }
    }
</script>
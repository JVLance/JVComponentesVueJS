<template>
    <button type ="button" v-on:click="nuevo()" class ="btn btn-primary pull-left boton">
        <icon name = "save"></icon> {{ label }}
    </button>
</template>

<script>
    export default {
        props : {
            label : {
                default: 'Nuevo'
            }
        },
        methods : {
            nuevo () {
                let path = this.$route.path.split('/');
                if (typeof path[2] == 'undefined' || path.indexOf('create') != -1){
                    return;
                }

                let submenu = path[2];

                this.$router.push('/app/' + submenu + '/add');
            }
        }
    }
</script>
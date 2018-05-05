<template>
    <div class = "sidebar">
        <ul class = "sidebar">
            <li :class="menu.dashboard"><router-link to="/app/dashboard"><icon name="calendar-o"></icon> Dashboard</router-link><li>
            <li :class="menu.patients"><a><icon name="wheelchair"></icon> Pacientes</a><li>
            <li :class="menu.doctors"><a><icon name="user-md"></icon> Médicos</a><li>
            <li :class="menu.secretaries"><a><icon name="address-book"></icon> Secretarias</a><li>
            <li class = "sub-menu" :class="pliegue" v-on:click="toggle_pliegue()"><a><icon name="cogs"></icon> Mantenimiento</a>
                <ul>
                    <li :class="menu.users"><router-link to="/app/users"><icon name="user-circle-o"></icon> Usuarios</router-link></li>
                    <li :class="menu.centers"><a><icon name="hospital-o"></icon> Centros Médicos</a></li>
                    <li :class="menu.specialties"><a><icon name="medkit"></icon> Especialidades</a></li>
                    <li :class="menu.cards"><a><icon name="window-restore"></icon> Fichas</a></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
    
<style>
    .menu-activo {
        background-color: #A0E5CD;
    }

    .sidebar {
        margin: 0px;
        padding: 0px;
            padding-top:50px;
        position: fixed;
        top: 0px;
        left: 5px;
            width: 250px;
        height: 100%;
        background-color: #F7FCFD;
            box-shadow: 2px 0px 10px;
        overflow-x: hidden;
        overflow-y: auto;
            z-index: 98;
    }

    /* Elementos normales del menú*/

    .sidebar li {
        padding: 5px 0px 5px 0px;
        border-bottom: 1px #E6E6E6 double;
            cursor: pointer;
    }

    .sidebar i {
        margin-right: 13px;
    }

    .sidebar a {
        color: #585858;
        display: block;
        font-family: Arial;
        font-size: 13px;
        font-weight: bold; 
        line-height: 28px;
        cursor: pointer;
        padding-left: 40px;
    }

    /* Submenú desplegable. */

    .submenu ul {
        margin: 0px;
        padding-left: 0px;
        overflow-x:hidden;
        position: absolute;
        width: 100%;
        background-color: #BDBDBD;
    }



    /* Submenú cerrado. */
    .sub-cerrado ul {
        height: 0px;
        visibility: hidden;
    }

    /* Animación para abrir el Submenú. */

    .sub-abrir {
        background-color: #D4FCEE;
    }

    .sub-abrir li {
        color: rgb(58, 58, 58);
        margin-bottom: 1px #A4A4A4 double;
    }

    .first {
        border-top: 1px #E6E6E6 double;
    }

    .sub-abrir ul {
        height: auto;
        padding-left: 0px;
        visibility: visible;
        transition-property: height, visibility;
        transition-duration: 0.5s, 0.5s;
        transition-timing-function: linear, linear;
    }

    .sub-abrir li {
        padding-left: 40px;
    }

    /* Animación para cerrar el Submenú. */
    .sub-cerrar ul {
        height: 0px;
        visibility: hidden;
        transition-property: height;
        transition-duration: 0.5s;
        transition-timing-function: linear;
    }


</style>

<script>
    import { mapState } from 'vuex';
    import * as CONFIG from '@/config.js';

    export default {
        name : 'Sidebar',
        data : function (){
            return this.actualizar_menu(this.capturar_menu(), {
                pliegue : 'sub-abrir',
                abierto : 'sub-abrir',
                cerrado : 'sub-cerrado',
                elementos_pliegue : ['users', 'centers', 'specialties', 'cards'],
                menu : {
                    users : '',
                    centers : '',
                    specialties : '',
                    cards : ''
                }
            });
        },
        computed : {
            submenu(){
                return this.$store.state.submenu;
            }
        },
        
        watch: {
            submenu(val, oldval) {
                this.actualizar_menu(val);
             }
        },
        methods : {
            capturar_menu : function (){
                let path = this.$route.path.split('/');
                if (typeof path[2] == 'undefined'){
                    return;
                }

                let submenu = path[2];
                this.$store.commit(CONFIG.mut.setMenu, {menu : submenu});
                return submenu;
            },
            actualizar_menu : function(submenu, datos){
                let existe_datos = typeof datos != 'undefined';
                datos = existe_datos ? datos : this;
                let keys = Object.keys(datos.menu);
                for (let i = 0; i < keys.length; i++){
                    datos.menu[keys[i]] = '';
                }
                datos.menu[submenu] = 'menu-activo';
                return this.ev_pliegue(datos, submenu);
            },
            ev_pliegue : function (datos, submenu){
                datos = typeof datos != 'undefined' ? datos : this;
                submenu = typeof submenu != 'undefined' ? submenu : datos.submenu;
                if (datos.elementos_pliegue.indexOf(submenu) != -1){
                    
                    datos.pliegue = datos.abierto;
                    return datos;
                }
                datos.pliegue = datos.cerrado;
                return datos;
            },
            toggle_pliegue : function (){
                if (this.pliegue == this.abierto){
                    this.pliegue = this.cerrado;
                    return;
                }
                this.pliegue = this.abierto;
            }
        }
    }
</script>
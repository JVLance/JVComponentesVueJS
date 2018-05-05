<template>
    <nav class="navbar navbar-default navegacion" role="navigation">
        <!-- Mobile -->
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" 
                    data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Navegación</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Sistema Médico</a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav pull-right">
                    <li><a href="#">{{user}}</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
/* Barra de navegación superior (Navbar)*/
    .navegacion {
        position: fixed;
        width: 100%;
        background-color: #319967;
        border-radius: 0;
        border: 0px #27447B solid;
        z-index: 99;
    }

    .navbar-nav > li > a, .navbar-brand {
        padding-top:5px !important; padding-bottom:0 !important;
        height: 30px; /* aqui escoges el alto que necesites */
    }
    .navbar {
        min-height:30px !important; /* aqui escoges el alto que necesites */
    }

    .navbar-default .navbar-nav > li > a, .navbar-default .navbar-brand {
        color : white;
    }
</style>

<script>
    export default {
        name : 'Navbar',
        props : ['user']
    }
</script>
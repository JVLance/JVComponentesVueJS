<template>
    <div class="breadcrumb bread">
        <h4>{{titulo}}</h4>
        
        <div class = "migas">
            <span v-for = "(crumb, key) in crumbs">
            {{  key != "Home" ? "/" : "" }} <router-link v-bind:to="crumb">{{key}}</router-link>
            </span>
        </div>
        <div class = "principal-icon">
            <icon v-bind:name="icono" scale="4" class = "principal-icono"></icon>
        </div>
    </div>
</template>

<style>

/* Icono principal en breadcrumbs */
/* Caja básica */

.bread {
    position: relative;
    background-color: #F7FCFD;
    border-radius: 0;
    border-left: 2px #1D5238 solid;
    box-shadow: 0px 2px 10px;
    width: 100%;
    padding: 8px 15px;
    height:80px;
}

.principal-icon {
    position:absolute;
    margin: 0px;
    right: 0px;
    top: 0px;
    width:100px;
    height:100%;
    background-color: #43CE8B;
    padding-left:21px;
    padding-top: 12px;
    
}

.principal-icono  {
    color: #F7FCFD;
}

.breadcrumb > h4 {
    color : #1D5238;
}

.migas {
    position: absolute;
    top: 60%;
}

</style>

<script>
export default {
    name  : 'Breadcrumbs',
    props : {
        titulo : {type: String, required: true},
        crumbs : {type: Object, required: true},
        icono  : {type: String, required: true}
    }
}
</script>
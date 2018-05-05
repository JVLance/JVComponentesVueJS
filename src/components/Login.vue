<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
                <h1 class="text-center login-title">Iniciar Sesión</h1>
                <div class="account-wall">
                    <center><img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                        alt=""></center>
                        <div class="alert alert-warning" role="alert" v-if="mostrarAlerta">
                            <strong>No se pudo iniciar Sesión </strong>, {{alerta}}
                        </div>
                    <form class="form-signin" id="registerForm" method="POST" @submit.prevent="validateBeforeSubmit">
                        <input type="text" 
                        class="form-control" 
                        placeholder="Email" 
                        required 
                        autofocus
                        v-validate="'required'"
                        :class="{'has-errors': errors.has('email')}"
                        v-model="email">
                        <FormError :attribute_name="'email'" :errors_form="errors"> </FormError>

                        <input type="password"
                         class="form-control" 
                         placeholder="Password"
                         v-model="password"
                         v-validate="'required'"
                         :class="{'has-errors': errors.has('password')}"
                         required>
                        <FormError :attribute_name="'password'" :errors_form="errors"> </FormError>
                        
                        <button class="btn btn-lg btn-primary btn-block" type="submit" :disabled="sending">
                            Sign in</button>
                        <label class="checkbox pull-left">
                            <input type="checkbox" value="remember-me">
                            Remember me
                        </label>
                        <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormError from '@/components/util/FormError';
import axios from 'axios';
import * as CONFIG from '@/config.js';

export default {
  name: 'Login',
  components : {
      'FormError' : FormError
  },
  data () {
    return {
      email     : '',
      password  : '',
      mostrarAlerta : false,
      alerta : '',
      errordefecto : 'Email o contraseña invalido.',
      sending : false
    }
  },
  methods : {
      validateBeforeSubmit(e) {
        this.mostrarAlerta = false;
        this.$validator.validateAll();
        if (!this.errors.any()) {
            this.login();
        }
      },
      login : function (){
        this.sending = true;
        axios.post(CONFIG.api.login, {
            email : this.email,
            password : this.password
        }).then(response => {
            let storage = {
                token : response.data.success.token,
                user : response.data.success.user,
                date : Date.now()
            };
            localStorage.setItem(CONFIG.webtoken, JSON.stringify(storage));
            this.$router.push('/app/dashboard');
        }).catch(e => {
            this.badLogin();
        });
      },
      badLogin : function (){
        this.alerta = this.errordefecto;
        this.mostrarAlerta = true;
        this.sending = false;
      }
  },
  mounted: function () {
        //Reviso el localstorage para saber si hay un usuario loggeado
        let webtoken = localStorage.getItem(CONFIG.webtoken);
        if (webtoken != null){
          //Si no lo hay, manda al login
          this.$router.push('/app/dashboard');
          return;
        }
        //De lo contrario, 
   } 
}
</script>

<style scoped>
/* Nada */
</style>


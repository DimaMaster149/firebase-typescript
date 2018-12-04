<template>
  <div class>
    <div class="form__wrap">
      <div class="form">
        <h1>Login</h1>
        <input 
          class="form__item"
          v-validate="'required|email'"
          data-vv-as="user email"
          name="email"
          type="text"
          v-model="email"
          placeholder="Email">
          <span>{{ errors.first('email') }}</span>
        <input
          class="form__item"
          v-validate="{ required: true, min: 6 }"
          name="password"
          type="password"
          v-model="password"
          placeholder="Password"
        >
        <span>{{ errors.first('password') }}</span>
        <div class="buttons">
          <button class="buttons__item" @click="loginGoogle">Google</button>
          <button class="buttons__item" @click="signUp">Sign up</button>
          <button class="buttons__item" @click="signIn">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';;
import { Observer } from 'mobx-vue';
import Auth from '@/store/auth';
import { observable } from 'mobx';
import {required, minLength} from 'vuelidate/lib/validators'
import FirebaseClass from '@/services/firebaseService'
const Firebase = FirebaseClass.getInstance();

@Observer
@Component({

})
export default class Login extends Vue {
    
email: string = '';
password: string = '';

public authService: Auth;
  constructor() {
    super();
    this.authService = new Auth();
  }

  public loginGoogle() {
     this.authService.loginGoogle();
    }
  public signUp() {
    this.authService.signUp(this.email, this.password);
  }
  public signIn() {
    this.authService.signIn(this.email, this.password);
  }

}

</script>

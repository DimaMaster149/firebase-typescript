import { action, observable } from 'mobx';

class ProfileUser {

  @observable email = '';

  @action.bound public setUserEmail(email: string): void { 
    this.email = email;
    console.log(this.email, 'updated user email')
  }

  @action.bound public isAuth() { 
    return this.email ? true : false
  }
}
export default new ProfileUser();

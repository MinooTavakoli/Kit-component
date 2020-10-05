import { observable, action, makeObservable } from "mobx";

class LoginStore{

    
@observable
username = '';

constructor() {
    makeObservable(this);
}

@action
updateUsername = (newValue) => {
    // debugger;
    this.username = newValue;
}
@action
onLogin(){

}

}

export default LoginStore;
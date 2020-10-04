import {observable} from 'mobx'

class LoginStore{
@observable username = '2'
}
export const loginStore = new LoginStore()
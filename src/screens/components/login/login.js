import { observer } from 'mobx-react'
import React from 'react'
import LoginStore from './loginStore'
@observer
class Login extends React.Component {
    constructor(props){
        super(props);
        this.vm = new LoginStore();
    }
    render() {
        const loginStore = this.vm;
        return (
            <div>
                <input type="text" value={loginStore.username} onChange={(e)=>{loginStore.updateUsername(e.target.value)}} />
                <button onClick={loginStore.onLogin}>login</button>
            </div>
        )
    }
}

export default Login


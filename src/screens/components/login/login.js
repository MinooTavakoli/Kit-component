import React from 'react'
import {loginStore} from './loginStore'

export default function Login() {
    return (
        <div>
            login -{loginStore.username}
        </div>
    )
}

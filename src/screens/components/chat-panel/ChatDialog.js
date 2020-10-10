import React, {useState} from 'react'
import './ChatDialog.scss'
import {chatStore} from './ChatStore'
import ChatPanel from './ChatPanel'

export default function ChatDialog(props) {

    return (
        <div dir='rtl' className={'chat-dialog-component ' + (props.type=="REPLY"?'--chat-dialog-reply':'--chat-dialog-say')}>

            <div className='chat-dialog-box'>
                {props.text}
            </div>

        </div>
    )
}

import React, {useState} from 'react'
import './ChatDialog.scss'
import {chatStore} from './ChatStore'
import ChatPanel from './ChatPanel'

export default function ChatDialog(props) {

    return (
        <div dir='rtl' className={'chat-dialog-component2 ' + (props.type=="REPLY"?'--chat-dialog-reply2':'--chat-dialog-say2')}>

            <div className='chat-dialog-box2'>
                {props.text}
            </div>

        </div>
    )
}

import React from 'react'
import './ChatDialog.scss'

export default function ChatDialog(props) {
    return (

        <div className={'chat-dialog-component ' + (props.type=='REPLY' ? '--chat-dialog-reply':'--chat-dialog-say')}>
        
            <div className='chat-dialog-wrapper'>
                <div className='chat-dialog-box'>
                        {props.text}
                </div>
                <div className='date'>{props.date}</div>
            </div>
            
            <div className='avatar-icon'></div>
        </div>
    )
}

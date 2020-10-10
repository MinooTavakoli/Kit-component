import React from 'react'
import './dialog.scss'

export default function dialog(props) {
    return (

        <div className={'chat-dialog-component2 ' + (props.type=='REPLY' ? '--chat-dialog-reply2':'--chat-dialog-say2')}>
        
            <div className='wrapper'>
                <div className='chat-dialog-box2'>
                        {props.text}
                </div>
                <div className='date'>{props.date}</div>
            </div>
            
            <div className='avatar'></div>
        </div>
    )
}

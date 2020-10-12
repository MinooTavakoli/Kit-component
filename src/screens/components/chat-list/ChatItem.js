import React from 'react'
import './ChatItem.scss'

export default function ChatItem(props) {
    return (
        
        <div className='chat-item-component '>
            <div className='chat-item-wrapper'>
                <div className='chat-item-box'>
                    <div className='chat-all'>
                        <div className='chat-title'>{props.title}</div>
                        <div className='chat-text'>{props.text}</div>
                        <div className='chat-time'>{props.time}</div>
                        <div className='chat-messageCount'>{props.messageCount}</div>
                        <div className='avatar'></div>
                    </div>
                </div>
            </div>
            
        </div>
       
    )
}

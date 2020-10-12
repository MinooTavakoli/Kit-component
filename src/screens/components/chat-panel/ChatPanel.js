import React from 'react'
import iconsend from '../../../assets/images/send.svg'
import Attach from '../../../assets/images/Attach.svg'
import './ChatPanel.scss'
import ChatDialog from './ChatDialog'
import ChatStore from './ChatStore'
import { observer } from 'mobx-react'

const chatStore = new ChatStore();

function ChatPanel(props) {

    return (
        <div className='chat-panel-component'>
            
            <div className='chat-wrapper'>
                
                <div className='dialog-section'>
                    {chatStore.chatList.map((item)=>{
                    return <ChatDialog text={item.text} type={item.type} date={item.date} />
                    })}
                </div>

                <div className='input-section'>
                    <img onClick={()=> chatStore.onSendButtonClick()} className='send-text-button' src={iconsend} alt="" />
                    <input value={chatStore.chat} onChange={(e)=>{chatStore.updateChat(e.target.value)}} dir='rtl' type='text' className='input-text' placeholder='پیام خود را بنویسید ...' />
                    <img onClick={()=> chatStore.onReplyButtonClick()} className='send-text-button' src={Attach} alt="" /> 
                </div>

            </div>

        </div>
    )
}

export default observer(ChatPanel)

import React from 'react'
import ChatDialog from './ChatDialog'
import './ChatPanel.scss'
import ChatService from './ChatService'
import { observer } from 'mobx-react'
import ChatStore from './ChatStore'



// const chatservice = new ChatService ();
// const data = chatservice.getChats();
const chatStore = new ChatStore();

function ChatPanel(props) {

    return (
        <div className='chat-panel-component2'>

            <div className='chat-wrapper2'>

                <div className='dialog-section2'>
                              
                {
                    chatStore.chatList.map((item)=>{
                        return <ChatDialog type={item.type} text={item.text} />
                    })
                }
                       
                </div>

                <div className='input-section2'>
                    <button onClick={()=> chatStore.onSendButtonClick()} className='send-text-button2'>ارسال</button>
                    <input type="text" value={chatStore.chat} onChange={(e) => chatStore.updateChat(e.target.value)} />
                </div>

            </div>

        </div>
    )
}
export default observer(ChatPanel)

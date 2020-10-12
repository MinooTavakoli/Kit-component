import React from 'react'
import { observer } from 'mobx-react'
import './ChatListPage.scss'
import ChatItem from './ChatItem'
import ChatListStore from './ChatListStore'


const chatListStore = new ChatListStore();

function ChatListPage(props) {
    return (
        <div className='chatList-page-component'>
            <div className='chatList-wrapper'>
            
                <div className='title-text'>چت آنلاین شهرداد</div>

                <div className='chatList-section'>
                    {chatListStore.chatlist.map((item)=>{
                        return <ChatItem title={item.title} text={item.text} time={item.time} messageCount={item.messageCount} />
                    })}
                </div>

            </div>
        </div>
    )
}

export default observer(ChatListPage)

import React from 'react'
import { Link , useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import './ChatListPage.scss'
import ChatItem from './ChatItem'
import ChatListStore from './ChatListStore'


const chatListStore = new ChatListStore();
// let { id } = useParams()

function ChatListPage(props) {
    return (
        <div className='chatList-page-component'>
            <div className='chatList-wrapper'>
                <div className='title-text'>چت آنلاین شهرداد</div>
                    <div className='chatList-section'>
                            {chatListStore.chatlist.map((item)=>{
                                return <Link className='link' key={item.id} to={`/chat/${item.id}`} >
                                            <ChatItem title={item.title} text={item.text} time={item.time} messageCount={item.messageCount} type={item.type} />
                                        </Link>
                            })}
                    </div>
            </div>
        </div>
    )
}

export default observer(ChatListPage)

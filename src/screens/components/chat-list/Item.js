import React from 'react'
import ChatListStore from './ChatListStore'
import { useParams } from 'react-router-dom'
import ChatPanel from '../chat-panel/ChatPanel'
import './Item.scss'
import flow from '../../../assets/images/flow.jpg'

const chatListStore = new ChatListStore();

function Item(props) {
    let { id } = useParams();
    let item = chatListStore.chatlist.find(x=>x.id === parseInt(id));

  return (
        <div className='item'>
            <div className="item-all">
                <img src={flow} className='avatar' /> 
                <h3 className='item-title'>{item.title}</h3>
            </div>
            <ChatPanel />
        </div>
    );
}
export default Item

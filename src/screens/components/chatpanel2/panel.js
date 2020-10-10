import React from 'react'
import iconsend from '../../../assets/images/send.svg'
import iconplus from '../../../assets/images/plus.svg'
import './panel.scss'
import Dialog from './dialog'
import Store from './store'
import { observer } from 'mobx-react'



const store = new Store();

function Panel(props) {


    return (
        <div className='chat-panel-component2'>
            
            <div className='chat-wrapper2'>
                
                <div className='dialog-section2'>
                    {store.list.map((item)=>{
                    return <Dialog text={item.text} type={item.type} date={item.date} />
                    })}
                </div>

                <div className='input-section2'>
                    <img onClick={()=> store.onbtnclick()} className='send-text-button2' src={iconsend} alt="" />
                    <input value={store.chat} onChange={(e)=>{store.update(e.target.value)}} dir='rtl' type='text' className='input-text2' placeholder='پیام خود را بنویسید ...' />
                     <img onClick={()=> store.onbtnclickReplay()} className='send-text-button2' src={iconplus} alt="" /> 
                </div>

            </div>

        </div>
    )
}

export default observer(Panel)

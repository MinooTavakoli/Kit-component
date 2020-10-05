import React from 'react'
import ChatDialog from './ChatDialog'
import './ChatPanel.scss'

export default function ChatPanel(props) {
    return (
        <div className='chat-panel-component'>

            <div className='chat-wrapper'>

                <div className='dialog-section'>
                    <ChatDialog text= {props.text}
                     
                     text2='
                    در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما
                     می دهد.
                     '

                     text3='
                     اگر هدف شما ترجمه متون تخصصی در رشته های مختلف
                      است می توانید به مجموعه بزرگ
                      ایرانیان اعتماد کنید. دایره گسترده مترجمین تخصصی 
                     در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما
                      می دهد که سفارش شما توسط مترجم هم رشته.
                      '

                      text4='
                      در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما
                       می دهد.دایره گسترده مترجمین تخصصی 
                       در مجموعه ترجمه تخصصی ایرانیان این اطمینان 
                       '
                     />
                </div>

                <div className='input-section'>
                    <button onClick={()=>{}} className='send-text-button'>ارسال</button>
                    <input dir='rtl' type="text" />
                </div>

            </div>

        </div>
    )
}

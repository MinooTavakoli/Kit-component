import React from 'react'
import './RadioComponent.scss'

export default function RadioComponent(props) {

    function onClick(){
        const newValue= !props.value
        props.onChange (newValue)
    }

    return (
            <div dir='rtl' className='radio-component'>
                <div className={'radio ' + ((props.value)? "": "--off" )} onClick={onClick}>
                    <div className='radio-small'>  </div>
                </div>            
            </div>
    )
}


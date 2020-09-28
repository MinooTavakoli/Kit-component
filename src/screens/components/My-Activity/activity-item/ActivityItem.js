import React from 'react'
import './ActivityItem.scss'
import RadioComponent from '../radio-button/RadioComponent'

export default function titleComponent(props) {

    return (
            <div dir='rtl' className='title-wrapper'>
                <RadioComponent value={props.selectedValue === props.itemkey} onChange={(newValue)=>{props.onChange (props.itemkey, newValue)}} />
                    <div> 
                        <div className={'activity-title ' + (props.selectedValue === props.itemkey ? '--active' : ''  ) }> {props.title} </div> 
                        <div className='activity-count' style={{color: props.color}} > {props.count} </div>  
                    </div>                            
            </div>            
    )
}

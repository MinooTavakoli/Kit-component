import React, { useState } from 'react'
import'./Radio.scss'
import 'jb-checkbox-react';
import JBCheckbox from 'jb-checkbox-react';

export default function RadioButton(props) {

    const [ selectedValue , setSelectedValue ] = useState ('');

    function onSelect ( input , value ) {
        if ( value === true ) {
        setSelectedValue ( input )
        }
    }

    return (

    <div className='header-radio-component'>
       
        <div dir='rtl' className='header-subject'> <h3>فعالیت‌های من</h3> </div>

            <div dir='rtl' className='checkbox' >

                {props.Data.map ((item) => {
                   return (
                        <div className={`title-all type-${item.key}`} key={item.key}>
                        <JBCheckbox label={item.text} value={selectedValue===item.key} onChange={e => {onSelect(item.key , e.target.value);}} > </JBCheckbox>
                            <h3 className='number' style={{color: item.color}}> {item.count} </h3>
                        </div>
                         )
                    })
                }
        </div>
        
    </div>

    )
}

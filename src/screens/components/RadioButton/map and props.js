import React, { useState } from 'react'
import'./Radio.scss'
import 'jb-checkbox-react';
import JBCheckbox from 'jb-checkbox-react';

export default function RadioButton() {

    const [ selectedValue , setSelectedValue ] = useState ('');

    function onSelect ( input , value ) {
        if ( value === true ) {
        setSelectedValue ( input )
        }
    }

    const Data = [
        {
            key: 'All1',
            text: 'کل فعالیت‌ها',
            count: 215,
            color: "#202124"
        },
        {
            key: 'CREATED',
            text: 'محتوای ایجاد شده',
            count: 126,
            color: "#15aa56"
        },
        {
            key: 'EDITED',
            text: 'محتوای ویرایش شده',
            count: 45,
            color: "#202124"
        },
        {
            key: 'CONFIRMED',
            text: 'محتوای تایید شده',
            count: 32,
            color: "#e96710"
        },
        {
            key: 'DELETED',
            text: 'محتوای حذف شده',
            count: 12,
            color: "#f10e4c"
        },
    ]
    return (

    <div className='header-radio-component'>

        <div dir='rtl' className='header-subject'> <h3>فعالیت‌های من</h3> </div>

            <div dir='rtl' className='checkbox' >

                {Data.map ((item) => {
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

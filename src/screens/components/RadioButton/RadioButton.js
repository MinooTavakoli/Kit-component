import React, { useState, useEffect } from 'react'
import'./Radio.scss'
import 'jb-checkbox-react';
import JBCheckbox from 'jb-checkbox-react';

export default function RadioButton() {
    const [ input , setInput ] = useState ('');

        useEffect(() => {
            console.log (input)
        }, [input])

        function func ( type , value ) {
            if ( value === true ) {
            // className='highlight'
            setInput ( type )
            }
        }

    return (

    <div className='header-radio-component'>

        <div dir='rtl' className='header-subject'> <h3>فعالیت‌های من</h3> </div>

            <div dir='rtl' className='checkbox' >
            
                <div className='title-all'>
                    <JBCheckbox label='کل فعالیت‌ها' value={input==="ALL"} onChange={e => {func('ALL' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>215</h3>
                </div>

                <div className='title-create'>
                    <JBCheckbox label='محتوای ایجاد شده' value={input==="CREATED"} onChange={e => {func('CREATED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>126</h3>
                </div> 

                <div className='title-edit'>
                    <JBCheckbox label='محتوای ویرایش شده' value={input==="EDITED"} onChange={e => {func('EDITED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>45</h3>
                </div>

                <div className='title-confirm'>
                    <JBCheckbox label='محتوای تایید شده' value={input==="CONFIRMED"} onChange={e => {func('CONFIRMED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>32</h3>
                </div>

                <div className='title-delete'>
                    <JBCheckbox label='محتوای حذف شده' value={input==="DELETED"} onChange={e => {func('DELETED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>12</h3>
                </div>

        </div>
        
    </div>

    )
}

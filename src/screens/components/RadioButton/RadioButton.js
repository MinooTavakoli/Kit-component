import React, {useState} from 'react'
import'./Radio.css'
import 'jb-checkbox-react';
import JBCheckbox from 'jb-checkbox-react';

export default function RadioButton() {
    const [ input , setInput ] = useState ('ALL');
        function func ( type , value ) {
            if ( value === true ) {
            // className='highlight'
            setInput ( type )
            }
        }

    return (

    <div className='Radio-component'>

        <div dir='rtl' className='head'> <h3>فعالیت‌های من</h3> </div>

            <div dir='rtl' className='checkbox' >
                <div className='two'>
                    <JBCheckbox label='کل فعالیت‌ها' value={input==="ALL"} onChange={e => {func('ALL' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>215</h3>
                </div>

                <div className='one'>
                    <JBCheckbox label='محتوای ایجاد شده' value={input==="CREATED"} onChange={e => {func('CREATED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>126</h3>
                </div>

                <div className='two'>
                    <JBCheckbox label='محتوای ویرایش شده' value={input==="EDITED"} onChange={e => {func('EDITED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>45</h3>
                </div>

                <div className='three'>
                    <JBCheckbox label='محتوای تایید شده' value={input==="CONFIRMED"} onChange={e => {func('CONFIRMED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>32</h3>
                </div>

                <div className='four'>
                    <JBCheckbox label='محتوای حذف شده' value={input==="DELETED"} onChange={e => {func('DELETED' , e.target.value);}}> </JBCheckbox>
                    <h3 className='number'>12</h3>
                </div>

        </div>
        
    </div>

    )
}

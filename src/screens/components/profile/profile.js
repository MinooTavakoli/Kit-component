import React, { useState } from 'react'
import './profile.scss'
import avatar from '../../../assets/images/avatar.svg'
import avatarperson from '../../../assets/images/avatarperson.png'
import open from '../../../assets/images/open.svg'

export default function profile() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen , setIsOpen] = useState (false);

    return (
        <div className='header-profile-component'>

            <div className='arrow-image-wrapper'>
                <img className='arrow-image' src={open} alt="" onClick={()=>{setIsOpen(!isOpen)}} aria-role="open Menu"/>
            </div>

            <div className='user-name'>
                014 کاربر
            </div>
            
            <div className='user-image-wrapper'>
                <img className='user-image' src={avatarperson} alt="" />
            </div>
            
            <div className={'user-exit '+(isOpen?'':'--hide')}  >
                <button className='button-exit'>خروج</button>
            </div>

        </div>
    )
}
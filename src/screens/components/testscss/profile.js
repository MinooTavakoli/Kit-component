import React, {useState} from 'react'
import './profile.scss'
import avatar from '../../../assets/images/avatarperson.png'
import expandicon from '../../../assets/images/expandicon.png'

export default function profile() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open , setOpen] = useState (false);

    return (
        <div className='profile-component'>

        <div className='divexpand'>
            <img className='imgexpand' src={expandicon} alt="" onClick={()=>{setOpen(!open)}} aria-role="open Menu"/>
        </div>

        <div className='divuser'>
            <h4 className='user'>014 کاربر</h4>
        </div>
        
        <div className='divavatar'>
            <img className='imgavatar' src={avatar} alt="" />
        </div>
        
            {open ? (
                <div className='menu'  >
                    <button className='button'>خروج</button>
                </div>
            ): null}
    
        </div>
    )
}

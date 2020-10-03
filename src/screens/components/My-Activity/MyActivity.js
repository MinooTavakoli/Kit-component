import React, {useState} from 'react'
import './MyActivity.scss'
import ActivityItem from './activity-item/ActivityItem'

export default function MyActivity(props) {
    const [ selectedValue , setSelectedValue ] = useState ('');
    
    function onChange(key , newValue){
        if (newValue===true){
            setSelectedValue ( key );
        }
    }

    return (
        <div dir='rtl' className='page-container'>
            <div className='my-activity-component'>
                <div dir='rtl' className='my-activity-selector'>
                    فعالیت‌های من
                </div>
                    <div dir='rtl' className='activity-item'>
                        {props.Data.map ((item) => {
                            return (
                                <ActivityItem title={item.text} 
                                count={item.count}
                                itemkey={item.key}
                                color={item.color}
                                selectedValue={selectedValue}
                                onChange={onChange} />
                                    )
                        })}
                    </div> 
            </div>
        </div>
    )
}

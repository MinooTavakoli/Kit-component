import React, {useState} from 'react'
import Radio from './Radio'
import Data from '../My-Activity/Data-Activity'

export default function MyActivity (props) {
    
    
    const [activityType, setActivityType] = useState (' ')

    function log (value) {
        console.log (value)
    }

    return (

        <div>

            <button onClick={e => {setActivityType('CREATED')}}> تایید </button>

            <Radio Data={Data} onChange={log} value={activityType} />

        </div>
    )
}

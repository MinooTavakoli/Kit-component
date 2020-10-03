import React from 'react'
import { observer } from "mobx-react"

export default function Mobx() {
    const onChange = (oldValue, newValue) => {

    }
    const observable = (value) => {
        return {
            get() {return value;},
            set (newValue) {
                onChange(this.get(), newValue);
                value = newValue;
            }
        }
    }
    return (
        <div>
            aaa
        </div>
    )
}

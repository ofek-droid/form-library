import React, { ReactElement } from 'react'
import  FormValue from '../models/form-value'
import {  ComponentProps, InputTypes, PropComponent, EventType } from '../types/form-types'

export interface IFormControl {
    formValue?: FormValue<string> 
    type?: InputTypes
    component?: ReactElement<ComponentProps>
    errorComponent?: PropComponent
}



function selectComponent(c:PropComponent | any, type: InputTypes): PropComponent  {
    if(!c) {
        return <input type={type}/>
    }
    return c;
}

function cloneComponent(c: PropComponent, props: ComponentProps) {
    const clone = React.cloneElement(c,props) 
    return clone 
}
export default ({formValue, type='text', component}: IFormControl) => {
    const selected = selectComponent(component,type)
    const onChange = (e:EventType) => {
        e.preventDefault()
        formValue?.set(e.target.value)
    }
    const display = cloneComponent(selected, {onChange})
   return <div>{display}</div>
}

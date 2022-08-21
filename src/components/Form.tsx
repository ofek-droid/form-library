import { EventType } from "@testing-library/react"
import React, { FormEvent, FormEventHandler } from "react"
import FormValue from "../models/form-value"
import { FormSubmit } from "../types/form-types"
import FormControl, { IFormControl } from "./FormControl"

type FormControlType = typeof FormControl

interface IProps {
    children: React.ReactElement<FormControlType>[]  
    onSubmit?: (e: FormSubmit) => void 
}



export default ({children, onSubmit}: IProps) => {
    const formValues = React.Children.map(children, (c) => {
        const props: IFormControl = c.props as any
        return props.formValue;
    })

    const onSubmitFinal = (e: FormSubmit) => {
        console.log(onSubmit)
        const rulesPassed = formValues.map((fv)  => fv.applyRules()).filter(res => res !== null).length === 0
        console.log(rulesPassed)
        if(rulesPassed) {
            if(onSubmit) {
                console.log('Submitting...')
                onSubmit(e)
            }
        }
    }
    return <form onSubmit={onSubmitFinal}>
        {children}
    </form>
}

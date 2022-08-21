import { FormEvent, ReactElement } from "react";


export type ErrorMessage = string
export type RuleFunction<T> = (v: T) => null | ErrorMessage 
export type FormSubmit = FormEvent<HTMLFormElement>
export type InputTypes = "button" | "checkbox" | "color" | "date" |
"datetime-local" | "email"  | "file" | "hidden" | "image"  | "month"  |
"number" | "password" | "radio"  | "range"  | "reset"  | "search" |
"submit" | "tel" | "text" | "time" | "url" | "week" 

export interface ComponentProps {
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export type PropComponent = ReactElement<ComponentProps>
export type EventType = React.ChangeEvent<HTMLInputElement>

export type FormConfig = {
    inputComponents?: {
        [K in InputTypes]? : PropComponent 
         
    },
    submitBehaviur: 'on_change' | 'on_button_click' 
}

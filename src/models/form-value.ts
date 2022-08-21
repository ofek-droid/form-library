import { RuleFunction } from "../types/form-types"

type RetFunction<T> = (value:T) => T
type SetFunction<T> = (f: RetFunction<T>) => void

export default class FormValue<T> {
    public value:           T
    private setFunction:     SetFunction<T>  ;
    private rules:           RuleFunction<T>[] 
    private setError:        SetFunction<boolean>
    private setErrorMessage: SetFunction<string> 

    constructor(value: T, 
                setFunction: SetFunction<T>,
                rules: RuleFunction<T>[] = [],
                setError: SetFunction<boolean>,
                setErrorMessage: SetFunction<string>
    ){
        this.value = value
        this.setFunction = setFunction;
        this.rules = rules
        this.setError = setError
        this.setErrorMessage = setErrorMessage
    }

    set(v: T) {
       this.setFunction(() => v); 
    }

    setErrorValue(b: boolean) {
        this.setError(() => b)
    }

    setErrorMsg(msg: string) {
        this.setErrorMessage(() => msg)
    }

    applyRules(): string | null  {
        for(const ruleFunc of this.rules) {
            const result = ruleFunc(this.value)
            if(result) {
                return result 
            }
        }
        return null
    }

}

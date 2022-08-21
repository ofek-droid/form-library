import { useState } from "react";
import FormValue from "../models/form-value";
import { RuleFunction } from "../types/form-types";

type ReturnType<T> = [FormValue<T>,T, boolean, string ]

function useFormValue<T>(initial: T, rules: RuleFunction<T>[]): ReturnType<T> {
   const [value, setValue] = useState<T>(initial) 
   const [error, setError] = useState(false);
   const [msg, setMsg] = useState('')
   const fv = new FormValue(value, setValue, rules, setError, setMsg)      
   return [fv,value, error,msg]
}

export default useFormValue

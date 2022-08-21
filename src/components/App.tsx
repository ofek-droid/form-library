import { useState } from 'react';
import useFormValue from '../hooks/useFormValue';
import { FormSubmit } from '../types/form-types';
import {Result} from '../types/result';
import Form from './Form';
import FormControl from './FormControl';

function notEmpty(v: string) {
    const bool = v.length > 0
    return bool? null : 'Field is Empty' 
}

function App() {
    const [example,val,err,msg] = useFormValue<string>('', [notEmpty])

    function onSubmit(e: FormSubmit) {
        e.preventDefault();
        console.log('Api call...')
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormControl  
                    component={<input 
                        style={{border: err? '1px solid red' : 'none'}}
                    />}
                    formValue={example}/>
                <FormControl type='submit' /> 
            </Form>
        </div>
  );
}

export default App;

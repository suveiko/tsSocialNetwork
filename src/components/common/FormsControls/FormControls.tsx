import {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {WrappedFieldProps} from "redux-form";

import s from "./FormControls.module.css"


type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>


const FormControl = ({input, meta, ...rest}: WrappedFieldProps & Props) => {
    const showError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${showError ? s.error : ''}`}>
            {rest.children}
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props: WrappedFieldProps) => <FormControl {...props}>
    <textarea {...props.input} {...props} />
</FormControl>
export const Input = (props: WrappedFieldProps) => <FormControl {...props}>
    <input {...props.input} {...props} />
</FormControl>


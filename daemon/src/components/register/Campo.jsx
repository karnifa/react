import React from 'react';
import { Formik,useField } from 'formik'

const Campo = (props) => {
    const [field, meta] = useField(props)
  return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input
            {...field}
            {...props}
            className={meta.error && meta.touched ? 'invalid-feedback' : ''}
            />
            {meta.error && meta.touched ? <div className='invalid-feedback'>{meta.error}</div> : null}
        </div>
    )

}

export default Campo;
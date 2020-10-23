
import React, {Fragment} from 'react';
import {useField } from 'formik'

export const CustomTextInput = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className='text-input' {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null}
    </>
  )
}

export const CustomCheckbox = ({ children, ...props}) => {
  const [field, meta] = useField(props, 'checkbox');

  return (
    <Fragment>
    <label className="checkbox">
    <input type="checkbox" {...field} {...props} />
      {children}
      </label>
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null}
    </Fragment>
  )
}

export const CustomSelect = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <select {...field} {...props} />
    {meta.touched && meta.error ? (
      <div className="error">{meta.error}</div>
    ) : null}
    </>
  )
}
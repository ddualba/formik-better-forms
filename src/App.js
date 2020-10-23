import React from 'react';
import {Styles} from './Styles'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {CustomTextInput, CustomCheckbox, CustomSelect} from './customInputs'

function App() {
  return (
   <Styles>
     <Formik
     initialValues={{
       name: '',
       email: '',
       acceptedTerms: false,
       specialPower: ''
     }}
     validationSchema={Yup.object({
       name: Yup.string()
       .min(3, 'Must be at least 3 characters')
       .max(15, 'Must be 15 characters or less')
       .required('Required'),
       email: Yup.string()
       .email('Invalid email address')
       .required('Required'),
       acceptedTerms: Yup.boolean()
       .required('Required')
       .oneOf([true], 'You must accept terms and conditions'),
       specialPower: Yup.string()
       .oneOf(['flight', 'invisibility', 'wealthy bat guy', 'other'], 'Invalid Special Power')
       .required('Required')
     })}
     onSubmit={(values, { setSubmitting, resetForm}) => {
       setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resetForm();
        setSubmitting(false)
       }, 3000)
     }}
     >

{ props => (
  <Form>
    <h1>Sign Up</h1>
    <CustomTextInput label="Name" name="name" type="text" placeholder="Enter name" />
    <CustomTextInput label="Email" name="email" type="email" placeholder="email@example.com" />
    <CustomSelect label="Special Power" name="specialPower">
      <option value="">Select a Special Power</option>
      <option value="flight">flight</option>
      <option value="invisibility">invisibility</option>
      <option value="wealthy bat guy">wealthy bat guy</option>
      <option value="other">other</option>
    </CustomSelect>
    <CustomCheckbox name="acceptedTerms">
      I accept the terms and conditions
    </CustomCheckbox>
<button type="submit">{props.isSubmitting ? 'Loading...' : 'Submit' }</button>
  </Form>
)}

     </Formik>
   </Styles>
  );
}

export default App;

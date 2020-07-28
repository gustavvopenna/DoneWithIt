import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

const AppFormPicker = ({ name, ...otherProps }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  useEffect(() => {
    console.log(values)
  }, [values])

  return (
    <>
      <AppPicker
        selectedItem={values[name]}
        onSelectedItem={(label) => setFieldValue(name, label)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
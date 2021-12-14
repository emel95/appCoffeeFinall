import React from 'react';
import { useFormikContext } from 'formik';
import InputCustom from '../shared/InputCustom';
import ErrorMessage from './ErrorMessage';

const FormFiledCustom = ({ name, ...otherProps }) => {
    const {handleChange,setFieldTouched,errors,touched}=useFormikContext();
    return (
        <>

        {/* *********component for input custome and errorMessage******* */}
            <InputCustom
               {...otherProps}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
            />


            <ErrorMessage titleError={errors[name]} visible={touched[name]} />
        </>
    );

}
export default FormFiledCustom;
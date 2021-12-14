import React from 'react';
import { Formik } from 'formik';


const FormCustom = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (

        // ********** component for formik********
        <Formik
        
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            
        >
            {() => (<>{children}</>)}
        </Formik>
    );
}

export default FormCustom;
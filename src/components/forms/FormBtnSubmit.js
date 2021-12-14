import React from 'react';
import { useFormikContext } from 'formik';
import BtnCustom from '../shared/BtnCustom';

const FormBtnSubmit = ({ title,style }) => {

    const { handleSubmit } = useFormikContext();

    return (
        //#f7bb4d
        //**********estefade az btn custtom for btn in formik***********
        <BtnCustom styleCusttom={style} title={title} color="#fff" onPress={handleSubmit} />
      
        );
}

export default FormBtnSubmit;
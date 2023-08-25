'use client';
import { FC } from 'react';
import Input from './input';
import TextArea from './textArea';

type FormikControlProps = {
  control: 'input' | 'range' | 'select' | 'textarea' | 'file';
  name: string;
  type?: string;
  label?: string;
};

const FormikControl: FC<FormikControlProps> = ({ control, ...otherProps }) => {
  switch (control) {
    case 'input':
      return <Input otherProps={otherProps} />;
    case 'textarea':
      return <TextArea otherProps={otherProps} />;
    default:
      return null;
  }
};

export default FormikControl;

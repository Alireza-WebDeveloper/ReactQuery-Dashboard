'use client';
import { FC } from 'react';
import Input from './input';
import TextArea from './textArea';
import Select from './select';

type FormikControlProps = {
  control: 'input' | 'range' | 'select' | 'textarea' | 'file';
  name: string;
  type?: string;
  label?: string;
  options?: { key: string; value: string }[];
};

const FormikControl: FC<FormikControlProps> = ({ control, ...otherProps }) => {
  switch (control) {
    case 'input':
      return <Input otherProps={otherProps} />;
    case 'textarea':
      return <TextArea otherProps={otherProps} />;
    case 'select':
      return <Select otherProps={otherProps} />;
    default:
      return null;
  }
};

export default FormikControl;

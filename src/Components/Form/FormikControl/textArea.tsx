'use client';
import { Field, FieldProps } from 'formik';
import { FC } from 'react';
type TextAreaProps = {
  otherProps: any;
};

const TextArea: FC<TextAreaProps> = ({ otherProps }) => {
  const { name, label } = otherProps;

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const { field, meta } = fieldProps;
        const { error: errorMessage, touched } = meta;
        return (
          <section className="relative flex flex-col space-y-3">
            <div className="flex flex-col space-y-3">
              <label className="text-lg font-semibold">{label}</label>
              <textarea
                {...field}
                id={name}
                className="bg-gray-50 relative border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder={label}
              />
            </div>
            {errorMessage && touched ? (
              <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium text-lg">{errorMessage}</span>
              </p>
            ) : (
              ''
            )}
          </section>
        );
      }}
    </Field>
  );
};

export default TextArea;

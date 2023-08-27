'use client';
import { Field, FieldProps } from 'formik';
import { FC } from 'react';
type SelectProps = {
  otherProps: any;
};

const Select: FC<SelectProps> = ({ otherProps }) => {
  const { name, options, label } = otherProps;

  return (
    <Field name={name}>
      {(fieldProps: FieldProps) => {
        const { field, meta } = fieldProps;
        const { error: errorMessage, touched } = meta;

        return (
          <section className="relative flex flex-col space-y-3">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
              <select
                {...field}
                id={name}
                defaultValue={field.value}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {options.map((opt: any) => {
                  return <option value={opt.key}>{opt.value}</option>;
                })}
              </select>
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

export default Select;

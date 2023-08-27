import React from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../FormikControl';
import { initialValuesState } from './Types';

// Types
interface FilterProductProps {}

const FilterProduct: React.FC<FilterProductProps> = () => {
  const initialValues: initialValuesState = {
    price: 'asc',
  };

  const handleSubmitForm = (values: initialValuesState) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
      {(FormikProps) => {
        return (
          <Formik_Form className="flex flex-col space-y-5 bg-gray-300 p-4 rounded-md">
            <FormikControl
              label="Choose how to sort products by price"
              control="select"
              name="price"
              options={[
                {
                  value: 'asc',
                  key: 'asc',
                },
                { value: 'desc', key: 'desc' },
              ]}
            />

            <section className="flex  w-full col-span-3 gap-3">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 capitalize w-full py-2 rounded-lg px-4 text-2xl text-white"
              >
                search
              </button>
            </section>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default FilterProduct;

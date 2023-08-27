import React from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../FormikControl';
import { initialValuesState } from './Types';

// Types
interface FilterProductProps {}

const FilterProduct: React.FC<FilterProductProps> = () => {
  const initialValues: initialValuesState = {
    rating: 4,
    views: 11000,
    price: 10000,
    year_of_creation: 2022,
  };

  const handleSubmitForm = (values: initialValuesState) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
      {(FormikProps) => {
        return (
          <Formik_Form className="flex flex-wrap  items-center gap-3 p-3 bg-gray-200 rounded-md ">
            <FormikControl
              label="rating"
              control="input"
              name="rating"
              type="number"
            />
            <FormikControl
              label="views"
              control="input"
              name="views"
              type="number"
            />
            <FormikControl
              label="price"
              control="input"
              name="price"
              type="number"
            />
            <FormikControl
              label="year_of_creation"
              control="input"
              name="year_of_creation"
              type="number"
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

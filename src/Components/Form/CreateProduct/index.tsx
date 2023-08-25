import React from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../FormikControl';
import * as Yup from 'yup';
import { ProductState } from '../../../Model/Product';
import useCreateProduct from '../../../Hook/useCreateProduct';
import { initialValuesState } from './Types';
import { CreateProductProps } from './Types';

// Validation
const validationSchema = Yup.object().shape({
  name: Yup.string().required('this field is required'),
  description: Yup.string().required('this field is required'),
  rating: Yup.string().required('this field is required'),
  views: Yup.string().required('this field is required'),
  country: Yup.string().required('this field is required'),
  price: Yup.string().required('this field is required'),
});

const CreateProduct: React.FC<CreateProductProps> = ({ onClose }) => {
  // Initial Values
  const initialValues: initialValuesState = {
    name: '',
    description: '',
    year_of_creation: 0,
    rating: 0,
    views: 0,
    country: '',
    price: 0,
  };
  // Async Action To Update Product
  const { mutate, status } = useCreateProduct();
  const handleSubmitForm = (values: ProductState) => {
    mutate(values);
    onClose();
    //
  };
  return (
    <>
      {/* Description */}
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          By creating the product in the database, it is added to the site page
        </p>
      </div>
      {/* Form */}
      <div className="flex flex-col space-y-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
        >
          {(FormikProps) => {
            return (
              <Formik_Form className="flex flex-col space-y-10 p-7 rounded-lg">
                <FormikControl
                  label="name"
                  control="input"
                  name="name"
                  type="text"
                />
                <FormikControl
                  label="description"
                  control="textarea"
                  name="description"
                  type="text"
                />
                <FormikControl
                  label="year of creation"
                  control="input"
                  name="year_of_creation"
                  type="number"
                />
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
                  label="country"
                  control="input"
                  name="country"
                  type="text"
                />
                <FormikControl
                  label="price"
                  control="input"
                  name="price"
                  type="number"
                />
                <section className="flex  gap-3">
                  <button
                    disabled={status === 'loading' ? true : false}
                    type="submit"
                    className="bg-blue-500 capitalize w-full py-2 rounded-lg px-4 text-2xl text-white"
                  >
                    create
                  </button>
                </section>
              </Formik_Form>
            );
          }}
        </Formik>
      </div>
      {/* Options */}
      <div className="mt-4 flex gap-4">
        <button
          type="button"
          className=" capitalize inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          onClick={onClose}
        >
          cancel
        </button>
      </div>
    </>
  );
};

export default CreateProduct;

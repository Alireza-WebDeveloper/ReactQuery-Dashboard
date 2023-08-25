import React from 'react';
import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../FormikControl';
import * as Yup from 'yup';
import { ProductState } from '../../../Model/Product';

type initialValuesType = {
  name: string;
  description: string;
  year_of_creation: number;
  rating: number;
  views: number;
  country: string;
  price: number;
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required('this field is required'),
  description: Yup.string().required('this field is required'),
  rating: Yup.string().required('this field is required'),
  views: Yup.string().required('this field is required'),
  country: Yup.string().required('this field is required'),
  price: Yup.string().required('this field is required'),
});

interface UpdateProductProps {
  statusDelete: any;
  onClose(): void;
  selectProduct: ProductState;
}
const UpdateProduct: React.FC<UpdateProductProps> = ({
  onClose,
  selectProduct,
}) => {
  const initialValues: initialValuesType = {
    name: selectProduct.name,
    description: selectProduct.description,
    year_of_creation: selectProduct.year_of_creation,
    rating: selectProduct.rating,
    views: selectProduct.views,
    country: selectProduct.country,
    price: selectProduct.price,
  };
  const handleSubmitForm = (values: Partial<ProductState>) => {
    console.log(values);
    //
  };
  return (
    <>
      {/* Description */}
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          The previous information is not available after the update
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
                    type="submit"
                    className="bg-blue-500 capitalize w-full py-2 rounded-lg px-4 text-2xl text-white"
                  >
                    update product
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

export default UpdateProduct;

import { Formik, Form as Formik_Form } from 'formik';
import FormikControl from '../FormikControl';
import { initialValuesState } from './Types';
import { useSearchParams } from 'react-router-dom';
// Types

// InitialValue

const FilterProduct = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const initialValues: initialValuesState = {
    price: searchParam.get('_order') || 'asc',
  };
  const handleSubmitForm = (values: initialValuesState) => {
    searchParam.set('_sort', 'price');
    searchParam.set('_order', values.price);
    setSearchParam(searchParam);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
      {() => {
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
                sort
              </button>
            </section>
          </Formik_Form>
        );
      }}
    </Formik>
  );
};

export default FilterProduct;

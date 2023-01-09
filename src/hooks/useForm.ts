import { useEffect, useState } from 'react';

const useForm = ({ initialValues, onSubmit, validate }: any) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: any) => {
    setSubmitting(true);
    event.preventDefault();
    setErrors(validate(values));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
    }
  }, []);

  console.log('onSubmit', onSubmit);
  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

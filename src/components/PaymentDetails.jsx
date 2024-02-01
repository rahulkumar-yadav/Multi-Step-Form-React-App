import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePaymentDetails } from '../redux/formSlice';

const PaymentDetails = ({ onNext }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updatePaymentDetails(data));
    onNext();
  };

  return (
    <div className='p-20'>
      <div>
        <h1 className='text-center font-bold text-2xl mb-5'>Payment Details</h1>
      </div>
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Card Number:</label>
        <input
          {...register('cardNumber', { required: true, pattern: /^\d{16}$/ })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Expiry Date:</label>
        <input
          {...register('expiryDate', { required: true, pattern: /^(0[1-9]|1[0-2])\/\d{2}$/ })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">CVV:</label>
        <input
          {...register('cvv', { required: true, pattern: /^\d{3}$/ })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
    </div>
  );
};


export default PaymentDetails;

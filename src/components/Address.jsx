import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateAddress } from "../redux/formSlice";

const Address = ({ onNext }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updateAddress(data));
    onNext();
  };

  return (
    <div className="translate-y-20">
      <div className="text-center font-bold mb-5 text-2xl">
        <h1>Address Details</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-gray-100 p-6 rounded-md "
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Street:
          </label>
          <input
            {...register("street", { required: true })}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            City:
          </label>
          <input
            {...register("city", { required: true })}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 ">
            Zip Code:
          </label>
          <input
            {...register("zipCode", { required: true, pattern: /^\d{6}$/ })}
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-20 p-2 rounded-md"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Address;

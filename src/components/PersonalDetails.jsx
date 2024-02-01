import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updatePersonalDetails } from "../redux/formSlice";

const PersonalDetails = ({ onNext }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updatePersonalDetails(data));

    onNext();
  };

  return (
    <div className="max-w-md mx-auto translate-y-20">
      <div>
        <h1 className="font-bold text-center text-2xl mb-5">
          Personal Details
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-gray-100 p-6 rounded-md "
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            {...register("name", { required: true })}
            className=" mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 text-black"
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mt-4">
            Email:
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 text-black"
            placeholder="Enter Your Email"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mt-5"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;

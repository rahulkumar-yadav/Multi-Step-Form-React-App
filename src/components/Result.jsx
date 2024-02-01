import React from 'react';

const Result = ({ formData }) => {
  console.log(formData);
  const { personalDetails, address, paymentDetails } = formData;

  return (
    <div className="bg-black p-8 shadow-md rounded-md text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Form Submitted</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Personal Details:</h3>
        <div className="bg-gray-100 p-4 rounded-md text-black">
          {Object.entries(personalDetails).map(([key, value]) => (
            <p key={key} className="mb-2">
              <strong>{key}:</strong> {value}
            </p>   
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Address:</h3>
        <div className="bg-gray-100 p-4 rounded-md text-black">
          {Object.entries(address).map(([key, value]) => (
            <p key={key} className="mb-2">
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Payment Details:</h3>
        <div className="bg-gray-100 p-4 rounded-md text-black">
          {Object.entries(paymentDetails).map(([key, value]) => (
            <p key={key} className="mb-2">
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Result;

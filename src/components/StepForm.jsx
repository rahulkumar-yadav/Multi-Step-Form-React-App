import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Address from "./Address";
import PaymentDetails from "./PaymentDetails";
import { useSelector } from "react-redux";
import Result from "./Result";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const form = useSelector((state) => state.form);

  const onNext = () => setStep(step + 1);

  return (
    <div className="bg-black h-screen text-white">
      {step === 1 && <PersonalDetails onNext={onNext} />}
      {step === 2 && <Address onNext={onNext} />}
      {step === 3 && <PaymentDetails onNext={onNext} />}
      {step === 4 && <Result formData={form} />}
    </div>
  );
};

export default StepForm;

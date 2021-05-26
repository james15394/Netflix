import React, { useState } from "react";

type InputProps = {
  label: string;
  register: any;
  required: boolean;
  errors: any;
  name: string;
  type: string;
  ivalue?: string | null | undefined;
  field?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  register,
  required,
  errors,
  name,
  type,
  ivalue,
  field,
}) => {
  const [value, setValue] = useState<string | null | undefined>(ivalue);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className="input">
      <input
        {...register(name, { required })}
        className={`${errors?.message ? "is-invalid" : ""}`}
        name={name}
        type={type}
         placeholder={value}
        defaultValue={ivalue}
      />
      <label className={`${field?.length || ivalue?.length ? "is-valid" : ""}`}>{label}</label>
    </div>
  );
};

export default Input;

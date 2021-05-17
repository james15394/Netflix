import React, { useState } from "react";

type InputProps = {
  label: string;
  register: any;
  required: boolean;
  errors: any;
  name: string;
  type: string;
  ivalue?: string | null | undefined;
};

const Input: React.FC<InputProps> = ({
  label,
  register,
  required,
  errors,
  name,
  type,
  ivalue,
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
        value={value}
        onChange={handleChange}
      />
      <label className={`${value?.length ? "is-valid" : ""}`}>{label}</label>
    </div>
  );
};

export default Input;

import React from 'react'

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({ label, name, type, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border p-2 rounded"
    />
  </div>
)

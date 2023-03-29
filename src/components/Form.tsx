import { useState } from "react";

type FormProps<T> = {
  initialValues: T;
  onSubmit: (values: T) => void;
  children: (
    values: T,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => React.ReactNode;
};

export function Form<T>({ initialValues, onSubmit, children }: FormProps<T>) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children(values, handleChange)}
      <button type="submit">Submit</button>
    </form>
  );
}

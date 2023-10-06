import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (initialForm: string) => {
  const [form, setForm] = useState(initialForm);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.target;
      setForm(value);
    },
    []
  );

  return { form, onChange, setForm };
};

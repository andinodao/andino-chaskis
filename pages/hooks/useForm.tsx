import { useState } from "react";

export const useForm = (initialForm: any) => {
  const [inputState, setinputState] = useState(initialForm);

  const onChangeForm = ({ target }: any) => {
    //Destructuramos el e.target
    const { name, value } = target;
    setinputState({
      ...inputState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setinputState(initialForm);
  };

  return {
    ...inputState,
    inputState,
    onChangeForm,
    onResetForm,
  };
};

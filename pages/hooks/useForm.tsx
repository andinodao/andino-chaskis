import { useState } from "react";

export type CreateSocialMediasInput = {
  title: string;
  description: string;
  speaker: string;
  date: string;
  link: string;
};

export const useForm = (initialForm: CreateSocialMediasInput) => {
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

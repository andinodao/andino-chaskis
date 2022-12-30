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

  const onChangeForm: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = ({ target }) => {
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

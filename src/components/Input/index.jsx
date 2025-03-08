import React from "react";
import { IconContainer, InputText, InputContainer, ErrorText } from "./styles";

import { Controller } from "react-hook-form";

const Input = ({ leftIcon, control, errorMessage, name, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        ></Controller>
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;

import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';

export type TextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  MuiTextFieldProps;

const TextField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  const { name, control, rules, defaultValue, shouldUnregister, ...rest } =
    props;

  const { field, fieldState } = useController<T>({
    name,
    control,
    rules,
    defaultValue,
    shouldUnregister,
  });

  return (
    <MuiTextField
      {...field}
      {...rest}
      onChange={(event) => {
        field.onChange(event);
        rest.onChange && rest.onChange(event);
      }}
      onBlur={(event) => {
        field.onBlur();
        rest.onBlur && rest.onBlur(event);
      }}
      error={!!fieldState.error}
      helperText={fieldState.error?.message || props.helperText}
    />
  );
};

export default TextField;

import { Input, Select } from './styled';
import { IStyledInputProps, IStyledSelectProps } from './types';

export const StyledInput = ({ ...props }: IStyledInputProps) => {
  return <Input {...props} />;
};

export const StyledSelect = ({ children, ...props }: IStyledSelectProps) => {
  return <Select {...props}>{children}</Select>;
};

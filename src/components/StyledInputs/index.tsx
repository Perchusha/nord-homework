import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';
import { OpenEyeIcon, ClosedEyeIcon } from '../Icons';
import { IStyledInputProps, IStyledSelectProps } from './types';
import { Input, Select, Label } from './styled';

export const StyledInput = ({ label, type, ...props }: IStyledInputProps) => {
  const { theme } = useSelector(selectTheme);

  const [inputType, setInputType] = useState<React.HTMLInputTypeAttribute | undefined>(type);

  const toggleType = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.stopPropagation();
    setInputType((event.currentTarget as Element).id === 'open-eye-icon' ? 'password' : 'text');
  };

  const passwordControls = useMemo(() => {
    if (type !== 'password') return null;

    return inputType === 'text' ? (
      <OpenEyeIcon
        onClick={toggleType}
        color={theme.primaryText}
        tooltip="Show password"
        style={{
          position: 'absolute',
          top: '72%',
          right: '1vmin',
          transform: 'translateY(-50%)',
        }}
      />
    ) : (
      <ClosedEyeIcon
        onClick={toggleType}
        color={theme.primaryText}
        tooltip="Hide password"
        style={{
          position: 'absolute',
          top: '72%',
          right: '1vmin',
          transform: 'translateY(-50%)',
        }}
      />
    );
  }, [type, inputType]);

  return label ? (
    <Label>
      {label}
      <Input type={inputType} {...props} />
      {passwordControls}
    </Label>
  ) : (
    <Input type={inputType} {...props} />
  );
};

export const StyledSelect = ({ children, ...props }: IStyledSelectProps) => {
  return <Select {...props}>{children}</Select>;
};

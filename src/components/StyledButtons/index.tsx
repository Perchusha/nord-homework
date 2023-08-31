import { IStyledButtonProps, INavigatorButtonProps } from './types';
import { Button, Navigate } from './styled';

export const StyledButton = ({
  children,
  mode = 'base',
  $active = false,
  ...props
}: IStyledButtonProps) => {
  return (
    <Button $active={$active} mode={mode} {...props}>
      {children}
    </Button>
  );
};

export const NavigateButton = ({ children, $active = false, ...props }: INavigatorButtonProps) => {
  return (
    <Navigate $active={$active} {...props}>
      {children}
    </Navigate>
  );
};

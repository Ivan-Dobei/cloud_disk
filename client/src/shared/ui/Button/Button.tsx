import {classNames} from 'shared/lib/classNames/classNames';
import {ButtonHTMLAttributes, ReactNode} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
   CLEAR = 'clear',
   OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
   const {
      className,
      children,
      theme = ButtonTheme.CLEAR,
      ...otherProps
   } = props;

   return (
      <button
         className={classNames(cls.Button, {}, [className, cls[theme]])}
         {...otherProps}
      >
         {children}
      </button>
   );
};

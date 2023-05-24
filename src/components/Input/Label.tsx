'use client';
import { LabelHTMLAttributes, ReactNode } from 'react';
import styles from './styles/label.module.css';

type LabelProps = {
  children: ReactNode;
  className: string;
  isValue?: boolean;
  id?: string;
} & LabelHTMLAttributes<HTMLElement>;

export const Label = ({
  children,
  className,
  isValue,
  ...rest
}: LabelProps) => {
  return (
    <label className={`${styles.label} ${className}`} {...rest}>
      {children}
    </label>
  );
};

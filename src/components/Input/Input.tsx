'use client';
import { InputHTMLAttributes, useId } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Label } from './Label';
import styles from './styles/input.module.css';

type InputProps = {
  label: string;
  name: string;
  errorMessage?: string | undefined;
  register: UseFormRegister<any>;
  registerOptions?: Record<string, any>;
  fixedLabel?: boolean;
} & InputHTMLAttributes<HTMLElement>;

export const Input = ({
  name,
  label,
  errorMessage,
  register,
  registerOptions,
  fixedLabel,
  ...rest
}: InputProps) => {
  const id = useId();
  return (
    <div className={styles.input_group}>
      <div
        className={`${styles.container} ${
          errorMessage ? styles.container_error : ''
        }`}
        style={{}}
      >
        {label && (
          <Label
            htmlFor={id}
            className={fixedLabel ? styles.fixed_label : styles.label}
          >
            {label}
          </Label>
        )}
        <input
          id={id}
          aria-label={label}
          className={styles.input}
          aria-errormessage={errorMessage}
          {...register(name, registerOptions)}
          {...rest}
        />
      </div>
      {errorMessage && (
        <p style={{ color: '#CC0000', marginLeft: 5 }}>{errorMessage}</p>
      )}
    </div>
  );
};

// Input.displayName = 'Input';

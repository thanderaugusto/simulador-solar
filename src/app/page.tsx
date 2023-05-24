'use client';

import styles from './page.module.css';

import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import logo from '../../public/logo.png';

const schemaForm = z.object({
  cep: z
    .string({
      required_error: 'O campo CEP é obrigatório',
      invalid_type_error: 'Por favor, informe um CEP válido'
    })
    .min(8, 'Por favor, informe um CEP válido')
    .max(9, 'Por favor, informe um CEP válido'),
  tipo: z.string().min(9, 'Por favor, informe um CEP válido'),
  valor: z.string().min(9, 'Por favor, informe um CEP válido')
});

type FormProps = z.infer<typeof schemaForm>;

export default function Form() {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    criteriaMode: 'firstError',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      cep: '',
      tipo: '',
      valor: ''
    }
  });

  const onSubmit: SubmitHandler<FormProps> = console.log;

  function formatarCEP(cep) {
    cep = cep.replace(/\D/g, '');
    cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2');

    return cep;
  }

  const cep = watch('cep');
  const valor = watch('valor');

  useEffect(() => {
    // if (cep.length !== 9) return;

    console.log(formatarCEP(cep));
    setValue('cep', formatarCEP(cep));
  }, [setValue, cep]);

  return (
    <>
      <header className={styles.header}>
        <Image src={logo} alt="Logomarca 77 Solar" width={150} />
      </header>
      <main className={styles.main}>
        <h1>Simulador Solar</h1>
        <form className={styles.section} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="cep"
            label="Cep"
            register={register}
            fixedLabel={!!cep}
            errorMessage={errors?.cep?.message}
            // registerOptions={{ required: 'O campo CEP é obrigatório' }}
          />

          <Input
            type="text"
            name="valor"
            label="Valor"
            register={register}
            fixedLabel={!!valor}
            errorMessage={errors?.valor?.message}
            // registerOptions={{ required: 'O campo Valor é obrigatório' }}
          />
          <button type="submit">JAMIL</button>
        </form>
      </main>
    </>
  );
}

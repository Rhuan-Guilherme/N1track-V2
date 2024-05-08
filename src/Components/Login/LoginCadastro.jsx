import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Input from './Input';
import Button from './Button';
import useForm from '../../Hooks/useForm';

const LoginCadastro = () => {
  const nome = useForm();
  const email = useForm('email');
  const senha = useForm('password');

  return (
    <section className={styles.animeLeft}>
      <div>
        <div className={`${styles.container}`}>
          <h1
            className={`${styles.title} text-7xl font-Roboto leading-[60px] pb-1`}
          >
            Crie <br /> sua conta
          </h1>
        </div>
        <p className="font-Roboto">
          Ja é membro?
          <Link to="/login" className="text-azul-800 font-bold px-1">
            Login
          </Link>
        </p>
      </div>
      <form className="mt-10 w-96">
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...senha} />
        <Button>Criar</Button>
      </form>
    </section>
  );
};

export default LoginCadastro;

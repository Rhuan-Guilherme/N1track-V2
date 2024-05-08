import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Input from './Input';
import Button from './Button';
import useForm from '../../Hooks/useForm';
import { GET_TOKEN } from '../../API/api';

const LoginForm = () => {
  const email = useForm('email');
  const senha = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && senha.validate()) {
      const { url, options } = GET_TOKEN({
        email: email.value,
        senha: senha.value,
      });
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <section className={styles.animeLeft}>
      <div>
        <div className={`${styles.container}`}>
          <h1
            className={`${styles.title} text-7xl font-Roboto leading-[60px] pb-1`}
          >
            Entre em <br /> sua conta
          </h1>
        </div>
        <p className="font-Roboto">
          Ainda não tem cadastro?
          <Link to="/login/cadastro" className="text-azul-800 font-bold px-1">
            Cadastre-se
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-10 w-96">
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...senha} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Input from './Input';
import Button from './Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Context/UserContext';
import Error from '../Bedges/Error';

const LoginForm = () => {
  const email = useForm('email');
  const senha = useForm();
  const { error, userLogin, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && senha.validate()) {
      await userLogin(email.value, senha.value);
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
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <Error>{error}</Error>}
      </form>
    </section>
  );
};

export default LoginForm;

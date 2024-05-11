import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import Input from './Input';
import Button from './Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { POST_CADASTRO } from '../../API/api';
import { UserContext } from '../../Context/UserContext';
import Error from '../Bedges/Error';

const LoginCadastro = () => {
  const nome = useForm();
  const email = useForm('email');
  const senha = useForm('password');
  const { data, loading, error, request } = useFetch();
  const { userLogin } = React.useContext(UserContext);

  async function registerUser(event) {
    event.preventDefault();
    const { url, options } = POST_CADASTRO({
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    });
    await request(url, options);
    userLogin(email.value, senha.value);
  }

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
      <form onSubmit={registerUser} className="mt-10 w-96">
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="senha" {...senha} />
        {loading ? (
          <Button disabled>Criando...</Button>
        ) : (
          <Button>Criar</Button>
        )}
        {error && <Error>{error}</Error>}
      </form>
    </section>
  );
};

export default LoginCadastro;

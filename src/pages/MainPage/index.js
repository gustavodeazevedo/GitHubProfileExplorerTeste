import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button, ErrorMessage } from './styles'; // Adicionei ErrorMessage aqui

import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar a mensagem de erro

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verifica se o campo está vazio
    if (login.trim() === '') {
      setError('Por favor, insira um nome de usuário.');
      return;
    }

    setError(''); // Limpa a mensagem de erro se o campo estiver preenchido
    // Aqui você pode continuar com a lógica de redirecionamento ou busca de repositórios
    window.location.href = `/${login}/repositories`; // Substitui o comportamento do <Button> com link direto
  };

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button type="submit">
          <MdSearch size={42} />
        </Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default MainPage;

import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button, ErrorMessage } from './styles';
import githubLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    // Verifica se o campo está vazio
    if (login.trim() === '') {
      setError('Por favor, insira um nome de usuário.');
    } else {
      setError(''); // Limpa o erro se houver algo digitado
    }
  };

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button
          to={login ? `/${login}/repositories` : '#'}
          onClick={handleSearch}
        >
          <MdSearch size={42} />
        </Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default MainPage;

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" srcSet="" />
      <Title>Explore repositórios do Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/17195743?s=460&u=b5b229154b57910950c1e5da4955bd8073cecffc&v=4"
            alt="Rodrigo Garcia"
          />
          <div>
            <strong>dfgfdgdfgfdgdfgfdgfdgdfgfdgdfgdf</strong>
            <p>345345435346534634663634634</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/17195743?s=460&u=b5b229154b57910950c1e5da4955bd8073cecffc&v=4"
            alt="Rodrigo Garcia"
          />
          <div>
            <strong>dfgfdgdfgfdgdfgfdgfdgdfgfdgdfgdf</strong>
            <p>345345435346534634663634634</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/17195743?s=460&u=b5b229154b57910950c1e5da4955bd8073cecffc&v=4"
            alt="Rodrigo Garcia"
          />
          <div>
            <strong>dfgfdgdfgfdgdfgfdgfdgdfgfdgdfgdf</strong>
            <p>345345435346534634663634634</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

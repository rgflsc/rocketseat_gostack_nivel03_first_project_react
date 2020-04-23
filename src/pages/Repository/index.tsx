import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" srcSet="" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>sdfds</strong>
            <p>sdfss</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>fdsfsdf</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>fdsfsdf</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>fdsfsdf</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="dfdfg">
          <div>
            <strong>sdfsd</strong>
            <p>sfgsd</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;

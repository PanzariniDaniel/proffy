import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
  title: string;
}

// const PageHeader: React.FunctionComponent<PageHeaderProps> = () => {
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
              <img src={backIcon} alt="Voltar"></img>
          </Link>

          <img src={logoImg} alt="Proffy"></img>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
          
          {props.children}
        </div>

      </header>
    )
}

export default PageHeader;
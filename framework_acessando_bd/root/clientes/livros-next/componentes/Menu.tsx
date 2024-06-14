import React from 'react';
import Link from 'next/link';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/LivroLista">
                <a className="nav-link">Lista de Livros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados">
                <a className="nav-link">Dados do Livro</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

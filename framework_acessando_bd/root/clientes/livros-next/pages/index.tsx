import Head from 'next/head';
import { Menu } from '../componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main style={styles.main}>
        <h1 style={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

const styles = {
  main: {
    marginTop: '50px', // Adicione margem para separar o menu da área principal
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
  },
};

export default Home;

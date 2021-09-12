import '../styles/globals.css';
import Container from '../components/container';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    
  );
}

export default MyApp;

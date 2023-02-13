import { Container, Row } from 'react-bootstrap';
import './App.css';
import FetchCsv from './components/FetchCsv';
import FetchGoogle from './components/FetchGoogle';

function App() {
  return (
    <Container>
      <Row>
        <FetchCsv />
      </Row>
    </Container>
  );
}

export default App;
